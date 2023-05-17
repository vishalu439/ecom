import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Store/cartSlice';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Container className='my-5'>
      <h3>Cart</h3>
      <Row className='mt-3'>
        {products.map((product) => (
          <Col md={4} key={product.id}>
            <Card className='mb-3'>
              <Card.Img variant='top' src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button
                  variant='primary'
                  onClick={() => dispatch(remove(product._id))}
                >
                  Remove
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
