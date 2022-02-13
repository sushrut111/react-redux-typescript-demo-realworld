import React from "react";
import { LOGIN, LOGOUT, REQUEST_LOGIN, REQUEST_LOGOUT, UPDATE_LOGIN_FIELD } from "../constants/actionTypes";
import { connect } from "react-redux";
import { Auth } from '../apis/apis';
import { Button, InputGroup, FormControl, Container, Row, Col } from "react-bootstrap";

const mapStateToProps = (state: any) => {
    return {
        ...state.Login,
        common: state.common
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onEmailChange:(e: any) => dispatch({type: UPDATE_LOGIN_FIELD, key: 'email', value: e.target.value}),
        onPasswordChange: (e: any) => dispatch({type: UPDATE_LOGIN_FIELD, key: 'password', value: e.target.value}),
        onSubmit: (email: string, password: string) => dispatch({type: REQUEST_LOGIN, payload: {email, password}}),
        onLogout: () => dispatch({type: REQUEST_LOGOUT})
    }
}

class Login extends React.Component<any, any>{
    
    constructor(props: any){
        super(props);
        
        if(props.location.pathname === "/auth/logout"){
            this.props.onLogout();
        }
    }

    submitLogin = () => {
        this.props.onSubmit(this.props.email, this.props.password);
    }
    render = (): React.ReactNode => {
        return <Container >
                <Row>
                    <Col md={{span:4, offset: 4 }}>
                    <FormControl value={this.props.email} onChange={this.props.onEmailChange} placeholder="Username"/>
                    </Col>
                </Row>
                <Row>
                <Col md={{span:4, offset: 4 }}>
                <FormControl value={this.props.password} onChange={this.props.onPasswordChange} placeholder="password" type="password"/>
                </Col>
                </Row>
                <Row>
                <Col md={{span:4, offset: 4 }}>
                <Button onClick={this.submitLogin} variant="primary">Login</Button>
                </Col>
                </Row>

        </Container>
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);