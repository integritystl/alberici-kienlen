import React from 'react';

class TableItem extends React.Component {
  render() {
  //  console.log('card props', this.props);


    return(
      <tr className="">
        <td><a href={this.props.link}><h3 dangerouslySetInnerHTML={{__html: this.props.title}} /></a></td>
        <td>
            <span className="card-post--market" dangerouslySetInnerHTML={{__html: this.props.marketName}} />
        </td>
        <td>
          <span className="card-post--service" dangerouslySetInnerHTML={{__html: this.props.serviceName}} />
        </td>
      </tr>
    );
  }
}

module.exports = TableItem;
