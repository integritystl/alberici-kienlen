import React from 'react';

//components
import Card from './card.js';

class CardGroup extends React.Component {
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
        let imageSrc = '';
        let serviceName = [];
        let marketName = [];
        if (item._embedded['wp:featuredmedia']) {
          imageSrc = item._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
        }
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

        return <Card
                  key={index}
                  id={item.id}
                  image={imageSrc}
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
      <div className="card-group">
        {postComponents}
      </div>
    );
  }
}

module.exports = CardGroup;
