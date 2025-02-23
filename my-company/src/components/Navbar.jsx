import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#333",  // Dark background
        display: "flex",          // Flexbox for layout
        justifyContent: "space-between", // Space items evenly
        padding: "10px",          // Add padding
        alignItems: "center"       // Align items vertically
      }}
    >
      <h1 style={{ color: "white" }}>My Company</h1>
      <div>
        <Link to="/" style={{ color: "white", margin: "0 10px" }}>Home</Link>
        <Link to="/about" style={{ color: "white", margin: "0 10px" }}>About</Link>
        <Link to="/services" style={{ color: "white", margin: "0 10px" }}>Services</Link>
        <Link to="/contact" style={{ color: "white", margin: "0 10px" }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
