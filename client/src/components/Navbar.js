import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useLocation } from "react-router-dom";
import React from "react";

function Navigate() {
  let location = useLocation();
  React.useEffect(() => {
    // console.log("pageview", location.pathname);
  }, [location]);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/home">
            Notepad
          </Navbar.Brand>
          <Nav className="me-auto">
            {/*   1. `<Nav.Link>`: This is a component from React Bootstrap's library (`react-bootstrap`). It's typically used to create a navigation link in a navigation bar.
                  2. `as={NavLink}`: This part utilizes the `as` prop provided by React Bootstrap's `Nav.Link`. It allows you to render the `Nav.Link` component as another component, in this case, a `NavLink` from `react-router-dom`. This is done to integrate the navigation functionality provided by `react-router-dom` with the styling and behavior of `Nav.Link`.
                  3. `to="/home"`: This prop specifies the target location to which the link should navigate. In this case, it's set to `"/home"`, indicating that clicking on this link should take the user to the "/home" route.
                  4. `isActive={() => location.pathname === "/home"}`: This prop determines whether the link is considered active or not based on the provided function. It takes a function as an argument, which returns `true` if the link should be considered active, and `false` otherwise. In this case, it checks if the `location.pathname` matches `"/home"`. If it does, the link is considered active, and if not, it's considered inactive.
                  5. `Home`: This is the text or content displayed inside the link. It's what the user sees and clicks on to navigate to the "/home" route.
                  So, in summary, this line of code creates a navigation link using `Nav.Link`, styled as a `NavLink` from `react-router-dom`. It links to the "/home" route and sets the link as active if the current `location.pathname` matches "/home". 
            */}
            <Nav.Link
              as={NavLink}
              to="/home"
              isActive={() => location.pathname === "/home"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              isActive={() => location.pathname === "/about"}
            >
              About
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Nav>
              <Nav.Link>
                <Button variant="primary" as={NavLink} to="/login">
                  Login
                </Button>
              </Nav.Link>
              <Nav.Link>
                <Button variant="primary" as={NavLink} to="/register">
                  Register
                </Button>
              </Nav.Link>
            </Nav>
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigate;
