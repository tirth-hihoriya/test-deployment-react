import React, { useEffect, useState, useRef } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactQuill from "react-quill";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import "react-quill/dist/quill.snow.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import LeftNav from "../leftNav";
import { uploadFile } from "./commonUtil";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";

const AddEventDetail = ({ setEventId }) => {
  const [data, setData] = useState(),
    [loader, setLoader] = useState(false),
    [thumbnail, setThumbnail] = useState(),
    [richText, setRichText] = useState(),
    [description2, setDescription2] = useState(),
    onChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
    },
    imageOnchange = async (e) => {
      const { files, name, value } = e.target;
      if (name === "filename") {
        const uploadedUrl = await uploadFile(files[0]);
        console.log("res", uploadedUrl);
        setThumbnail(uploadedUrl);
      }
    },
    onSubmit = async (e) => {
      e.preventDefault();
      setLoader(true);
      data.description2 = description2;
      data.description1 = richText;
      data.thumbnail = thumbnail;

      try {
        authService.addEvent(data).then((res) => {
          if (res.data.messageCode === "200") {
            setLoader(false);
            setEventId(res.data.content._id);

            setData("");
            setRichText();
            document.getElementById("fill-tab-example-tab-image").click();
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

  return (
    <div className="blogModal">
      <Form onSubmit={onSubmit}>
        {/* <div class="form-group">
              <Form.Label>Category</Form.Label>
              <select onChange={onChange} name='category'>
                <option>=select category=</option>
                <option value='Portfolio News'>PORTFOLIO NEWS</option>
                <option value='Press Releases'>PRESS RELEASES</option>
                <option value='Media'>MEDIA</option>
              </select>
            </div> */}
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
          <Form.Label>Description 1</Form.Label>
          <ReactQuill
            value={richText}
            theme="snow"
            name="content"
            onChange={setRichText}
            placeholder="Enter Description..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description 2</Form.Label>
          <ReactQuill
            value={description2}
            theme="snow"
            name="content"
            onChange={setDescription2}
            placeholder="Enter Description..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Event Date</Form.Label>
          <Form.Control
            type="date"
            name="event_date"
            placeholder="Enter Title"
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Event Start Time</Form.Label>
          <Form.Control
            type="time"
            name="event_time"
            placeholder="Enter Title"
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            name="country"
            placeholder="Country"
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            name="state"
            placeholder="State"
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            placeholder="city"
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="address"
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Pin Code</Form.Label>
          <Form.Control
            type="text"
            name="pin"
            placeholder="Pin Code"
            onChange={onChange}
          />
        </Form.Group>
        <label for="usr">Add New Image:</label>
        <input
          type="file"
          id="FileInputID"
          name="filename"
          onChange={imageOnchange}
          className="form-control"
        />
        <Button variant="primary" type="submit">
          {loader ? "Wait..." : "Submit"}
        </Button>
        <br /> <br />
      </Form>
    </div>
  );
};

const AddKeyNote = ({ eventId, title, endpoint }) => {
  const [images, setImages] = useState([]),
    [formData, setFormData] = useState([]),
    uploadImage = async () => {
      const newData = formData;
      newData.shift();
      //  console.log("newData", newData)

      const data = {
        images: newData,
        event_details: eventId,
      };
      if (!eventId) {
        return Swal.fire({
          icon: "error",
          title: "Error",
          text: "Event not found!",
        });
      }

      const headerToken = localStorage.getItem("token");
      try {
        let res = await fetch(
          `${process.env.REACT_APP_BACKEND}api/${endpoint}`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${headerToken}`,
            },
            body: JSON.stringify(data),
          }
        );
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Image updated successfulley!",
          });
          if (endpoint === "partner") {
            document
              .getElementById("fill-tab-example-tab-program_details")
              .click();
          }

          // document.getElementById("fill-tab-example-tab-image").click();
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Some error occured. Please try again leter.",
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
    imageOnchange = async (e) => {
      const { files, name, value } = e.target;

      if (name === "filename") {
        const uploadedUrl = await uploadFile(files[0]);
        // console.log("res", uploadedUrl);
        setImages({ ...images, [name]: uploadedUrl });

        document.getElementById("FileInputID").value = null;
        document.getElementById("name").value = null;
        document.getElementById("designation").value = null;
      } else {
        setImages({ ...images, [name]: value });
      }
    };

  useEffect(() => {
    setFormData([...formData, images]);
  }, [images.filename]);

  return (
    <>
      <br />
      <h2 className="text-center">{title}</h2>
      <br />
      <br />
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            {formData.length &&
              formData.map((item, index) => (
                <>
                  {!!Object.keys(item).length && (
                    <div className="col-md-3">
                      <img src={item.filename} className="img-thumbnail" />
                      <p>{item.name}</p>
                      <p>{item.designation}</p>
                    </div>
                  )}
                </>
              ))}
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <br /> <br />
            <h2>Add {formData.length > 1 && "another"} Details</h2>
            <label for="usr">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={imageOnchange}
              className="form-control"
            />
            {endpoint !== "partner" && (
              <>
                <label for="usr">Designation</label>
                <input
                  type="text"
                  name="designation"
                  id="designation"
                  onChange={imageOnchange}
                  className="form-control"
                />
              </>
            )}
            <label for="usr">Add New Image:</label>
            <input
              type="file"
              id="FileInputID"
              name="filename"
              onChange={imageOnchange}
              className="form-control"
            />
          </div>
          <br /> <br />
          <button className="btn btn-primary" onClick={uploadImage}>
            Upload
          </button>
          <br /> <br />
        </div>
      </div>
    </>
  );
};

const AddProgram = ({ eventId }) => {
  const [programDetails, setProgramDetails] = useState([]);
  const [formData, setFormData] = useState([]);

  const navigate = useNavigate();

  const programOnChange = (e) => {
    const { name, value } = e.target;
    setProgramDetails({ ...programDetails, [name]: value });
  };

  const programSubmit = async () => {
    setFormData([...formData, programDetails]);
    programDetails.event_details = eventId;

    if (!eventId) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "Event not found!",
      });
    }

    const headerToken = localStorage.getItem("token");
    try {
      let res = await fetch(`${process.env.REACT_APP_BACKEND}api/program`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${headerToken}`,
        },
        body: JSON.stringify(programDetails),
      });
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "success",
          text: "Program Added Successfully!",
        });
        // navigate("/admin/event-list");

        // document.getElementById("fill-tab-example-tab-image").click();
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Some error occured. Please try again leter.",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <br />
      <h2 className="text-center">PRELIMINARY PROGRAM</h2>
      <br />
      <br />
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            {formData.length &&
              formData.map((item, index) => (
                <div>
                  <h4>
                    {item.program_time} SESSION {index + 1}
                  </h4>
                  <p>{item.details}</p>
                  <br />
                </div>
              ))}
            <br /> <br />
            <h2>Add Program </h2>
            <label for="usr">Time</label>
            <input
              type="time"
              name="program_time"
              id="program_time"
              onChange={programOnChange}
              className="form-control"
            />
            <label for="usr">Description</label>
            <textarea
              name="details"
              id="details"
              onChange={programOnChange}
              className="form-control"
            />
          </div>
          <br /> <br />
          <button className="btn btn-primary" onClick={programSubmit}>
            Submit
          </button>
          <br /> <br />
        </div>
      </div>
    </>
  );
};

const AddEvent = () => {
  const [defaultActiveKey, setDefaultActiveKey] = useState("eventDetails"),
    [eventId, setEventId] = useState(""),
    imageRef = useRef(null);

  return (
    <div className="dashboard eventAdd">
      <LeftNav />
      <div className="blogListWrapper " ref={imageRef}>
        <a type="button" href="/admin/event-list" className="btn btn-primary">
          Back
        </a>{" "}
        &nbsp;{" "}
        <a type="button" href="/admin/event-list" className="btn btn-primary">
          Post Event
        </a>{" "}
        <br />
        <h2>Add New Event</h2>
        <br />
        <Tabs
          defaultActiveKey={defaultActiveKey}
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="eventDetails" title="EVENT DETAILS">
            <AddEventDetail
              setDefaultActiveKey={setDefaultActiveKey}
              setEventId={setEventId}
            />
          </Tab>
          <Tab eventKey="image" title="IMAGE">
            <AddKeyNote
              eventId={eventId}
              title="KEYNOTE SPEAKERS"
              endpoint="image"
            />

            <AddKeyNote
              eventId={eventId}
              title="CONTACT DETAILS"
              endpoint="contact"
            />
            <AddKeyNote
              eventId={eventId}
              title="PARTNER DETAILS"
              endpoint="partner"
            />
          </Tab>
          <Tab eventKey="program_details" title="PRELIMINARY PROGRAM">
            <AddProgram eventId={eventId} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default AddEvent;
