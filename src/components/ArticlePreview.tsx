import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

export default class ArticlePreview extends React.Component<any, any> {
  render(): React.ReactNode {
    return (
      <Card className="text-center">
        <Card.Header>
          {this.props.tagList?.map((tag: string, ind: number) => {
            return (
              <Badge pill bg="primary" key={ind}>
                {tag}
              </Badge>
            );
          })}
        </Card.Header>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Button variant="primary">View post</Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          Created at {this.props.createdAt} By {this.props.author}
        </Card.Footer>
      </Card>
    );
  }
}
