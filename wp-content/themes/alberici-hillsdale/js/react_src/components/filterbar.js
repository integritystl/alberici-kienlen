import React from 'react';

import Select from './filter-select.js'

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.filterMarkets = this.filterMarkets.bind(this);
    this.filterServices = this.filterServices.bind(this);
  }

  filterMarkets(id){
    this.props.marketChange(id);
  }

  filterServices(id){
    this.props.serviceChange(id);
  }


  render() {


    return(
      <div className="filterbar">
        <input type="search" placeholder="Search by keywords" />

        <Select label="Market"
          options={this.props.markets}
          onFilterChange={this.filterMarkets}
        />


        <Select label="Service"
          options={this.props.services}
          onFilterChange={this.filterServices}
        />
      </div>
    );

  }
}

module.exports = FilterBar;
