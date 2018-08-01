import React, { Component } from 'react';

// var nodemailer = require("nodemailer");

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'amelia.santrach@gmail.com',
//     pass: 'pass!'
//   }
// });


class ContactForm extends Component{

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this.setState({value.event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();

    // var mailOptions = {
    //   from: 'amelia.santrach@gmail.com',
    //   to: 'amelia.santrach@gmail.com',
    //   subject: 'Sending Email using Node.js',
    //   text: 'That was easy!'
    // };

    // transporter.sendMail(mailOptions, function(error, info){
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log('Email sent: ' + info.response);
    //   }
    // });
  }

  render() {
    return (
       <form onSubmit={this.handleSubmit} className="contact-form">
          <div className="controls">
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="name">Your firstname *</label>
                  <input type="text" name="name" id="first_name" placeholder="Enter your firstname" required="required" className="form-control"/>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="surname">Your lastname *</label>
                  <input type="text" id="surname" name="surname" placeholder="Enter your  lastname" required="required" className="form-control"/>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Your email *</label>
              <input type="email" id="email" name="email" placeholder="Enter your  email" required="required" className="form-control"/>
            </div>
            <div className="form-group">
              <label htmlFor="surname">Your message for us *</label>
              <textarea rows="4" id="message" name="message" placeholder="Enter your message" required="required" className="form-control"></textarea>
            </div>
            <div className="text-center">
              <input type="submit" id="sendMessageButton" name="name" value="Send message" className="btn btn-primary btn-block"/>
            </div>
          </div>
        </form>
    );
  }
}

export default ContactForm;
