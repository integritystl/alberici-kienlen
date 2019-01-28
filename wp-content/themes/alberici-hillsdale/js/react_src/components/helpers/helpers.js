import {localStorageKeys, deleteLocalStorage, setLocalStorageItem} from './localstorage-handler.js'

//This houses shared functionality used between CardList and Table List

//Site Config Option that determines if the site is Hillsdale or Kienlen
export function siteConfig(callback){
  let currentSiteConfig = wpObj.site_config;
  this.setState({
    siteConfig: currentSiteConfig,
  }, callback)
}

//Search Input Filter
export function handleSearch(term) {
  this.setState({
    searchTerm: term,
    hasSearchTerm: true,
    isFiltered: true,
    loading: true
  },() => this.getFilteredPosts(this.buildAPILink() ));
}


//Fetch default WP Categories
export function getCats() {
  let catApi = wpObj.categories_endpoint;
  fetch(catApi)
    .then( response => {
      return(response.json());
    })
    .then(json => {
      this.setState({
        categories: json,
      })
    });
}


//Handles Category Filter
export function handleCategoryChange(id) {
  if (id === 'Category') {
    id = ''
  }

  this.setState({
    filteredCategory: parseInt(id),
    isFiltered: true,
    loading: true,
    currentPage: 1,
  }, () => this.getFilteredPosts(this.buildAPILink() ));
  setLocalStorageItem(localStorageKeys.cards_category, id)
}


//Fetch our Market Categories
export function getMarketCats() {
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
export function handleMarketChange(id) {
  if (id === 'Market') {
    id = ''
  }

  this.setState({
    filteredMarket: parseInt(id),
    isFiltered: true,
    loading: true,
    currentPage: 1,
  }, () => this.getFilteredPosts(this.buildAPILink() ));
  setLocalStorageItem(localStorageKeys.cards_market, id)
}

//Fetch our Services Categories
export function getServiceCats() {
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

export function resetFilter(){
  //TODO set the selects back to default value and the search box to empty
  let searchInput = document.getElementById('filterbar-search');
  let categorySelect = document.getElementById('filterbar-select-category');
  let marketSelect = document.getElementById('filterbar-select-market');
  let secondarySelect = '';

  deleteLocalStorage();

  //Check if Market is being used before setting default value
  if (marketSelect) {
    marketSelect.value = 'Market';
  }
  if (categorySelect) {
    categorySelect.value = 'Category';
  }
  searchInput.value = '';

  //If we're on Kienlen Projects, use Service
  if (this.props.postDataType === 'projects') {
    if (this.state.siteConfig === 'kienlen') {
      secondarySelect = document.getElementById('filterbar-select-service');
      secondarySelect.value = 'Service';
    } else {
      secondarySelect = document.getElementById('filterbar-select-location');
      secondarySelect.value = 'Location';
    }
  }

  this.setState({
    isFiltered: false,
    loading: true,
    filteredCategory: '',
    filteredMarket: '',
    filteredService: '',
    filteredLocation: '',
    hasSearchTerm: false,
    searchTerm: '',
    currentPage: 1,
    totalPosts: parseInt( document.getElementById('cardList_app').getAttribute('data-total') )
  }, () => this.getPosts(this.buildAPILink()))
}

export function removeFilterTerm(currentTermId){
      if (currentTermId === 'filter-info-service') {
        this.setState({
          filteredService: '',
        }, () => this.checkFilterStatus())
        document.getElementById('filterbar-select-service').value = 'Service';
      }

      else if (currentTermId === 'filter-info-market') {
        // it's markets
        this.setState({
          filteredMarket: '',
        }, () => this.checkFilterStatus())
        document.getElementById('filterbar-select-market').value = 'Market';
      }

      else if (currentTermId === 'filter-info-location') {
        //it's location
        this.setState({
          filteredLocation: '',
        }, () => this.checkFilterStatus())
        document.getElementById('filterbar-select-location').value = 'Location';
      }

      else if (currentTermId === 'filter-info-search') {
        //it's location
        this.setState({
          searchTerm: '',
        }, () => this.checkFilterStatus())
        document.getElementById('filterbar-search').value = '';
      }

      else {
        //it's News so it's categories
        this.setState({
          filteredCategory: '',
        }, () => this.checkFilterStatus())
          document.getElementById('filterbar-select-category').value = 'Category';
      }
    }

export function checkFilterStatus(){
  let secondaryFilter = '';
  if (this.state.siteConfig === 'kienlen') {
    secondaryFilter = !this.state.filteredService;
  } else {
    secondaryFilter = !this.state.filteredLocation;
  }

  if (!this.state.filteredCategory && !this.state.filteredMarket && secondaryFilter && !this.state.hasSearchTerm) {
    deleteLocalStorage();

    this.setState({
      isFiltered: false,
      loading: true,
    }, () => this.getPosts(this.buildAPILink()))
  }
}

//Get name of filtered category from object
export function getCatName(filteredCatId, categories){

  let catObj = categories.filter( (item) => {
    return item.id == filteredCatId;
  });

  let filteredCatName = "";
  if(catObj[0]){
    filteredCatName = catObj[0].name;
  }
  return filteredCatName;
}
