import React from 'react';
import {
    Button,
    Card,
    CardTitle,
    CardText,
    Col,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import './App.css';

//bring in from API, set to array test array
var title = ["My Day is Okay", "Thursdays are Cool", "I enjoy tacos"];
var description = [
    "Change will not come if we wait for some other person or some other time. We are" +
            " the ones we've been waiting for. We are the change that we seek.",
    "If you're walking down the right path and you're willing to keep walking, eventu" +
            "ally you'll make progress.",
    "There's not a liberal America and a conservative America - there's the United St" +
            "ates of America.s"
]

//inpurt with {this.props.value}

export default class ToDo extends React.Component {
    render() {

        var elements = [];
        for (var i = 0; i < title.length; i++) {
            // push the component to elements!
            elements.push(
                <div>
                    <Card body>
                        <CardTitle color="info">{title[i]}</CardTitle>
                        <CardText>{description[i]}</CardText>
                        <Button color="danger" className="smallWidth btn-round-lg btn-lg px-4">Delete!</Button>
                    </Card>

                </div>
            );

        }
        /* the for loop above is essentially the same as
        elements = title.map( item => <Cardie title={ item } /> );
        The result is an array of four Card components. */
        return (
            <div>
                <div className="container maxWidth mt-5">

                    <Form className="bg-info text-white">
                    <h1 className="display-3 text-white">Add a task:</h1>
                        <FormGroup row className="maxWidth mt-5 bg-info text-white">
                            <Label for="newtitle" sm={2} className="h4">Title</Label>
                            <Col sm={10}>
                                <Input
                                    type="text"
                                    name="newtitle"
                                    id="newtitle"
                                    placeholder="What do you want to call this list item"/>
                            </Col>
                        </FormGroup>

                        <FormGroup row className="maxWidth mt-5 bg-info text-white">
                            <Label for="newdescription" sm={2} className="h4">Description</Label>
                            <Col sm={10}>
                                <Input
                                    type="textarea"
                                    name="newdescription"
                                    id="newdescription"
                                    placeholder="Tell me all about it 🙄"/>
                            </Col>
                        </FormGroup>

                        <FormGroup check row className="maxWidth mt-5 bg-info text-white">
                            
                                <Button className="btn-round-lg btn-lg px-4 btn-secondary whiteBG pull-left">Add item to list</Button>
         
                        </FormGroup>
                    </Form>
                </div>

                <div className="container maxWidth mt-5">
                    <h1 className="display-3 bg-info text-white">Todo list:</h1>
                    {elements}
                </div>
            </div>
        );
    };

}