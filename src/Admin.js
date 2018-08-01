import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './contact.js';
import ReactDOM from 'react-dom';
import './globals.js';

class Admin extends Component {

  handleHeadlineSubmit(event){

    event.preventDefault();
    window.headline_one = document.getElementById("headline_one").value;
    window.headline_two = document.getElementById("headline_two").value;
  }

  handleSkillsSubmit(event){

    event.preventDefault();
  }

  handleCoursesSubmit(event){

    event.preventDefault();
  }

  handleAboutMeSubmit(event){

    event.preventDefault();
  }



  render() {
    return (
       <div className="wrapper">
      <div className="main"> 
      <section id="page2">
          <div className="content">
            <div className="container clearfix">
              <div className="row">
                <div className="col-md-6"> 
                  <h1>Edit your main page</h1>
                  <form onSubmit={this.handleHeadlineSubmit}>
                    <div className="controls">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                          <label htmlFor="headline_one">Headline One *</label>
                          <textarea rows="4" id="headline_one" name="headline_one" placeholder={window.headline_one} className="form-control"></textarea>
                        </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                           <label htmlFor="headline_two">Headline Two *</label>
                          <textarea rows="4" id="headline_two" name="headline_two" placeholder={window.headline_two} className="form-control"></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                      <input type="submit" id="updateSite" name="name" value="Update Headlines" className="btn btn-primary btn-block"/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>          
        </div>
      </section>

    <section id="page3">
      <div className="content">
        <div className="container clearfix">
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={this.handleAboutMeSubmit}>
                <div className="controls">
                  <div className="row">
                  <h4 className="heading">About Me</h4>
                    <div className="col-sm-6">
                      <div className="form-group">
                        
                        <div className="form-group">
                             <label htmlFor="about_me_one">About Me Paragraph One *</label>
                            <textarea rows="8" id="about_me_one" name="about_me_one" placeholder={window.about_me_one} className="form-control"></textarea>
                        </div>
                      </div>
                      </div>
                        <div className="col-sm-6">
                        <div className="form-group">
                             <label htmlFor="about_me_two">About Me Paragraph Two *</label>
                            <textarea rows="8" id="about_me_two" name="about_me_two" placeholder={window.about_me_two} className="form-control"></textarea>
                        </div>
                      </div>

                      <div className="text-center">
                      <input type="submit" id="updateAbout" name="name" value="Update About Me" className="btn btn-primary btn-block"/>
                    </div>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>          
        </div>
      </section>

        <section id="page4">
          <div className="content">
            <div className="container clearfix">
              <div className="row">
                <div className="col-md-6"> 

                  <form onSubmit={this.handleSkillsSubmit}>
                    <div className="controls">
                      <div className="row">
                      <h4 className="heading">Skills</h4>
                        <div className="col-sm-6">
                          <div className="form-group"> 
              
                      <div className="form-group">
                           <label htmlFor="skills_one">Languages *</label>
                          <textarea rows="4" id="skills_one" name="skills_one" placeholder={window.skills_one} className="form-control"></textarea>
                        </div>
                      <div className="form-group">
                           <label htmlFor="skills_two">Operating Systems *</label>
                          <textarea rows="4" id="skills_two" name="skills_two" placeholder={window.skills_two} className="form-control"></textarea>
                      </div>
                      <div className="form-group">
                           <label htmlFor="skills_three">Databases *</label>
                          <textarea rows="4" id="skills_three" name="skills_three" placeholder={window.skills_three} className="form-control"></textarea>
                        </div>
                     </div>
                      </div>
                        <div className="col-sm-6">

                      <div className="form-group">
                           <label htmlFor="skills_four">Tools *</label>
                          <textarea rows="4" id="skills_four" name="skills_four" placeholder={window.skills_four} className="form-control"></textarea>
                      </div>
                      <div className="form-group">
                           <label htmlFor="skills_five">Data Science *</label>
                          <textarea rows="4" id="skills_five" name="skills_five" placeholder={window.skills_five} className="form-control"></textarea>
                        </div>
                      <div className="form-group">
                           <label htmlFor="skills_six">Others *</label>
                          <textarea rows="4" id="skills_five" name="skills_five" placeholder={window.skills_five} className="form-control"></textarea>
                      </div>
                    </div>
                    <div className="text-center">
                      <input type="submit" id="updateSkills" name="name" value="Update Skills" className="btn btn-primary btn-block"/>
                    </div>
                  </div>
                  </div>
                
              </form>
            </div>
          </div>
        </div>          
      </div>
    </section>
    <section id="page5">
      <div className="content">
        <div className="container clearfix">
          <div className="row">
            <div className="col-md-6"> 
              <form onSubmit={this.handleCoursesSubmit}>
                <div className="controls">
                  <div className="row">
                  <h4 className="heading">Courses</h4>
                    <div className="col-sm-6">
                      <div className="form-group">
                      <div className="form-group">
                           <label htmlFor="cs_courses">Computer Science *</label>
                          <textarea rows="8" id="cs_courses" name="cs_courses" placeholder={window.cs_courses} className="form-control"></textarea>
                        </div>
                      <div className="form-group">
                           <label htmlFor="theory_courses">Theory *</label>
                          <textarea rows="8" id="theory_courses" name="theory_courses" placeholder={window.theory_courses} className="form-control"></textarea>
                      </div>
                      </div>
                      </div>
                      <div className="col-sm-6">

                      <div className="form-group">
                           <label htmlFor="physics_courses">Physics *</label>
                          <textarea rows="8" id="physics_courses" name="physics_courses" placeholder={window.physics_courses} className="form-control"></textarea>
                        </div>
                      <div className="form-group">
                           <label htmlFor="math_courses">Mathematics *</label>
                          <textarea rows="8" id="math_courses" name="math_courses" placeholder={window.math_courses} className="form-control"></textarea>
                      </div>
                    </div>
                    <div className="text-center">
                      <input type="submit" id="updateCourses" name="name" value="UpdateCourses" className="btn btn-primary btn-block"/>
                    </div>
                  </div>
                  </div>
                </form>
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

export default Admin;



ReactDOM.render(<Admin />, document.getElementById('root'));

