import React from "react";
import { Badge, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { REQUEST_TAGS } from "../constants/actionTypes";

const mapStateToProps = (state: any) => ({ ...state.Tags });
const mapDispatchToProps = (dispatch: any) => ({
  onLoad: () => dispatch({ type: REQUEST_TAGS }),
});

interface IStateProps {
  tags: string[]
}

interface IDispatchProps {
  onLoad: () => void
}

const connector = connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps);

type IProps = IStateProps & IDispatchProps;

class TagsViewer extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
    this.props.onLoad();
  }
  render(): React.ReactNode {
    return (
      <Container>
        {this.props.tags?.map((tag: string, ind: number) => (
          <Badge pill key={ind}>
            {tag}
          </Badge>
        ))}
        {/* {JSON.stringify(this.props.tags)} */}
      </Container>
    );
  }
}

export default connector(TagsViewer);
