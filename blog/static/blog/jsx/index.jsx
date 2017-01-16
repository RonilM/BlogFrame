//./node_modules/.bin/webpack -d --display-error-details

import React from 'react';
import {render} from 'react-dom';

var test = "AAA";

class App extends React.Component {
  render () {
    return (
    	<div>
    		<Navbar />
    	</div>

    );
  }
}


class Navbar extends React.Component {
	
	render() {
		return (
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="#">
			        <img alt={GLOBALS.CUSTOMS.BloggerFirstName} src="" />
			      </a>
			    </div>
			  </div>
			</nav>
		);
	}
}



render(<App/>, document.getElementById('app'));
