import React from 'react';
import PropTypes from 'prop-types';
import Repoitems from './RepoItems';

const Repos = ({ repos }) => {
  return repos.map(repo => <Repoitems repo={repo} key={repo.id} />);
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};
export default Repos;
