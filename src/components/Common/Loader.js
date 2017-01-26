var React = require("react");

var Loader = React.createClass({

    showLoader: "true",

    loaderStyle: function() {
        return {
            display: this.showLoader == "true" ? "inline-block" : "none"
        };
    },

    render: function() {
        this.showLoader = this.props.show != null ? this.props.show.toString() : this.showLoader;
        return (
            <div className="loadingContainer" style={this.loaderStyle()}>
                <img src="http://blog.teamtreehouse.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif" />
            </div>
        );
    }
});

module.exports = Loader;
