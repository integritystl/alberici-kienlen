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
        let imageSrcSet = '';
        let serviceName = [];
        let marketName = [];
        let locationName = [];

        if (item._embedded['wp:featuredmedia']) {
          //Media Paths to help with srcSets
          let imageSrcSetMed = item._embedded['wp:featuredmedia'][0].media_details.sizes.medium;
          let imageSrcSetBlog = item._embedded['wp:featuredmedia'][0].media_details.sizes.blog_image;

           //use the custom Blog size as our img src fallback
          imageSrc = imageSrcSetBlog.source_url;
          //chain together the other sizes to make the srcset attribute, add the 'width' from image data to create srcset attributes
          imageSrcSet = imageSrcSetMed.source_url + ' ' + imageSrcSetMed.width + 'w, ' + imageSrcSetBlog.source_url + ' ' + imageSrcSetBlog.width + 'w';
        }

        //roll through array of service categories per post and get the name
        if (item.service_category) {
          let postServices = item.service_category.filter( (cat) => {
              let name = this.displayCatName(cat, this.props.services);
              return serviceName.push(name);
          })
        }

        if (item.location_category) {
          let postLocations = item.location_category.filter( (cat) => {
              let name = this.displayCatName(cat, this.props.locations);
              return locationName.push(name);
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
                  imageSrcset={imageSrcSet}
                  title={item.title.rendered}
                  market={item.market_category}
                  service={item.service_category}
                  location={item.location_category}
                  serviceName = {serviceName}
                  marketName = {marketName}
                  locationName = {locationName}
                  link={item.link}
                />

      });
    } else {
      postComponents = (
        <h3>Sorry, no posts.</h3>
      );
    }


    return(
      <div className="card-group blog-content_posts">
        {postComponents}
      </div>
    );
  }
}

module.exports = CardGroup;
