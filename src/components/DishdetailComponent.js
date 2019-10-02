import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
    if (dish !== null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

function RenderComments({ comments }) {
    if (comments && comments.length > 0) {
        const formatDate = (dateString) => {
            if (dateString) {
                const date = new Date(Date.parse(dateString));
                return new Intl.DateTimeFormat('en-US',
                    { year: 'numeric', month: 'short', day: '2-digit' }
                ).format(date);
            }
            return '';
        };

        const commentsJsx = comments.map((comment) => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} , {formatDate(comment.date)}</p>
                </li>
            );
        });

        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentsJsx}
                </ul>
            </div>
        );

    } else {
        return (
            <div></div>
        );
    }
}

const DishDetail = ({ dish }) => {
    if (dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={dish} />
                    <RenderComments comments={dish.comments} />
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default DishDetail;