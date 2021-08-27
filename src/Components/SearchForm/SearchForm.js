import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from './SearchForm.styles';

const SearchForm = (props) => {
	const [searchTerm, setSearchTerm] = useState('');
	const input = React.useRef(null);
	const history = useHistory();

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchTerm && props.formDisplay) {
			history.push(`/search/collections/${searchTerm}`);
		} else {
			history.push(`/search/photos/${searchTerm}`);
		}
		setSearchTerm('');
	};

	useEffect(() => {
		input.current.focus();
	}, []);

	return (
		<form onSubmit={handleSubmit}>
			<Input
				id='search'
				ref={input}
				formDisplay={props.formDisplay}
				placeholder={props.formDisplay ? '+ Collection' : 'search...'}
				value={searchTerm}
				onChange={handleChange}
			/>
		</form>
	);
};

export default SearchForm;
