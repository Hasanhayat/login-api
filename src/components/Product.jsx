import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./components.css";
import { Rating, CircularProgress, Button } from "@mui/material";
import { Card, ListGroup } from "react-bootstrap";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <CircularProgress size={70} />
      </div>
    );

  return (
    <div className="container mt-4">
      <Card className="shadow-lg p-3 mb-5 rounded-5">
        <div className="row g-4">
          {/* Product Image */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src={product.images[0]}
              alt={product.title}
              className="img-fluid rounded"
              style={{ maxHeight: "400px" }}
            />
          </div>

          {/* Product Details */}
          <div className="col-md-6">
            <Card.Body>
              <Card.Title as="h1" className="mb-3 text-primary">
                {product.title}
              </Card.Title>
              <Rating
                name="product-rating"
                value={product.rating}
                precision={0.5}
                readOnly
                size="large"
                className="mb-2"
              />
              <p className="text-muted mb-4">({product.rating} / 5)</p>

              <h4 className="text-success mb-3">Price: ${product.price}</h4>
              <p>
                <strong>Brand:</strong> {product.brand}
              </p>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>{product.description}</p>

              <ListGroup className="mb-3">
                <ListGroup.Item>
                  <strong>Availability:</strong> {product.availabilityStatus}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Minimum Order Quantity:</strong>{" "}
                  {product.minimumOrderQuantity}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Dimensions:</strong>{" "}
                  {`W: ${product.dimensions.width}cm, H: ${product.dimensions.height}cm, D: ${product.dimensions.depth}cm`}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Warranty:</strong> {product.warrantyInformation}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Shipping:</strong> {product.shippingInformation}
                </ListGroup.Item>
              </ListGroup>

              <Button variant="contained" color="primary" size="large">
                Add to Cart
              </Button>
            </Card.Body>
          </div>
        </div>
      </Card>

      {/* Reviews Section */}
      <Card className="mt-4 shadow-sm">
        <Card.Header>
          <h3 className="text-center">Customer Reviews</h3>
        </Card.Header>
        <Card.Body>
          {product.reviews.length > 0 ? (
            product.reviews.map((review, index) => (
              <div key={index} className="mb-3">
                <h5>{review.reviewerName}</h5>
                <Rating
                  name={`review-rating-${index}`}
                  value={review.rating}
                  precision={0.5}
                  readOnly
                  size="small"
                />
                <p>{review.comment}</p>
                <small className="text-muted">
                  Reviewed on: {new Date(review.date).toLocaleDateString()}
                </small>
                <hr />
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
