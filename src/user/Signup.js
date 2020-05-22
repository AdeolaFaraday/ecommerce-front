import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from "../core/Layout";
import Background from "../images/sign_1.jpg";
import {signup} from '../auth'

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false
  })

  const {name, email, password, success, error} = values

  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value})
  }

  const clickSubmit = (event) => {
    event.preventDefault()
    setValues({...values, error: false})
    signup({name, email, password})
    .then(data => {
      if(data.error) {
        setValues({...values, error: data.error, success: false})
      } else {
        setValues({
          ...values,
          name: '',
          email: '',
          password: '',
          error: '',
          success: true
        })
      }
    })
  }

  const signUpForm = () => (

    <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100 p-t-50 p-b-90">
				<form className="login100-form validate-form flex-sb flex-w">
					<span className="login100-form-title p-b-51">
						Sign up
					</span>


					<div className="wrap-input100 validate-input m-b-16" >
						<input className="input100" type="text" onChange={handleChange('name')} value={name} placeholder="Username"/>
						<span className="focus-input100"></span>
					</div>

          <div className="wrap-input100 validate-input m-b-16" >
						<input className="input100" type="text" onChange={handleChange('email')} value={email} placeholder="Email"/>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input m-b-16">
						<input className="input100" type="password" onChange={handleChange('password')} value={password} placeholder="Password"/>
						<span className="focus-input100"></span>
					</div>
          {showSuccess()}
          {showError()}
					<div className="container-login100-form-btn m-t-17">
						<button onClick={clickSubmit} className="login100-form-btn">
							Submit
						</button>
					</div>

				</form>
			</div>
		</div>
	</div>

  )

  const showError = () => (
    <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
      {error}
    </div>
  )

  const showSuccess = () => (
    <div className="alert alert-info" style={{display: success ? '' : 'none'}}>
    You now have an account with us. Please <Link to='/signin'>Signin.</Link>
  </div>
  )

  return (
    <Layout title="Signup" description="signup to MybabesNg" background={Background}>
    {signUpForm()}
  </Layout>
  )
}

export default Signup;
