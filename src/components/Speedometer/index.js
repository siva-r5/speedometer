import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image-size"
        />
        <h2 className="description">
          Speed is <span>{speed}mph</span>
        </h2>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            className="speed-btn"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button type="button" className="speed-brake" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
