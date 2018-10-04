//I hold API calls and junk
import React from 'react';

import FilterBar from './filterbar.js'
import CardGroup from './card_group.js'

class CardList extends React.Component {
  componentWillMount() {
      this.setState({
        loading: true,
        posts: [],
        postsPerPage: 6,
        market_categories: [],
        service_categories: [],
        isFiltered: false,
        filteredPosts: [],
        filteredMarket: '',
        filteredService: '',
      })
    }

    componentDidMount() {
      this.getPosts();
      this.getMarketCats();
      this.setFilterCats();
      //this.getServiceCats();
    }

    //Fetch posts
    buildAPILink() {
      let baseLink = '';
      let postDataType = document.getElementById('cardList_app').getAttribute('data-post');
      if (postDataType === 'news') {
        baseLink = wpObj.posts_endpoint;
      } else {
        //need to make Projects CPT and change this
        baseLink = wpObj.projects_endpoint;
      }
      return baseLink;
    }
    //Get All Posts
    //TODO: edit this so we're only adding either Posts or Projects to state.
    getPosts(){
      let apiLink = this.buildAPILink();
      apiLink += `&per_page=${this.state.postsPerPage}`
      console.log('getposts link', apiLink);
      let headers = new Headers({'Authorization': 'Basic 3100cedbe991'});
      fetch(apiLink, {headers: headers})
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

    getFilteredPosts() {
      let apiLink = this.buildAPILink();

      if (this.state.isFiltered) {
        //check for both
        if (this.state.filteredMarket && this.state.filteredService) {
          apiLink += `&market_category=${this.state.filteredMarket}&service_category=${this.state.filteredService}`;
        } else if (this.state.filteredService) {
          apiLink += `&service_category=${this.state.filteredService}`;
        } else if (this.state.filteredMarket) {
          //it's just markets
          apiLink += `&market_category=${this.state.filteredMarket}`;
        } else {
          //We're not filtered anymore, reset isFiltered
          this.setState({
            isFiltered: false,
            loading: false
          })
          return;
        }
      }
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
      }, this.getFilteredPosts());
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

    //Handles Service Filter
    handleServiceChange(id) {
      if (id === 'Service') {
        id = ''
      }
      this.setState({
        filteredService: parseInt(id),
        isFiltered: true,
        loading: true
      },this.getFilteredPosts());
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
      let apiLink = this.buildAPILink();
      console.log('load more link', apiLink);
      let offset = 0;
      if (this.state.posts) {

      }
    }

    //Reset filter
    resetFilter(){
      this.setState({
        isFiltered: false,
        filteredPosts: [],
        filterMarket: '',
        filterServices: ''
      })
      //TODO set the selects back to default value
      this.getPosts();
    }

    render() {
      let postGroup = '';
      let loadMoreBtn = '';
      let loadMoreLabel = 'View More Posts'; //TODO: If postData is Projects, this label should read 'View More Projects'

      let allPosts = this.state.posts;
      let filterPosts = this.state.filteredPosts;

      let filteredServiceName = '';
      let filteredMarketName = '';

      if (this.state.loading) {
        postGroup = <div className="loading-spinner">Loading...</div>;
      } else if (allPosts && this.state.isFiltered === false) {
        postGroup = <CardGroup
                      posts = {this.state.posts}
                      markets = {this.state.market_categories}
                      services = {this.state.service_categories}
                      getCatName = {this.getCatName.bind(this)}
                      />
        if (allPosts && allPosts.length > this.state.postsPerPage && allPosts.length % this.state.postsPerPage != 0) {
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
            resetFilter = {this.resetFilter.bind(this)}
          />
          {postGroup}
          {loadMoreBtn}
        </div>
      );
    }
}


module.exports = CardList;