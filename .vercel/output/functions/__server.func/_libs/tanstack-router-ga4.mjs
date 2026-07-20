import { r as reactExports, j as jsxRuntimeExports } from "./react.mjs";
import { C as ClientOnly, u as useLocation } from "./tanstack__react-router.mjs";
function getGtag() {
  if (typeof window === "undefined") {
    return void 0;
  }
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }
  return window.gtag;
}
function useGoogleAnalytics() {
  return reactExports.useMemo(() => {
    return {
      set: (params) => {
        getGtag()?.("set", params);
      },
      config: (measurementId, configParams) => {
        getGtag()?.("config", measurementId, configParams);
      },
      event: ((eventName, params) => {
        getGtag()?.("event", eventName, params);
      }),
      consent: (mode, params) => {
        getGtag()?.("consent", mode, params);
      },
      get: (measurementId, fieldName, callback) => {
        getGtag()?.("get", measurementId, fieldName, callback);
      }
    };
  }, []);
}
function useIdleReady() {
  const [isReady, setIsReady] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const browserWindow = window;
    if (!browserWindow.requestIdleCallback) {
      setIsReady(true);
      return;
    }
    let cancelled = false;
    const idleId = browserWindow.requestIdleCallback(() => {
      if (!cancelled) {
        setIsReady(true);
      }
    });
    return () => {
      cancelled = true;
      browserWindow.cancelIdleCallback?.(idleId);
    };
  }, []);
  return isReady;
}
const GoogleAnalyticsInner = ({ config, consentDefaults, measurementId }) => {
  const location = useLocation();
  const { event } = useGoogleAnalytics();
  reactExports.useEffect(() => {
    if (!measurementId)
      return;
    const gtag = getGtag();
    if (!gtag)
      return;
    const existingScript = document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);
    }
    if (consentDefaults) {
      gtag("consent", "default", consentDefaults);
    }
    gtag("js", /* @__PURE__ */ new Date());
    gtag("config", measurementId, {
      ...config,
      send_page_view: false
    });
  }, [config, consentDefaults, measurementId]);
  reactExports.useEffect(() => {
    if (!measurementId)
      return;
    event("page_view", {
      page_path: location.pathname,
      page_location: window.location.href,
      page_title: document.title,
      page_referrer: document.referrer || void 0
    });
  }, [event, location.pathname, measurementId]);
  return null;
};
const DeferredGoogleAnalyticsInner = (props) => {
  const isIdle = useIdleReady();
  if (!isIdle)
    return null;
  return jsxRuntimeExports.jsx(GoogleAnalyticsInner, { ...props });
};
const GoogleAnalytics = ({ deferred = true, ...rest }) => jsxRuntimeExports.jsx(ClientOnly, { fallback: null, children: deferred ? jsxRuntimeExports.jsx(DeferredGoogleAnalyticsInner, { ...rest }) : jsxRuntimeExports.jsx(GoogleAnalyticsInner, { ...rest }) });
export {
  GoogleAnalytics as G
};
