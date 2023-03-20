import './index.css'
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showErrorMsgFirstName: false,
    showErrorMsgLastName: false,
    isFormSubmitted: false,
  }

  onClickAnotherResponse = () => {
    this.setState({
      isFormSubmitted: false,
      firstName: '',
      lastName: '',
    })
  }

  onSubmitForm = event => {
    event.preventDefault()

    // const {firstName, lastName} = this.state

    const isValidLastName = this.validateLastName()
    const isValidFirstName = this.validateFirstName()
    if (isValidFirstName && isValidLastName) {
      this.setState({
        isFormSubmitted: true,
      })
    } else {
      this.setState({
        isFormSubmitted: false,
        showErrorMsgFirstName: !isValidFirstName,
        showErrorMsgLastName: !isValidLastName,
      })
    }
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({
      showErrorMsgLastName: !isValidLastName,
    })
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({
      showErrorMsgFirstName: !isValidFirstName,
    })
  }

  onChangeLastName = event => {
    this.setState({
      lastName: event.target.value,
    })
  }

  onChangeFirstName = event => {
    this.setState({
      firstName: event.target.value,
    })
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  renderSuccessView = () => (
    <div className="success-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-logo"
      />
      <h1>submitted successfully</h1>
      <button
        type="button"
        className="registration-button"
        onClick={this.onClickAnotherResponse}
      >
        submit another response
      </button>
    </div>
  )

  render() {
    const {
      showErrorMsgFirstName,
      showErrorMsgLastName,
      isFormSubmitted,
    } = this.state
    return (
      <div className="app-bg-container">
        <h1 className="registration-heading"> Registration</h1>
        <div className="registration-container">
          {isFormSubmitted ? (
            this.renderSuccessView()
          ) : (
            <form
              className="registration-details-container"
              onSubmit={this.onSubmitForm}
            >
              <label htmlFor="firstname" className="form-label-text">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                placeholder="firstname"
                onBlur={this.onBlurFirstName}
                onChange={this.onChangeFirstName}
                className="input-class"
              />
              {showErrorMsgFirstName && <p>*required</p>}
              <label
                htmlFor="lastname"
                className="form-label-text input-margin"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                onBlur={this.onBlurLastName}
                onChange={this.onChangeLastName}
                placeholder="lastname"
                className="input-class "
              />
              {showErrorMsgLastName && <p>*required</p>}
              <div className="registration-button-container">
                <button type="submit" className="registration-button">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
