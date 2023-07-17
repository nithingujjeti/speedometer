import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    const {speed} = this.state
    this.setState({speed: speed + 10})
  }

  onDecrement = () => {
    const {speed} = this.state
    this.setState({speed: speed - 10})
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="Speedometer"
        />
        <p className="description">
          Speed is <span className="speed"> {speed} </span> mph
        </p>
        <p className="limit-inst">Min Limit is 0mph,Max Limit is 200mph</p>
        <div className="button-container">
          <button onClick={this.onIncrement} type="button" className="btn-acc">
            Accelerate
          </button>
          <button
            onClick={this.onDecrement}
            type="button"
            className="btn-brake"
          >
            Apply brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
