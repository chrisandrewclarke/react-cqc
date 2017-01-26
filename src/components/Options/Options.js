var React = require("react");
var Link = require("react-router").Link;

var Options = React.createClass({

    render: function() {
        return (
          <div className="page-header col-lg-6 col-lg-push-3 text-center">
            <h1>Welcome to CQC!</h1>
            <h4>Please select an option below</h4>
          </div>
        );
    }
});

module.exports = Options;
