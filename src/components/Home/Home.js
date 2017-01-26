var React = require("react");
var Link = require("react-router").Link;
var Options = require("../Options/Options");

var Home = React.createClass({

    hideMenuItemStyle: function() {
        return {
            display: "none"
        };
    },

    render: function() {
        return (
            <div>
                <header className="application-header">
                    <nav role="navigation" className="navbar navbar-fixed-top navbar-inverse">
                        <div className="pull-left">
                          <img src="http://i.imgur.com/RCY2Ymp.png" className="cqc-nav-logo-small"></img>
                        </div>
                        <div className="navbar-header">
                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mainMenuCollapse" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button>

                        </div>
                        <div className="collapse navbar-collapse pull-right" id="mainMenuCollapse">
                            <ul id="search-navbar" className="nav navbar-nav">
                                <li>
                                    <Link aria-expanded="false" aria-haspopup="true" role="button" to="/" className="active--content-items">Temp Link</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <Options children={this.props.children}/>
            </div>
        );
    }
});

module.exports = Home;
