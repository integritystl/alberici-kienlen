import React from 'react';

class TableItem extends React.Component {
  render() {
  //  console.log('table item props', this.props);


    return(
      <tr className="">
        <td>
          <a href={this.props.link}><h3 dangerouslySetInnerHTML={{__html: this.props.title}} /></a>
          <span className="table-item--owner">Owner</span>
        </td>
        <td>
            <span className="table-item--market" dangerouslySetInnerHTML={{__html: this.props.marketName}} />
        </td>
        <td>
          <span className="table-item--service" dangerouslySetInnerHTML={{__html: this.props.serviceName}} />
        </td>
      </tr>
    );
  }
}

module.exports = TableItem;
