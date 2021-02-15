import { useApp } from '@/hooks';
import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, Input } from './styles';

interface SearchProps extends TextInputProps {
	close: () => void;
}

const Search: React.FC<SearchProps> = ({ close, ...rest }) => {
	const { searchQuery, setSearchQuery } = useApp();

	const handleOnBlur = () => {
		close();
	};

	const handleOnChangeText = (query: string) => {
		setSearchQuery(query);
	};

	return (
		<Container>
			<Input
				onChangeText={query => handleOnChangeText(query)}
				autoFocus
				value={searchQuery}
				onBlur={() => handleOnBlur()}
				placeholder="Search"
				{...rest}
			/>
		</Container>
	);
};

export default Search;
