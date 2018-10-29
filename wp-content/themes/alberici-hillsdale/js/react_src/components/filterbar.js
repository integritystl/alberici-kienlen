import React from 'react';

import Select from './filter-select.js'

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.filterSearch = this.filterSearch.bind(this);
    this.filterMarkets = this.filterMarkets.bind(this);
    this.filterServices = this.filterServices.bind(this);
    this.filterLocations = this.filterLocations.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.removeFilterTerm = this.removeFilterTerm.bind(this);
  }

  filterSearch(event) {
    let term = event.target.value;
    this.props.filterSearch(term);
  }

  filterMarkets(id){
    this.props.marketChange(id);
  }

  filterServices(id){
    this.props.serviceChange(id);
  }

  filterLocations(id) {
    this.props.locationChange(id);
  }

  resetFilter() {
    this.props.resetFilter();
  }

  removeFilterTerm(event){
    let currentTermId = event.target.id
    this.props.removeFilterTerm(currentTermId);
  }

  render() {
    let currentServiceFilter = '';
    let currentMarketFilter = '';
    let currentLocationFilter = '';
    let filterTerms = '';
    let resetBtn = '';
    //Check if Service or Location exists, then output the one we want.
    let secondarySelect = '';
    if (this.props.secondarySelect=== 'services') {
      if (this.props.services) {
        secondarySelect =
          <div className="select">
            <label className="screen-reader-text">Service</label>
            <Select label="Service"
              selectID= "filterbar-select-service"
              options={this.props.services}
              onFilterChange={this.filterServices}
            />
          </div>
      }
    } else {
      //It must be locations
      secondarySelect =
        <div className="select">
          <label className="screen-reader-text">Locations</label>
          <Select label="Locations"
            selectID= "filterbar-select-location"
            options={this.props.locations}
            onFilterChange={this.filterLocations}
          />
        </div>
    }

    if (this.props.serviceFilterName) {
      currentServiceFilter = <span id="filter-info-service" onClick={(event) => this.removeFilterTerm(event) } className="filter-info--term" key={this.props.serviceFilter} dangerouslySetInnerHTML={{__html:this.props.serviceFilterName}} />;
    }
    if (this.props.locationFilterName) {
      currentLocationFilter = <span id="filter-info-location" onClick={(event) => this.removeFilterTerm(event) } className="filter-info--term" key={this.props.locationFilter} dangerouslySetInnerHTML={{__html:this.props.locationFilterName}} />;
    }

    if (this.props.marketFilterName) {
      currentMarketFilter = <span id="filter-info-market" onClick={(event) => this.removeFilterTerm(event) } className="filter-info--term" key={this.props.marketFilter} dangerouslySetInnerHTML={{__html:this.props.marketFilterName}} />;
    }
    if (this.props.isFiltered) {
      filterTerms =  <span><span className="filter-label">Filter By:</span> {currentMarketFilter} {currentServiceFilter} {currentLocationFilter}</span>;
      resetBtn = <button onClick={() => this.resetFilter() } className="btn-reset-filter">Clear Filters</button>;
    }

    return(
      <div className="filterbar">
        <label className="screen-reader-text">Search</label>
        <input id="filterbar-search"
          type="search"
          placeholder="Search by keywords"
          onChange={(event) => this.filterSearch(event)}
        />

        <div className="select">
          <label className="screen-reader-text">Market</label>
          <Select label="Market"
            selectID= "filterbar-select-market"
            options={this.props.markets}
            onFilterChange={this.filterMarkets}
          />
        </div>

        {secondarySelect}

        <div className="filter-info">
          {filterTerms}
          {resetBtn}
        </div>
      </div>
    );

  }
}

module.exports = FilterBar;
