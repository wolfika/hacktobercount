import {h} from 'preact';
import './Form.css';

export default (props) => {
  return (
      <form className="Form" onSubmit={props.onSubmit}>
        {props.children}
      </form>
  );
}
