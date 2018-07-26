import React from 'react';
import {render} from 'react-dom';

import NewsPosts from './components/newsPosts.js'


class AppInitializer {
  run() {
    render(
      <div>
        <NewsPosts />
      </div>,
      document.getElementById('news_app')
    )
  }
}

new AppInitializer().run()
