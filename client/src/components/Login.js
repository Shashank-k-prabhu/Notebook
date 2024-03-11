import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.email.value, e.target.password.value);
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });

    const json = await response.json();
    if (json.success) {
      // Save the auth token and redirect
      console.log("Login Successful");
      localStorage.setItem("token", json.authtoken);
      navigate("/home");
    } else {
      alert("Invalid Credentials");
    }
    e.target.email.value = "";
    e.target.password.value = "";
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          minLength={5}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
