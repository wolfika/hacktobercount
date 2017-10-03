import {h} from 'preact';

export default (props) => {
  return (
    <li className="PullRequestListItem">
      <a href={props.html_url}
         target="_blank"
         rel="noopener noreferrer">
        {props.title}
      </a>
    </li>
  );
}
