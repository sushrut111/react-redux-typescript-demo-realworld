import React from "react";
import {
  REQUEST_LOGIN,
  REQUEST_LOGOUT,
  UPDATE_LOGIN_FIELD,
} from "../constants/actionTypes";
import { connect } from "react-redux";
import {
  Button,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const mapStateToProps = (state: any) => {
  return {
    ...state.Login,
    common: state.common,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onEmailChange: (e: any) =>
      dispatch({
        type: UPDATE_LOGIN_FIELD,
        key: "email",
        value: e.target.value,
      }),
    onPasswordChange: (e: any) =>
      dispatch({
        type: UPDATE_LOGIN_FIELD,
        key: "password",
        value: e.target.value,
      }),
    onSubmit: (email: string, password: string) =>
      dispatch({ type: REQUEST_LOGIN, payload: { email, password } }),
    onLogout: () => dispatch({ type: REQUEST_LOGOUT }),
  };
};

interface IStateProps {
  email: string;
  password: string;
}

interface IDispatchProps {
  onEmailChange: (e: React.SyntheticEvent<EventTarget>) => void;
  onPasswordChange: (e: React.SyntheticEvent<EventTarget>) => void;
  onSubmit: (email: string, password: string) => void;
  onLogout: () => void;
}

const connector = connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
);

type IProps = IStateProps & IDispatchProps;

class Login extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);

    if (props.location.pathname === "/auth/logout") {
      this.props.onLogout();
    }
  }

  submitLogin = () => {
    this.props.onSubmit(this.props.email, this.props.password);
  };
  render = (): React.ReactNode => {
    return (
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Button variant="success" href="auth/register">
              Do not have account? Register
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <FormControl
              value={this.props.email}
              onChange={this.props.onEmailChange}
              placeholder="Username"
            />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <FormControl
              value={this.props.password}
              onChange={this.props.onPasswordChange}
              placeholder="password"
              type="password"
            />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Button onClick={this.submitLogin} variant="primary">
              Login
            </Button>
          </Col>
        </Row>
      </Container>
    );
  };
}

export default connector(Login);
