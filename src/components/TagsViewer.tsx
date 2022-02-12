import React from "react";
import { Badge, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Tags } from "../apis/apis";
import { REQUEST_TAGS, TAGS_SIDEBAR_LOADED } from "../constants/actionTypes";

const mapStateToProps = (state: any) => ({...state.Tags})
const mapDispatchToProps = (dispatch: any) => ({
    onLoad: () => dispatch({type: REQUEST_TAGS})
})
class TagsViewer extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.props.onLoad();
    }
    render(): React.ReactNode {
        return <Container>
            {this.props.tags?.map((tag: string, ind: number) => <Badge pill key={ind}>{tag}</Badge>)}
            {/* {JSON.stringify(this.props.tags)} */}
        </Container>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsViewer);