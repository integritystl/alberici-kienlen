import React from 'react';

class Card extends React.Component {
  render() {
  //  console.log('card props', this.props);


    return(
      <article className="card-post">
        <a href={this.props.link}>
          <img src={this.props.image} />
          <span>{this.props.marketName}</span>
          <span>{this.props.serviceName}</span>
          <h3 dangerouslySetInnerHTML={{__html: this.props.title}} />
          </a>
      </article>
    );
  }
}

module.exports = Card;