import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router";
import Loader from "./Loader";

const Products = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((res) => {
        setPosts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!posts)
    return (
          <Loader />
    );
  return (
    <div className="tra container rounded-5 mt-2 shadow-lg p-3 d-flex flex-wrap justify-content-center">
      {posts.map((ele, i) => {
        return (
          <Link
            key={i}
            to={`/product/${ele.id}`}
            className="text-decoration-none"
          >
            <Card
              style={{ width: "18rem" }}
              key={i}
              className="card m-2 shadow-lg"
            >
              <Card.Img variant="top" src={ele.images[0]} />
              <Card.Body>
                <Card.Title>{ele.title}</Card.Title>
                <Card.Text>{ele.description}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
