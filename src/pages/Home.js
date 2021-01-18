import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<React.Fragment>
			<h1>Home Page</h1>
			<Link to="/profile"> Go To Profile</Link>
		</React.Fragment>
	);
};

export default Home;
