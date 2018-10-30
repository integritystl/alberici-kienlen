//This is for the table view of Projects
import React from 'react';
import ReactPaginate from 'react-paginate';
import {handleSearch, getMarketCats, getServiceCats, resetFilter, removeFilterTerm, checkFilterStatus, handleMarketChange, getCatName} from './helpers/helpers.js'
import FilterBar from './filterbar.js'
import Table from './table.js'

//Many functions in here are clones of what's happening in CardList.js
// The major difference is we're using Project Post types and the Location Custom Taxonomy.
class TableList extends React.Component {
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
        projects: [],
        postsPerPage: 2,
        market_categories: [],
        service_categories: [],
        isFiltered: false,
        filteredProjects: [],
        filteredMarket: '',
        filteredService: '',
        hasSearchTerm: false,
        searchTerm: '',
        totalProjects: parseInt(wpObj.totalProjects.publish),
      })
    }


  componentDidMount() {
    this.getPosts(this.buildAPILink());
    this.getMarketCats();
    this.getServiceCats();
  }

  //Fetch posts
  buildAPILink() {
    let baseLink = wpObj.projects_endpoint;
    if (this.state.isFiltered) {
      if (this.state.hasSearchTerm) {
        baseLink += `&search=${this.state.searchTerm}`;
      }
      if (this.state.filteredMarket && this.state.filteredService) {
        baseLink += `&market_category=${this.state.filteredMarket}&service_category=${this.state.filteredService}`;
      } else if (this.state.filteredService) {
        baseLink += `&service_category=${this.state.filteredService}`;
      } else if (this.state.filteredMarket) {
        baseLink += `&market_category=${this.state.filteredMarket}`;
      } else {
        return baseLink;
      }
    }
    return baseLink;
  }

  //Get All Posts
  getPosts(apiLink){
    apiLink += `&per_page=${this.state.postsPerPage}`
    console.log(apiLink);
    //Gotta pass Basic Auth for the prompt from WP Engine
    //Ref: https://stackoverflow.com/questions/30203044/using-an-authorization-header-with-fetch-in-react-native
    fetch(apiLink, {
        headers: new Headers({'Authorization': 'Basic ' + btoa("kienlen:constructors") }),
      })
      .then( response => {
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
          filteredProjects: json,
          loading: false
        })
      })
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

  handlePageChange(pageData) {
    console.log('handlePage', pageData);
    let selected = pageData.selected;
    let offset = Math.ceil(selected * this.state.postsPerPage);
    console.log('handPage', offset);
    this.setState({
      loading: true
    }, () => this.loadMorePosts(offset) );
  };

  //Load More functionality
  // TODO: Load more is pagination in this view, so will be different from CardList view
    loadMorePosts(offset) {
      //need to fetch the next amount of posts and add them
      //getPosts loads the page and uses postsPerPage
      let apiLink = this.buildAPILink();
      apiLink += `&per_page=${this.state.postsPerPage}`
      console.log('load more current page', this.state.currentPage);

      // let offset = '';
      // //If currentPage is 1, don't do offset math
      // if (this.state.currentPage === 1) {
      //   offset = 0
      // } else if (this.state.isFiltered) {
      //   //TODO: check this
      //   offset = this.state.filteredProjects.length;
      // } else {
      //   //something in here is goofy when it comes to the 1st page
      //   offset = this.state.currentPage * this.state.postsPerPage;
      // //  offset = this.state.projects.length;
      // }
      console.log('offset loadMorePosts', offset);
      apiLink += `&offset=${offset}`;
      console.log('load more offset', apiLink);

      fetch(apiLink)
        .then( response => {
          return(response.json());
        })
        .then( json => {
          console.log('load more json', json);
          let currentPosts = this.state.projects;
          this.setState( (state) => ({
            projects: json,
            loading: false,
          }));
        })
    }


  render() {
    let postGroup = '';
    let loadMoreBtn = '';
    let loadMoreLabel = 'View More Projects';

    let allPosts = this.state.projects;
    let filterPosts = this.state.filteredProjects;

    let filteredServiceName = '';
    let filteredMarketName = '';

    let currentPage = this.state.currentPage;
    let pageCount = Math.ceil(this.state.totalProjects / this.state.postsPerPage);
    let totalResults = this.state.totalProjects;
    let displayNumber = ''; //This should be a count of current Visible Posts

    if (this.state.loading) {
      postGroup = <div className="loading-spinner">Loading...</div>;
    } else if (allPosts && this.state.isFiltered === false) {
      postGroup =  <Table
                posts = {this.state.projects}
                markets = {this.state.market_categories}
                services = {this.state.service_categories}
                getCatName = {this.getCatName.bind(this)}
              />

      displayNumber = postGroup.props.posts.length;
      console.log('postgroup', postGroup.props.posts);
    } else if ( filterPosts && this.state.isFiltered === true ) {

      totalResults = this.state.filteredProjects.length;
      postGroup = <Table
                    posts = {this.state.filteredProjects}
                    markets = {this.state.market_categories}
                    services = {this.state.service_categories}
                    getCatName = {this.getCatName.bind(this)}
                    filteredService = {this.state.filteredService}
                    filteredMarket = {this.state.filteredMarket}
                  />
      displayNumber = postGroup.props.posts.length;
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

    //Pagination
    let pagination = '';
    if (!this.state.loading) {
      //currentPage keeps being 0 to start, wtf?
      pagination =  <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={pageCount}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageChange.bind(this)}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
    }

    return(
      <div className="projects-posts-container">
        <FilterBar
          markets = {this.state.market_categories}
          marketFilter = {this.state.filteredMarket}
          marketFilterName = {filteredMarketName}
          marketChange = {this.handleMarketChange}
          services = {this.state.service_categories}
          serviceFilter = {this.state.filteredService}
          serviceFilterName = {filteredServiceName}
          serviceChange = {this.handleServiceChange.bind(this)}
          secondarySelect = 'services'
          isFiltered = {this.state.isFiltered}
          filterSearch = {this.handleSearch}
          resetFilter = {this.resetFilter}
          removeFilterTerm = {this.removeFilterTerm}
        />

        {postGroup}
        <div className="table-projects-info">
          <div className="table-projects-pagination">
             <h2>{currentPage}</h2>
             {pagination}
          </div>

          <div className="table-projects-results">
            <div className="table-project-results--current">Page {currentPage}</div>
            <div className="table-project-results--total"> {displayNumber} of {totalResults} Results</div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = TableList;