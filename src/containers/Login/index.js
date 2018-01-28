"use strict";
exports.__esModule = true;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Hello = function () { return (React.createElement("div", null,
    React.createElement("h2", null, "say hello"))); };
var Login = function (_a) {
    var match = _a.match;
    return (React.createElement("div", null,
        React.createElement("h3", null, " 123123123 "),
        React.createElement(react_router_dom_1.Link, { to: match.url + "/test" }, " click to test"),
        React.createElement(react_router_dom_1.Route, { path: match.url + "/test", component: Hello })));
};
exports["default"] = Login;
