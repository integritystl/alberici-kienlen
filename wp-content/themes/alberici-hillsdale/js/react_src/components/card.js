import React from 'react';

class Card extends React.Component {
  render() {
  //  console.log('card props', this.props);


    return(
      <article className="card-post card-news post">
        <a href={this.props.link}>
          <img
            src={this.props.image}
            srcSet={this.props.imageSrcset}
            sizes="(max-width: 1400px) 100vw, 1400px" />
          <span className="card-post--market">{this.props.marketName}</span>
          <span className="card-post--service">{this.props.serviceName}</span>
          <h3 dangerouslySetInnerHTML={{__html: this.props.title}} />
          </a>
      </article>
    );
  }
}

module.exports = Card;
