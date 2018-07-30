import React from 'react';

class Card extends React.Component {
  render() {
  //  console.log('card props', this.props);
    let postMarkets = ''

    if(this.props.market) {
      postMarkets = this.props.market.map((item, index) => {
        //console.log('post market', item)
      })
    }


    return(
      <article className="card-post">
        <a href={this.props.link}>
          <img src={this.props.image} />
          <span>{this.props.market}</span>
          <span>{this.props.service}</span>
          <h3 dangerouslySetInnerHTML={{__html: this.props.title}} />
          </a>
      </article>
    );
  }
}

module.exports = Card;
