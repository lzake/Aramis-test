import React from 'react';
import PropTypes from 'prop-types';
import {
    Jumbotron,
    NavLink,
    Button,
    Modal,
    ModalBody
} from 'reactstrap';
export default class Body extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this
            .toggle
            .bind(this);
        this.toggleModal = this
            .toggleModal
            .bind(this);
        this.state = {
            isOpen: false,
            modal: false,
            cardStyle: 'card'
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    toggleModal() {
        this.setState({
            modal: !this.state.modal
        });
    }

    flipper1 = (e) => {
        e.preventDefault();
        this.setState({cardStyle: 'card flipped'})
    }

    flipper2 = (e) => {
        e.preventDefault();
        this.setState({cardStyle: 'card'})
    }

    render() {
        return (
            <div ClassName="splash">
                <Jumbotron className="jumbo mb-0 rounded-0">
                    <style>
                        @import url( 'https://fonts.googleapis.com/css?family=Abril+Fatface');
                    </style>
                    <div className="row">
                        <div className="col-s-12 col-md-5 px-md-6 "><br/><br/>
                            <h4 className="display-8 text-white frontlog">Time to get started!</h4><br/>
                            <h6 className="lead text-white frontlog">Be the best
                                <em>
                                    <strong>You </strong>
                                </em>can be.. today!</h6>
                            <hr className="my-2"/>
                            <p></p>
                            <p className="lead">
                                <Button className="btn btn-primary btn-round-lg btn-lg text-white mt-5 p-0.5" color="primary">
                                    <NavLink onClick={this.toggleModal} href="#" className="bodyButton h4">Make your list now!
                                        <Modal
                                            isOpen={this.state.modal}
                                            toggle={this.toggleModal}
                                            className={this.props.className}>

                                            <ModalBody>
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col">
                                                            <div className="flip">
                                                                <div className={this.state.cardStyle}>
                                                                    <div className="face front">
                                                                        <div className="panel panel-default">
                                                                            <form className="form-horizontal">

                                                                                <br/>

                                                                                <img
                                                                                    src={require('./images/logo.png')}
                                                                                    className="img-responsive desktop-only"
                                                                                    alt=""/>
                                                                                <img
                                                                                    src={require('./images/smallLogo.png')}
                                                                                    className="img-responsive mobile-only smallLogo"
                                                                                    alt=""/>
                                                                                <br/>
                                                                                <br/>

                                                                                <input
                                                                                    className="form-control"
                                                                                    placeholder="Email"
                                                                                    type="email"
                                                                                    minlength="6"
                                                                                    maxLength="20"
                                                                                    required/>
                                                                                <input
                                                                                    className="form-control"
                                                                                    placeholder="Password"
                                                                                    type="password"
                                                                                    minlength="6"
                                                                                    maxLength="20"
                                                                                    required/>
                                                                                <button className="btn btn-primary btn-block" type="submit">LOG IN</button>
                                                                                <br/><br/><br/><br/><br/><br/><br/>
                                                                                <p className="text-center">
                                                                                    <a
                                                                                        className="fliper-btn createorlog"
                                                                                        onClick={this
                                                                                        .flipper1
                                                                                        .bind(this)}>Create new account?</a>
                                                                                        <br /><br /><br /><br />
                                                                                </p>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                    <div className="face back">
                                                                        <div className="panel panel-default">
                                                                            <form className="form-horizontal" data-toggle="validator" role="form">
                                                                                <br/>
                                                                                <img
                                                                                    src={require('./images/logo.png')}
                                                                                    className="img-responsive desktop-only"
                                                                                    alt=""/>
                                                                                <img
                                                                                    src={require('./images/smallLogo.png')}
                                                                                    className="img-responsive mobile-only smallLogo"
                                                                                    alt=""/>
                                                                                <br/>
                                                                                <label>Basic Information</label>
                                                                                <input
                                                                                    name="userName"
                                                                                    className="form-control"
                                                                                    placeholder="Username"
                                                                                    minlength="6"
                                                                                    maxLength="20"
                                                                                    type="text"
                                                                                    required/>
                                                                                <input
                                                                                    className="form-control"
                                                                                    placeholder="Email"
                                                                                    type="email"
                                                                                    minlength="6"
                                                                                    maxLength="20"
                                                                                    required/>
                                                                                <input
                                                                                    name="email"
                                                                                    className="form-control"
                                                                                    placeholder="Confirm Email"
                                                                                    type="email"
                                                                                    minlength="6"
                                                                                    maxLength="20"
                                                                                    required/>
                                                                                <label>Private Information</label>
                                                                                <input
                                                                                    type="password"
                                                                                    className="form-control"
                                                                                    placeholder="Password (min 6 characters)"
                                                                                    minlength="6"
                                                                                    maxLength="20"
                                                                                    id="inputPassword"
                                                                                    required/>
                                                                                <input
                                                                                    type="password"
                                                                                    className="form-control"
                                                                                    minlength="6"
                                                                                    maxLength="20"
                                                                                    placeholder="Confirm Password"
                                                                                    data-match="#inputPassword"
                                                                                    data-match-error="Whoops, these don't match"
                                                                                    required/>
                                                                                <button className="btn btn-primary btn-block" type="submit">SIGN UP</button><br/>
                                                                                <p className="text-center">
                                                                                    <a
                                                                                        className="fliper-btn createorlog"
                                                                                        onClick={this
                                                                                        .flipper2
                                                                                        .bind(this)}>Already have an account?</a>
                                                                                </p>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ModalBody>

                                        </Modal>
                                    </NavLink>
                                </Button>
                            </p>
                        </div>
                    </div>

                </Jumbotron>
            </div>
        );
    };

}

Jumbotron.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    fluid: PropTypes.bool,
    className: PropTypes.string

}
