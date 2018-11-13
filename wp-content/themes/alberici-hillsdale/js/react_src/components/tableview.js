//This is for the table view of Projects
import React from 'react';
import ReactPaginate from 'react-paginate';
import {siteConfig, handleSearch, getMarketCats, getServiceCats, resetFilter, removeFilterTerm, checkFilterStatus, handleMarketChange, getCatName} from './helpers/helpers.js'
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
    this.siteConfig = siteConfig.bind(this);
  }

  componentWillMount() {
      this.setState({
        loading: true,
        currentPage: 0,//ReactPaginate is 0 indexed, so this is 0 for inital load
        projects: [],
        postsPerPage: 10,
        market_categories: [],
        service_categories: [],
        isFiltered: false,
        filteredProjects: [],
        filteredMarket: '',
        filteredService: '',
        hasSearchTerm: false,
        searchTerm: '',
        siteConfig: '',
        totalProjects: parseInt(wpObj.totalProjects.publish),
      })
    }


  componentDidMount() {
    this.getPosts(this.buildAPILink());
    this.getMarketCats();
    this.getServiceCats();
    this.siteConfig();
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
      baseLink += `&per_page=${this.state.postsPerPage}`
    }
    return baseLink;
  }

  //Get All Posts
  getPosts(apiLink){
    apiLink += `&per_page=${this.state.postsPerPage}`
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
        this.setState({
          // WP API gives the Total Page Count in the Headers, of all places :\
          totalProjects: parseInt( response.headers.get('X-WP-Total') )
        })
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

  //Works with React Paginate to pass info along
  handlePageChange(pageData) {
    let selected = pageData.selected;
    let offset = Math.ceil(selected * this.state.postsPerPage);
    this.setState({
      currentPage: selected,
      loading : true
    }, () => this.loadMorePosts(offset) );
  };

  //Load More functionality
    loadMorePosts(offset) {
      let apiLink = this.buildAPILink();
      apiLink += `&per_page=${this.state.postsPerPage}&offset=${offset}`

      fetch(apiLink)
        .then( response => {
          return(response.json());
        })
        .then( json => {
          if (this.state.isFiltered) {
            this.setState( (state) => ({
              filteredProjects: json,
              loading: false,
            }));
          } else {
            //NonFiltered Change
            this.setState( (state) => ({
              projects: json,
              loading: false,
            }));
          }
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
    //to display the current page we're on + make up for 0 index of pagination
    let currentPageDisplay = currentPage + 1;
    let pageCount = Math.ceil(this.state.totalProjects / this.state.postsPerPage);
    let totalResults = this.state.totalProjects;
    let displayNumber = ''; //This should be a count of current Visible Posts

    let pagination = '';
    let pageInfo = '';

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

    } else if ( filterPosts && this.state.isFiltered === true ) {
      postGroup = <Table
                    posts = {this.state.filteredProjects}
                    markets = {this.state.market_categories}
                    services = {this.state.service_categories}
                    getCatName = {this.getCatName.bind(this)}
                    filteredService = {this.state.filteredService}
                    filteredMarket = {this.state.filteredMarket}
                  />
      displayNumber = postGroup.props.posts.length;
      pageCount =  Math.ceil(totalResults / this.state.postsPerPage);
      //Get the names of filtered service categories for display purposes
      if (this.state.service_categories && this.state.filteredService) {
        filteredServiceName = this.getCatName(this.state.filteredService, this.state.service_categories);
      }
      //Get the names of filtered markets for display purposes
      if (this.state.market_categories && this.state.filteredMarket) {
        filteredMarketName = this.getCatName(this.state.filteredMarket, this.state.market_categories);
      }
    }
    //Pagination
    if (!this.state.loading && totalResults !== 0 ) {

      pagination =  <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={pageCount}
                       pageRangeDisplayed={5}
                       forcePage={currentPage} //changes the counter, not data
                       onPageChange={this.handlePageChange.bind(this)}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />

      pageInfo = <div className="table-projects-results">
                  <div className="table-project-results--current">Page {currentPageDisplay} of {pageCount}</div>
                  <div className="table-project-results--total"> {displayNumber} of {totalResults} Total Results</div>
                </div>

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
             {pagination}
          </div>

          {pageInfo}

        </div>
      </div>
    );
  }
}

module.exports = TableList;
