import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbarHome" to={"/"} style={{ margin: "10px" }}>
        Home
      </Link>
      <Link
        className="navbarLoginSignUp"
        to={"/loginsignup"}
        style={{ margin: "10px" }}
      >
        Login/Sign Up
      </Link>
    </div>
  );
};
