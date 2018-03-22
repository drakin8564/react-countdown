import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {

    super(props);
    this.state = { 
      hour: '00',
      minute: '00',
      second: '00',
      inputHour: 0,
      inputMinute: 0,
      inputSecond: 0,
      timerSeconds: 0,
      intervalId: 0
    };

  }
  clearTimer() {

    clearInterval(this.state.intervalId);

  }
  setTimer() {

    console.log(this);
    this.clearTimer();
    this.setState({timerSeconds: this.state.inputSecond + ((this.state.inputMinute + (this.state.inputHour * 60)) * 60)});

    var intervalId = setInterval(this.updateCount.bind(this), 1000);
    this.setState({intervalId: intervalId});
    
  }
  setTimerValues() {

    this.setState({hour: ('0' + Math.floor(this.state.timerSeconds / 60 / 60)).slice(-2)});
    var dropSeconds = this.state.hour * 60 * 60;
    this.setState({minute: ('0' + Math.floor((this.state.timerSeconds - dropSeconds) / 60)).slice(-2)});
    dropSeconds = dropSeconds + this.state.minute * 60;
    this.setState({second: ('0' + (this.state.timerSeconds - dropSeconds)).slice(-2)});

  }
  updateCount() {

    this.setTimerValues();

    if (this.state.timerSeconds <= 0) {
      this.clearTimer();
      return {};
    }

    this.setState({timerSeconds: this.state.timerSeconds - 1});

  }
  updateHour(e) {

    this.setState({inputHour: parseInt(e.target.value)});

  }
  updateMinute(e) {

    this.setState({inputMinute: parseInt(e.target.value)});

  }
  updateSecond(e) {

    this.setState({inputSecond: parseInt(e.target.value)});

  }
  render() {
    return (

      React.createElement(
        'div', 
        {className: 'app'},
        React.createElement(
          'div', 
          {className: 'countTimer container'},
          React.createElement(
            'div', 
            {className: 'timerDiv', id: 'timeHour'}, 
            this.state.hour
          ),
          ' : ',
          React.createElement(
            'div', 
            {className: 'timerDiv', id: 'timerMinute'}, 
            this.state.minute
          ),
          ' : ',
          React.createElement(
            'div', 
            {className: 'timerDiv', id: 'timerSecond'}, 
            this.state.second
          )
        ),
        React.createElement(
          'div', 
          {className: 'countSet container'}, 
          React.createElement(
            'fieldset', 
            {className: 'setField'},
            React.createElement(
              'legend', 
              {className: 'setFieldTitle'}, 
              'Countdown'
            ),
            React.createElement(
              'div', 
              {className: 'setDiv', id: 'setHour'},
              React.createElement(
                'div', 
                null, 
                'Hours'
              ),
              React.createElement(
                'input', 
                {onBlur: this.updateHour.bind(this), type: 'number', placeholder: '00'}
              )
            ),
            React.createElement(
              'div', 
              {className: 'setDiv', id: 'setMinute'},
              React.createElement(
                'div', 
                null, 
                'Minutes'
              ),
              React.createElement(
                'input', 
                {onBlur: this.updateMinute.bind(this), type: 'number', placeholder: '00'}
              )
            ),
            React.createElement(
              'div', 
              {className: 'setDiv', id: 'setSecond'},
              React.createElement(
                'div', 
                null, 
                'Seconds'
              ),
              React.createElement(
                'input', 
                {onBlur: this.updateSecond.bind(this), type: 'number', placeholder: '00'}
              )
            ),
            React.createElement(
              'button', 
              {className: 'button', id: 'setSubmit', onClick: this.setTimer.bind(this)}, 
              'Start'
            ),
            React.createElement(
              'button', 
              {className: 'button', id: 'setClear', onClick: this.clearTimer.bind(this)}, 
              'Clear'
            )
          )
        )
      )

    );
  }
}

export default App;
