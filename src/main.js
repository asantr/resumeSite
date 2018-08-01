import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './contact.js';
import ReactDOM from 'react-dom';
import './globals.js';
class Main extends Component {
	showRes() {
		window.open('../SantrachResume.pdf');
	}


  render() {
    return (
       <div className="wrapper">
      <div className="main"> 
       
        <section id="page1">
          <div className="overlay"></div>
          <div className="content">
            <div className="container clearfix">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-12">
                  <h1>Amelia Santrach</h1>
                  <p className="italic"> {window.headline_one}</p>
                  <p className="italic">{window.headline_two}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="icon faa-float animated"><i className="fa fa-angle-double-down"></i></div>
        </section>
        
        <section id="page2">
          <div className="content">
            <div className="container clearfix">
              <div className="row">
                <div className="col-md-6"> 
                  <h2 className="heading">Who am I?</h2>
                  <p className="lead"></p>
                  <p>{window.about_me_one}</p>
                  <p>{window.about_me_two} </p>
                </div>
                <div className="col-md-5 col-md-offset-1">
                  <p><img src="img/about.jpg" alt="" className="img-responsive img-circle"/></p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <br></br>
              <input type="submit" onClick={this.showRes} id="resume_btn" value="View Resume" className="btn btn-primary btn-block"/>
            </div>
          </div>
        </section>
        
        <section id="page3" className="section-gray">
          <div className="content">
            <div className="container clearfix">
              <div className="row services">
                <div className="col-md-12">
                  <h2 className="heading">Skills</h2>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="box">
                        <div className="icon"><i className="fa fa-desktop"></i></div>
                        <h4 className="heading">Languages</h4>
                        <p>{window.skills_one}</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="box">
                        <div className="icon"><i className="fa fa-print"></i></div>
                        <h4 className="heading">Operating Systems</h4>
                        <p>{window.skills_two}</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="box">
                        <div className="icon"><i className="fa fa-globe"></i></div>
                        <h4 className="heading">Databases</h4>
                        <p>{window.skills_three}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="box">
                        <div className="icon"><i className="fa fa-lightbulb-o"></i></div>
                        <h4 className="heading">Tools</h4>
                        <p>{window.skills_four}</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="box">
                        <div className="icon"><i className="fa fa-envelope-o"></i></div>
                        <h4 className="heading">Data Science</h4>
                        <p>{window.skills_five}</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="box">
                        <div className="icon"><i className="fa fa-user"></i></div>
                        <h4 className="heading">Others</h4>
                        <p>{window.skills_six} </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="page4">
          <div className="content">
            <div className="container clearfix">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="heading">Portfolio</h2>
                  <p className="text-center">Just few examples of my work.</p>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="box"><a href="#" title=""><img src="img/portfolio-1.jpg" alt="" className="img-responsive"/></a></div>
                    </div>
                    <div className="col-sm-4">
                      <div className="box"><a href="#" title=""><img src="img/portfolio-2.jpg" alt="" className="img-responsive"/></a></div>
                    </div>
                    <div className="col-sm-4">
                      <div className="box"><a href="#" title=""><img src="img/portfolio-3.jpg" alt="" className="img-responsive"/></a></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="box"><a href="#" title=""><img src="img/portfolio-4.jpg" alt="" className="img-responsive"/></a></div>
                    </div>
                    <div className="col-sm-4">
                      <div className="box"><a href="#" title=""><img src="img/portfolio-5.jpg" alt="" className="img-responsive"/></a></div>
                    </div>
                    <div className="col-sm-4">
                      <div className="box"><a href="#" title=""><img src="img/portfolio-6.jpg" alt="" className="img-responsive"/></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="page5" className="section-gray">
          <div className="content">
            <div className="container clearfix">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="heading">Relevant Course Work</h2>
                  <div className="row">
                    <div className="col-sm-6">
                    	<h4 className="heading"> Computer Science</h4>
                      <p>{window.cs_courses} </p>
                      <h4 className="heading"> Theory Courses </h4>
                      <p>{window.theory_courses}                       </p>
                    </div>
                    <div className="col-sm-6">
                    	<h4 className="heading"> Physics </h4>
                      <p>{window.physics_courses} </p>
                      <h4 className="heading"> Mathematics </h4>
                      <p>  {window.math_courses}    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <section id="page6">
          <div className="content">
            <div className="container clearfix">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="heading">Contact</h2>
                  <div className="row">
                    <div className="col-md-6">
                     <div className="contact-form">
                     	<ContactForm />
                     </div>
                    </div>
                    <div className="col-md-6">
                      <p>If you would like to get in touch with me, please shoot me an email or connect with me on LinkedIn! Thanks for visiting my site! </p>
                      	<div id="linkedin"></div>
                    </div>
                  </div>
                  <div className="row copyright">
                    <div className="col-md-6">
                      <p>&copy;2018 Amelia Santrach</p>
                    </div>
                    <div className="col-md-6">
                      <p className="credit">Code by <a href="https://bootstrapious.com/portfolio-themes">Bootstrapious</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
    );
  }
}

export default Main;
