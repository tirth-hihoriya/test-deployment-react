import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactQuill from "react-quill";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import "react-quill/dist/quill.snow.css";
import LeftNav from "../leftNav";
import { formatDate } from "./commonUtil";
import authService from "../../services/authService";

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
        img_link: data.image,
        external_link: data.news,
        content: richText,
      };
      try {
        await authService.addBlog(payload).then((res) => {
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
        });
      } catch (err) {
        console.log(err);
        setLoader(false);
      }
    };

  const modules = {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
      ],
    },
    formats = [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
    ];

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
              <Form.Label>External Image Link</Form.Label>
              <Form.Control
                type="text"
                name="image"
                placeholder="Image Link"
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>External News Link</Form.Label>
              <Form.Control
                type="text"
                name="news"
                placeholder="News Link"
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
                modules={modules}
                formats={formats}
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

const BlogList = () => {
  const [modalShow, setModalShow] = useState(false),
    [listData, setListData] = useState([]),
    getList = async () => {
      const headerToken = localStorage.getItem("token");
      fetch(`${process.env.REACT_APP_BACKEND_LOCAL}api/blog`, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${headerToken}`,
        },
      }).then((res) =>
        res.json().then((data) => {
          if (data.messageCode == 200) {
            setListData(data.content);
          }
        })
      );
    };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <div className="dashboard">
        <LeftNav />
        <div className="blogListWrapper ">
          <h2>
            Blog List{" "}
            <Button
              className="pull-right m-4"
              variant="primary"
              onClick={() => setModalShow(true)}
            >
              Add New
            </Button>
          </h2>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            getList={getList}
          />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Category</th>
                <th>Title</th>
                <th>Description</th>
                {/* <th>Status</th> */}
                <th>created</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {listData.map((item, index) => (
                <tr key={index}>
                  <td>1</td>
                  <td>{item.category}</td>
                  <td>{item.title}</td>
                  <td dangerouslySetInnerHTML={{ __html: item.content }}></td>
                  {/* <td>
                {item.is_published ? (
                  <button className="btn-danger">Unpublish</button>
                ) : (
                  <button className="btn-success">Publish</button>
                )}
              </td> */}
                  <td>{formatDate(item.createdAt)}</td>
                  <td>View</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default BlogList;
