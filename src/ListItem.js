function ListItem(props) {
  return (
    <li onClick={() => {props.click(`category/${props.value}`.toLowerCase());}}>{props.value} </li>
  );
}

export default ListItem;
