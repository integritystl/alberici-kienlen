//I hold API calls and junk
import React from 'react';

import FilterBar from './filterbar.js'
import CardGroup from './card_group.js'

class CardList extends React.Component {
  componentWillMount() {
      this.setState({
        loading: true,
        currentPage: 1,
        posts: [],
        postsPerPage: 6,
        postDataType: document.getElementById('cardList_app').getAttribute('data-post'),
        market_categories: [],
        service_categories: [],
        isFiltered: false,
        filteredPosts: [],
        filteredMarket: '',
        filteredService: '',
        hasSearchTerm: false,
        searchTerm: '',
        totalPosts: parseInt(wpObj.totalPosts.publish),
      })
    }

    componentDidMount() {
      this.getPosts(this.buildAPILink());
      this.getMarketCats();
      this.setFilterCats();
      //this.getServiceCats();
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
        if (this.state.filteredMarket && this.state.filteredService) {
          baseLink += `&market_category=${this.state.filteredMarket}&service_category=${this.state.filteredService}`;
        } else if (this.state.filteredService) {
          baseLink += `&service_category=${this.state.filteredService}`;
          console.log('service baselink', baseLink);
        } else if (this.state.filteredMarket) {
          //it's just markets
          baseLink += `&market_category=${this.state.filteredMarket}`;
        } else {
          return baseLink;
        }
      }
      return baseLink;
    }
    //Get All Posts
    //TODO: edit this so we're only adding either Posts or Projects to state.
    getPosts(apiLink){
      apiLink += `&per_page=${this.state.postsPerPage}`
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
          return(response.json());
        }).then(json => {
          this.setState({
            filteredPosts: json,
            loading: false
          })
        })
    }

    //Fetch our Market Categories
    getMarketCats() {
      let marketCatApi = wpObj.marketCat_endpoint;
      fetch(marketCatApi)
        .then( response => {
          return(response.json());
        })
        .then(json => {
          this.setState({
            market_categories: json,
          })
        });
    }
    //Handles Market Filter
    handleMarketChange(id) {
      if (id === 'Market') {
        id = ''
      }

      this.setState({
        filteredMarket: parseInt(id),
        isFiltered: true,
        loading: true
      }, () => this.getFilteredPosts(this.buildAPILink() ));
    }

    //Check to see what's set for our data-filter attribute and call the appropriate custom taxonomy endpoint
    setFilterCats() {
      let filterDataType = document.getElementById('cardList_app').getAttribute('data-filter');
      if (filterDataType === 'service') {
        this.getServiceCats();
      } else {
        //TODO: add a getLocationCats function here once that category exists
      }
    }

    //Fetch our Services Categories
    getServiceCats() {
      let serviceCatApi = wpObj.serviceCat_endpoint;
      fetch(serviceCatApi)
        .then( response => {
          return(response.json());
        })
        .then(json => {
          this.setState({
            service_categories: json,
          })
        });
    }


    //Search Input Filter
    handleSearch(term) {
      console.log('search term', term);
      this.setState({
        searchTerm: term,
        hasSearchTerm: true,
        isFiltered: true,
        loading: true
      },() => this.getFilteredPosts(this.buildAPILink() ));
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

    //Get name of filtered category from object
    getCatName(filteredCatId, categories){
      let catObj = categories.filter( (item) => {
        return item.id === filteredCatId;
      });
      let filteredCatName = catObj[0].name;
      return filteredCatName;
    }

    //Load More functionality
    loadMorePosts() {
      //need to fetch the next amount of posts and add them
      //getPosts loads the page and uses postsPerPage
      let apiLink = this.buildAPILink();

      let offset = 0;
      if (this.state.isFiltered) {
        offset = this.state.filteredPosts.length;
        //TODO add in some stuff here Lindsay
      } else {
        offset = this.state.currentPage * this.state.postsPerPage;
        apiLink += `&offset=${offset}`;
      //  console.log('load more link', apiLink);
        fetch(apiLink)
          .then( response => {
            return(response.json());
          })
          .then( json => {
            let currentPosts = this.state.posts;
            //when i put this into this.setState, it breaks, what do?
            Array.prototype.push.apply(currentPosts, json);
          //  console.log(currentPosts);
            //increment our Current Page
            this.setState( (state) => ({
              currentPage: state.currentPage + 1,
              //posts: Array.prototype.push.apply(currentPosts, json), //need to jam in new json here
              loading: false,
            }));
          })
      }
    }

    //Reset filter
    resetFilter(){
      //TODO set the selects back to default value and the search box to empty
      let searchInput = document.getElementById('filterbar-search');
      let serviceSelect = document.getElementById('filterbar-select-service');
      let marketSelect = document.getElementById('filterbar-select-market');

      // let serviceFilterTerm = document.getElementById('filter-info-service');
      // let marketFilterTerm = document.getElementById('filter-info-market');
      searchInput.value = '';
      // marketSelect.value = '';
      // serviceSelect.value = '';

      this.setState({
        isFiltered: false,
        filteredPosts: [],
        filteredMarket: '',
        filteredService: '',
        hasSearchTerm: false,
        searchTerm: ''
      }, () => this.getPosts())
    }

    render() {

      let postGroup = '';
      let loadMoreBtn = '';
      let loadMoreLabel = 'View More Posts'; //TODO: If postData is Projects, this label should read 'View More Projects'

      let allPosts = this.state.posts;
      let filterPosts = this.state.filteredPosts;

      let filteredServiceName = '';
      let filteredMarketName = '';

      let allPostsOffset = this.state.currentPage * this.state.postsPerPage;

      if (this.state.loading) {
        postGroup = <div className="loading-spinner">Loading...</div>;
      } else if (allPosts && this.state.isFiltered === false) {
        postGroup = <CardGroup
                      posts = {this.state.posts}
                      markets = {this.state.market_categories}
                      services = {this.state.service_categories}
                      getCatName = {this.getCatName.bind(this)}
                      />
        if ( allPostsOffset < this.state.totalPosts && this.state.totalPosts % this.state.postsPerPage != 0) {
          loadMoreBtn = <button onClick={this.loadMorePosts.bind(this)}  className="btn-load-more">{loadMoreLabel}</button>;
        }
      } else if ( filterPosts && this.state.isFiltered === true ) {
        postGroup = <CardGroup
                      posts = {this.state.filteredPosts}
                      markets = {this.state.market_categories}
                      services = {this.state.service_categories}
                      getCatName = {this.getCatName.bind(this)}
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
      } else if (filterPosts === 0 && this.state.isFiltered === true) {
        postGroup = 'No results';
        loadMoreBtn = '';
      }

      return(
        <div className="news-posts-container">
          <FilterBar
            markets = {this.state.market_categories}
            marketFilter = {this.state.filteredMarket}
            marketFilterName = {filteredMarketName}
            marketChange = {this.handleMarketChange.bind(this)}
            services = {this.state.service_categories}
            serviceFilter = {this.state.filteredService}
            serviceFilterName = {filteredServiceName}
            serviceChange = {this.handleServiceChange.bind(this)}
            isFiltered = {this.state.isFiltered}
            filterSearch = {this.handleSearch.bind(this)}
            resetFilter = {this.resetFilter.bind(this)}
          />
          {postGroup}
          {loadMoreBtn}
        </div>
      );
    }
}


module.exports = CardList;
