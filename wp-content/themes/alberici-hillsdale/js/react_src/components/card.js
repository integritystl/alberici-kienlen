import React from 'react';

class Card extends React.Component {
  render() {
    return(
      <article className="card-post">
        <a href={this.props.link}><img src={this.props.image} /></a>
        <span>category</span>
        <h3>{this.props.title}</h3>
      </article>
    );
  }
}

module.exports = Card;
