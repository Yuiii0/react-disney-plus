import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [navShow, setNavShow] = useState(false);

  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavShow(true);
    } else {
      setNavShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavWrapper navShow={navShow}>
      <Logo>
        <img
          alt="Disney Plus Logo"
          src="/images/logo.svg"
          onClick={() => navigate("/")}
        ></img>
      </Logo>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${(props) => (props.navShow ? "#090b13" : "transparent")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 5;
`;
const Logo = styled.a`
  padding: 0;
  cursor: pointer;
  width: 80px;
  margin-top: 4px;
  img {
    width: 100%;
  }
`;
const Login = styled.a``;
const SearchInput = styled.input``;
const LogOut = styled.div``;
