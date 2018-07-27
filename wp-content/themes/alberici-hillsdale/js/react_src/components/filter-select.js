import React from 'react';


class Select extends React.Component {
  constructor(props) {
    super(props);
    this.changeSelect = this.changeSelect.bind(this);
  }


  componentWillMount(){
    let defaultValue = this.props.defaultValue ? this.props.defaultValue : ''
  }

  changeSelect(e){
    console.log('changeSelect', event.target.value)
    console.log('change select props', this.props)
    this.props.onFilterChange(e.target.value);
  }

  render() {
    let options = this.props.options.map((item, index) => {
      let value = item.value ? item.value : item.id
       return (
         <option value={value} key={index} label={item.name}>{item.name}</option>
      )
    })

    return(
      <select
      onChange={this.changeSelect} >
        <option defaultValue={this.props.label} >{this.props.label}</option>
        {options}
      </select>

    )
  }

}

module.exports = Select;
