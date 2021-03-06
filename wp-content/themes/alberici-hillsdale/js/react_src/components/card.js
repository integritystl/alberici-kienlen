import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    return (
      <article className="card-post card-news post">
        <div className="card-overlay"></div>
        <img
          src={this.props.image}
          srcSet={this.props.imageSrcset}
          sizes="(max-width: 600px) 100vw, 600px"
          alt={this.props.imgAlt} />
          <a href={this.props.link}>
            <div className="news-meta">
              <span className="card-post--market" dangerouslySetInnerHTML={{ __html: this.props.marketName }} />
              <span className="card-post--service" dangerouslySetInnerHTML={{ __html: this.props.serviceName }} />
            </div>
            <h3 dangerouslySetInnerHTML={{ __html: this.props.title }} />
          </a>
      </article>
    );
  }
}

Card.propTypes = {
  image: PropTypes.string,
  imgAlt: PropTypes.string,
  imageSrcset: PropTypes.string,
  link: PropTypes.string,
  locationName: PropTypes.array,
  marketName: PropTypes.array,
  serviceName: PropTypes.array,
  title: PropTypes.string,
};

module.exports = Card;
