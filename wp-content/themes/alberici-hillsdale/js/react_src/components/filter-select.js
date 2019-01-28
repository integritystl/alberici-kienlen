import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.changeSelect = this.changeSelect.bind(this);
  }

  UNSAFE_componentWillMount() {
    const defaultValue = this.props.defaultValue ? this.props.defaultValue : this.props.label;
    this.setState({
      selected: this.props.selected ? this.props.selected : this.props.label,
    });
  }

  changeSelect(e) {
    this.setState({
      selected: e.target.value,
    });
    this.props.onFilterChange(e.target.value);
  }

  render() {
    const options = this.props.options.map((item, index) => {
      const value = item.value ? item.value : item.id;
      return (
          <option value={value} key={index} dangerouslySetInnerHTML={{ __html: item.name }} />
      );
    });

    return (
      <select
      id={this.props.selectID}
      onChange={this.changeSelect}
      value= {this.props.selected} >
        <option defaultValue={this.props.label} >{this.props.label}</option>
        {options}
      </select>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  selectID: PropTypes.string,
  selected: PropTypes.string,
};


module.exports = Select;
