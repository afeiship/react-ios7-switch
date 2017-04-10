import './style.scss';
import React,{PropTypes,PureComponent} from 'react';
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
    this.state={...props};
  }

  componentWillReceiveProps(nextProps,nextState){
    this.setState(nextProps);
  }

  _onClick(inEvent){
    inEvent.preventDefault();
    this.setState({
      value:!this.state.value
    },()=>{
      const {value} = this.state;
      this.props.onChange({
        target:{value}
      });
    });
  }

  _onChange(inEvent){
  }

  render(){
    const {className,size,theme,disabled} = this.props;
    return (
      <label
        onClick={this._onClick.bind(this)}
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
