import React, { useEffect , useState } from "react";
import { useCartState } from "../context/Context";
import { ListGroup, Button , Row , Col , Image , Form } from "react-bootstrap";
import Rating from './Rating.js'
import { AiFillDelete } from "react-icons/ai";
const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useCartState();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  }, [cart]);
  return (
    <div className="home">
      <div className="productContainer">
      <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>₹ {prod.price}</Col>
                <Col md={2}>
                  <Rating rating={prod.ratings} />
                </Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(5).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="filters summary">
          <span className="title"> Subtotal ({cart.length}) items</span>

          <span style={{ fontWeight: 700, fontSize: 20 }}>
            Total : Rs {total}
          </span>
        </div>
        <Button type="button" disabled={cart.length === 0}>
          proceed to checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
