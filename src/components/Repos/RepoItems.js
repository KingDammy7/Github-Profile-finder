import React from 'react';
import PropTypes from 'prop-types';

const RepoItems = ({ repo }) => {
  return (
    
    <div className=' text-white'>
      <h3>
        <a href={repo.html_url} className="RepoItem">{repo.name}</a>
      </h3>
    </div>
  );
};

RepoItems.propTypes = {
  repo: PropTypes.object.isRequired
};
export default RepoItems;
