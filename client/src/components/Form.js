import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Forms() {
  return (
    <Form className="my-3">
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label className="">Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Forms;
