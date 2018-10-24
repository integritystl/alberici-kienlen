import React from 'react';
import {render} from 'react-dom';
import {fetch} from 'whatwg-fetch';
import TableList from './components/tableview.js'

class AppInitializer {
  run() {
    render(
      <div>
        <TableList />
      </div>,
      document.getElementById('projects_app')
    )
  }
}

new AppInitializer().run()
