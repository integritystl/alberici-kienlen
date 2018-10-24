import React from 'react';

//components
import TableItem from './tableItem.js';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.displayCatName = this.displayCatName.bind(this);
  }

  displayCatName(id, categories){
   let catName = this.props.getCatName(id, categories);
    return catName;
  }

  render() {
    let postComponents = '';
    if (this.props.posts && this.props.posts.length) {

      postComponents = this.props.posts.map((item, index) => {
        let serviceName = [];
        let marketName = [];
        //roll through array of service categories per post and get the name
        if (item.service_category) {
          let postServices = item.service_category.filter( (cat) => {
              let name = this.displayCatName(cat, this.props.services);
              return serviceName.push(name);
          })
        }

        //same but with markets
        if (item.market_category) {
          let postMarkets = item.market_category.filter( (cat) => {
              let name = this.displayCatName(cat, this.props.markets);
              return marketName.push(name);
          })
        }

        return <TableItem
                  key={index}
                  id={item.id}
                  title={item.title.rendered}
                  market={item.market_category}
                  service={item.service_category}
                  serviceName = {serviceName}
                  marketName = {marketName}
                  link={item.link}
                />

      });
    } else {
      postComponents = (
        <h3>Sorry, no posts.</h3>
      );
    }


    return(
      <table className="table-projects">
        <thead>
          <tr>
            <th>Name</th>
            <th>Market</th>
            <th>Service</th>
          </tr>
        </thead>
        <tbody>
          {postComponents}
        </tbody>
      </table>

    );
  }
}

module.exports = Table;
