import React from 'react';
import { render } from 'react-dom';
// import { fetch } from 'whatwg-fetch';
import CardList from './components/cardList';

class AppInitializer {
  run() {
    render(
      <div>
        <CardList />
      </div>,
      document.getElementById('cardList_app'),
    );
  }
}

new AppInitializer().run();
