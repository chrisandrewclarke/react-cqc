var React = require("react");
var Home = require("./Home");

var HomeContainer = React.createClass({

    render: function() {
        var routeName = "page--" + this.props.location.pathname.split("/")[1];
        return (
            <div className={routeName}>
                <Home
                    children={this.props.children}/>
            </div>
        );
    }
});

module.exports = HomeContainer;
