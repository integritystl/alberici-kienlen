import React from 'react';


class Select extends React.Component {
  constructor(props) {
    super(props);
    this.changeSelect = this.changeSelect.bind(this);
  }

  componentWillMount(){
   let defaultValue = this.props.defaultValue ? this.props.defaultValue : this.props.label;
    this.setState({
      selected: this.props.selected ? this.props.selected : this.props.label,
    })

  }

  changeSelect(e){
    this.setState({
      selected: e.target.value
    })
    this.props.onFilterChange(e.target.value);
  }

  render() {
    let options = this.props.options.map((item, index) => {
      let value = item.value ? item.value : item.id
       return (
          <option value={value} key={index} dangerouslySetInnerHTML={{__html:item.name}} />
      )
    })

    return(
      <select
      id={this.props.selectID}
      onChange={this.changeSelect}
      value= {this.props.selected} >
        <option defaultValue={this.props.label} >{this.props.label}</option>
        {options}
      </select>
    )
  }

}

module.exports = Select;
