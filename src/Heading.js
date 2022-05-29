function Heading(props) {
  return <h1 onClick={()=> {props.click()}}>{props.children}</h1>;
}

export default Heading;
