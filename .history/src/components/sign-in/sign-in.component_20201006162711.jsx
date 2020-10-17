import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I alredy have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}

export default SignIn;
