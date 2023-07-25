import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
  from 'mdb-react-ui-kit';
import Swal from "sweetalert2";
import authService from '../services/authService'


const Login = () => {
  const [data, setData] = useState(),
    [loader, setLoader] = useState(false),
    navigate = useNavigate(),
    onChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
    },
    onSubmit = async () => {
      setLoader(true)
      try {
        authService.loginAdmin(data)
          .then((res) => {
            if (res.status === 200) {
              localStorage.setItem('token', res.data.content.token);
              setLoader(false)

              navigate("/admin/dashboard");
            } else {
              setLoader(false)

              Swal.fire({
                icon: "error",
                title: "Error",
                text: "Some error occured. Please try again leter.",
              });
            }
          })
      } catch (err) {
        console.log(err);
        setLoader(false)
      }
    };

  return (
    <>
      <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden loginWrap'>

        <MDBRow>

          <MDBCol md='7' className='text-center text-md-start d-flex flex-column justify-content-center'>

            <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
              Geothermal360 <br />
              <span style={{ color: 'hsl(218, 81%, 75%)' }}>Admin Panel</span>
            </h1>

            <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
                Embracing the Hydrogen Revolution
            </p>

          </MDBCol>

          <MDBCol md='5' className='position-relative'>

            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <MDBCard className='my-5 bg-glass'>
              <MDBCardBody className='p-5'>


                <h2>Sign In</h2>
                <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' name="email" onChange={onChange} />
                <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' onChange={onChange} name='password' />

                <div className='d-flex justify-content-left'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember Me' />
                </div>

                <button onClick={onSubmit}>{loader ? "wait..." : 'Sign In'}</button>

                <div className="text-center">





                </div>

              </MDBCardBody>
            </MDBCard>

          </MDBCol>

        </MDBRow>

      </MDBContainer>

    </>
  )
}

export default Login;