import React from 'react';

class Card extends React.Component {
  render() {
    return(
      <article className="card-post">
        <a href={this.props.link}>
          <img src={this.props.image} />
          <span>category</span>
          <h3 dangerouslySetInnerHTML={{__html: this.props.title}} />
          </a>
      </article>
    );
  }
}

module.exports = Card;
