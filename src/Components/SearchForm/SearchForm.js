import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { closeHighlightPhotos } from 'redux/highlightReducer/highlightCollectionsReducer/action';
import { Input, Form } from './SearchForm.styles';

const SearchForm = (props) => {
	const [searchTerm, setSearchTerm] = useState('');
	const input = React.useRef(null);
	const history = useHistory();
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchTerm && props.formDisplay) {
			history.push(`/search/collections/${searchTerm}`);
			dispatch(closeHighlightPhotos());
		} else {
			history.push(`/search/photos/${searchTerm}`);
		}
		setSearchTerm('');
	};

	useEffect(() => {
		input.current.focus();
	}, []);

	return (
		<Form onSubmit={handleSubmit}>
			<Input
				id='search'
				ref={input}
				formDisplay={props.formDisplay}
				placeholder={props.formDisplay ? '+ Collection' : 'search...'}
				value={searchTerm}
				onChange={handleChange}
			/>
		</Form>
	);
};

export default SearchForm;
