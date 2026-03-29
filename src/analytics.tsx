import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const gaId = import.meta.env.VITE_GA4_ID;
const metaPixelId = import.meta.env.VITE_META_PIXEL_ID;

function injectScript(src: string, id: string) {
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement('script');
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function injectInlineScript(id: string, content: string) {
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement('script');
  script.id = id;
  script.innerHTML = content;
  document.head.appendChild(script);
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (window.gtag) {
    window.gtag('event', eventName, params);
  }

  if (window.fbq) {
    window.fbq('trackCustom', eventName, params);
  }
}

export function trackPageView(path: string) {
  if (window.gtag && gaId) {
    window.gtag('config', gaId, { page_path: path });
  }

  if (window.fbq) {
    window.fbq('track', 'PageView');
  }
}

export const AnalyticsBootstrap: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (gaId) {
      window.dataLayer = window.dataLayer || [];
      window.gtag =
        window.gtag ||
        function gtag(...args: unknown[]) {
          window.dataLayer?.push(args);
        };

      injectScript(`https://www.googletagmanager.com/gtag/js?id=${gaId}`, 'ga4-script');
      injectInlineScript(
        'ga4-inline',
        `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { send_page_view: false });`,
      );
    }

    if (metaPixelId) {
      injectInlineScript(
        'meta-pixel-inline',
        `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${metaPixelId}');`,
      );
    }
  }, []);

  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}`);
  }, [location.pathname, location.search]);

  return null;
};
