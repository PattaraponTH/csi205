import { useEffect, useState , useRef } from "react";
import { fecthTodos } from "../data/todos";
import { Form, Table, Badge, Button, Modal } from "react-bootstrap";

const Todos = () => {
  const newIdRef = useRef();
  const newTitleRef = useRef();

  const [todosRaw, setTodosRaw] = useState([]);
  const [todos, setTodos] = useState([]);
  const [onlyWaiting, setOnlyWaiting] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [numPages, setNumPages] = useState(3);
  const [curPages, setCurPage] = useState(1);

  // ดึงข้อมูล todos เมื่อโหลดหน้า
  useEffect(() => {
    setTodosRaw(fecthTodos());
  }, []);

  // ฟิลเตอร์เฉพาะ waiting ถ้า onlyWaiting = true
  useEffect(() => {
    if (onlyWaiting) {
      setTodos(todosRaw.filter((todo) => !todo.completed));
    } else {
      setTodos(todosRaw);
    }
  }, [todosRaw, onlyWaiting]);

  // log ทดสอบ (optional)
  useEffect(() => {
    setNumPages(Math.ceil(todos.length / itemsPerPage));
    // console.log(`itemsPerPage: ${itemsPerPage}`);
  }, [todos, itemsPerPage]);

  useEffect(() => {
    if (numPages <= 0) setCurPage(0);
    else if (curPages > numPages) setCurPage(numPages);
    else if (curPages <= 0) setCurPage(1);

    // if (curPages > numPages){
    //   setCurPage()
    // }
    // else{
    //   if(numPages <= 0) setCurPage(1)
    // }
  }, [numPages]);

  const waitingClicked = (id) => {
    console.log(id);
    const foundTodo = todos.find((todo) => {
      return todo.id === id;
    });
    foundTodo.completed = true;

    setTodosRaw([...todosRaw]);
  };

  const deleteClicked = (id) => {
    setTodosRaw(todosRaw.filter((todo) => todo.id !== id));
  };

  // handle modal
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const saveClicked = (id, title) => {
    console.log(id, title);
    if (title.trim() !== "") {
      setTodosRaw([
        ...todosRaw,
        {
          userId: 1,
          id,
          title,
          completed: false,
        },
      ]);
    }
    newIdRef.current.value = "";
    newTitleRef.current.value = "";

    handleClose();
  };

  return (
    <>
      <h2 className="text-center fw-bold mt-3 mb-1">TODOS PAGE</h2>
      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add todo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID:</Form.Label>
              <Form.Control
                value={
                  todosRaw.reduce(
                    (prev, todo) => (todo.id > prev ? todo.id : prev),
                    -1
                  ) + 1
                }
                autoFocus
                disabled={true}
                ref={newIdRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                placeholder="new todo here! ! !"
                autoFocus
                ref={newTitleRef}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              saveClicked(Number(newIdRef.current.value), newTitleRef.current.value)
            }
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      {/* modal end */}

      {/* filter bar */}
      <Form>
        <div className="d-flex justify-content-between align-items-center pe-4 ps-4">
          <div className="d-flex align-items-center">
            <Form.Check
              type="switch"
              id="custom-switch"
              checked={onlyWaiting} // ✅ สำคัญมาก
              onChange={(e) => setOnlyWaiting(e.target.checked)}
            />
            Show only&nbsp;
            <Button variant="warning">
              Waiting&nbsp;<i className="bi bi-clock"></i>
            </Button>
          </div>

          <Form.Select
            aria-label="Default select example"
            className="w-25"
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <option value={5}>5 items per page</option>
            <option value={10}>10 items per page</option>
            <option value={50}>50 items per page</option>
            <option value={100}>100 items per page</option>
          </Form.Select>
        </div>
      </Form>

      {/* table */}
      <div className="p-4">
        <Table striped bordered hover>
          <thead className="table-dark">
            <tr>
              <th className="text-center" style={{ width: "3rem" }}>
                ID
              </th>
              <th className="text-center">Title</th>
              <th className="text-end" style={{ width: "12rem" }}>
                Completed &nbsp;
                <Button variant="primary" onClick={() => handleShow()}>
                  <i className="bi bi-plus"></i>
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {todos
              .filter((todo, index) => {
                return (
                  index >= (curPages - 1) * itemsPerPage &&
                  index <= curPages * itemsPerPage - 1
                );
              })

              .map((todo) => (
                <tr key={todo.id}>
                  <td className="text-center">
                    <h5>
                      <Badge bg="secondary">{todo.id}</Badge>
                    </h5>
                  </td>
                  <td>{todo.title}</td>
                  <td className="text-end">
                    {todo.completed ? (
                      <Badge bg="success" className="fs-6">
                        Done
                      </Badge>
                    ) : (
                      <Button
                        variant="warning"
                        onClick={() => waitingClicked(todo.id)}
                      >
                        Waiting&nbsp;<i className="bi bi-clock"></i>
                      </Button>
                    )}
                    &nbsp;
                    <Button
                      variant="danger"
                      onClick={() => deleteClicked(todo.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>

      {/* pagination */}
      <div className="text-center mb-4">
        <Button
          variant="outline-primary"
          onClick={() => setCurPage(1)}
          disabled={curPages === 1}
        >
          First
        </Button>
        &nbsp;
        <Button
          variant="outline-primary"
          onClick={() => curPages > 1 && setCurPage((p) => p - 1)}
          disabled={curPages === 1}
        >
          Previous
        </Button>
        &nbsp;
        <span>
          {curPages} / {numPages}
        </span>
        &nbsp;
        <Button
          variant="outline-primary"
          onClick={() => curPages < numPages && setCurPage((p) => p + 1)}
          disabled={curPages === numPages}
        >
          Next
        </Button>
        &nbsp;
        <Button
          variant="outline-primary"
          onClick={() => setCurPage(numPages)}
          disabled={curPages === numPages}
        >
          Last
        </Button>
      </div>
    </>
  );
};

export default Todos;
