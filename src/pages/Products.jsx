import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useCart } from "../data/CartContext";
import { fetchProducts } from "../data/products";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, cartItems } = useCart();

  // โหลดสินค้าจำนวน 50 ชิ้น
  useEffect(() => {
    setProducts(fetchProducts());
  }, []);

  return (
    <Container className="mt-3">
      <h3 className="mb-4 text-center">
        {/* 🛍️ Products — Remaining: {50 - cartItems.length} items */}
      </h3>

      <Row>
        {products.map((product) => {
          const isAdded = cartItems.some((item) => item.id === product.id);

          return (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm text-center">
                <Card.Img
                  variant="top"
                  src={product.thumbnailUrl}
                  alt={product.title}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    margin: "15px auto",
                  }}
                />
                <Card.Body>
                  <Card.Title className="fw-semibold">
                    {product.title}
                  </Card.Title>
                  <Card.Text>$ {product.price}</Card.Text>

                  <Button
                    variant={isAdded ? "danger" : "outline-primary"}
                    // disabled={isAdded}
                    onClick={() => addToCart(product)}
                    className="w-40"
                    style={{
                      height: isAdded ? "38px" : "48px", // 👈 แยกความสูง
                      borderRadius: "8px",
                      fontWeight: "500",
                    }}
                  >
                    {isAdded ? "added to carts" : "Add to Carts"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
