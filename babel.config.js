module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
					'@': './src',
					'@shared': './src/shared',
					'@contacts': './src/modules/contacts',
					'@creator': './src/modules/creator',
					'@metrics': './src/modules/metrics',
					'@scanner': './src/modules/scanner',
					'@auth': './src/modules/auth',
					'@colors': './src/shared/styles/colors.ts',
					'@fonts': './src/shared/styles/fonts.ts',
					'@api': './src/shared/services/api.ts',
					'@translate': './src/shared/services/Translate/Translate.tsx',
					'@lang': './src/shared/hooks/lang.tsx',
        }
      }
    ],
  ]
};
