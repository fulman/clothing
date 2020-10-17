import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I alredy have an account</h2>
        <span>Sign in with your email and password</span>
        <form>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SignIn;
