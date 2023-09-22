import React, { Component } from "react";

import { Button, Image } from "react-bootstrap";

import { Auth } from "../../Services/authentication";
import { currentUser } from "../../Data/users";
import "./dashboard.css";

export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  componentDidMount() {
    this.setState({ name: currentUser[0].name });
  }

  infoEdit(e) {
    e.preventDefault();
    Auth.notify("success", "Name changed successfully");
    Auth.updateUser(this.state.name);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="Dashboard">
        <h2>Profile Details</h2>

        <div>
          <form onSubmit={(e) => this.infoEdit(e)}>
            <label className="col-form-label">Name:</label>
            <input
              className="form-control regInput"
              onChange={(e) => this.handleChange(e)}
              name="name"
              type="name"
              value={this.state.name}
            />
            <br />

            <label className="col-form-label">Email:</label>
            <input
              className="form-control regInput"
              name="email"
              type="email"
              value={currentUser[0].email}
              disabled
            />
            <br />

            <label className="col-form-label">Mobile:</label>
            <input
              className="form-control regInput"
              type="text"
              placeholder="Mobile Number"
              ref="phone"
            />
            <br />

            <label className="col-form-label">Birthday:</label>
            <input
              className="form-control regInput"
              type="date"
              id="birthday"
              name="birthday"
            />
            <br />

            <label className="col-form-label">Qualification:</label>
            <input
              className="form-control regInput"
              type="text"
              placeholder="qualification"
              name="qualification"
            />
            <br />

            <Button type="submit" value="Update Profile">
              Update Here
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
