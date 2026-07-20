import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import favicon from "../assets/favicon.ico?url";
import ogImage from "../assets/son-go-lotus-khong-mui.jpeg?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
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
      },
    ],
    links: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: favicon,
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function GA4Script() {
  useEffect(() => {
    // Initialize dataLayer
    (window as any).dataLayer = (window as any).dataLayer || [];
    
    // Inject gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-13XJT8M29C';
    document.head.appendChild(script);
    
    // Configure after script loads
    script.onload = () => {
      (window as any).gtag = (window as any).gtag || function() {
        (window as any).dataLayer.push(arguments);
      };
      (window as any).gtag('js', new Date());
      (window as any).gtag('config', 'G-13XJT8M29C');
      console.log('GA4 loaded and configured');
    };
  }, []);
  
  return null;
}

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <GA4Script />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </>
  );
}
