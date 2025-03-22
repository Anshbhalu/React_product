import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, Button, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addcart } from "./Cartslice";
import '../App.css';

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryLoading, setCategoryLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        setCategories(response.data);
        setCategoryLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const cartBtn = (category) => {
    setLoading(true);
    if(category === 'all'){
      axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => console.log(error));
    }else{
      axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((response) => {
          setProducts(response.data.products);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Container fluid className="my-4">
      <Row>
        <Col xs={3} className="p-3 bg-light border-end">
          <h4 className="cat_main fw-bold text-center mb-3 " onClick={()=>{cartBtn('all')}}>All Categories</h4>
          {
            categoryLoading ? (
              <Spinner animation="border" className="d-block mx-auto" />
            ) : (
              <ul className="list-group">
                {
                  categories.map((category, i) => (
                    <li key={i} className="list-group-item text-center category-item"
                      onClick={() => cartBtn(category.name)} >
                        {category.name}
                    </li>
                  ))
                }
              </ul>
            )
          }
        </Col>

        <Col xs={9}>
          <Container>
            <Row>
              {loading ? (
                <Spinner animation="border" className="d-block mx-auto" />
              ) : (
                products.map((product) => (
                  <Col xs={12} md={6} lg={4} key={product.id} className="mb-4">
                    <Card className="shadow-sm h-100 ">
                      <img variant="top"
                        src={product.thumbnail}
                        className="product-img"></img>

                      <Card.Body>
                        <div className=" fw-bold">{product.title}</div>
                        <div className="fs-6 ">
                          <span>Category:</span> {product.category} <br />
                          <span>Price:</span> ${product.price} <br />
                          <span>Rating:</span> ⭐ {product.rating}
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <Button variant="primary" as={Link} to={`/products/${product.id}`}>
                            Details
                          </Button>
                          <Button variant="success" onClick={() => dispatch(addcart(product))}>
                            Add to Cart 🛒
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              )}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
