import React, { ReactNode, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Search from '../Search';
import { Container, HeaderTitle, HeaderSearchButton } from './styles';

interface HeaderProps {
	title: string;
	activeSearch?: boolean;
}

const CustomHeader: React.FC<HeaderProps> = ({
	title,
	activeSearch = false,
}) => {
	const [showSearch, setShowSearch] = useState<boolean>(false);

	const renderHeaderContent = (): ReactNode => {
		const Title = <HeaderTitle>{title}</HeaderTitle>;

		const TitleWithSearchButton = (
			<>
				<HeaderTitle>{title}</HeaderTitle>
				<HeaderSearchButton onPress={() => setShowSearch(true)}>
					<Icon name="search" size={25} color="white" />
				</HeaderSearchButton>
			</>
		);

		const SearchComponent = (
			<Search
				close={() => {
					setShowSearch(false);
				}}
			/>
		);

		if (activeSearch) {
			if (showSearch) {
				return SearchComponent;
			}
			return TitleWithSearchButton;
		}

		return Title;
	};

	return <Container>{renderHeaderContent()}</Container>;
};

export default CustomHeader;
