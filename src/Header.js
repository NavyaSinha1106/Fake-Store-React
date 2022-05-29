import { HeaderContext } from "./App";
import Heading from "./Heading";
import NavContent from "./NavContent";

function Header(props) {
  const Navitem = [
    "Electronics",
    "Jewelery",
    "Men's Clothing",
    "Women's Clothing",
  ];

  return (
    <>
      <HeaderContext.Consumer>
        {(value) => (
          <div className="Header">
            <div className="Title">
              <Heading click={value}>BigMart</Heading>
            </div>
            <div className="SearchBar"><input type="text" placeholder="Category &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &#x1F50E;"></input></div>
            <div className="Contents">
              <NavContent click={value} contents={Navitem}></NavContent>
              <div
                onClick={() => {
                  props.add();
                }}
                className="cartLogo"
              >
                <p>&#128722;</p><sup>{props.count}</sup>
              </div>
            </div>
          </div>
        )}
      </HeaderContext.Consumer>
    </>
  );
  console.log(props.count)
}

export default Header;
