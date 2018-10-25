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
        service_categories: [],
        isFiltered: false,
        filteredProjects: [],
        filteredMarket: '',
        filteredLocation: '',
        filteredService: '',
        hasSearchTerm: false,
        searchTerm: '',
        totalProjects: parseInt(wpObj.totalProjects.publish),
      })
    }


  componentDidMount() {
    this.getPosts(this.buildAPILink());
    this.getMarketCats();
    this.getLocationCats();
    this.getServiceCats();
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
      } else if (this.state.filteredMarket) {
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
    }, () => this.getFilteredPosts(this.buildAPILink()) );
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
    let filteredServiceName = '';
    let filteredMarketName = '';

    let allPostsOffset = this.state.currentPage * this.state.postsPerPage;

    if (this.state.loading) {
      postGroup = <div className="loading-spinner">Loading...</div>;
    } else if (allPosts && this.state.isFiltered === false) {
      postGroup =  <Table
                posts = {this.state.projects}
                markets = {this.state.market_categories}
                services = {this.state.service_categories}
                getCatName = {this.getCatName.bind(this)}
              />
    } else if ( filterPosts && this.state.isFiltered === true ) {
      postGroup = <Table
                    posts = {this.state.filteredProjects}
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
      <div className="projects-posts-container">
        <FilterBar
          markets = {this.state.market_categories}
          marketFilter = {this.state.filteredMarket}
          marketFilterName = {filteredMarketName}
          marketChange = {this.handleMarketChange.bind(this)}
          services = {this.state.service_categories}
          serviceFilter = {this.state.filteredService}
          serviceFilterName = {filteredServiceName}
          serviceChange = {this.handleServiceChange.bind(this)}
          locations = {this.state.location_categories}
          locationFilter = {this.state.filteredLocation}
           locationFilterName = {filteredLocationName}
           locationChange = {this.handleLocationChange.bind(this)}
          isFiltered = {this.state.isFiltered}
          filterSearch = {this.handleSearch.bind(this)}
        //  resetFilter = {this.resetFilter.bind(this)}
        //  removeFilterTerm = {this.removeFilterTerm.bind(this)}
        />

        {postGroup}
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