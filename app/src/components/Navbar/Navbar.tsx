import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="h-[10vh] bg-black">
      <div className="container">
        <h1 className="logo">{`namespace Dot.Dager;`}</h1>
      </div>
    </nav>
  );
};

export default Navbar;
