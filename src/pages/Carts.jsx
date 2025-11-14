import React from "react";
import { useCart } from "../data/CartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Carts() {
  const { cartItems, removeFromCart } = useCart();

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mt-4 mb-5">
      <h2 className="mb-4 text-center"></h2>

      {totalItems === 0 ? (
        <p className="text-center text-muted">Your cart is empty.</p>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {cartItems.map((product) => (
            <Col key={product.id}>
              <Card className="h-100 text-center shadow-sm p-3 d-flex flex-column justify-content-between">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "150px" }}
                >
                  <Card.Img
                    variant="top"
                    src={product.thumbnailUrl}
                    alt={product.title}
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>

                <Card.Body className="d-flex flex-column align-items-center justify-content-between">
                  <Card.Title
                    className="text-center mt-2"
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      height: "40px",
                      overflow: "hidden",
                    }}
                  >
                    {product.title}
                  </Card.Title>

                  <Card.Text className="fw-bold text-center mb-2">
                    $ {product.price.toFixed(2)} 
                  </Card.Text>

                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Delete from Carts
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* ✅ สรุปยอดรวม */}
      <div
        className="d-flex justify-content-center align-items-center gap-2 mt-4"
        style={{ fontSize: "1.1rem" }}
      >
        <span>Products:</span>

        <span
          style={{
            color: "white",
            backgroundColor: "#ce0707ff",
            border: "2px solid red",
            borderRadius: "8px",
            padding: "2px 8px",
            minWidth: "60px",
            textAlign: "center",
          }}
        >
          {totalItems} items
        </span>

        <span>-</span>

        <span>Total price:</span>

        <span
          style={{
            color: "#ffff",
            backgroundColor: "#099c37ff",
            border: "2px solid green",
            borderRadius: "8px",
            padding: "2px 8px",
            minWidth: "80px",
            textAlign: "center",
          }}
        >
          ${totalPrice.toFixed(2)}
        </span>
      </div>

      {/* 🟡 ปุ่ม Checkout (จำลอง) */}
      {totalItems > 0 && (
        <div className="text-center mt-4">
          <Button
            variant="warning"
      size="lg"
      className=" shadow-sm"
      style={{
        width: "129px", // 👈 ปรับความกว้างได้ตามต้องการ เช่น '200px', '60%', '100%' ฯลฯ
        borderRadius: "10px",
        padding: "10px 0",
        fontSize: "1.1rem",
      }}
          >
            Checkout  <i class="bi bi-credit-card"></i>
          </Button>
        </div>
      )}
    </div>
  );
}

export default Carts;
