//I hold API calls and junk
import React from 'react';

import FilterBar from './filterbar.js'
import CardGroup from './card_group.js'
import {handleSearch, getMarketCats, getServiceCats, resetFilter, removeFilterTerm, checkFilterStatus, handleMarketChange, getCatName} from './helpers/helpers.js'

class CardList extends React.Component {
  constructor(props) {
    super(props);
    //bind our helpers
    this.getMarketCats = getMarketCats.bind(this);
    this.handleSearch = handleSearch.bind(this);
    this.getServiceCats = getServiceCats.bind(this);
    this.resetFilter = resetFilter.bind(this);
    this.removeFilterTerm = removeFilterTerm.bind(this);
    this.checkFilterStatus = checkFilterStatus.bind(this);
    this.handleMarketChange = handleMarketChange.bind(this);
    this.getCatName = getCatName.bind(this);
  }

  componentWillMount() {
      this.setState({
        loading: true,
        currentPage: 1,
        posts: [],
        postsPerPage: 6,
        postDataType: document.getElementById('cardList_app').getAttribute('data-post'),
        market_categories: [],
        service_categories: [],
        location_categories: [],
        isFiltered: false,
        filteredPosts: [],
        filteredMarket: '',
        filteredService: '',
        filteredLocation: '',
        hasSearchTerm: false,
        searchTerm: '',
        totalPosts: parseInt( document.getElementById('cardList_app').getAttribute('data-total') ),
      })
    }

    componentDidMount() {
      this.getPosts(this.buildAPILink());
      this.getMarketCats();
      this.setFilterCats();
    }

    //Fetch posts
    buildAPILink() {
      let baseLink = '';

      if (this.state.postDataType === 'news') {
        baseLink = wpObj.posts_endpoint;
      } else {
        baseLink = wpObj.projects_endpoint;
      }
      if (this.state.isFiltered) {
        if (this.state.hasSearchTerm) {
          baseLink += `&search=${this.state.searchTerm}`;
        }
        //Build the API call with the taxonomies that the Post Type uses
        if (this.state.postDataType === 'news') {
          if (this.state.filteredMarket && this.state.filteredService) {
            baseLink += `&market_category=${this.state.filteredMarket}&service_category=${this.state.filteredService}`;
          } else if (this.state.filteredService) {
            baseLink += `&service_category=${this.state.filteredService}`;
          } else if (this.state.filteredMarket) {
            baseLink += `&market_category=${this.state.filteredMarket}`;
          } else {
            return baseLink;
          }
        } else {
          //Projects only uses Locations
          if (this.state.filteredMarket && this.state.filteredLocation) {
            baseLink += `&market_category=${this.state.filteredMarket}&location_category=${this.state.filteredLocation}`;
          } else if (this.state.filteredLocation) {
            baseLink += `&location_category=${this.state.filteredLocation}`;
          } else if (this.state.filteredMarket) {
            baseLink += `&market_category=${this.state.filteredMarket}`;
          } else {
            return baseLink;
          }
        }
         console.log('buildAPILink url', baseLink);
      }
      baseLink += `&per_page=${this.state.postsPerPage}`
      return baseLink;
    }
    //Get All Posts
    getPosts(apiLink){
      //Gotta pass Basic Auth for the prompt from WP Engine
      //Ref: https://stackoverflow.com/questions/30203044/using-an-authorization-header-with-fetch-in-react-native
      fetch(apiLink, {
          headers: new Headers({'Authorization': 'Basic ' + btoa("demo:alberici") }),
        })
        .then( response => {
          return(response.json());
        })
        .then(json => {
          this.setState( {
            posts: json,
            loading: false
          })
        })
    }

    getFilteredPosts(apiLink) {
      fetch(apiLink)
        .then( response => {
          this.setState({
            // WP API gives the Total Page Count in the Headers, of all places :\
            totalPosts: parseInt( response.headers.get('X-WP-Total') )
          })
          return(response.json());
        }).then(json => {
          this.setState({
            filteredPosts: json,
            loading: false
          })
        })
    }

    //Check to see what's set for our data-filter attribute and call the appropriate custom taxonomy endpoint
    setFilterCats() {
      let filterDataType = document.getElementById('cardList_app').getAttribute('data-filter');
      if (filterDataType === 'service') {
        this.getServiceCats();
      } else {
        this.getLocationCats();
      }
    }

    //Fetch our Location Categories
    getLocationCats() {
      let locationCatApi = wpObj.locationCat_endpoint;
      fetch(locationCatApi)
        .then( response => {
          return(response.json());
        })
        .then(json => {
          this.setState({
            location_categories: json,
          })
        });
    }

    //Handle Location Filter
    handleLocationChange(id) {
      console.log('handleLocationChange', id);
      if (id === 'Location') {
        id = ''
      }
      this.setState({
        filteredLocation: parseInt(id),
        isFiltered: true,
        loading: true
      }, () => this.getFilteredPosts(this.buildAPILink()) );
    }

