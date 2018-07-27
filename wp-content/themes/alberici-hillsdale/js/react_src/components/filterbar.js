import React from 'react';

import Select from './filter-select.js'

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.filterMarkets = this.filterMarkets.bind(this);
  }

  filterMarkets(id){
    console.log('market select', id);
    this.props.marketChange(id);
  }


  render() {
    console.log('filter state', this.state);
    console.log('filter props', this.props);
    let marketOptions = this.props.markets.map((item, index) => {
      let value = item.value ? item.value : item.id;
      return (
        <option value={value} key={index} label={item.name}>{item.name}</option>
      )
    });

    return(
      <div className="filterbar">
        <input type="search" placeholder="Search by keywords" />

        <Select label="Market"
          options={this.props.markets}
          onFilterChange={this.filterMarkets}
        />


        <select>
          <option>Service</option>
        </select>
      </div>
    );

  }
}

module.exports = FilterBar;
