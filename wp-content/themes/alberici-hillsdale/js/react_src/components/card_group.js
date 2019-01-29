import React from 'react';
import PropTypes from 'prop-types';

// components
import Card from './card';

class CardGroup extends React.Component {
  constructor(props) {
    super(props);
    this.displayCatName = this.displayCatName.bind(this);
  }

  displayCatName(id, categories) {
    const catName = this.props.getCatName(id, categories);
    return catName;
  }

  render() {
    let postComponents = '';
    if (this.props.posts && this.props.posts.length) {
      postComponents = this.props.posts.map((item, index) => {
        let imageSrc = '';
        let imageSrcSet = '';
        let imageAlt = '';
        const serviceName = [];
        const marketName = [];
        const locationName = [];

        // One of the featured images is giving this error: "code": "rest_forbidden"
        // avoiding object that only has this "code" error message
        if (item._embedded['wp:featuredmedia'] && !item._embedded['wp:featuredmedia'][0].code) {
          // Media Paths to help with srcSets
          const imageSrcSetMed = item._embedded['wp:featuredmedia'][0].media_details.sizes.medium;
          const imageSrcSetBlog = item._embedded['wp:featuredmedia'][0].media_details.sizes.blog_image;
          imageAlt = item._embedded['wp:featuredmedia'][0].alt_text;

          // use the custom Blog size as our img src fallback
          imageSrc = imageSrcSetBlog.source_url;
          // chain together the other sizes to make the srcset attribute,
          // add the 'width' from image data to create srcset attributes
          imageSrcSet = `${imageSrcSetMed.source_url} ${imageSrcSetMed.width}w,
            ${imageSrcSetBlog.source_url} ${imageSrcSetBlog.width}w`;
        }

        // roll through array of service categories per post and get the name
        // We only do this if this is being used to display News
        if (this.props.postDataType === 'news') {
          if (item.service_category) {
            const postServices = item.service_category.filter((cat) => {
              const name = this.displayCatName(cat, this.props.services);
              return serviceName.push(name);
            });
          }
        }

        if (this.props.postDataType === 'projects') {
          if (item.location_category) {
            const postLocations = item.location_category.filter((cat) => {
              const name = this.displayCatName(cat, this.props.locations);
              return locationName.push(name);
            });
          }
        }

        // same but with markets
        if (item.market_category) {
          const postMarkets = item.market_category.filter((cat) => {
            const name = this.displayCatName(cat, this.props.markets);
            return marketName.push(name);
          });
        }

        return <Card
                  key={index}
                  id={item.id}
                  image={imageSrc}
                  imageSrcset={imageSrcSet}
                  imgAlt={imageAlt}
                  title={item.title.rendered}
                  market={item.market_category}
                  service={item.service_category}
                  location={item.location_category}
                  serviceName = {serviceName}
                  marketName = {marketName}
                  locationName = {locationName}
                  link={item.link}
                />;
      });
    } else {
      postComponents = (
        <div className="no-results">
          <h3>No results found.</h3>
        </div>
      );
    }


    return (
      <div className="card-group blog-content_posts">
        {postComponents}
      </div>
    );
  }
}

CardGroup.propTypes = {
  locations: PropTypes.array,
  markets: PropTypes.array,
  posts: PropTypes.array,
  postDataType: PropTypes.string,
  services: PropTypes.array,
};

module.exports = CardGroup;
