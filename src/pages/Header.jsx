import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {

    const counter = useSelector((state)=>state.cart.cnt)

    return (
        <div className="header_bg mb-3 py-3 shadow-sm">
            <Container>
                <Row>
                    <Col>
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                            <div>
                                <h2>
                                    <Link to="/" className="logo-link">
                                        LOGO
                                    </Link>
                                </h2>
                            </div>

                            <div>
                                <h2>
                                    <Link to="/cart" className="">
                                        CART 🛒<sup>{counter}</sup>
                                    </Link>
                                </h2>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;
