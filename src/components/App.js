import React, { useState } from 'react';
import '../styles/App.css';
import { movies } from '../utils/movieList';

const App = () => {
	const [inputValue, setInputValue] = useState('');
	const [results, setResult] = useState(null);

	function handleClick(e) {
		e.preventDefault();

		const arr = [];
		movies.map(m => {
			if (m?.title?.toLowerCase() === inputValue?.toLowerCase()) {
				arr.push(m.title);
			}
		});
		setResult(arr);
	}

	function handleChange(e) {
		setInputValue(e.target.value);
	}

	return (
		<div id="main">
			<form id="form">
				<input
					type="text"
					onChange={handleChange}
					value={inputValue}
					id="movie-input"></input>
				<button id="button" onClick={handleClick}>
					Search
				</button>
			</form>
			<div id="result">
				{!results ? (
					<div className="movie"></div>
				) : (
					results.map(movie => <div className={'movie'}>{movie}</div>)
				)}
			</div>
		</div>
	);
};

export default App;
