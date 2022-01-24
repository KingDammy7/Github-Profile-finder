import Spinner from "../spinner";
import UserItem from "./Useritem";
import PropTypes from "prop-types";




// class User extends Component {

// render() {
const Users = ({ users, loading }) => {
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div style={userStyle} className='bg-gray-900'>
				{users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
};



const userStyle = { 
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	gridGap: "1rem",
	
}

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
}; 


export default Users;




