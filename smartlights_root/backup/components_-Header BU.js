
const Header = ({ display, background }) => {
  return ( <>
    <h1 style={{
      width: "10rem",
      height: "10rem",
      background: { background },
      display: { display }
    }}></h1>
  </> );
}
 
export default Header;