import React, { useEffect, useState } from "react";
import { formatDate } from "./commonUtil";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactQuill from "react-quill";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import "react-quill/dist/quill.snow.css";
import LeftNav from "../leftNav";
import EventDetails from "./eventDetails";
import authService from "../../components/services/authService";

function MyVerticallyCenteredModal(props) {
  const [data, setData] = useState(),
    [loader, setLoader] = useState(false),
    [richText, setRichText] = useState(),
    onChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
    },
    onSubmit = async (e) => {
      e.preventDefault();
      setLoader(true);
      const payload = {
        category: data.category,
        site: "transenergy360",
        title: data.title,
        content: richText,
      };
      const headerToken = localStorage.getItem("token");
      try {
        let res = await fetch(`${process.env.REACT_APP_BACKEND}edge196/blog`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${headerToken}`,
          },
          body: JSON.stringify(payload),
        });
        if (res.status === 200) {
          setLoader(false);
          props.getList();
          props.onHide();
          setData("");
          setRichText();
        } else {
          setLoader(false);

          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Some error occured. Please try again leter.",
          });
        }
      } catch (err) {
        console.log(err);
        setLoader(false);
      }
    };

  return (
    <div className="modal">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        className="blogModal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Blog
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <div className="form-group">
              <Form.Label>Category</Form.Label>
              <select onChange={onChange} name="category">
                <option>=select category=</option>
                <option value="Portfolio News">PORTFOLIO NEWS</option>
                <option value="Press Releases">PRESS RELEASES</option>
                <option value="Media">MEDIA</option>
              </select>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter Title"
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Content</Form.Label>
              <ReactQuill
                value={richText}
                theme="snow"
                name="content"
                onChange={setRichText}
                placeholder="Enter Description..."
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              {loader ? "Wait..." : "Submit"}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const EventList = () => {
  const [modalShow, setModalShow] = useState(false),
    [listData, setListData] = useState([]),
    [_id, setId] = useState(),
    getList = async () => {
      // const headerToken = localStorage.getItem("token");
      // fetch(`${process.env.REACT_APP_BACKEND}api/image`, {
      //   method: "get",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${headerToken}`,
      //   },
      // })
      authService.getImage().then((res) =>
        res.json().then((data) => {
          if (data.messageCode === "200") {
            setListData(data.content);
          }
        })
      );
    };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="dashboard">
      <LeftNav />
      <div className="blogListWrapper ">
        <h2 className="m-5">
          Event List{" "}
          <Link
            className="btn btn-primary ml-5"
            variant="primary"
            to="/admin/add-event"
          >
            Add New
          </Link>
        </h2>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          getList={getList}
        />

        {_id ? (
          <EventDetails _id={_id} />
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Country</th>
                <th>State</th>
                <th>City</th>
                <th>Date</th>
                <th>Time</th>
                <th>Created</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {listData.map((item, index) => {
                const { event_details } = item;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{event_details.country}</td>
                    <td>{event_details.state}</td>
                    <td>{event_details.city}</td>
                    <td>{event_details.event_date} </td>
                    <td>{event_details.event_time}</td>

                    {/* <td>
                {item.is_published ? (
                  <button className="btn-danger">Unpublish</button>
                ) : (
                  <button className="btn-success">Publish</button>
                )}
              </td> */}
                    <td>{formatDate(event_details.createdAt)}</td>
                    <td>
                      <button
                        onClick={() => setId(item._id)}
                        className="btn btn-success"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default EventList;
