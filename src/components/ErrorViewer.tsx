import React from "react";
import { ToastContainer, Toast } from "react-bootstrap";
import { connect } from "react-redux";
import { DISMISS_NOTIFICATION } from "../constants/actionTypes";

const mapStateToProps = (state: any) => {
  return {
    ...state.Common,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    hideError: () => dispatch({ type: DISMISS_NOTIFICATION }),
  };
};

interface IStateProps {
  notification: { message: string, type: string },
  hideError: boolean
}

interface IDispatchProps {
  hideError : () => void
}

const connector = connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps);

type IProps = IStateProps & IDispatchProps;

class ErrorContainer extends React.Component<IProps, any> {
  getErrorBody(errors: any) {
    return JSON.stringify(errors);
  }
  shouldShowError() {
    if (this.props.notification) return true;
    return false;
  }
  render(): React.ReactNode {
    return (
      <ToastContainer className="p-3" position={"bottom-end"}>
        <Toast
          show={this.shouldShowError()}
          delay={3000}
          autohide
          onClose={this.props.hideError}
        >
          <Toast.Header>
            <strong className="me-auto">
              {this.props.notification?.type === "success"
                ? "Successful operation"
                : "Error occurred!"}
            </strong>
          </Toast.Header>
          <Toast.Body>
            {this.getErrorBody(this.props.notification?.message)}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    );
  }
}

export default connector(ErrorContainer);
