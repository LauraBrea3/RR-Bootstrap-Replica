import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export default function TopBar() {
    const navStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: '40px',
      paddingRight: '40px',
      paddingTop: '24px',
      paddingBottom: '24px',
      alignItems: 'center',
      maxHeight: '80px',
      boxSizing: 'border-box',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #E8E9EB'
    }
  return (
    <div>
      <Navbar style={navStyle} bg="light" expand="lg">
        <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
          <img alt="instacart logo"src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" />{" "}
        </Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav
            style={{
              padding: "24px 40px 20px 40px",
              fontSize: "18px",
              lineHeight: "26px",
              fontWeight: "bolder",
              display: "flex",
            }}
          >
            <Nav.Link style={{ color: "#343538" }} href="#LogIn">
              Log In
            </Nav.Link>
            <Button variant="success" style={{ fontSize: "18px" }}>
              Sign Up
            </Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
