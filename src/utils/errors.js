export class UserNotFoundError extends Error {
  constructor(username) {
    super();

    this.name = 'UserNotFoundError';
    this.message = `No user could be found on GitHub using the provided username ${username}.`;
    this.username = username;
  }
}

export class GitHubAPIError extends Error {
  constructor() {
    super();

    this.name = 'GitHubAPIError';
    this.message = 'There was an error talking to GitHub API. Please try again later.';
  }
}
