import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useSignOut } from "react-firebase-hooks/auth";
import { NavLink, Link } from "react-router-dom";
import { auth } from "../../firebase.config";
import { AuthContext } from "../../store";
const MainHeader = () => {
  const [signOut] = useSignOut(auth);
  const { logout, currentUser } = useContext(AuthContext);
  const handleLogout = async () => {
    await signOut();
    logout();
  };
  return (
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
      <Container>
        <Link className="navbar-brand fw-bold" to="/home">
          Postify
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/home" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            {currentUser && (
              <NavLink
                to="/posts"
                className="nav-link"
                activeClassName="active"
              >
                Posts
              </NavLink>
            )}
            {!currentUser && (
              <>
                <NavLink
                  to="/login"
                  className="nav-link"
                  activeClassName="active"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/sign-up"
                  className="nav-link"
                  activeClassName="active"
                >
                  Sign Up
                </NavLink>
              </>
            )}
            {currentUser && <Nav.Link onClick={handleLogout}>Logout</Nav.Link>}
          </Nav>
          <Nav>
            <Navbar.Text className="text-white">
              {currentUser?.displayName}
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainHeader;
