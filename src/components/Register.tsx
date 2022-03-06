import React from "react";
import {
  Container,
  Row,
  Col,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import { connect } from "react-redux";
import { ErrorNotification } from "../actions/common";
import {
  ERROR_NOTIFICATION,
  REQUEST_REGISTRATION,
  UPDATE_REGISTER_FIELD,
} from "../constants/actionTypes";
import Registration from "../types/Registration";

const mapDispatchToProps = (dispatch: any) => {
  return {
    onFieldChange: (field: string) => (e: any) =>
      dispatch({
        type: UPDATE_REGISTER_FIELD,
        key: field,
        value: e.target.value,
      }),
    raiseError: (message: string) => dispatch(ErrorNotification(message)),
    registerUser: (user: Registration) =>
      dispatch({ type: REQUEST_REGISTRATION, payload: user }),
  };
};

const mapStateToProps = (state: any) => ({ ...state.Register });

class Register extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log(props);
  }
  submitRegister = () => {
    console.log(this.props);
    if (this.props.password !== this.props.repassword) {
      this.props.raiseError("Passwords do not match!");
      return;
    }
    let registration: Registration = {
      email: this.props.email,
      password: this.props.password,
      username: this.props.username,
    };
    this.props.registerUser(registration);
  };
  render = (): React.ReactNode => {
    return (
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Form.Label>Email</Form.Label>

            <FormControl
              value={this.props.email}
              onChange={this.props.onFieldChange("email")}
              placeholder="Email"
              type="email"
            />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Form.Label>Username</Form.Label>

            <FormControl
              value={this.props.username}
              onChange={this.props.onFieldChange("username")}
              placeholder="Username"
              type="text"
            />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Form.Label>Password</Form.Label>
            <FormControl
              value={this.props.password}
              onChange={this.props.onFieldChange("password")}
              placeholder="password"
              type="password"
            />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Form.Label>Re-enter password</Form.Label>

            <FormControl
              value={this.props.repassword}
              onChange={this.props.onFieldChange("repassword")}
              placeholder="Confirm password"
              type="password"
            />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Button onClick={this.submitRegister} variant="primary">
              Register
            </Button>
          </Col>
        </Row>
      </Container>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
