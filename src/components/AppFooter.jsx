import { Form, Table, Badge, Button } from "react-bootstrap";

const AppFooter = () => {
    return ( <>
    {/* <h3>APP FOOTER</h3> */}
    <div className='text-center mt-2 '>
        <div className="d-flex justify-content-center mb-2">
  <Badge bg="secondary" style={{ padding: "0.25rem 0.75rem", fontSize: "1rem" }}>
    SPU
  </Badge>
  &nbsp;
  <Badge bg="secondary" style={{ padding: "0.25rem 0.75rem", fontSize: "1rem" }}>
    SIT
  </Badge>
  &nbsp;
  <Badge bg="secondary" style={{ padding: "0.25rem 0.75rem", fontSize: "1rem" }}>
    CSI
  </Badge>
</div>
    <h3><i className="bi bi-facebook " style={{ color: "#1877F2" }}></i> : Owen Iwc</h3>
    <h3><i class="bi bi-instagram" style={{ color: "#f2189bff" }}></i> : owen_iwc</h3></div>
    </> );
}
 
export default AppFooter;