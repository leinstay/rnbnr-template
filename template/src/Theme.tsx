import { extendTheme, theme as nbTheme } from 'native-base';

type CustomThemeType = typeof theme;
declare module 'native-base' {
    interface ICustomTheme extends CustomThemeType {}
}
export const theme = extendTheme({
    colors: {
        primary: nbTheme.colors.trueGray,
    },
    components: {
        Modal: {
            defaultProps: {
                _backdrop: {
                    bg: 'rgba(255, 255, 255, 0)',
                },
            },
        },
    },
    fontConfig: {
        Poppins: {
            100: {
                normal: 'Poppins-Thin',
                italic: 'Poppins-ThinItalic',
            },
            200: {
                normal: 'Poppins-ExtraLight',
                italic: 'Poppins-ExtraLightItalic',
            },
            300: {
                normal: 'Poppins-Light',
                italic: 'Poppins-LightItalic',
            },
            400: {
                normal: 'Poppins-Regular',
                italic: 'Poppins-Italic',
            },
            500: {
                normal: 'Poppins-Medium',
                italic: 'Poppins-MediumItalic',
            },
            600: {
                normal: 'Poppins-SemiBold',
                italic: 'Poppins-SemiBoldItalic',
            },
            700: {
                normal: 'Poppins-Bold',
                italic: 'Poppins-BoldItalic',
            },
            800: {
                normal: 'Poppins-ExtraBold',
                italic: 'Poppins-ExtraBoldItalic',
            },
            900: {
                normal: 'Poppins-Black',
                italic: 'Poppins-BlackItalic',
            },
        },
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
        mono: 'Poppins',
    },
});
