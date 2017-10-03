import {h} from 'preact';
import './FormSubmit.css';

export default (props) => {
  return <button className="FormSubmit" type="submit" onClick={props.onClick} disabled={props.disabled}>{props.text}</button>
}
