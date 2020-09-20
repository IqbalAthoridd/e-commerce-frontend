import React, { useState, useEffect } from 'react';
import { fetchItem, deleteItems } from '../components/api/items';
import axios from 'axios';
import qs from 'querystring';
import {
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
  ButtonGroup,
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const CardList = () => {
  const [items, setItems] = useState({ data: [], pageInfo: {} });
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
    nextLink: '',
    prevLink: '',
  });
  let [input, setInput] = useState({ search: '' });

  useEffect(() => {
    const fetchData = async () => {
      const { data, pageInfo } = await fetchItem(
        updated.nextLink,
        updated.prevLink,
        [input.search],
      );
      setItems({ data, pageInfo });
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

  const editItem = async (id) => {
    const {
      data: { data },
    } = await axios.get(`http://localhost:8080/item/${id}`);
    setUpdated({
      modal: !updated.modal,
      name: data[0].name,
      price: data[0].price,
      description: data[0].description,
      category: data[0].category,
      id: data[0].id,
    });
  };

  const changeInput = (e) => {
    setUpdated({
      ...updated,
      [e.target.name]: e.target.value,
    });
  };

  const changeSearch = (e) => {
    setInput({
      ...input,
      search: e.target.value,
    });
  };

  const formSubmit = async (e) => {
    if (updated.button === 'create') {
      e.preventDefault();
      const { data } = await axios.post(
        'http://localhost:8080/item',
        qs.stringify({
          name: updated.name,
          price: updated.price,
          description: updated.description,
          category: updated.category,
        }),
      );
      setUpdated({
        success: data.success,
        message: data.message,
        alert: true,
      });
    } else {
      e.preventDefault();
      const { data } = await axios.patch(
        `http://localhost:8080/item/${updated.id}`,
        qs.stringify({
          name: updated.name,
          price: updated.price,
          description: updated.description,
          category: updated.category,
        }),
      );
      setUpdated({
        success: data.success,
        message: data.message,
        alert: true,
      });
    }
  };
  const handleUrlNext = async () => {
    setUpdated({ success: true, nextLink: items.pageInfo.nextLink });
  };
  const handleUrlPrev = async () => {
    setUpdated({
      success: !updated.success,
      prevLink: items.pageInfo.prevLink,
    });
  };

  return (
    <>
      {input.search.length > 0
        ? setTimeout(() => {
            setUpdated({ success: true });
          }, 3000)
        : console.log('ok')}
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

      <Row className="mt-5">
        <Col md="3">
          <Button
            onClick={() => setUpdated({ modal: true, button: 'create' })}
            color="success"
          >
            Create
          </Button>
          <Form className="mt-2">
            <Input
              type="text"
              placeholder="Search"
              onChange={changeSearch}
            ></Input>
          </Form>
        </Col>
      </Row>

      <Row className="mt-3">
        {items === undefined
          ? ''
          : items.data.map((item) => {
              return (
                <Col key={item.id} sm="6" md="3" xs="6">
                  <Card body className=" p-0 p-2 pl-3 shadow mb-2">
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>{item.price}</CardText>
                    <CardText>{item.description}</CardText>
                    <ButtonGroup>
                      <Button color="primary" onClick={() => editItem(item.id)}>
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
        <Modal isOpen={updated.modal} toggle={editItem}>
          <ModalHeader toggle={() => setUpdated({ modal: false })}>
            {updated.button === 'create' ? (
              <span>Create Item</span>
            ) : (
              <span>Update item</span>
            )}
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={formSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={updated.name}
                  onChange={changeInput}
                />
              </FormGroup>
              <FormGroup>
                <Label for="price">Price</Label>
                <Input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="Price"
                  value={updated.price}
                  onChange={changeInput}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                  value={updated.description}
                  onChange={changeInput}
                />
              </FormGroup>
              <FormGroup>
                <Label for="category">Category</Label>
                <Input
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Category"
                  value={updated.category}
                  onChange={changeInput}
                />
              </FormGroup>
              <ModalFooter>
                {updated.button === 'create' ? (
                  <Button color="success">Creat</Button>
                ) : (
                  <Button color="primary">Update</Button>
                )}

                <Button
                  color="danger"
                  onClick={() => setUpdated({ modal: false })}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </Form>
          </ModalBody>
        </Modal>
      </Row>
      <Row md="12" className="mt-5 mb-5 text-right">
        <div>
          <ButtonGroup>
            {items.pageInfo.prevLink === null ? (
              <Button onClick={handleUrlPrev} disabled>
                Prev
              </Button>
            ) : (
              <Button onClick={handleUrlPrev}>Prev</Button>
            )}

            {items.pageInfo.nextLink === null ? (
              <Button color="primary" onClick={handleUrlNext} disabled>
                Next
              </Button>
            ) : (
              <Button onClick={handleUrlNext}>Next</Button>
            )}
          </ButtonGroup>
        </div>
      </Row>
    </>
  );
};
export default CardList;
