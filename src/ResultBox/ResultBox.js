import {h} from 'preact';
import Emojify from 'react-emojione';
import './ResultBox.css';

export default (props) => {
  return (
    <div className="ResultBox">
      <span className="ResultBox__title">Your Hacktoberfest progress is:</span>

      <span className="ResultBox__count">{props.count}/{props.needed}</span>

      <span className="ResultBox__motivation"><Emojify>{props.motivation}</Emojify></span>
    </div>
  );
}
