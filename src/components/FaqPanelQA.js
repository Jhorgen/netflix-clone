import React, {Component} from 'react';
import { Button, Collapse } from 'react-bootstrap'
import PropTypes from "prop-types";

var myButton = {
  backgroundColor: '#4a4a4a',
  color: 'white',
  width: '70%',
  height: '50px',
  border: 'none',
  marginBottom: '10px',
  fontSize: '25px',
  textAlign: 'left'
}

var myAnswer = {
  backgroundColor: '#4a4a4a',
  color: 'white',
  width: '70%',
  fontSize: '25px',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'left',
  marginBottom: '15px',
  padding: '10px'
}

export default class FaqPanelQA extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    let temp = !this.state.clicked
    this.setState ({
      clicked: temp
    })
  }

render() {
  return(
    <div>
    <button style={myButton}
    onClick={() => this.handleClick()}
    >
    {this.props.question}
    </button>
    { this.state.clicked &&

      <div style={myAnswer} id="example-collapse-text">
      {this.props.answer}
      </div>


    }
    </div>
  );
  FaqPanelQA.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
  }
}


}
