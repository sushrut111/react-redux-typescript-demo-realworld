import React from "react";
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { connect } from "react-redux";
import { CREATE_ARTICLE, EDITOR_OPENED, POST_CREATE_REQUEST_SENT, UPDATE_EDITOR_FIELD } from "../constants/actionTypes";
import Post from "../types/Post";
import { Articles } from "../apis/apis";
import Status from "../types/status";
const mapDispatchToProps = (dispatch: any) => ({
    updateField: (fieldname: string) => (e: any) => {
        if(fieldname === "tags"){
            let tgs = e.target.value.split(',');
            dispatch({type: UPDATE_EDITOR_FIELD, key: fieldname, value: tgs})
        } else {
            dispatch({type: UPDATE_EDITOR_FIELD, key: fieldname, value: e.target.value})
        }
    },
    createPost: (payload: Post) => dispatch({type: CREATE_ARTICLE, payload}),
    editorOpened: () => dispatch({type: EDITOR_OPENED})
})

const mapStateToProps = (state: any) => ({
    ...state.Editor
})

class Editor extends React.Component<any, any> {
    getParsedTags = (tags: Array<string>) => {
        return tags?.join(',');
    }

    componentDidMount(){
        this.props.editorOpened();
    }

    componentDidUpdate(prevProps: any) {
        if(prevProps.status === Status.IN_PROGRESS && this.props.status === Status.COMPLETED){
            window.location.href = "/";
        }
    }

    submitPost = () => {
        let post: Post = {
            title: this.props.title,
            description: this.props.description,
            body: this.props.body,
            tagList: this.props.tags
        }

        this.props.createPost(post);

    }

    render(): React.ReactNode {
        return <Container>
            <Form>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control value={this.props.title} onChange={this.props.updateField('title')}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>description</Form.Label>
                <Form.Control value={this.props.description} onChange={this.props.updateField('description')}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Body</Form.Label>
                <Form.Control value={this.props.body} onChange={this.props.updateField('body')} as="textarea"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>tags</Form.Label>
                <Form.Control value={this.getParsedTags(this.props.tags)} onChange={this.props.updateField('tags')} placeholder="Add comma separated tags"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Button onClick={this.submitPost}>Submit</Button>
            </Form.Group>
        </Form>
        </Container>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);