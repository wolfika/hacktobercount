import {h} from 'preact';
import './ErrorMessage.css';

export default (props) => {
  return (
    <div className="ErrorMessage">
      <span className="ErrorMessage__message">{props.children}</span>
    </div>
  );
}
