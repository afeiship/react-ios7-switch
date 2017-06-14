import './style.scss';

import React,{ PureComponent } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

export default class extends PureComponent{

  static propTypes={
    className:PropTypes.string,
    theme:PropTypes.oneOf(['red','green','blue']),
    disabled:PropTypes.bool,
    size:PropTypes.string,
    value:PropTypes.bool,
    onChange:PropTypes.func
  };

  static defaultProps={
    theme: 'green',
    disabled: false,
    size: '30px',
    value: false,
    onChange: noop
  };

  constructor(props){
    super(props);
    this.state={
      value:props.value
    };
  }

  componentWillReceiveProps(nextProps,nextState){
    const {value} = nextProps;
    if(nextProps.value!== this.state.value){
      this.setState({value});
    }
  }

  _onClick(inEvent){
    inEvent.preventDefault();
    const value = !this.state.value;
    const {className,size,theme,onChange,...props} = this.props;
    const {name} = this.refs.target;
    const target = {value,...props};
    this.setState({ value },()=>{
      this.props.onChange({ target });
    });
  }

  render(){
    const {className,size,theme,disabled,...props} = this.props;
    return (
      <label
        onClick={this._onClick.bind(this)}
        data-theme={theme}
        data-disabled={disabled}
        style={{
          fontSize:size
        }}
        className={classNames('react-ios7-switch',className)}>
        <input type="checkbox" ref="target" {...props} onChange={noop} checked={this.state.value} disabled={disabled} />
        <span></span>
      </label>
    );
  }
}
