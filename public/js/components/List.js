import ListItem from './ListItem.js';

var List = function List(props) {
  return React.createElement("ul", null, props.features.map(function (feature, index) {
    return React.createElement(ListItem, {
      key: index,
      deleteIndex: index,
      onDelete: props.onDelete
    }, feature);
  }));
};

export default List;
//# sourceMappingURL=List.js.map