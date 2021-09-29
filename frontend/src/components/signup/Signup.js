import { Component } from "react";
import { Link } from "react-router-dom";
import { 
    Container,
    Button,
    Row,
    Col,
    Form,
    FormControl
} from "react-bootstrap";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    };

    onSingupClick = () => {
        const userData = {
            username: this.state.username,
            password: this.state.password
        };
        console.log("Sign up " + userData.username + " " + userData.password);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md="4">
                        <h1>Signup</h1>
                        <Form>

                            <Form.Group controlld="usernameId">
                                <Form.Label>User name</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="username"
                                    placeholder="Enter user name"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                                <FormControl.Feedback type="invalid"></FormControl.Feedback>
                            </Form.Group>

                            <Form.Group controlld="passwordId">
                                <Form.Label>Your password</Form.Label>
                                <Form.Control 
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                                <FormControl.Feedback type="invalid"></FormControl.Feedback>
                            </Form.Group> 

                        </Form>
                        <Button className="mt-3"
                            color="primary"
                            onClick={this.onSingupClick}
                        >Sign up</Button>
                        <p className="mt-5">
                            Already have account? <Link to="/login">Login</Link>  
                        </p>                      
                    </Col>
                </Row>                    
            </Container>            
        )
    }
}

export default Signup;