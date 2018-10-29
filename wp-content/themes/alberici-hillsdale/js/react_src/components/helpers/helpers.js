//This houses shared functionality used between CardList and Table List

//Search Input Filter
export function handleSearch(term) {
  this.setState({
    searchTerm: term,
    hasSearchTerm: true,
    isFiltered: true,
    loading: true
  },() => this.getFilteredPosts(this.buildAPILink() ));
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
    loading: true
  }, () => this.getFilteredPosts(this.buildAPILink() ));
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
  let marketSelect = document.getElementById('filterbar-select-market');
  let secondarySelect = '';

  searchInput.value = '';
  //I'm cheating :\
  marketSelect.value = 'Market';
  //Table List View also uses 'Service', so check if we're using its state
  if (this.state.postDataType === 'news' || this.state.projects) {
    secondarySelect = document.getElementById('filterbar-select-service');
    secondarySelect.value = 'Service';
  } else {
    secondarySelect = document.getElementById('filterbar-select-location');
    secondarySelect.value = 'Location';
  }

  this.setState({
    isFiltered: false,
    filteredPosts: [],
    filteredMarket: '',
    filteredService: '',
    filteredLocation: '',
    hasSearchTerm: false,
    searchTerm: ''
  }, () => this.getPosts(this.buildAPILink()))
}

export function removeFilterTerm(currentTermId){
      if (currentTermId === 'filter-info-service') {
        this.setState({
          filteredService: '',
        }, () => this.checkFilterStatus())
        document.getElementById('filterbar-select-service').value = 'Service';
      } else if (currentTermId === 'filter-info-market') {
        // it's markets
        this.setState({
          filteredMarket: '',
        }, () => this.checkFilterStatus())
        document.getElementById('filterbar-select-market').value = 'Market';
      } else if (currentTermId === 'filter-info-location') {
        //it's location
        this.setState({
          filteredLocation: '',
        }, () => this.checkFilterStatus())
        document.getElementById('filterbar-select-location').value = 'Location';
      }
    }

export function checkFilterStatus(){
  //check which postDataType it is
  let secondaryFilter = '';
  if (this.state.postDataType === 'news') {
    secondaryFilter = !this.state.filteredService;
  } else {
    secondaryFilter = !this.state.filteredLocation;
  }

  if (!this.state.filteredMarket && secondaryFilter && !this.state.hasSearchTerm) {
    this.setState({
      isFiltered: false,
    })
  }
}

//Get name of filtered category from object
export function getCatName(filteredCatId, categories){
  let catObj = categories.filter( (item) => {
    return item.id === filteredCatId;
  });
  let filteredCatName = catObj[0].name;
  return filteredCatName;
}