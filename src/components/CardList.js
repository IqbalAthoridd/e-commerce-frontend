import React from 'react';
import axios from 'axios';
import {
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
  ButtonGroup,
} from 'reactstrap';

const CardList = () => {
  const [items, setItems] = useState([]);

  let [updated, setUpdated] = useState({
    success: false,
    message: '',
    alert: false,
    modal: false,
    name: '',
    price: '',
    description: '',
    category: '',
    id: '',
    button: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await fetchItem();
      setItems(data);
    };
    fetchData();
  }, [updated.success]);

  const deleteItem = async (id) => {
    const { data } = await deleteItems(id);
    setUpdated({ success: data.success, message: data.message, alert: true });
  };

  const closeAlert = () => {
    setTimeout(() => {
      setUpdated((updated.alert = false));
    }, 3000);
  };

  return (
    <>
      <Row className="justify-content-center position-relative mt-5">
        <Col md="3" xs="4" sm="3 text-center position-absolute">
          {updated.alert === true ? (
            <Alert className="rounded p-0 p-1 m-0" color="success">
              {updated.message}!
            </Alert>
          ) : (
            <Row className="justify-content-center">
              <Col className=" p-0 p-3 "></Col>
            </Row>
          )}
        </Col>
        {updated.alert === true ? closeAlert() : ''}
      </Row>

      <Row className="mt-3">
        {items === undefined
          ? ''
          : items.map((item) => {
              return (
                <Col key={item.id} sm="6" md="3" xs="6">
                  <Card body className=" p-0 p-2 pl-3 shadow mb-2">
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>{item.price}</CardText>
                    <CardText>{item.description}</CardText>
                    <ButtonGroup>
                      <Button color="primary" onClick={() => toggle(item.id)}>
                        Edit
                      </Button>
                      <Button
                        color="danger"
                        onClick={() => deleteItem(item.id)}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </Card>
                </Col>
              );
            })}
      </Row>
    </>
  );
};
export default CardList;
