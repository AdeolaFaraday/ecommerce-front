import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from "../core/Layout";
import Background from "../images/sign.jpg";
import {signin, authenticate, isAuthenticated} from '../auth'

const Signin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    redirectToReferrer: false
  })

  const { email, password, loading, error, redirectToReferrer} = values
  const {user} = isAuthenticated()

  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value})
  }

  const clickSubmit = (event) => {
    event.preventDefault()
    setValues({...values, error: false, loading: true})
    signin({email, password})
    .then(data => {
      if(data.error) {
        setValues({...values, error: data.error, loading: false})
      } else {
        authenticate(data, () => {
            setValues({
                ...values,
                redirectToReferrer: true,
                loading: false
              })
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
						Sign in
					</span>

          <div className="wrap-input100 validate-input m-b-16" >
						<input className="input100" type="text" onChange={handleChange('email')} value={email} placeholder="Email"/>
						<span className="focus-input100"></span>
					</div>

					<div className="wrap-input100 validate-input m-b-16">
						<input className="input100" type="password" onChange={handleChange('password')} value={password} placeholder="Password"/>
						<span className="focus-input100"></span>
					</div>

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

  const showLoading = () => (
    loading && (<div className="alert alert-info"><h3>Loading...</h3></div>)
  )

  const redirectUser = () => {
      if(redirectToReferrer){
         if(user && user.role === 1) {
          return <Redirect to="/admin/dashboard" />
         } else {
          return <Redirect to="/user/dashboard" />
         }
      }
      if(isAuthenticated()) {
        return <Redirect to="/" />
      }
  }

  return (
    <Layout title="Signin" description="signin to MybabesNg" background={Background}>
    {showLoading()}
    {showError()}
    {signUpForm()}
    {redirectUser()}
  </Layout>
  )
}

export default Signin;
