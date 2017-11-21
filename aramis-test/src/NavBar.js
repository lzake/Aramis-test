import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    Modal,
    ModalBody
} from 'reactstrap';

export default class NavBar extends React.Component {

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
            <div className="sticky-top">
                <style>
                    @import url( 'https://fonts.googleapis.com/css?family=Lobster');
                </style>
                <Navbar
                    color="faded"
                    light
                    expand="md"
                    className="navbar pl-5 bg-gray p-3 minny text-nowrap navbar-light navvie">
                    <NavbarBrand href="/">
                        <img
                            src={require('./images/logo.png')}
                            className="img-responsive desktop-only"
                            alt=""/>
                        <img
                            src={require('./images/smallLogo.png')}
                            className="img-responsive mobile-only smallLogo"
                            alt=""/>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className="mt-3 pull-right border-white"/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto float-right" navbar>

                            <NavItem className="pull-right">
                                <Button
                                    className="btn-sm btn-light btn-outline-secondary mr-2 mt-2 p-3 btn-round h2 whiteoutline"
                                    onClick={this.toggleModal}>
                                    Login / Sign-up
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
                                                                                name="userName"
                                                                                className="form-control"
                                                                                placeholder="Email"
                                                                                type="email"
                                                                                minlength="6"
                                                                                maxLength="20"
                                                                                required/>
                                                                            <input
                                                                                name="password"
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

                                </Button>
                            </NavItem>

                            <NavItem className="pull-right">
                                <Button
                                    className="btn-sm btn-light btn-outline-secondary mr-2 mt-2 p-3 btn-round"
                                    href="/components/">
                                    Manage 'To do' list
                                </Button>
                            </NavItem>
                            <NavItem className="desktop-only  pr-5">&nbsp;</NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}