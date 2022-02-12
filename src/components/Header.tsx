import React from "react";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
    return {
      ...state.Common
    }
}

class Header extends React.Component<any, any>{
    render(): React.ReactNode {
        return <Navbar>
        <Container>
          <Navbar.Brand href="/">M E D I U M    C L O N E</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          
            {this.props.user?<><Nav.Link href="/create">Create Post</Nav.Link><Navbar.Text>
              Signed in as: <a href="/login">{this.props.user}</a>
            </Navbar.Text></>:<a href="login">Login/SignUp</a>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    }
}

export default connect(mapStateToProps, null)(Header);
