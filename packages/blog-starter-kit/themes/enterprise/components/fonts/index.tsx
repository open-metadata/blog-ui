import localFont from 'next/font/local';

const inter = localFont({
  src: [
    {
      path: '../../assets/fonts/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Inter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Inter-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Inter-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

const suisseIntl = localFont({
    src: [
      {
        path: '../../assets/SuisseIntl-Regular.woff2',
        weight: '400',
        style: 'normal',
      },
      {
        path: '../../assets/SuisseIntl-Bold.woff2',
        weight: '700',
        style: 'normal',
      },
      {
        path: '../../assets/SuisseIntl-Medium.woff2',
        weight: '500',
        style: 'normal',
      },
      {
        path: '../../assets/SuisseIntl-SemiBold.woff2',
        weight: '600',
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
