import React from 'react'
import { NavLink } from 'react-router-dom'

const LogInPage = () => {
    return (
        <div>
            <h1> login</h1>
            <form className="row g-3">
                <div className="col-md-2">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4"/>

                    <div className="col-md-8">
                        <label for="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>
                </div>
               
                {/* <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>israel</option>
                        <option>germay</option>
                        <option>New jersy</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div> */}
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>&emsp;&emsp;
                    <button type="rest" className="btn btn-primary"> Reset </button>&emsp;&emsp;
                    <NavLink to="/ForgotPassword" className="link-secondary">forgot Passwoed?</NavLink>&emsp;&emsp;
                    {/* <a href='#' className='link-dark'>forgot Passwoed?</a>&emsp;&emsp; */}
                    <u>Need Accont?</u>&emsp;
                    <NavLink to="/RegistrationPage" className="link-secondary">Sign In</NavLink>&emsp;&emsp;
                </div>
            </form>
            
        </div>
        
    )
}

export default LogInPage

/* rafce */