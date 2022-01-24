import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
	return (
		<div className='w-full ml-5 p-5 px-4 mb-6 transition duration-500 transform md:w-6/12 xl:4/12 lg:w-11/12 lg:mb-0 hover:scale-110'>
			<div className='max-w-md px-8 py-4 my-2 bg-gray-800 rounded-lg shadow-lg'>
				<div className='px-6'></div>
				<div className='flex flex-col items-center text-white user-item'>
					<img
						src={avatar_url}
						alt=''
						className='round-img items-center justify-center rounded-full'
						style={{ width: "80px" }}
					/>
					<h3>{login}</h3>
					<p>Login to see more.</p>
					<button
						className='px-8 py-3 mt-3 mb-1 mr-1 text-base font-bold text-gray-300 uppercase transition-all duration-150 ease-in bg-blue-700 rounded-full shadow-md outline-none hover:shadow-lg focus:outline-none hover:bg-blue-600 '
						type='button'
					>
						<Link to={`/user/${login}`}>More</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
