import React from "react";
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Header from "./Header";
import Wall from "./Wall";
import Editor from "./Editor";
import { setToken, Auth } from "../apis/apis";
import { APP_LOADED, REQUEST_USER } from "../constants/actionTypes";
import { connect } from "react-redux";
import ErrorViewer from "./ErrorViewer";

const mapStateToProps = (state: any) => {
    return {
        ...state.Common
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        onLoad: () => dispatch({type: REQUEST_USER})
    }
}
class App extends React.Component<any, any>{

    constructor(props: any){
        super(props);
        let token = window.localStorage.getItem('jwt');
        if(token){
            setToken(token);
        }
        this.props.onLoad();

    }

    render(): React.ReactNode {
        return <>
            <Header/>
            <Switch>
                <Route path="/auth" component={Login}></Route>
                <Route path="/auth/logout" component={Login}></Route>
                <Route path="/create" component={Editor}></Route>
                <Route path="/" component={Wall}></Route>
            </Switch>
            <ErrorViewer/>
        </>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);