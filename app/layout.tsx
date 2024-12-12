import Script from 'next/script';
import './globals.css';
import type { Metadata } from 'next';
import { Albert_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { CartProvider } from '@/components/cart-provider';
import { Toaster } from '@/components/ui/toaster';
import { FloatingCTA } from '@/components/floating-cta';
import { TestSitePopup } from '@/components/test-site-popup';
import { cn } from '@/lib/utils';

const albertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans'
});

const parkin = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-parkin-sans'
});

export const metadata: Metadata = {
  title: 'Las Fresas | Fresas con Crema Premium',
  description: 'Descubre los mejores postres mexicanos de fresas con crema en Las Fresas. Sabores auténticos y frescos que deleitarán tu paladar.',
  keywords: 'fresas con crema, postres mexicanos, Las Fresas, fresas premium, desserts',
  authors: [{ name: 'Las Fresas' }],
  openGraph: {
    title: 'Las Fresas | Fresas con Crema Premium',
    description: 'Descubre los mejores postres mexicanos de fresas con crema en Las Fresas.',
    url: 'https://lasfresas.paginasweb-pro.com',
    siteName: 'Las Fresas',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Las Fresas - Fresas con Crema Premium',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Fresas | Fresas con Crema Premium',
    description: 'Descubre los mejores postres mexicanos de fresas con crema en Las Fresas.',
    images: ['/twitter-image.jpg'],
  },
  robots: 'index, follow',
  themeColor: '#FF4D6D',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&family=Parkinsans:wght@300..800&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FF4D6D" />
        <meta name="msapplication-TileColor" content="#FF4D6D" />
        <Script id="posthog-script">
          {`
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('phc_V0l5aNY7LDJoqb5mDWd1dlCHng9RYCCuHHDhMNJ9djd',{api_host:'https://us.i.posthog.com',person_profiles:'always'})
          `}
        </Script>
      </head>
      <body className={cn('min-h-screen bg-background font-albert-sans antialiased', albertSans.variable, parkin.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <CartProvider>
            <Navigation />
            {children}
            <Toaster />
            <FloatingCTA />
            <TestSitePopup />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
