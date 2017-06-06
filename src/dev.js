import './dev.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactIos7Switch from './main';

class App extends React.Component {
  state = {
    disabled:false,
    value:true,
  };

  _onChange(data){
    console.log(data);
  }

  _click1 = (e) =>{
    this.setState({
      disabled:!this.state.disabled
    })
  };


  _click2 = (e) =>{
    this.setState({
      value:!this.state.value
    })
  };

  render(){
    return (
      <div className="hello-switch">
        <button onClick={this._click1}>Toggle Disabled</button>
        <button onClick={this._click2}>Toggle Value</button>

        <div className="blank-20"></div>
        <ReactIos7Switch />
        <ReactIos7Switch theme="blue" />
        <ReactIos7Switch theme="blue" onChange={this._onChange.bind(this)} value={true} size="50px" />
        <ReactIos7Switch theme="green" disabled={this.state.disabled} size="60px" value={this.state.value} />
        <ReactIos7Switch theme="red" size="40px" value={this.state.value} />
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
