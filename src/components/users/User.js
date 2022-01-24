import React, {useEffect} from 'react';
import Spinner from "../spinner";
import Repos from "../Repos/Repo";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";



function User(props) {
    const {
        name,
        avatar_url,
        bio,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
     
      } = props.user
  
      const { loading, repos, getUser, getUserRepos } = props;
      const {login} = useParams()
      useEffect(()=>{
          getUser(login)
          getUserRepos(login)
      }, [login] )
  
      if (loading) return <Spinner />;
  
      return (
        <div className="user w-full flex flex-col items-center h-screen">
          <Link to="/" className="btn btn-light">
            Back To Search
          </Link>
          
          <div className=" w-full flex flex-col items-center grid-2">
            <div className="all-center">
              <img
                src={avatar_url}
                alt="profile-pic"
                className="round-img rounded-full"
                style={{ width: "200px" }}
              />
              <div className="user_info text-center text-white">
              <h3>About</h3>
                <h1 className="profile_name text-white">{name}</h1>
                <p>{bio}</p>
              </div>
            </div>
            <div className="user_right ">
            <button
								class='bg-blue-500 hover:bg-white mt-3 ml-3 text-white font-bold py-2 px-4 rounded-full'
								
							>  <a href={html_url} className="my-1 user_visit">
								Visit Github Profile
                </a>
							</button>
              
            </div>
  
            
          </div>
  
  
          
          <div className="mt-4 text-white text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-dark">Public Repos: {public_repos}</div>
            <div className="badge badge-light">Public Gists: {public_gists}</div>
          </div>
          <h3 className='text-white text-center mt-2'>LINKS TO RECENT REPOSITORY</h3>
  
          <Repos repos={repos} />
        </div>
      )
}

    User.propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
  };

export default User;
