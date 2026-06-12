import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-Bc0c3EMx-v2.css";
const favicon = "/assets/favicon-a9lNDvJV-v2.ico";
const ogImage = "/assets/son-go-lotus-khong-mui-BsHU4fPI-v2.jpeg";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$2 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "build-check", content: "lotus-v2-zalo-2026" },
      { title: "Sơn Gỗ Hệ Nước Lotus - Sơn Giữ Vân Gỗ, Sơn Màu Bệt Cho Nội Thất Gia Đình" },
      { name: "description", content: "Sơn gỗ hệ nước Lotus: sơn giữ vân gỗ và sơn màu bệt ít mùi, khô nhanh, dễ tự thi công tại nhà. Phù hợp tủ, cửa, bàn ghế nội thất. Giao hàng toàn quốc, bảo hành 7 ngày." },
      { name: "keywords", content: "sơn gỗ, sơn giữ vân gỗ, sơn màu bệt, sơn nội thất, sơn gỗ hệ nước, sơn gỗ ít mùi, sơn gỗ khô nhanh, sơn gỗ tự thi công, sơn tủ gỗ, sơn cửa gỗ" },
      { name: "author", content: "Lotus Paint" },
      { property: "og:title", content: "Sơn Gỗ Hệ Nước Lotus - Sơn Giữ Vân Gỗ, Sơn Màu Bệt Cho Nội Thất Gia Đình" },
      { property: "og:description", content: "Sơn gỗ hệ nước Lotus: sơn giữ vân gỗ và sơn màu bệt ít mùi, khô nhanh, dễ tự thi công tại nhà. Phù hợp tủ, cửa, bàn ghế nội thất. Giao hàng toàn quốc." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lotus-paint-flow.vercel.app/" },
      { property: "og:locale", content: "vi_VN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sơn Gỗ Hệ Nước Lotus - Sơn Giữ Vân Gỗ, Sơn Màu Bết Cho Nội Thất Gia Đình" },
      { name: "twitter:description", content: "Sơn gỗ hệ nước Lotus: sơn giữ vân gỗ và sơn màu bệt ít mùi, khô nhanh, dễ tự thi công tại nhà. Phù hợp tủ, cửa, bàn ghế nội thất." },
      { property: "og:image", content: ogImage },
      { name: "twitter:image", content: ogImage },
      { rel: "canonical", href: "https://lotus-paint-flow.vercel.app/" },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "name": "Lotus Paint",
              "description": "Sơn gỗ hệ nước chuyên nghiệp: sơn giữ vân gỗ và sơn màu bệt cho nội thất gia đình",
              "url": "https://lotus-paint-flow.vercel.app/",
              "logo": "https://lotus-paint-flow.vercel.app/logo-lotus.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+84-396-666-2",
                "contactType": "customer service",
                "availableLanguage": "Vietnamese"
              }
            },
            {
              "@type": "WebSite",
              "name": "Lotus Paint",
              "url": "https://lotus-paint-flow.vercel.app/",
              "description": "Sơn gỗ hệ nước Lotus: sơn giữ vân gỗ và sơn màu bět ít mùi, khô nhanh, dễ tự thi công tại nhà",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://lotus-paint-flow.vercel.app/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@type": "Product",
              "name": "Sơn Gỗ Hệ Nước Lotus",
              "description": "Sơn gỗ hệ nước cao cấp: sơn giữ vân gỗ và sơn màu bět ít mùi, khô nhanh, dễ tự thi công tại nhà. Phù hợp tủ, cửa, bàn ghế nội thất.",
              "brand": {
                "@type": "Brand",
                "name": "Lotus Paint"
              },
              "category": "Sơn nội thất",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "VND",
                "availability": "https://schema.org/InStock",
                "deliveryLeadTime": "1-5 ngày"
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Sơn gỗ hệ nước là gì? Khác gì với sơn dầu?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sơn gỗ hệ nước dùng nước làm dung môi thay vì dung môi dầu. Ít mùi, khô nhanh, dễ vệ sinh dụng cụ, an toàn hơn cho sức khỏe. Sơn dầu bền hơn nhưng mùi mạnh, lâu khô, cần dung môi xóa rửa. Lotus là sơn hệ nước cao cấp, phù hợp nội thất gia đình."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Sơn gỗ hệ nước có an toàn cho nhà có trẻ nhỏ không?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Có. Lotus là sơn hệ nước, hàm lượng VOC thấp, không chứa dung môi nặng. Bạn có thể thi công ngay trong phòng ngủ, phòng bếp; sau 4–6 giờ là có thể sinh hoạt lại bình thường."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Người chưa từng sơn có tự làm được không?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hoàn toàn được. Sơn hệ nước dễ tán đều, không kén tay nghề. Bạn chỉ cần cọ hoặc rulo, một miếng giấy nhám P240 và khoảng một buổi chiều."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Nên chọn sơn giữ vân gỗ hay sơn màu bệt?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sơn giữ vân gỗ phù hợp đồ gỗ đẹp vân tự nhiên, muốn giữ vẻ đẹp gỗ gốc. Sơn màu bệt phù hợp muốn đổi màu hoàn toàn, tạo vẻ hiện đại, đồng nhất."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Một hũ 1kg sơn được bao nhiêu m²?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Khoảng 7–9 m² cho mỗi lớp tuỳ bề mặt. Khuyến nghị sơn 2 lớp để màng sơn đều và bền — tương đương 4–5 m² hoàn thiện cho 1kg."
                  }
                }
              ]
            }
          ]
        }
      }
    ],
    links: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: favicon
      },
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$2.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$1 = () => import("./thank-you-DsQ7hQiE-v2.mjs");
const Route$1 = createFileRoute("/thank-you")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  validateSearch: (search) => ({
    name: typeof search.name === "string" ? search.name : "",
    phone: typeof search.phone === "string" ? search.phone : "",
    payment: typeof search.payment === "string" ? search.payment : "cod",
    amount: typeof search.amount === "string" ? search.amount : "",
    product: typeof search.product === "string" ? search.product : "",
    env: typeof search.env === "string" ? search.env : "",
    color: typeof search.color === "string" ? search.color : "",
    surface: typeof search.surface === "string" ? search.surface : "",
    size: typeof search.size === "string" ? search.size : "",
    qty: typeof search.qty === "string" ? search.qty : "1"
  })
});
const $$splitComponentImporter = () => import("./index-E_Bmon9H-v2.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Lotus — Sơn gỗ hệ nước cho không gian sống tinh tế"
    }, {
      name: "description",
      content: "Lotus Wood Paint & Woodstain Finish — sơn gỗ hệ nước cao cấp. Làm mới đồ gỗ tại nhà theo cách sạch hơn, đẹp hơn."
    }, {
      property: "og:title",
      content: "Lotus — Sơn gỗ hệ nước cho không gian sống tinh tế"
    }, {
      property: "og:description",
      content: "Hoàn thiện gỗ hệ nước cho gia đình hiện đại. Nhẹ mùi, khô nhanh, dễ tự thi công."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ThankYouRoute = Route$1.update({
  id: "/thank-you",
  path: "/thank-you",
  getParentRoute: () => Route$2
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  ThankYouRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$1 as R,
  router as r
};
