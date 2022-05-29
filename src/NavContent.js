import ListItem from "./ListItem";

function NavContent(props) {
  const contents = props.contents;
  const ListItems = contents.map((content) => (
    <ListItem click = {props.click} key={content.toString()} value={content} />
  ));
  return <ul>{ListItems}</ul>;
}
export default NavContent;
