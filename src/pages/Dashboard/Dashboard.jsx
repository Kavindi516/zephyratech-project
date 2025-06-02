import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/'); // Redirect to login
  };
  return (
    <Container className="mt-5">
      <Card className="text-center shadow-sm">
        <Card.Header as="h4">Welcome to Your Dashboard</Card.Header>
        <Card.Body>
          <Card.Title>Hello, Emily 👋</Card.Title>
          <Card.Text>
            You have successfully logged in. Use the navigation menu to explore features and manage your account.
          </Card.Text>
          <Button variant="primary">Go to Profile</Button>{' '}
          <Button variant="outline-secondary" onClick={handleLogout}>Logout</Button>
        </Card.Body>
        <Card.Footer className="text-muted">ZephyraTech Portal</Card.Footer>
      </Card>
    </Container>
  );
}

export default Dashboard;
