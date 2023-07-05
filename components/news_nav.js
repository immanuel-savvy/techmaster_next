import React from "react";

class News_nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={require("../libs/imgs/logo.svg")} alt="" />
          </a>
          <div class="socials">
            <a href="javascript:void(0)">
              <i class="ti-facebook"></i>
            </a>
            <a href="javascript:void(0)">
              <i class="ti-twitter"></i>
            </a>
            <a href="javascript:void(0)">
              <i class="ti-pinterest-alt"></i>
            </a>
            <a href="javascript:void(0)">
              <i class="ti-instagram"></i>
            </a>
            <a href="javascript:void(0)">
              <i class="ti-youtube"></i>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default News_nav;
