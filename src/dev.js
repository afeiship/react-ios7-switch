import React from 'react';
import ReactDOM from 'react-dom';
import ReactIos7Switch from './main';

class App extends React.Component {
  render(){
    return (
      <div classNames="hello-switch">
        <ReactIos7Switch />
        <ReactIos7Switch theme="blue" />
        <ReactIos7Switch theme="blue" checked={true} size="50px" />
        <ReactIos7Switch theme="green" disabled={true} size="60px" checked={true} />
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
