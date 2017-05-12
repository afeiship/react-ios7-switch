import './style.scss';

import React,{ PureComponent } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

export default class extends PureComponent{

  static propTypes={
    theme:PropTypes.string,
    disabled:PropTypes.bool,
    size:PropTypes.string,
    className:PropTypes.string,
    value:PropTypes.bool,
    onChange:PropTypes.func
  };

  static defaultProps={
    theme:'green',
    disabled:null,
    size:'30px',
    className:'',
    value:false,
    onChange:noop
  };

  constructor(props){
    super(props);
    this.state={
      value:props.value
    };
  }

  componentWillReceiveProps(nextProps,nextState){
    if(nextProps.value!==this.props.value){
      this.setState(nextProps);
    }
  }

  _onChange(inEvent){
    inEvent.stopPropagation();
    const value = inEvent.target.checked;
    this.setState({ value },()=>{
      this.props.onChange({
        target:{value}
      });
    });
  }

  render(){
    const {className,size,theme,disabled,...props} = this.props;
    return (
      <label
        {...props}
        data-theme={theme}
        data-disabled={disabled}
        style={{
          fontSize:size
        }}
        className={classNames('react-ios7-switch',className)}>
        <input type="checkbox" onChange={this._onChange.bind(this)} checked={this.state.value} disabled={disabled} />
        <span></span>
      </label>
    );
  }
}
