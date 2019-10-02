import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish !== null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    formatDate(dateString) {
        if (dateString) {
            const date = new Date(Date.parse(dateString));
            return new Intl.DateTimeFormat('en-US',
                { year: 'numeric', month: 'short', day: '2-digit' }
            ).format(date);
        }
        return ``;
    }

    renderComments(comments) {
        if (comments && comments.length > 0) {
            const commentsJsx = comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {this.formatDate(comment.date)}</p>
                    </li>
                );
            });

            return (
                <div>
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

    render() {
        const dish = this.props.dish;
        if (dish) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(dish.comments)}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;