import React from 'react';
import { Container, Row, Col, Input, Button, Form } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postSendEmail } from '../../../../modules/mail/mailAction';
import { Element } from 'react-scroll';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      subject: '',
      mailbody: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleChangeMailBody = this.handleChangeMailBody.bind(this);
  }
  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }
  handleChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }
  handleChangeSubject(event) {
    this.setState({
      subject: event.target.value
    });
  }
  handleChangeMailBody(event) {
    this.setState({
      mailbody: event.target.value
    });
  }

  handleSubmit(event) {
    //this.props.mailActions.postSendEmail()
    event.preventDefault();

    if (this.props.loading === true) return;

    const data = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      mailbody: this.state.mailbody
    };
    this.props.mailActions.postSendEmail(data);
  }

  render() {
    let messageClass = 'message';
    if (this.props.loading === true) {
      messageClass = 'message hide';
    }
    if (this.props.success !== true) {
      messageClass = 'message hide';
    }
    return (
      <Element id="contact-section" className="contact-section">
        <Container>
          <div className="title wow bounceInLeft animated">Contact</div>
          <div className="title-bar wow bounceInLeft animated" />
          <Row>
            <Col md={{ size: 6, offset: 3 }} xs="12">
              <Form onSubmit={this.handleSubmit}>
                <Input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  ref={ref => (this.name = ref)}
                  onChange={this.handleChangeName}
                />
                <Input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  ref={ref => (this.email = ref)}
                  onChange={this.handleChangeEmail}
                />
                <Input
                  required
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  ref={ref => (this.subject = ref)}
                  onChange={this.handleChangeSubject}
                />
                <Input
                  required
                  className="subject"
                  rows="5"
                  type="textarea"
                  name="mailbody"
                  placeholder="Hello, Eric"
                  ref={ref => (this.mailbody = ref)}
                  onChange={this.handleChangeMailBody}
                />
                <div className={messageClass}>
                  <span className="fa fa-check" />Your message was sent, thank
                  you!
                </div>
                <Input type="submit" className="submit-button">
                  Submit
                </Input>
              </Form>
            </Col>
          </Row>
        </Container>
      </Element>
    );
  }
}

export default connect(
  state => ({
    loading: state.mail.loading,
    error: state.mail.error,
    success: state.mail.success
  }),
  dispatch => ({
    mailActions: bindActionCreators(
      {
        postSendEmail
      },
      dispatch
    )
  })
)(Contact);
