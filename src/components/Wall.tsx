import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { REQUEST_ARTICLES } from "../constants/actionTypes";
import Post from "../types/Post";
import ArticlePreview from "./ArticlePreview";
import TagsViewer from "./TagsViewer";

const mapDispatchToProps = (dispatch: any) => {
  return {
    pageLoaded: () =>
      dispatch({ type: REQUEST_ARTICLES, payload: { page: 0 } }),
  };
};

const mapStateToProps = (state: any) => {
  return {
    ...state.Wall,
  };
};

interface IStateProps {
  articles: Post[]
}

interface IDispatchProps {
  pageLoaded : () => void
}

const connector = connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps);

type IProps = IStateProps & IDispatchProps;

class Wall extends React.Component<IProps, any> {
  componentDidMount() {
    this.props.pageLoaded();
  }
  render(): React.ReactNode {
    return (
      <Container fluid>
        <Row>
          <Col>
            {this.props.articles?.map((el: any, ind: number) => {
              return (
                <div key={ind}>
                  <ArticlePreview
                    title={el.title}
                    tagList={el.tagList}
                    description={el.description}
                    author={el.author.username}
                    createdAt={el.createdAt}
                    key={ind}
                  />
                  <br />
                </div>
              );
            })}
          </Col>
          <Col md={3}>
            <TagsViewer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connector(Wall);
