import {h} from 'preact';
import './FormInput.css';

export default (props) => {
  return (
    <input className="FormInput"
           type="text"
           placeholder="johndoe"
           title="GitHub username"
           aria-label="GitHub username"
           required
           value={props.value}
           onKeyUp={props.onKeyUp}/>
  );
}
