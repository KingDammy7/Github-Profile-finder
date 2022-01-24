import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
	state = {
		text: "",
	};

	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		showClear: PropTypes.bool.isRequired,
		setAlert: PropTypes.func.isRequired,
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.text === "") {
			this.props.setAlert("Please enter something", "light");
		} else {
			this.props.searchUsers(this.state.text);
			this.setState({ text: "" });
		}
	};


getPagesCount = (total, denominator) => {
	const divisible = total % denominator === 0;
	const valueToBeAdded = divisible ? 0 : 1;
	return Math.floor(total / denominator) + valueToBeAdded;
};

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { showClear, clearUsers } = this.props;
		return (
			<div className='w-full flex flex-col justify-center md: mt-1'>
				<section className='relative 2xl bg-gray-900 min-h-full w-full'>
					<h2 className='text-5xl font-bold text-center font-heading pt-20 text-white'>
						GitHub User Search
					</h2>
					<div className='mt-10 w-full'>
						<form className='w-full flex justify-center' onSubmit={this.onSubmit}>
							<input
								type='text'
								name='text'
								value={this.state.text}
								id='search-input'
								className='shadow-sm text-center focus:ring-black p-2 focus:border-black sm:text-sm border-black w-full rounded-md ml-5 lg:w-1/2'
								placeholder='Search For User'
								onChange={this.onChange}
							/>
							{/* <button
								class='bg-blue-500 hover:bg-blue-700 ml-3 text-white font-bold py-2 px-4 rounded-full'
								type='submit'
							>
								Search
							</button> */}
						</form>
					</div>
					<div className='flex flex-col items-center justify-center mt-3 mb-5'>
					{showClear && (
						<button className='bg-blue-500 hover:bg-blue-700 ml-7 text-white font-bold py-2 px-4 rounded-full' onClick={clearUsers}>
							CLEAR
						</button>
						
					)}
					</div>
				</section>
			</div>
		);
	}
}

export default Search;
