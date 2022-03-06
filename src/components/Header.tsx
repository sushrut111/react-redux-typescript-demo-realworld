import React from "react";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  return {
    ...state.Common,
  };
};

interface IProps {
  user: string
}

const connector = connect<IProps>(mapStateToProps);

class Header extends React.Component<IProps, any> {
  render(): React.ReactNode {
    return (
      <Navbar>
        <Container>
          <Navbar.Brand href="/">M E D I U M C L O N E</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            {this.props.user ? (
              <>
                <Nav.Link href="/create">Create Post</Nav.Link>
                <Navbar.Text>
                  Signed in as: {this.props.user}{" "}
                  <a href="/auth/logout"> Logout</a>
                </Navbar.Text>
              </>
            ) : (
              <a href="/auth">Login/SignUp</a>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default connector(Header);
