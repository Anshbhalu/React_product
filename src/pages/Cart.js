import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const Cart = () => {
    const [record, setRecord] = useState([]);
    const data = useSelector((state) => state.cart.cartdata);

    useEffect(() => {
        setRecord(data);
    }, [data]);

    return (
        <Container className="my-5">
            <h2 className="text-center fw-bold mb-4">🛒 Your Shopping Cart</h2>

            {
            record.length === 0 ? (
                <div className="text-center">
                    <h4 className="text-muted">Your cart is empty!</h4>
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/102/102661.png" 
                        alt="Empty Cart"
                        className="img-fluid mt-3"
                        style={{ width: "150px", opacity: "0.7" }}
                    />
                </div>
            ) : (
                <Row>
                    {record.map((v, i) => (
                        <Col key={i} lg={6} className="mb-3">
                            <Card className="shadow-sm p-3 d-flex flex-row align-items-center">
                                <img variant="left" 
                                    src={v.thumbnail} 
                                    className="cart-img rounded me-3"></img>

                                <div>
                                    <div className="fs-5 fw-bold">{v.title}</div>
                                    <div>
                                        <strong>Category:</strong> {v.category} <br />
                                        <strong>Price:</strong> ${v.price} <br />
                                        <strong>Rating:</strong> ⭐ {v.rating}
                                    </div>
                                    
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Cart;
