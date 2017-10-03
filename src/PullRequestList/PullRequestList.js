import {h} from 'preact';
import './PullRequestList.css';

export default (props) => {
  return (
    <ul className="PullRequestList">{props.children}</ul>
  );
}
