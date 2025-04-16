import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const suisseIntl = localFont({
    src: [
      {
        path: '../../assets/SuisseIntl-Regular.ttf',
        weight: '400',
        style: 'normal',
      },
      {
        path: '../../assets/SuisseIntl-Bold.ttf',
        weight: '700',
        style: 'normal',
      },
      {
        path: '../../assets/SuisseIntl-Light.ttf',
        weight: '300',
        style: 'normal',
      },
      {
        path: '../../assets/SuisseIntl-Medium.ttf',
        weight: '500',
        style: 'normal',
      },
    ],
    variable: '--font-suisse-intl',
    display: 'swap',
  });

const variableConstant = 'variable';
const fontInterVar = inter.variable.replace(variableConstant, 'Inter');
const fontSuisseIntlVar = suisseIntl.variable.replace(variableConstant, 'Suisse_Intl');

export const GlobalFontVariables = () => (
  <style jsx global>{`
    html {
      --font-inter: ${fontInterVar};
      --font-suisse-intl: ${fontSuisseIntlVar};
    }
  `}</style>
);
