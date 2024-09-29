import Footer from "../footer/Footer";
import "./Header.css";
function Header() {
  // props is just a name, instred this method we can also use function Header({data}) we can destructure it directly and use it
  // console.log(props);
  
  return (
    
    <div className="header">
      <h1>This is header</h1>
      {/* <p>{props.data}</p> */}
    </div>
  );
}
export default Header;
