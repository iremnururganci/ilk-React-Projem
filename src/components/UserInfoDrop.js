import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { logout } from "../Actions/authActions";

const UserInfoDrop = ({ direction, ...args }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logout());
  };
  return (
    <div className="d-flex">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "#016170",
          }}
          caret
        >
          {localStorage.getItem("userName")}
        </DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem>
            <Link to="/" onClick={() => logOut()}>
              çıkış yap
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default UserInfoDrop;
