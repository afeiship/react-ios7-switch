import './style.scss';

import classNames from 'classnames';
export default class extends React.Component{
  static propTypes={
    theme:React.PropTypes.string,
    disabled:React.PropTypes.bool,
    size:React.PropTypes.string,
    cssClass:React.PropTypes.string,
    checked:React.PropTypes.bool,
    onChange:React.PropTypes.func
  };
  static defaultProps={
    theme:'green',
    disabled:null,
    size:'30px',
    cssClass:'',
    checked:false
  };

  constructor(props){
    super(props);
    this.state={
      checked:props.checked
    };
  }
  _click(ev){
    this.setState({
      checked:!this.state.checked
    });
    ev.preventDefault();
    this.props.onChange && this.props.onChange(this.state,ev);
  }
  render(){
    return (
      <label
        onClick={this._click.bind(this)}
        data-theme={this.props.theme}
        data-disabled={this.props.disabled}
        style={{
          fontSize:this.props.size
        }}
        className={classNames('react-ios7-switch',this.props.cssClass)}>
        <input type="checkbox" checked={this.state.checked} disabled={this.props.disabled} />
        <span></span>
      </label>
    );
  }
}
