//This is for the table view of Projects
import React from 'react';

import FilterBar from './filterbar.js'
import Table from './table.js'
//Many functions in here are clones of what's happening in CardList.js
// The major difference is we're using Project Post types and the Location Custom Taxonomy.
class TableList extends React.Component {
  componentWillMount() {
      this.setState({
        loading: true,
        currentPage: 1,
        projects: [],
        postsPerPage: 6,
        market_categories: [],
        location_categories: [],
        isFiltered: false,
        filteredProjects: [],
        filteredMarket: '',
        filteredLocation: '',
        hasSearchTerm: false,
        searchTerm: '',
        totalProjects: parseInt(wpObj.totalProjects.publish),
      })
    }


  componentDidMount() {
    this.getPosts(this.buildAPILink());
    this.getMarketCats();
    this.getLocationCats();
  }

  //Fetch posts
  buildAPILink() {
    let baseLink = wpObj.projects_endpoint;
    console.log(baseLink);
    if (this.state.isFiltered) {
      if (this.state.hasSearchTerm) {
        baseLink += `&search=${this.state.searchTerm}`;
      }
      if (this.state.filteredMarket && this.state.filteredLocation) {
        baseLink += `&market_category=${this.state.filteredMarket}&location_category=${this.state.filteredLocation}`;
      } else if (this.state.filteredLocation) {
        baseLink += `&location_category=${this.state.filteredLocation}`;
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
        console.log('response?', response);
        return(response.json());
      })
      .then(json => {
        this.setState( {
          projects: json,
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
  //Handle Location Filter
  handleLocationChange(id) {
    if (id === 'Location') {
      id = ''
    }
    this.setState({
      filteredLocation: parseInt(id),
      isFiltered: true,
      loading: true
    }, () => this.getFilteredPosts(this.buildAPILink()) );
  }

  //Fetch our Services Categories
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

  //Get name of filtered category from object
  getCatName(filteredCatId, categories){
    let catObj = categories.filter( (item) => {
      return item.id === filteredCatId;
    });
    let filteredCatName = catObj[0].name;
    return filteredCatName;
  }


  render() {
    let postGroup = '';
    let loadMoreBtn = '';
    let loadMoreLabel = 'View More Projects';

    let allPosts = this.state.projects;
    let filterPosts = this.state.filteredProjects;

    let filteredLocationName = '';
    let filteredMarketName = '';

    let allPostsOffset = this.state.currentPage * this.state.postsPerPage;




    return(
      <div className="projects-posts-container">
        <FilterBar
          markets = {this.state.market_categories}
          marketFilter = {this.state.filteredMarket}
          marketFilterName = {filteredMarketName}
          marketChange = {this.handleMarketChange.bind(this)}
          locations = {this.state.location_categories}
          locationFilter = {this.state.filteredLocation}
           locationFilterName = {filteredLocationName}
           locationChange = {this.handleLocationChange.bind(this)}
          isFiltered = {this.state.isFiltered}
          filterSearch = {this.handleSearch.bind(this)}
        //  resetFilter = {this.resetFilter.bind(this)}
        //  removeFilterTerm = {this.removeFilterTerm.bind(this)}
        />

        <table className="table-projects">
          <thead>
            <tr>
              <th>Name</th>
              <th>Market</th>
              <th>Service</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Test</td>
              <td>test</td>
              <td>test</td>
            </tr>
            <tr>
              <td>Test</td>
              <td>test</td>
              <td>test</td>
            </tr>
            <tr>
              <td>Test</td>
              <td>test</td>
              <td>test</td>
            </tr>
          </tbody>
        </table>
        <div className="table-projects-info">
          <ul className="table-projects-pagination">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          <div className="table-projects-results">
            <span className="table-project-results--current">Page 1</span>
            <span className="table-project-results--total">10 of 62 Results</span>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = TableList;