import DeleteButton from './DeleteButton.js';

const ListItem = (props) => (
  <li>
    {props.children}
    <DeleteButton deleteIndex={props.deleteIndex} onDelete={props.onDelete} />
  </li>
);

export default ListItem;
