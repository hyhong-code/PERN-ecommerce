import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { name, email, password, passwordConfirm } = formData;
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    });
  };

  return (
    <section id="signup" className="py-6 bg-light text-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="display-4 text-center text-primary mb-5">
              <span>SIGN UP</span>
            </h1>
            <div className="form">
              <div className="card card-body py-5 px-3">
                <div className="row">
                  <div className="col-10 offset-1">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="email">EMAIL</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="name">NAME</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">PASSWORD</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          value={password}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="passwordConfirm">
                          CONFIRM PASSWORD
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="passwordConfirm"
                          name="passwordConfirm"
                          value={passwordConfirm}
                          onChange={handleChange}
                        />
                      </div>
                      <input
                        type="submit"
                        className="btn btn-primary btn-block"
                        value="SIGN UP"
                      />
                      <small className="form-text text-muted mt-3">
                        Already have an account?{" "}
                        <Link to="/login" className="text-secondary">
                          Log in <i className="fas fa-arrow-right"></i>
                        </Link>
                      </small>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
