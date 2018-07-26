import React from 'react';
import {render} from 'react-dom';

import FilterBar from './components/filterbar.js'

class AppInitializer {
  run() {
    render(
      <div>
        Applesauce
        <FilterBar />
      </div>,
      document.getElementById('projects_app')
    )
  }
}

new AppInitializer().run()
