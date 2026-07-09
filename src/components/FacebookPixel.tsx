'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq?: Window['fbq'];
  }
}

const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

function FacebookPixelInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Fire PageView on route changes
  useEffect(() => {
    if (!PIXEL_ID) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : '');
    const fire = () => {
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'PageView', { url });
      } else {
        setTimeout(fire, 100);
      }
    };
    const timeoutId = setTimeout(fire, 0);
    return () => clearTimeout(timeoutId);
  }, [pathname, searchParams]);

  // If no Pixel ID, don't render the script
  if (!PIXEL_ID) return null;

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s) {
              if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
          `,
        }}
      />
    </>
  );
}

export default function FacebookPixel() {
  return (
    <Suspense fallback={null}>
      <FacebookPixelInner />
    </Suspense>
  );
}
