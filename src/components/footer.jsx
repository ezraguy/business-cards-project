import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center ">
          <p className="text-muted">bCards &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
