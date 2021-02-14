import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, Input } from './styles';

interface SearchProps extends TextInputProps {
	close: () => void;
}

const Search: React.FC<SearchProps> = ({ close, ...rest }) => {
	return (
		<Container>
			<Input autoFocus onBlur={() => close()} placeholder="Search" {...rest} />
		</Container>
	);
};

export default Search;
