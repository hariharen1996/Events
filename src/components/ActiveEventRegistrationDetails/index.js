// Write your code here
import {Component} from 'react'
import './index.css'

const constantTypes = {
  registered: 'REGISTERED',
  inprogress: 'YET_TO_REGISTER',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistration extends Component {
  render() {
    const {data} = this.props
    const {registrationStatus} = data
    switch (registrationStatus) {
      case constantTypes.registered:
        return (
          <div className="eventreg-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
                alt="registered"
                className="reg-image"
              />
            </div>
            <h1 className="event-heading">
              You have already registered for the event
            </h1>
          </div>
        )
      case constantTypes.inprogress:
        return (
          <div className="eventreg-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
                className="reg-image"
                alt="yet to register"
              />
            </div>
            <p className="yetreg-text">
              A live performance brings so much to your relationship with dance.
              Seeing dance live can often make you fall totally in love with
              this beautiful art form
            </p>
            <button type="button" className="yet-btn">
              Register Here
            </button>
          </div>
        )
      case constantTypes.registrationClosed:
        return (
          <div className="eventreg-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
                alt="registrations closed"
                className="reg-image"
              />
            </div>
            <h1 className="regcl-heading">Registrations are Closed Now!</h1>
            <p className="regcl-text">
              Stay tuned, we will reopen the registration soon!
            </p>
          </div>
        )
      default:
        return ''
    }
  }
}

export default ActiveEventRegistration
