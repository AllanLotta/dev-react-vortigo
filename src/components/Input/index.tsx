import React, {
	useState,
	useEffect,
	useRef,
	useImperativeHandle,
	forwardRef,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '@/config/theme';
import { Container, TextInput, ArrowContainer } from './styles';

interface InputProps extends TextInputProps {
	name: string;
	showArrow?: boolean;
	action?: () => void;
}

interface InputValueReference {
	value: string;
}

interface InputRef {
	focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
	{ name, showArrow = false, action, ...rest },
	ref,
) => {
	const inputElementRef = useRef<any>(null);

	const { registerField, defaultValue = '', fieldName, error } = useField(name);
	const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

	useEffect(() => {
		inputValueRef.current.value = defaultValue;
	}, [defaultValue]);
	useEffect(() => {
		if (showArrow) inputElementRef.current.blur();
	}, [showArrow]);

	useImperativeHandle(ref, () => ({
		focus() {
			inputElementRef.current.focus();
		},
	}));

	useEffect(() => {
		registerField<string>({
			name: fieldName,
			ref: inputValueRef.current,
			path: 'value',
			setValue(refer: any, value: string) {
				inputValueRef.current.value = value;
				inputElementRef.current.setNativeProps({ text: value });
			},
			clearValue(refer: any) {
				inputValueRef.current.value = '';
				inputElementRef.current?.clear();
			},
		});
	}, [fieldName, registerField]);

	return (
		<>
			<Container>
				<TextInput
					ref={inputElementRef}
					onChangeText={value => {
						inputValueRef.current.value = value;
					}}
				/>
				{showArrow && (
					<ArrowContainer onPress={() => (action ? action() : null)}>
						<Icon name="chevron-down" size={30} color={colors.LightText} />
					</ArrowContainer>
				)}
			</Container>
			{/* <TextInput
				ref={inputElementRef}
				mode="flat"
				label={label}
				style={[Styles.Input, inputStyle]}
				placeholder="Enter placeholder"
				error={!!error}
				{...rest}
				secureTextEntry={secureTextEntry}
				onChangeText={value => {
					inputValueRef.current.value = value;
				}}
				right={
					showEyeIcon && (
						<TextInput.Icon
							name={secureTextEntry ? 'eye-outline' : 'eye-off-outline'} // where <Icon /> is any component from vector-icons or anything else
							color={theme.colors.placeholder}
							onPress={() => (onEyePress ? onEyePress(!secureTextEntry) : null)}
						/>
					)
				}
			/>
			<HelperText type="error" visible={!!error}>
				{error}
			</HelperText> */}
		</>
	);
};

export default forwardRef(Input);
