import ListItem from './ListItem.js';

const List = (props) => {
  return (
    <ul>
      {props.features.map((feature, index) => (
        <ListItem key={index} deleteIndex={index} onDelete={props.onDelete}>
          {feature}
        </ListItem>
      ))}
    </ul>
  );
};

export default List;
