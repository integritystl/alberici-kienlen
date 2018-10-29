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
    let results = '';

    //If we have project posts, loop through 'em and jam into table
    if (this.props.posts && this.props.posts.length) {

      postComponents = this.props.posts.map((item, index) => {
        let serviceName = [];
        let marketName = [];
        let owner = '';
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

        if (item.acf.project_owner) {
          owner = item.acf.project_owner;
        }

        return <TableItem
                  key={index}
                  id={item.id}
                  title={item.title.rendered}
                  owner={owner}
                  market={item.market_category}
                  service={item.service_category}
                  serviceName = {serviceName}
                  marketName = {marketName}
                  link={item.link}
                />

      });
      //end postComponents
      results =
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


    } else {
      results = <div className="no-results">No projects available.</div>
    }


    return(
      <div>
        {results}
      </div>
    );
  }
}

module.exports = Table;
