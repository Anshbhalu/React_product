
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../App.css'

const Single = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error("Error fetching product:", error));
    }, [id]);

    if (!product) {
        return (
            <Container className="text-center my-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <p className="mt-2">Loading product details...</p>
            </Container>
        );
    }

    return (
        <Container className="my-5">
            <Row className="align-items-center">
                <Col lg={5} className="text-center img-hover-scale">
                    <img 
                        src={product.thumbnail} 
                        alt={product.title} 
                        className="img-fluid rounded shadow-sm"
                    />
                </Col>

                <Col lg={7}>
                    <h2 className="fw-bold">{product.title}</h2>
                    <p className="text-muted">{product.description}</p>

                    <h4 className="text-success">${product.price} <small className="text-danger">(-{product.discountPercentage}%)</small></h4>

                    <div>
                        <div className='d-flex justify-content-between'>
                            <div className="">
                                <strong>Category:</strong> {product.category} <br />
                                <strong>Brand:</strong> {product.brand} <br />
                                <strong>Stock:</strong> {product.stock} <br />
                                <strong>Rating:</strong> ⭐ {product.rating}
                            </div>
                            <div>
                                <img className='qrCode' src={product.meta.qrCode} alt="" />
                            </div>
                        </div>
                        <div className="  text-end">
                            <span>{product.meta.barcode}</span>
                        </div>
                    </div>

                    <Button variant="primary" className="me-3 bybtn">Add to Cart 🛒</Button>
                    <Button variant="primary" className='bybtn'>Buy Now 👜</Button>


                </Col>
            </Row>
            <Row>
                <Col >
                <div className='sub_img'>
                    <img src={product.images} alt="" />
                </div>
                </Col>
            </Row>

                <div class="container mt-5">
                        <h2 class="mb-4">Customer Reviews</h2>

                        {
                            product.reviews.map((v,i)=>{
                                return(
                                    <div className='list-group'>
                                        <div className='list-group-item'>
                                            <h5 className='mb-1'>reviewerName : {v.reviewerName}</h5>
                                            <h6 className='mb-1'>ReviewerEmail : {v.reviewerEmail}</h6>
                                            <small className="text-muted">Review Date : {v.date}</small>
                                            <p className="mb-1">Comment : {v.comment}</p>
                                            Raiting : <span className='text-warning'>☆☆☆☆ </span><span>{v.rating}</span>                                            
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
        </Container>
    );
};

export default Single;
