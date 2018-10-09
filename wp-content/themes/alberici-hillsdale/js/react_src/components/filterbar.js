import React from 'react';

import Select from './filter-select.js'

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.filterSearch = this.filterSearch.bind(this);
    this.filterMarkets = this.filterMarkets.bind(this);
    this.filterServices = this.filterServices.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
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
  resetFilter() {
    this.props.resetFilter();
  }

  render() {
    let currentServiceFilter = '';
    let currentMarketFilter = '';
    let filterTerms = '';
    let resetBtn = '';
    if (this.props.serviceFilterName) {
      currentServiceFilter = <span className="filter-info--term" dangerouslySetInnerHTML={{__html:this.props.serviceFilterName}} />;
    }
    if (this.props.marketFilterName) {
      currentMarketFilter = <span className="filter-info--term" dangerouslySetInnerHTML={{__html:this.props.marketFilterName}} />;
    }
    if (this.props.isFiltered) {
      filterTerms =  <span>Filter By: {currentServiceFilter} {currentMarketFilter}</span>;
      resetBtn = <button onClick={() => this.resetFilter() } className="btn-reset-filter">Clear Filters</button>;
    }

    return(
      <div className="filterbar">
        <input id="filterbar-search"
          type="search"
          placeholder="Search by keywords"
          onChange={(event) => this.filterSearch(event)}
        />

        <Select label="Market"
          options={this.props.markets}
          onFilterChange={this.filterMarkets}
        />

        <Select label="Service"
          options={this.props.services}
          onFilterChange={this.filterServices}
        />
        <div className="filter-info">
          {filterTerms}
          {resetBtn}
        </div>
      </div>
    );

  }
}

module.exports = FilterBar;
