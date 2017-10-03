import {h} from 'preact';
import Emojify from 'react-emojione';
import './PullRequestListItem.css';

export default (props) => {
  return (
    <li className="PullRequestListItem">
      <div className="PullRequestListItem__emoji">
        <Emojify style={{width: 32, height: 32}}>:white_check_mark:</Emojify>
      </div>

      <div className="PullRequestListItem__text">
        <a href={props.html_url}
           target="_blank"
           rel="noopener noreferrer">
          {props.title}
        </a>
      </div>
    </li>
  );
}
