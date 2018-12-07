//I hold API calls and junk
import React from 'react';

import FilterBar from './filterbar.js'
import CardGroup from './card_group.js'
import {siteConfig, handleSearch, getCats, getMarketCats, getServiceCats, resetFilter,
  removeFilterTerm, checkFilterStatus, handleMarketChange, handleCategoryChange, getCatName} from './helpers/helpers.js'
import {localStorageKeys, setLocalStorageItem, getLocalStorageItem} from './helpers/localstorage-handler.js'

class CardList extends React.Component {
  constructor(props) {
    super(props);
    //bind our helpers
    this.getCats = getCats.bind(this);
    this.getMarketCats = getMarketCats.bind(this);
    this.handleSearch = handleSearch.bind(this);
    this.getServiceCats = getServiceCats.bind(this);
    this.resetFilter = resetFilter.bind(this);
    this.removeFilterTerm = removeFilterTerm.bind(this);
    this.checkFilterStatus = checkFilterStatus.bind(this);
    this.handleMarketChange = handleMarketChange.bind(this);
    this.handleCategoryChange = handleCategoryChange.bind(this);
    this.getCatName = getCatName.bind(this);
    this.siteConfig = siteConfig.bind(this);
  }

  componentWillMount() {
      let defaultSearch = getLocalStorageItem(localStorageKeys.cards_search);
      let defaultCategory = getLocalStorageItem(localStorageKeys.cards_category);
      let defaultMarket = getLocalStorageItem(localStorageKeys.cards_market);
      let defaultLocation = getLocalStorageItem(localStorageKeys.cards_location);
      let defaultService = getLocalStorageItem(localStorageKeys.cards_service);
      let defaultOffset = getLocalStorageItem(localStorageKeys.cards_page);

      let isFiltered = !!defaultSearch || !!defaultCategory || !!defaultMarket || !!defaultLocation || !!defaultService

      this.setState({
        loading: true,
        currentPage: defaultOffset ? Math.ceil(defaultOffset/6) : 1,
        defaultOffset: defaultOffset ? defaultOffset : null,
        posts: [],
        postsPerPage: 6,
        postDataType: document.getElementById('cardList_app').getAttribute('data-post'),
        categories: [],
        market_categories: [],
        service_categories: [],
        location_categories: [],
        isFiltered: isFiltered,
        filteredCategory: defaultCategory ? defaultCategory : '',
        filteredMarket: defaultMarket ? defaultMarket : '',
        filteredService: defaultService ? defaultService : '',
        filteredLocation: defaultLocation ? defaultLocation : '',
        hasSearchTerm: !!defaultSearch,
        searchTerm: defaultSearch ? defaultSearch : '',
        siteConfig: '',
        totalPosts: parseInt( document.getElementById('cardList_app').getAttribute('data-total') ),
      })
    }


    componentDidMount() {
      this.siteConfig(() => {
        this.getPosts(this.buildAPILink());
        this.getMarketCats();
        this.setFilterCats();
      });
    }

