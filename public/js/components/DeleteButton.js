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

export default DeleteButton;
//# sourceMappingURL=DeleteButton.js.map