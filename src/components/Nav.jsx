import React from "react";
import { Link } from "react-router";

const Nav = () => {
  return (
    <nav>
      <div className="container p-5">
        <ul className="flex flex-col gap-5">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            {" "}
            <Link to="/signUp">signUp</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
