import React from 'react';
import {render} from 'react-dom';


class App extends React.Component {
  render () {
    return (
    	<div className="container-fluid">
    		
    		<div className="row">
    			
    		</div>

    		<div className="row">
    			<div className="col-md-3">
    				<ArticleList info={this.props.articles} />
    			</div>
    			<div className="col-md-7">
    				<div className="container-fluid">
    					<div className="row">
    						<Navbar />
    					</div>
    					<div className="row">
    						<BlogPage />
    					</div>
    				</div>
    			</div>
    			<div className="col-md-2">
    				<div className="row">
						<div className="panel panel-default side-panel">
							<div className="panel-heading">
								FEATURED
							</div>
							<div className="panel-body">
								<ul className="nav nav-pills nav-stacked">

								</ul>
							</div>
						</div>
    				</div>
    			</div>
    		</div>
    	</div>

    );
  }
}

class ArticleList extends React.Component {

	render() {
		const articleLinkElement = this.props.info.map((article)=>
			<ArticleLink info={article} key={article.id} />
		);

		return (
			<div className="panel panel-default side-panel">
				<div className="panel-heading">
					ARTICLES
				</div>
				<div className="panel-body">
					<ul className="nav nav-pills nav-stacked">
						{articleLinkElement}
					</ul>
				</div>
			</div>
		);
	}
}

function ArticleLink(props) {
	return (
		<li role="presentation"><a href={props.info.id}>{props.info.title}</a></li>
	);
}

class BlogPage extends React.Component {
	render() {
		return (
			<p>Placeholder</p>
		);
	}
}

function Paragraph(props) {
	return (
		<p>{props.value}</p>
	);
}

function Image(props) {
	return (
		<img src={props.src} />
	);
}


class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-inverse navbar-default">
			    <div className="navbar-header">
				    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					    <span className="sr-only">Toggle navigation</span>
					    <span className="icon-bar"></span>
					    <span className="icon-bar"></span>
					    <span className="icon-bar"></span>
				    </button>
				    <a className="navbar-brand" href="#">
				    	<img alt={GLOBALS.CUSTOMS.BloggerFirstName} src="" />
				    </a>
			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			    	<ul className="nav navbar-nav">
				        <li><a href="#">Home <span className="sr-only">(current)</span></a></li>
				        <li className="active"><a href="#">Blog</a></li>
				    </ul>
			    </div>

			</nav>
		);
	}
}

(function(){
	var info = [
		{"title": "title1","id":"#test1"},
		{"title": "title2","id":"#test2"},
		];
	render(<App articles={info} />, document.getElementById('app'));
})();

