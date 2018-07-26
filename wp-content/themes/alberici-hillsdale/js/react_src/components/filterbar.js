import React from 'react';

class FilterBar extends React.Component {


  render() {
    let marketOptions = this.props.markets.map((item, index) => {
      let value = item.value ? item.value : item.id;
      return (
        <option value={value} key={index} label={item.name}>{item.name}</option>
      )
    });

    return(
      <div className="filterbar">
        <input type="search" placeholder="Search by keywords" />
        <select>
          <option>Markets</option>
          {marketOptions}
        </select>

        <select>
          <option>Service</option>
        </select>
      </div>
    );

  }
}

module.exports = FilterBar;
