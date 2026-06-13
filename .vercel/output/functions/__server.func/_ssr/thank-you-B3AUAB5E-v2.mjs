import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route$1 } from "./router-BCpVEmSL-v2.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function ThankYouPage() {
  const {
    name,
    phone,
    payment,
    amount,
    product,
    env,
    color,
    surface,
    size,
    qty
  } = Route$1.useSearch();
  const bankInfo = {
    account: "211014851223910",
    bank: "Eximbank",
    bankId: "EIB",
    branch: "CN TP.HCM",
    name: "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ BÍCH TRANG"
  };
  const transferSyntax = `Lotus ${phone}`;
  const accountNameEncoded = encodeURIComponent(bankInfo.name);
  const amountClean = amount.replace(/[^\d]/g, "");
  const qrUrl = `https://img.vietqr.io/image/${bankInfo.bankId}-${bankInfo.account}-compact2.png?amount=${amountClean}&addInfo=${encodeURIComponent(transferSyntax)}&accountName=${accountNameEncoded}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-sand/30 py-16 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[600px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cream border border-walnut/15 p-8 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 text-5xl", children: "✓" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mb-4 font-serif text-3xl text-charcoal", children: [
      "Cảm ơn Anh/chị ",
      name,
      " đã sử dụng sản phẩm của Sơn Lotus"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 rounded-lg border border-walnut/15 bg-sand/30 p-6 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-[13px] uppercase tracking-[0.25em] text-walnut/50", children: "Tóm tắt đơn hàng" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-[14px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-walnut/70", children: "Sản phẩm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-charcoal", children: product })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-walnut/70", children: "Môi trường" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-charcoal", children: env })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-walnut/70", children: "Màu" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-charcoal", children: color })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-walnut/70", children: "Bề mặt" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-charcoal", children: surface })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-walnut/15 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-walnut/70", children: "Quy cách" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-charcoal", children: [
            size,
            " × ",
            qty
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-walnut/20 pt-2 text-[16px] font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-walnut/80", children: "Tổng cộng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-clay", children: amount })
        ] })
      ] })
    ] }),
    payment === "online" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 rounded-lg border border-walnut/15 bg-sand/30 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-[13px] uppercase tracking-[0.25em] text-walnut/50", children: "Quét mã QR để thanh toán" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: qrUrl, alt: "QR Code", className: "h-48 w-48" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-left text-[13px] text-walnut/70", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-charcoal", children: "Ngân hàng:" }),
          " ",
          bankInfo.bank
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-charcoal", children: "Chi nhánh:" }),
          " ",
          bankInfo.branch
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-charcoal", children: "Số tài khoản:" }),
          " ",
          bankInfo.account
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-charcoal", children: "Chủ tài khoản:" }),
          " ",
          bankInfo.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-charcoal", children: "Số tiền:" }),
          " ",
          amount
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-charcoal", children: "Nội dung chuyển khoản:" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-clay", children: transferSyntax })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-block bg-clay px-8 py-3 text-[12px] font-medium uppercase tracking-[0.22em] text-cream transition hover:bg-clay/90", children: "Về trang chủ" })
  ] }) }) });
}
export {
  ThankYouPage as component
};
