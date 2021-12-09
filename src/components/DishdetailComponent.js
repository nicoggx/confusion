import React, { Component } from 'react'
import {Card, CardBody, CardImg, CardText, CardTitle, List } from 'reactstrap'

function RenderComments({comment}) {
    return(
        <List  type="unstyled">
            <li>{comment.description}</li>
            <li>-- {comment.author}, {comment.date}</li>
        </List>
    )
}

function RenderDish({dish}) {
    return(
        <Card>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}

const DishDetail = (props) => {

    this.state = {
        comments: [
            {
                id:0,
                description: "Excelente",
                author: "Jhon Lemon",
                date: "Oct 17, 2012",
            },
            {
                id:1,
                description: "Excelente",
                author: "Jhon Lemon",
                date: "Oct 17, 2012",
            },
            {
                id:2,
                description: "Excelente",
                author: "Jhon Lemon",
                date: "Oct 17, 2012",
            },
            {
                id:3,
                description: "Excelente",
                author: "Jhon Lemon",
                date: "Oct 17, 2012",
            },
            {
                id:4,
                description: "Excelente",
                author: "Jhon Lemon",
                date: "Oct 17, 2012",
            },
            {
                id:5,
                description: "Excelente",
                author: "Jhon Lemon",
                date: "Oct 17, 2012",
            },
            {
                id:6,
                description: "Excelente",
                author: "Jhon Lemon",
                date: "Oct 17, 2012",
            }
        ]
    }
    

    const dish = this.props.dish;
    const comments = this.state.comments.map((comment) => {
        return(
            <div key={comment.id} className="container">
                <RenderComments comment={comment} />
            </div>
        )
    })
    if(dish){
        return(
            <div className="row">
                <div className="col-12 col-md-5 mt-1">
                    <RenderDish dish={dish} />
                </div>
                <div className="col-12 col-md-5 mt-1">
                    <h2>Comments</h2>
                    <div>
                        {comments}
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }

}

export default DishDetail;