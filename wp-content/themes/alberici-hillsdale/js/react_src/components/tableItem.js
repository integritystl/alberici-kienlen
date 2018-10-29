import React from 'react';

class TableItem extends React.Component {
  render() {

    return(
      <tr className="">
        <td>
          <a href={this.props.link}  dangerouslySetInnerHTML={{__html: this.props.title}} />

          <span className="table-item--owner" dangerouslySetInnerHTML={{__html: this.props.owner}} />
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
