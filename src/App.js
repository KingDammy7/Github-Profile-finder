import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Search from "./components/Pages/Search";
import About from "./components/Pages/About";
import User from "./components/users/User";
import Users from "./components/users/Users";
import Alert from "./components/Alerts";
import axios from "axios";
import React, { Component, Fragment } from "react";
import ReactPaginate from "react-paginate";

let githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
let githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

class App extends Component {
	state = {
		users: [],
		user: {},
		repos: [],
		loading: false,
		alert: null,
		totalResults: 0,
		count: 0,
		totalPages: 0,
		currentPageNo: 0,
	};

	// Search Github Users
	searchUsers = async (text, currentPage) => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}?_page=${currentPage}`
		);
		this.setState({
			users: res.data.items,
			count: res.data.total_count,
			loading: false,
		});
	};
	// // get more users
	// getUsers = async (text, currentPage) => {
	// 	this.setState({ loading: true });
	// 	const res = await axios.get(
	// 		`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}?_page=per_page=50&page=2>;rel="next",`
	// 	);
	// 	this.setState({
	// 		users: res.data.items,
	// 		count: res.data.total_count,
	// 		loading: false,
	// 	});
	// 	return data;
	// };

	// const handlePageClick =async (data) => {
	// console.log(data.selected)
	// let currentPage = data.selected + 1

	// const searchUsersServer = await this.searchUsers(currentPage);

	// setUsers(searchUsersServer);

	// Get single Github user
	getUser = async (username) => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
		);
		this.setState({
			user: res.data,
			loading: false,
		});
	};

	// Get user repos
	getUserRepos = async (username) => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
		);
		this.setState({
			repos: res.data,
			loading: false,
		});
	};

	//Clear users from state
	clearUsers = () => this.setState({ users: [], loading: false });

	// Set Alert
	setAlert = (msg, type) => {
		this.setState({ alert: { msg, type } });
		setTimeout(() => this.setState({ alert: null }), 2000);
	};
	render() {
		// 	// get more users
		// getUsers = async (text, currentPage) => {
		// 	this.setState({ loading: true });
		// 	const res = await axios.get(
		// 		`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}?_page=per_page=30&page=2>;rel="next",`
		// 	);
		// 	this.setState({
		// 		users: res.data.items,
		// 		count: res.data.total_count,
		// 		loading: false,
		// 	});
		// 	return data;
		// };

		// const handlePageClick = (data) => {
		// 	console.log(data.selected);
		// 	letcurrentPage = data.selected + 1

		// const getUsersfromGithub = await getUsers(text, currentPage);
		// setUsers(getUsersfromGithub);

		// };
		const { users, user, repos, loading, count } = this.state;
		return (
			<Router>
				<div className='App h-screen'>
					<Nav />

					<div className='container bg-gray-900'>
						<Alert alert={this.state.alert} />

						<Routes>
							<Route
								exact
								path='/'
								element={
									<Fragment>
										<div className='bg-gray-900 h-screen w-full'>
											<Search
												searchUsers={this.searchUsers}
												clearUsers={this.clearUsers}
												showClear={users.length > 0 ? true : false}
												setAlert={this.setAlert}
											/>
											<p className='text-white'>Total Result: {count ?? 0}</p>
											{/* <ReactPaginate
												previousLabel={"previous"}
												nextLabel={"next"}
												breakLabel={"..."}
												pageCount={3}
												marginPagesDisplayed={2}
												pageRangeDisplayed={2}
												onPageChange={''}
												containerClassName='pagination justify-center'
												pageClassName='page-item'
												pageLinkClassName='page-link'
												previousClassName='page-item'
												previousLinkClassName='page-link'
												nextClassName='page-item'
												nextLinkClassName='page-link'
												breakClassName='page-item'
												breakLinkClassName='page-link'
												activeClassName='active'
											/> */}
											<Users loading={loading} users={users} />
										</div>
									</Fragment>
								}
							/>

							<Route exact path='/about' element={<About />} />

							<Route
								path='/user/:login'
								element={
									<User
										getUser={this.getUser}
										getUserRepos={this.getUserRepos}
										user={user}
										repos={repos}
										loading={loading}
									/>
								}
							/>
						</Routes>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
