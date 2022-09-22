import DeleteButton from './DeleteButton.js';

var ListItem = function ListItem(props) {
  return React.createElement("li", null, props.children, React.createElement(DeleteButton, {
    deleteIndex: props.deleteIndex,
    onDelete: props.onDelete
  }));
};

export default ListItem;
//# sourceMappingURL=ListItem.js.map