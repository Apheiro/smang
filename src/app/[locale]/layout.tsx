import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });
const locales = ['en', 'es'];

export const metadata: Metadata = {
  title: 'Smang',
  description: 'Smang watch your favorites mangas online',
}

interface Props {
  children: React.ReactNode,
  params: {
    locale: string
  }
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  const isValidLocale = locales.some((cur) => cur === locale);
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  if (!isValidLocale) notFound();

  return (
    <html
      lang={locale}
    // className='dark bg-dark-9'
    >
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
