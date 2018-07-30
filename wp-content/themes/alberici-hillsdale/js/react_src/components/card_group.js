import React from 'react';

//components
import Card from './card.js';

class CardGroup extends React.Component {


  render() {
    let postComponents = '';
    if (this.props.posts && this.props.posts.length) {

      postComponents = this.props.posts.map((item, index) => {
        let imageSrc = '';
        if (item._embedded['wp:featuredmedia']) {
          imageSrc = item._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
        }

        return <Card
                  key={index}
                  id={item.id}
                  image={imageSrc}
                  title={item.title.rendered}
                   market={item.market_category}
                   service={item.service_category}
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
