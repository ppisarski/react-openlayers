import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import MapLayout from './containers/Map/Map';

class App extends Component {
  render = () => (
    <Layout>
      <Route path="/" exact component={MapLayout} />
    </Layout >
  )
};

export default App;