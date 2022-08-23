import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import UserInfoDrop from "./UserInfoDrop";
import "./Header.css";

import Cart from "./Cart";
export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" expand="md">
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar className="Nav">
            <Nav className="m-auto" navbar>
              <Row className="mt-4 mb-5 p-4">
                <Col>
                  <NavItem>
                    <UserInfoDrop></UserInfoDrop>
                  </NavItem>
                </Col>
                <Col>
                  <NavLink>
                    <Link
                      style={{ textDecoration: "none", color: "#009393" }}
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                  </NavLink>
                </Col>

                <Col>
                  <NavLink>
                    <Link
                      style={{ textDecoration: "none", color: "#009393" }}
                      to="/categoryManagement"
                    >
                      CategoryManagement
                    </Link>
                  </NavLink>
                </Col>
                <Col>
                  <NavLink>
                    <Link
                      style={{ textDecoration: "none", color: "#009393" }}
                      to="/productManagement"
                    >
                      ProductManagement
                    </Link>
                  </NavLink>
                </Col>
                <Col>
                  <NavLink>
                    <Link
                      style={{ textDecoration: "none", color: "#009393" }}
                      to="/products"
                    >
                      Products
                    </Link>
                  </NavLink>
                </Col>

                <Col>
                  <Cart></Cart>
                </Col>
              </Row>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
{
  /*        
            <Link to="/CategoryManagement">CategoryManagement</Link>
            <Link to="/ProductManagement">ProductManagement</Link>
            <Link to="/Products">Products</Link>
            <Link to="/ShoppingCart">ShoppingCart</Link> */
}
