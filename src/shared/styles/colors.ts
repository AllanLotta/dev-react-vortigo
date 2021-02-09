import { Appearance } from 'react-native';

const colorScheme = Appearance.getColorScheme();

const color = {
	light: {
		// Gradient Colors
		sysGradient1: '#5ec9c1',
		sysGradient2: '#7595ed',
		sysGradient3: '#957fde',
		//	mainColors
		sysBlue: '#007AFF',
		sysIndigo: '#5856D6',
		sysPink: '#FF2D55',
		sysOrange: '#FF9500',
		sysYellow: '#FFCC00',
		sysGreen: '#34C759',
		//	Future Use
		sysTeal: '#5AC8FA',
		sysPurple: '#AF52DE',
		sysRed: '#FF3B30',
		// Shades of Grey
		sysGrey1: '#8E8E93',
		sysGrey2: '#AEAEB2',
		sysGrey3: '#C7C7CC',
		sysGrey4: '#D1D1D6',
		sysGrey5: '#E5E5EA',
		sysGrey6: '#F2F2F7',
		// Backgrounds
		back1: '#FFFFFF', // Primary Background Color
		back2: '#F9F9F9', // Secondary Background Color
		back3: '#F0F0F0', // Tertiary Background Color
		//	Text Colors
		text1: '#000000', // Primary Label Color
		text2: 'rgba(60, 60, 67, 0.6)', // Secondary Label Color
		text3: 'rgba(60, 60, 67, 0.3)', // // Tertiary Label Color
		text4: 'rgba(60, 60, 67, 0.18)', // Quaternary Label Color
		// B&W
		black: '#000000',
		white: '#FFFFFF',
	},
	dark: {
		// Gradient Colors
		sysGradient1: '#5ec9c1',
		sysGradient2: '#7595ed',
		sysGradient3: '#957fde',
		//	mainColors
		sysBlue: '#0A84FF',
		sysIndigo: '#5E5CE6',
		sysPink: '#FF375F',
		sysOrange: '#FF9F0A',
		sysYellow: '#FFD60A',
		sysGreen: '#32D74B',
		//	Future Use
		sysTeal: '#64D2FF',
		sysPurple: '#BF5AF2',
		sysRed: '#FF453A',
		// Shades of Grey
		sysGrey1: '#8E8E93',
		sysGrey2: '#636366',
		sysGrey3: '#48484A', //
		sysGrey4: '#3A3A3C',
		sysGrey5: '#2C2C2E',
		sysGrey6: '#1C1C1E',
		// Backgrounds
		back1: '#000000',
		back2: '#1C1C1E',
		back3: '#2C2C2E',
		//	Text Colors
		text1: '#FFFFFF',
		text2: 'rgba(235, 235, 245, 0.6)',
		text3: 'rgba(235, 235, 245, 0.3)',
		text4: 'rgba(235, 235, 245, 0.18)',
		// B&W
		black: '#000000',
		white: '#FFFFFF',
	},
};

export const colors = colorScheme === 'dark' ? color.dark : color.light;
