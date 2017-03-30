import React from 'react';
import ReactDOM from 'react-dom';

const Results = (props) => {
  let reposList = props.repos.map(repo => {
    const repoName = <a href={repo.html_url} target='_blank'>{repo.name}</a>;
    const repoDesc = repo.description || 'No description available';
    return (
        <li key={repo.id}>{repoName}
          <ul>
            <li>{`Description: ${repoDesc}`}</li>
            <li>{`Date created: ${repo.created_at}`}</li>
            <li>{`Number of forks: ${repo.forks}`}</li>
            <li>{`Number of issues: ${repo.open_issues}`}</li>
            <li>{`Number of watchers: ${repo.watchers}`}</li>
            <li>{`Number of stargazers: ${repo.stargazers_count}`}</li>
          </ul>
        </li>
    );
  });
  return (
    <div>
      <h3>{props.user.username}</h3>
      <ol>
        {reposList}
      </ol>
    </div>
  );
};

export default Results;

/*
For each repo:

username
1. hyperlinked repo name
  - description: xyz
  - etc.
2. hyperlinked repo name

  Repo name w/ link
  Repo description
  Date created
  Number of forks & issues
  # of watchers & stargazers
*/