    filterSearch(term) {
      this.handleSearch(term)
      setLocalStorageItem(localStorageKeys.cards_search, term)
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
        //This layout can be used by either News or Projects.
        //If we're on News, we're only using default WP Categories for filtering
        if (this.state.postDataType === 'news' && this.state.filteredCategory) {
          baseLink += `&categories=${this.state.filteredCategory}`;
        }

        //Build the API call with the taxonomies that the Site Configured uses
        if (this.state.siteConfig === 'kienlen') {
          if (this.state.filteredMarket && this.state.filteredService) {
            baseLink += `&market_category=${this.state.filteredMarket}&service_category=${this.state.filteredService}`;
          } else if (this.state.filteredService) {
            baseLink += `&service_category=${this.state.filteredService}`;
          } else if (this.state.filteredMarket) {
            baseLink += `&market_category=${this.state.filteredMarket}`;
          }
        } else {
          // If it's not Kienlen, it's Hillsdale, which uses Locations
          if (this.state.filteredMarket && this.state.filteredLocation) {
            baseLink += `&market_category=${this.state.filteredMarket}&location_category=${this.state.filteredLocation}`;
          } else if (this.state.filteredLocation) {
            baseLink += `&location_category=${this.state.filteredLocation}`;
          } else if (this.state.filteredMarket) {
            baseLink += `&market_category=${this.state.filteredMarket}`;
          }
        }
      }
      // console.log('buildAPILink', baseLink);
      if(this.state.defaultOffset){
        baseLink += `&per_page=${this.state.defaultOffset}`
      }else {
        baseLink += `&per_page=${this.state.postsPerPage}`
      }
      console.log(baseLink);
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
          this.setState({
            // WP API gives the Total Page Count in the Headers, of all places :\
            totalPosts: parseInt( response.headers.get('X-WP-Total') )
          })
          return(response.json());
        })
        .then(json => {
          this.setState( {
            posts: json,
            loading: false,
          })
        })
    }

    getFilteredPosts(apiLink) {
      fetch(apiLink)
        .then( response => {
          console.log('response', response);
          this.setState({
            // WP API gives the Total Page Count in the Headers, of all places :\
            totalPosts: parseInt( response.headers.get('X-WP-Total') )
          })
          return(response.json());
        }).then(json => {
          console.log('getFilteredPosts', json);
          this.setState({
            posts: json,
            loading: false //helps Projects load
          })
        })
    }

    //Check to see what's set for our data-filter attribute and call the appropriate custom taxonomy endpoint
    setFilterCats() {
      let filterDataType = document.getElementById('cardList_app').getAttribute('data-filter');
      if (filterDataType === 'service') {
        this.getServiceCats();
      } else if (filterDataType === 'location') {
        this.getLocationCats();
      } else {
        this.getCats();
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
      if (id === 'Location') {
        id = ''
      }
      this.setState({
        filteredLocation: parseInt(id),
        isFiltered: true,
        currentPage: 1,
        loading: true
      }, () => this.getFilteredPosts(this.buildAPILink()) );
      setLocalStorageItem(localStorageKeys.cards_location, id)
    }

    //Handles Service Filter
    handleServiceChange(id) {
      if (id === 'Service') {
        id = ''
      }
      this.setState({
        filteredService: parseInt(id),
        isFiltered: true,
        loading: true,
        currentPage: 1,
      }, () => this.getFilteredPosts(this.buildAPILink()) );
      setLocalStorageItem(localStorageKeys.cards_service, id)
    }

    //Load More functionality
    loadMorePosts() {
      //need to fetch the next amount of posts and add them
      let apiLink = this.buildAPILink();
      let offset = 0;
      if (this.state.isFiltered) {
        offset = this.state.posts.length;
      } else {
        offset = this.state.currentPage * this.state.postsPerPage;
      }
      apiLink += `&offset=${offset}`;

      fetch(apiLink)
        .then( response => {
          return(response.json());
        })
        .then( json => {
          let currentPosts = '';
          Array.prototype.push.apply(this.state.posts, json);
          //increment our Current Page
          let newPage = this.state.currentPage + 1
          this.setState({
            currentPage: newPage,
            loading: false,
          });
          setLocalStorageItem(localStorageKeys.cards_page, this.state.posts.length)
        })
    }


    render() {
      let postGroup = '';
      let loadMoreBtn = '';
      let loadMoreLabel = '';
      let secondarySelect = '';

      if (this.state.postDataType === 'news') {
        loadMoreLabel = 'View More Posts';
        //News doesn't have a secondary select
      } else {
        loadMoreLabel = 'View More Projects';

        if (this.state.siteConfig === 'hillsdale') {
          secondarySelect = 'location';
        } else {
          //Falls back to kienlen and its secondary select
          secondarySelect = 'services';
        }
      }

      let allPosts = this.state.posts;

      let filteredLocationName = '';
      let filteredCategoryName = '';
      let filteredServiceName = '';
      let filteredMarketName = '';

      let allPostsOffset = this.state.currentPage * this.state.postsPerPage;

      if (this.state.loading) {
        postGroup = <div className="loading-spinner">Loading...</div>;
      } else if (allPosts && this.state.isFiltered === false) {
        console.log('FALSE isfiltered');
        postGroup = <CardGroup
                      posts = {this.state.posts}
                      postDataType = {this.state.postDataType}
                      categories = {this.state.categories}
                      markets = {this.state.market_categories}
                      services = {this.state.service_categories}
                      locations = {this.state.location_categories}
                      getCatName = {this.getCatName}
                      />
        if ( allPostsOffset < this.state.totalPosts) {
          loadMoreBtn = <button
                          onClick={this.loadMorePosts.bind(this)}
                          className="btn-load-more">
                            {loadMoreLabel}
                        </button>;
        }
      } else if ( allPosts && this.state.isFiltered === true ) {
        console.log('TRUE isFiltered');
        postGroup = <CardGroup
                      posts = {this.state.posts}
                      postDataType = {this.state.postDataType}
                      categories = {this.state.categories}
                      markets = {this.state.market_categories}
                      services = {this.state.service_categories}
                      locations = {this.state.location_categories}
                      getCatName = {this.getCatName}
                      filteredService = {this.state.filteredService}
                      filteredMarket = {this.state.filteredMarket}
                    />

        //Get the names of filtered WP categories for display purposes
        if (this.state.categories && this.state.filteredCategory) {
          filteredCategoryName = this.getCatName(this.state.filteredCategory, this.state.categories);
        }
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
      }
      return(
        <div className="news-posts-container">
          <FilterBar
            postDataType = {this.state.postDataType}
            categories = {this.state.categories}
            categoryFilter = {this.state.filteredCategory}
            categoryFilterName = {filteredCategoryName}
            categoryChange = {this.handleCategoryChange}
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
            searchTerm = {this.state.searchTerm}
            filterSearch = {this.filterSearch.bind(this)}
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
