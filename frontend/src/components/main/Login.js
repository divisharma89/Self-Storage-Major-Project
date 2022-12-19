import { Formik } from "formik"
import React from "react"
import Swal from "sweetalert2"

const Login = () => {
  // 1. create a submit function
  const loginSubmit = async (formdata, { resetForm }) => {
    console.log(formdata)
    resetForm();

    const response = await fetch('http://localhost:5000/user/authenticate', {
      method: 'POST',
      body : JSON.stringify(formdata),
            headers : {
                'Content-Type' : 'application/json'
            }
    })

    if(response.status === 200){
      Swal.fire({
        icon : 'success',
        title : 'Logedin'
      })

      const data = await response.json();
      sessionStorage.setItem('user', JSON.stringify(data));


    }else if((response.status === 401)){
      Swal.fire({
        icon : 'error',
        title : 'Login Failed'
      })
    }else{
      console.log('unknown error ocuured');
    }

    // data to store in database
  }
  // 2. locate form tag and use Formik

  return (
    <div className="container">
      <section className=" text-center text-lg-start">
        <div className="card mb-3">
          <div className="row g-0 d-flex align-items-center">
            <div className="col-lg-4 d-none d-lg-flex">
              <img
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                alt="Trendy Pants and Shoes"
                className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
              />
            </div>
            <div className="col-lg-8">
              <div className="card-body py-5 px-md-5">
                <Formik initialValues={{ email: "", password: "" }} onSubmit={loginSubmit}>
                 
                  {({values, handleSubmit, handleChange}) => (
                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <input type="email" id="email" value={values.email} onChange={handleChange} className="form-control" />
                        <label className="form-label" htmlFor="form2Example1">
                          Email address
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="password" id="password" value={values.password} onChange={handleChange} className="form-control" />
                        <label className="form-label" htmlFor="form2Example2">
                          Password
                        </label>
                      </div>
                      <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="form2Example31" defaultChecked="" />
                            <label className="form-check-label" htmlFor="form2Example31">
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="col">
                          {/* Simple link */}
                          <a href="#!">Forgot password?</a>
                        </div>
                      </div>
                      {/* Submit button */}
                      <button type="submit" className="btn btn-primary btn-block mb-4">
                        Sign in
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </div>
  )
}

export default Login