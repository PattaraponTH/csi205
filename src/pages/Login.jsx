import React, { useState } from "react";
import { Form, InputGroup, Button, Row, Col, Card } from "react-bootstrap";
import { verifyUser } from "../data/users";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleClear = () => {
    setUsername("");
    setPassword("");
    setError("");
  };

  const handleLogin = () => {
    const result = verifyUser(username, password);
    if (result) {
      setError("");
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  const inputStyle = {
    backgroundColor: "transparent",
    color: "#000",
    border: "1px solid #333",
  };

  const inputGroupTextStyle = {
    backgroundColor: "black",
    color: "white",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    width: "120px",
    justifyContent: "center",
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <Card
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <h2 className="mb-4 text-center">Login</h2>

        {/* Username */}
        <InputGroup className="mb-3">
          <InputGroup.Text style={inputGroupTextStyle}>
            <i className="bi bi-person"></i> Username
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="user"   // <-- placeholder แสดงแนะนำ
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
            aria-label="Username"
          />
        </InputGroup>

        {/* Password */}
        <InputGroup className="mb-3">
          <InputGroup.Text style={inputGroupTextStyle}>
            <i className="bi bi-key"></i> Password
          </InputGroup.Text>
          <Form.Control
            type="password"
            placeholder="pass"  // <-- placeholder แสดงแนะนำ
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            aria-label="Password"
          />
        </InputGroup>

        {/* Error message */}
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

        {/* Buttons */}
        <Row>
          <Col>
            <Button variant="danger" onClick={handleClear} className="w-100">
              Clear
            </Button>
          </Col>
          <Col>
            <Button variant="primary" onClick={handleLogin} className="w-100">
              Login
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Login;
