import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
	return (
		<Router>
			<Route path="/" exact component={Home} />
			<Route path="/profile" component={Profile} />
		</Router>
	);
}

export default App;
