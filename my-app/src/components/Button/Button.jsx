import styled from './button.module.css';

function Button(props) {
  return (
    <button className={styled[props.classButton]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.text}
    </button>
  );
}

export default Button;