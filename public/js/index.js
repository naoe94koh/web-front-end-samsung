"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _React = React,
    h = _React.createElement,
    Component = _React.Component,
    StrictMode = _React.StrictMode;

var Headline = function Headline(props) {
  return React.createElement("h2", null, props.children);
};

var List = function List(props) {
  return React.createElement("ul", null, props.features.map(function (feature, index) {
    return React.createElement(ListItem, {
      key: index,
      deleteIndex: index,
      onDelete: props.onDelete
    }, feature);
  }));
};

var ListItem = function ListItem(props) {
  return React.createElement("li", null, props.children, React.createElement(DeleteButton, {
    deleteIndex: props.deleteIndex,
    onDelete: props.onDelete
  }));
};

var DeleteButton = function DeleteButton(props) {
  var _props$label;

  var buttonLabel = (_props$label = props.label) !== null && _props$label !== void 0 ? _props$label : '삭제';
  return React.createElement("button", {
    type: "button",
    "aria-label": buttonLabel,
    title: buttonLabel,
    style: {
      marginLeft: '8px'
    },
    onClick: function onClick() {
      return props.onDelete(props.deleteIndex);
    }
  }, "\xD7");
};

var App = function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
      headline: 'React 라이브러리',
      features: ['선언형 프로그래밍', '가상 DOM을 사용해 UI 업데이트']
    };
    _this.deleteFeature = _this.deleteFeature.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "app"
      }, React.createElement(Headline, null, this.state.headline), React.createElement(List, {
        features: this.state.features,
        onDelete: this.deleteFeature
      }));
    }
  }, {
    key: "deleteFeature",
    value: function deleteFeature(deleteIndex) {
      this.setState({
        features: this.state.features.filter(function (feature, index) {
          return index !== deleteIndex;
        })
      });
    }
  }]);

  return App;
}(Component);

var container = document.getElementById('root');
var reactDomRoot = ReactDOM.createRoot(container);
reactDomRoot.render(React.createElement(StrictMode, null, React.createElement(App, null)));
//# sourceMappingURL=index.js.map