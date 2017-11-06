import React from 'react';
import ReactDOM from 'react-dom';

import Layout from "./components/Layout"
import Charts from "./components/Charts"

class App extends React.Component {
  constructor () {
      super();
    };
    
    render() {
      return (
        <section>
          <Layout/>
          <Charts/>
        </section>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
