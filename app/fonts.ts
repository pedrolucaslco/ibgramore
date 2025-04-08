import { Work_Sans, Funnel_Display } from 'next/font/google'

export const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-work-sans',
  display: 'swap',
});

export const funnelDisplay = Funnel_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-funnel-display',
  display: 'swap',
});