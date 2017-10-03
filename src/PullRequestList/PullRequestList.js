import {h} from 'preact';

export default (props) => {
  return (
    <ul className="PullRequestList">{props.children}</ul>
  );
}
