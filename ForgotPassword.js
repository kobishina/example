import React from 'react';

const ForgotPassword = () => {
    return (
        <div>
            <h1>Forgot Passwoed</h1>
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" />
                <button type="submit" className="btn btn-primary">Send Email</button>
            </div>
        </div>
    );
};

export default ForgotPassword;