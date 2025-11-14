import { Button } from "react-bootstrap";
import { useCart } from "../data/CartContext";
import { Link, useNavigate } from "react-router-dom";

const AppNavbar = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const remainingProducts = 50 - cartItems.length;

  const handleLogout = () => {
    // ล้าง token หรือข้อมูลผู้ใช้
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    // Redirect กลับไปหน้า Login
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center gap-2 mt-2 flex-wrap">
      <Link to={"home"}>
        <Button variant="outline-primary">Home</Button>
      </Link>
      <Link to={"calculator"}>
        <Button variant="outline-primary">Calculator</Button>
      </Link>
      <Link to={"animation"}>
        <Button variant="outline-primary">Animation</Button>
      </Link>
      <Link to={"components"}>
        <Button variant="outline-primary">Component</Button>
      </Link>
      <Link to={"todos"}>
        <Button variant="outline-primary">Todos</Button>
      </Link>
      <Link to={"products"}>
        <Button variant="outline-primary">
          Products (50)
          {/* ({remainingProducts}) */}
        </Button>
      </Link>
      <Link to={"carts"}>
        <Button variant="outline-primary position-relative">
          Carts
          {cartItems.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartItems.length}
            </span>
          )}
        </Button>
      </Link>

      {/* Logout */}
      <Button variant="outline-danger" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default AppNavbar;
