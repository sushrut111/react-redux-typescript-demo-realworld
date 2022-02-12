import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Articles } from "../apis/apis";
import { WALL_LOADED } from "../constants/actionTypes";
import ArticlePreview from "./ArticlePreview";
import TagsViewer from "./TagsViewer";

const mapDispatchToProps = (dispatch: any) => {
    return {
        pageLoaded: () => dispatch({type: WALL_LOADED, payload: Articles.all(0)})
    }
}

const mapStateToProps = (state: any) => {
    return {
        ...state.Wall
    }
}

class Wall extends React.Component<any, any>{
    componentDidMount(){
        this.props.pageLoaded();
    }
    render(): React.ReactNode {
        return <Container fluid>
            <Row>
                <Col>
                {
                this.props.articles?.map((el: any, ind: number) => {
                    return <div key={ind}><ArticlePreview
                        title={el.title}
                        tagList={el.tagList}
                        description={el.description}
                        author={el.author.username}
                        createdAt={el.createdAt}
                        key={ind}
                    /><br/></div>
                })
            }
                </Col>
                <Col md={3}>
                    <TagsViewer/>
                </Col>
            </Row>
        </Container>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wall);