    //Handles Service Filter
    handleServiceChange(id) {
      if (id === 'Service') {
        id = ''
      }
      this.setState({
        filteredService: parseInt(id),
        isFiltered: true,
        loading: true
      }, () => this.getFilteredPosts(this.buildAPILink()) );
    }

    //Load More functionality
    loadMorePosts() {
      //need to fetch the next amount of posts and add them
      let apiLink = this.buildAPILink();
      console.log('loadmore api link start', apiLink);
      let offset = 0;
      if (this.state.isFiltered) {
        offset = this.state.filteredPosts.length;
      } else {
        offset = this.state.currentPage * this.state.postsPerPage;
      }
      apiLink += `&offset=${offset}`;
      console.log('loadmore api link offset', apiLink);

      fetch(apiLink)
        .then( response => {
          return(response.json());
        })
        .then( json => {
          let currentPosts = '';
          if (this.state.isFiltered) {
            currentPosts = this.state.filteredPosts;
          } else {
            currentPosts = this.state.posts;
          }
          Array.prototype.push.apply(currentPosts, json);
          //increment our Current Page
          this.setState( (state) => ({
            currentPage: state.currentPage + 1,
            loading: false,
          }));
        })
    }


    render() {
      let postGroup = '';
      let loadMoreBtn = '';
      let loadMoreLabel = '';
      let secondarySelect = '';

      if (this.state.postDataType === 'news') {
        loadMoreLabel = 'View More Posts';
        secondarySelect = 'services';
      } else {
        loadMoreLabel = 'View More Projects';
        secondarySelect = 'location';
      }

      let allPosts = this.state.posts;
      let filterPosts = this.state.filteredPosts;

      let filteredLocationName = '';
      let filteredServiceName = '';
      let filteredMarketName = '';

      let allPostsOffset = this.state.currentPage * this.state.postsPerPage;

      if (this.state.loading) {
        postGroup = <div className="loading-spinner">Loading...</div>;
      } else if (allPosts && this.state.isFiltered === false) {
        postGroup = <CardGroup
                      posts = {this.state.posts}
                      postDataType = {this.state.postDataType}
                      markets = {this.state.market_categories}
                      services = {this.state.service_categories}
                      locations = {this.state.location_categories}
                      getCatName = {this.getCatName}
                      />
        if ( allPostsOffset < this.state.totalPosts && this.state.totalPosts % this.state.postsPerPage != 0) {
          loadMoreBtn = <button
                          onClick={this.loadMorePosts.bind(this)}
                          className="btn-load-more">
                            {loadMoreLabel}
                        </button>;
        }
      } else if ( filterPosts && this.state.isFiltered === true ) {
        postGroup = <CardGroup
                      posts = {this.state.filteredPosts}
                      postDataType = {this.state.postDataType}
                      markets = {this.state.market_categories}
                      services = {this.state.service_categories}
                      locations = {this.state.location_categories}
                      getCatName = {this.getCatName}
                      filteredService = {this.state.filteredService}
                      filteredMarket = {this.state.filteredMarket}
                    />

        //Get the names of filtered service categories for display purposes
        if (this.state.service_categories && this.state.filteredService) {
          filteredServiceName = this.getCatName(this.state.filteredService, this.state.service_categories);
        }
        //Get the names of filtered markets for display purposes
        if (this.state.market_categories && this.state.filteredMarket) {
          filteredMarketName = this.getCatName(this.state.filteredMarket, this.state.market_categories);
        }
        //Get the names of filtered markets for display purposes
        if (this.state.location_categories && this.state.filteredLocation) {
          filteredLocationName = this.getCatName(this.state.filteredLocation, this.state.location_categories);
        }
        //Load More for Filtered Posts
        if ( allPostsOffset < this.state.totalPosts && this.state.totalPosts % this.state.postsPerPage != 0) {
          loadMoreBtn = <button
                          onClick={this.loadMorePosts.bind(this)}
                          className="btn-load-more">
                            {loadMoreLabel}
                        </button>;
        }
      } else if (filterPosts === 0 && this.state.isFiltered === true) {
        postGroup = 'No results';
        loadMoreBtn = '';
      }

      return(
        <div className="news-posts-container">
          <FilterBar
            postDataType = {this.state.postDataType}
            markets = {this.state.market_categories}
            marketFilter = {this.state.filteredMarket}
            marketFilterName = {filteredMarketName}
            marketChange = {this.handleMarketChange}
            services = {this.state.service_categories}
            serviceFilter = {this.state.filteredService}
            serviceFilterName = {filteredServiceName}
            serviceChange = {this.handleServiceChange.bind(this)}
            secondarySelect = {secondarySelect}
            locations = {this.state.location_categories}
            locationFilter = {this.state.filteredLocation}
            locationFilterName = {filteredLocationName}
            locationChange = {this.handleLocationChange.bind(this)}
            isFiltered = {this.state.isFiltered}
            filterSearch = {this.handleSearch}
            resetFilter = {this.resetFilter}
            removeFilterTerm = {this.removeFilterTerm}
          />
          {postGroup}
          {loadMoreBtn}
        </div>
      );
    }
}


module.exports = CardList;
