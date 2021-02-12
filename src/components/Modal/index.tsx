import React from 'react';
import { ModalProps as _ModalProps } from 'react-native';
import {
	Container,
	Modal,
	Content,
	Header,
	Title,
	CloseContainer,
	CloseImage,
} from './styles';
import closeIcon from '../../assets/close.png';

interface ModalProps extends _ModalProps {
	title: string;
	visible: boolean;
	close: () => void;
}

const CustomModal: React.FC<ModalProps> = ({
	title,
	visible = false,
	close,
	children,
	...rest
}) => {
	return (
		<Modal
			visible={visible}
			animationType="fade"
			presentationStyle="overFullScreen"
			transparent
			{...rest}
		>
			<Container>
				<Content>
					<Header>
						<Title numberOfLines={2}>{title}</Title>
						<CloseContainer onPress={() => close()}>
							<CloseImage source={closeIcon} />
						</CloseContainer>
					</Header>
					{children}
				</Content>
			</Container>
		</Modal>
	);
};

export default CustomModal;
