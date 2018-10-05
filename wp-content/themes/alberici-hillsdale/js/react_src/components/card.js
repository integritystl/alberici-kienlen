import React from 'react';

class Card extends React.Component {
  render() {
  //  console.log('card props', this.props);


    return(
      <article className="card-post card-news post">
        <img
          src={this.props.image}
          srcSet={this.props.imageSrcset}
          sizes="(max-width: 1400px) 100vw, 1400px" />
          <a href={this.props.link}>
            <div className="news-meta">
              <span className="card-post--market" dangerouslySetInnerHTML={{__html: this.props.marketName}} />
              <span className="card-post--service" dangerouslySetInnerHTML={{__html: this.props.serviceName}} />
            </div>
            <h3 dangerouslySetInnerHTML={{__html: this.props.title}} />
          </a>
      </article>
    );
  }
}

module.exports = Card;
