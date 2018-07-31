//I hold API calls and junk
import React from 'react';

import FilterBar from './filterbar.js'
import CardGroup from './card_group.js'

class NewsPosts extends React.Component {
  componentWillMount() {
      this.setState({
        loading: true,
        posts: [],
        market_categories: [],
        service_categories: [],
        isFiltered: false,
        filteredPosts: [],
        filteredMarket: '',
        filteredService: '',
      })
    }

    componentDidMount() {
      this.getNews();
      this.getMarketCats();
      this.getServiceCats();
    }

    //Fetch posts
    buildAPILink() {
      let baseLink = "/wp-json/wp/v2/posts?_embed";
      return baseLink;
    }
    //Get All news
    getNews(){
      let apiLink = this.buildAPILink();
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

    getFilteredNews() {
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
      //set loading somewhere around here?
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
      let marketCatApi = '/wp-json/wp/v2/market_category';
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
      });
      setTimeout(() => {
        this.getFilteredNews();
      }, 200);
    }

    //Fetch our Services Categories
    getServiceCats() {
      let serviceCatApi = '/wp-json/wp/v2/service_category';
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
      });
      setTimeout(() => {
        this.getFilteredNews();
      }, 200);
    }

    //Get name of filtered category from object
    getCatName(filteredCatId, categories){
      let catObj = categories.filter( (item) => {
        return item.id === filteredCatId;
      });
      let filteredCatName = catObj[0].name;
      return filteredCatName;
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
      this.getNews();
    }

    render() {
      let postGroup = '';
      let loadMoreBtn = '';

      let allPosts = this.state.posts;
      let filterPosts = this.state.filteredPosts;

      let filteredServiceName = '';
      let filteredMarketName = '';

      if (this.state.loading) {
        postGroup = <div className="loading-spinner">Loading...</div>;
      } else if (allPosts && this.state.isFiltered === false) {
        postGroup = <CardGroup posts = {this.state.posts} />
      } else if ( filterPosts && this.state.isFiltered === true ) {
        postGroup = <CardGroup
                      posts = {this.state.filteredPosts}
                      markets = {this.state.market_categories}
                      services = {this.state.service_categories}
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
      }

      if (allPosts && allPosts.length > 6 && allPosts.length % 6 != 0) {
        loadMoreBtn = <button className="btn-load-more">View More Posts</button>;
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


module.exports = NewsPosts;
