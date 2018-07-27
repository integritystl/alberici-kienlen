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
        filteredMarket: '',
        filteredService: ''
      })

      this.getNews();
      this.getMarketCats();
      this.getServiceCats();
    }

    //Fetch posts
    buildAPILink() {
      let baseLink = "/wp-json/wp/v2/posts?_embed";

      //Add in stuff for Filtering here later
      //search, markets, services

      return baseLink;
    }

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

    //Fetch our Market Categories
    getMarketCats() {
      let marketCatApi = '/wp-json/wp/v2/market_category';
      fetch(marketCatApi)
        .then( response => {
          //console.log(response);
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
        filteredMarket: id,
        isFiltered: true
      });
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
        filteredService: id,
        isFiltered: true
      });
    }

    render() {
      console.log('news posts state', this.state);
      let postGroup = <div className="loading-spinner">Loading...</div>;
      let loadMoreBtn = '';
      if (!this.state.loading) {
        postGroup = <CardGroup posts = {this.state.posts} />
      }

      if (this.state.posts && this.state.posts.length > 6 && this.state.posts.length % 6 != 0) {
        loadMoreBtn = <button className="btn-load-more">View More Posts</button>;
      }

      return(
        <div className="news-posts-container">
          <FilterBar
            markets = {this.state.market_categories}
            marketFilter = {this.state.filteredMarket}
            marketChange = {this.handleMarketChange.bind(this)}
            services = {this.state.service_categories}
            serviceFilter = {this.state.filteredService}
            serviceChange = {this.handleServiceChange.bind(this)}
          />
          {postGroup}
          {loadMoreBtn}
        </div>
      );
    }
}


module.exports = NewsPosts;
