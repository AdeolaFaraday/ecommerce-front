import React, {useState} from 'react';
import Layout from '../core/Layout';
import Background from "../images/homeB.jpg";
import {isAuthenticated} from '../auth';
import {Link} from 'react-router-dom';
import {createCategory} from './apiAdmin'

const AddCategory = () => {
    const [name, setName] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    // destructure user and info form localstorage

    const {user, token} = isAuthenticated()

    const handleChange = (e) => {
        setError('')
        setName(e.target.value)
    }

    const clickSubmit = (e) => {
        e.preventDefault()
        setError('')
        setSuccess(false)

        createCategory(user._id, token, {name})
        .then(data => {
            if (data.error) {
                setError(true)
            } else {
                setError('')
                setSuccess(true)
            }
        })
    }

    const newCategoryForm = () => (
  <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100 p-t-50 p-b-90">
				<form className="login100-form validate-form flex-sb flex-w" onSubmit={clickSubmit}>
					<span className="login100-form-title p-b-51">
						Name
					</span>

          <div className="wrap-input100 validate-input m-b-16" >
						<input className="input100" type="text" onChange={handleChange} value={name} required placeholder="Category Name"/>
						<span className="focus-input100"></span>
					</div>

          <div className="container-login100-form-btn m-t-17">
						<button className="login100-form-btn">
							Create Category
						</button>
					</div>

				</form>
			</div>
		</div>
	</div>
    )

    const showSuccess = () => {
        if (success) {
            return <h4 className="text-success">Category created</h4>
        }
    }

    const showError = () => {
        if (error) {
            return <h4 className="text-danger">Category should be unique</h4>
        }
    }

    const goBack = () => (
       <div className="mt-5">
           <Link to="/admin/dashboard" className="text-warning">Back to Dashboard</Link>
       </div>
    )

    return (<Layout title="Add a new Category" description={`Hello ${user.name}`} background={Background}>
    <div className="row">
        <div className="col-md-8 offset-md-2">
            {showSuccess()}
            {showError()}
            {newCategoryForm()}
            {goBack()}
        </div>
    </div>
</Layout>)

}

export default AddCategory;
