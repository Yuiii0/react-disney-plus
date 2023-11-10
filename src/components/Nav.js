import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  Navigate,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const Nav = () => {
  const [navShow, setNavShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const initalUser = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : {};
  const [userData, setUserData] = useState(initalUser);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const ref = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavShow(true);
    } else {
      setNavShow(false);
    }
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    navigate(`/search?q=${event.target.value}`);
  };

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserData(result.user);
        localStorage.setItem("userData", JSON.stringify(result.user));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUserData({});
        localStorage.removeItem("userData");
        navigate("/");
      })
      .catch((error) => {
        alert(error.messages);
      });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (pathname.includes("/search")) {
      ref.current.focus();
    }
  }, [pathname, searchValue]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      } else if (user && pathname === "/") {
        navigate("/main");
      }
    });
  }, [auth, navigate, pathname]);

  console.log(userData);
  console.log(userData.photoURL);

  return (
    <NavWrapper navShow={navShow}>
      <Logo>
        <img
          alt="Disney Plus Logo"
          src="/images/logo.svg"
          onClick={() => navigate("/")}
        ></img>
      </Logo>
      {pathname === "/" ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <SearchInput
            ref={ref}
            value={searchValue}
            className="nav__search"
            type="text"
            placeholder="영화를 검색해주세요."
            onChange={handleChange}
          ></SearchInput>
          <LogOut>
            <UserImg
              onClick={handleLogOut}
              src={userData.photoURL}
              alt={userData.displayName}
            />

            <DropDown>Sign Out</DropDown>
          </LogOut>
        </>
      )}
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
const Login = styled.a`
  font-weight: 500;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    font-size: 1.1rem;
  }
`;
const SearchInput = styled.input`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 582);
  border: 1px solid rgba(211, 211, 211, 0.25);
  border-radius: 5px;
  outline: none;
  color: white;
  padding: 5px 10px;
`;
const DropDown = styled.div`
  width: 140%;
  position: absolute;
  top: 55px;
  right: -10px;
  opacity: 0;
`;

const LogOut = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  cursor: pointer;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
const UserImg = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;
