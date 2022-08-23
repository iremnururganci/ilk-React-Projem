import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";
export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle
          nav
          caret
          style={{ textDecoration: "none", color: "#009393" }}
        >
          Your Cart
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem divider />
          <DropdownItem>
            <Link to="/ShoppingCart">Go To Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  renderEmptyCart() {
    return (
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    );
  }
  render() {
    return <div>{3 > 2 ? this.renderSummary() : ""}</div>;
  }
}
