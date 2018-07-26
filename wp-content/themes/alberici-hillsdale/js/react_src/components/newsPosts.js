//I hold API calls and junk
import React from 'react';

import FilterBar from './filterbar.js'
import CardGroup from './card_group.js'

class NewsPosts extends React.Component {
  componentWillMount() {
      this.setState({
        loading: true,
        posts: [],
        categories: [],
        isFiltered: false,
      })

      this.getNews();
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
          console.log(response);
          return(response.json());
        })
        .then(json => {
          this.setState( {
            posts: json,
            loading: false
          })
        })
    }


    render() {
      console.log(this.state);
      let postGroup = <div className="loading-spinner">Loading...</div>;
      if (!this.state.loading) {
        postGroup = <CardGroup posts = {this.state.posts} />
      }

      return(
        <div className="news-posts-container">
          <FilterBar />
          {postGroup}
        </div>
      );
    }
}


module.exports = NewsPosts;
