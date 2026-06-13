import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { R as Root2, I as Item, H as Header$1, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { A as ArrowRight, C as ChevronDown } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-direction.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header$1, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
const heroInterior = "/assets/son-lotus-hero-9-7ouNb1pf-v2.jpeg";
const diyHands = "/assets/son-lai-tu-tivi-son-lotus-EORvgkmV-v2.jpeg";
const woodstainFinish = "/assets/son-giu-van-go-lotus-02-B4iRkWvH-v2.JPG";
const beforeAfter = "/assets/before-after-Bz7UqToO-v2.jpg";
const project1 = "/assets/project-1-dSmkHL4H-v2.jpg";
const project2 = "/assets/son-lai-hang-rao-son-go-lotus-BNq_3MCU-v2.jpeg";
const project3 = "/assets/son-lai-cua-cu-khong-mui-lotus-BCT4z5ZC-v2.jpeg";
const testimonial1 = "/assets/son-lai-ban-an-mau-xanh-son-lotus-rRqi0kHj-v2.jpeg";
const testimonial2 = "/assets/son-lai-tu-quan-ao-son-khong-mui-lotus-TbLfZdU9-v2.png";
const testimonial3 = "/assets/son-lai-giuong-ngu-son-khong-mui-lotus-Dgrrh5kU-v2.png";
const logoLotus = "/assets/logo-lotus-C0CbJd0t-v2.jpg";
const woodStainColors = [{
  name: "Sơn giữ vân gỗ 005",
  image: "/Son-giu-van-go-005.png"
}, {
  name: "Sơn giữ vân gỗ 011",
  image: "/Son-giu-van-go-011.png"
}, {
  name: "Sơn giữ vân gỗ 012",
  image: "/Son-giu-van-go-012.png"
}, {
  name: "Sơn giữ vân gỗ 018",
  image: "/Son-giu-van-go-018.png"
}, {
  name: "Sơn giữ vân gỗ 019",
  image: "/Son-giu-van-go-019.png"
}, {
  name: "Sơn giữ vân gỗ 021",
  image: "/Son-giu-van-go-021.png"
}];
const solidColors = [{
  name: "Sơn màu bệt 008",
  image: "/Son-mau-bet-008.png"
}, {
  name: "Sơn màu bệt 019",
  image: "/Son-mau-bet-019.png"
}, {
  name: "Sơn màu bệt 047",
  image: "/Son-mau-bet-047.png"
}, {
  name: "Sơn màu bệt 066",
  image: "/Son-mau-bet-066.png"
}, {
  name: "Sơn màu bệt 070",
  image: "/Son-mau-bet-070.png"
}, {
  name: "Sơn màu bệt 090",
  image: "/Son-mau-bet-090.png"
}];
const SOLID_PALETTE_IMAGE = "https://w.ladicdn.com/5e3e73f71adefa2bf15bd42f/bang-mau-son-go-lotus-83285p-20251209012759-qpvpg.png";
const WOODSTAIN_PALETTE_IMAGE = "https://w.ladicdn.com/5e3e73f71adefa2bf15bd42f/screenshot-2025-12-09-at-081030-20251209011056-p-cij.png";
const PRICES = {
  bet: {
    indoor: {
      "1kg": 255e3,
      "5kg": 1215e3
    },
    outdoor: {
      "1kg": 32e4,
      "5kg": 154e4
    }
  },
  "van-go": {
    indoor: {
      "1kg": 25e4,
      "5kg": 1188e3
    },
    outdoor: {
      "1kg": 313e3,
      "5kg": 1515e3
    }
  }
};
function formatVND(n) {
  return n.toLocaleString("vi-VN") + " ₫";
}
const surfaces = [{
  label: "Bàn ăn / bàn làm việc",
  desc: "Bàn gỗ nội thất dùng hàng ngày",
  recommendation: "Sơn gỗ màu bệt (Indoor)",
  detail: "2 lớp, độ phủ 7–9 m²/kg, màu ấm: Sứ, Mộc, Khói"
}, {
  label: "Tủ áo / tủ bếp / kệ TV",
  desc: "Tủ kệ nội thất lớn",
  recommendation: "Sơn gỗ màu bệt (Indoor)",
  detail: "2 lớp, độ phủ 7–9 m²/kg, che nền cũ tốt"
}, {
  label: "Cửa, khung cửa, lan can",
  desc: "Cửa nội thất hoặc ngoại thất",
  recommendation: "Woodstain Finish (Nội/Ngoại thất)",
  detail: "2 lớp, giữ vân gỗ, kháng ẩm và UV"
}, {
  label: "Sàn gỗ, bậc cầu thang",
  desc: "Sàn tự nhiên hoặc engineered",
  recommendation: "Woodstain Finish (Sàn)",
  detail: "2 lớp, độ bền cao, chịu ma sát"
}, {
  label: "Vật dụng nhỏ (ghế, kệ, đồ trang trí)",
  desc: "Đồ gỗ nhỏ, decor",
  recommendation: "Sơn gỗ màu bệt (Indoor)",
  detail: "2 lớp, ít sơn, dễ thi công"
}];
const projects = [{
  img: project1,
  label: "Tủ TV — sắc Rêu",
  place: "Căn hộ · Quận 2, TP. HCM"
}, {
  img: project2,
  label: "Hàng rào — Gỗ sồi tông màu nâu đậm",
  place: "Nhà phố · Hà Nội"
}, {
  img: project3,
  label: "Cửa gỗ - sơn bệt màu kem",
  place: "Studio · Đà Nẵng"
}];
const testimonials = [{
  quote: "Mình sơn lại bộ bàn ăn ngay trong căn hộ chung cư. Không mùi xăng, không phải dời con sang nhà ngoại. Sáng hôm sau cả nhà đã ngồi ăn bình thường.",
  name: "Chị Linh",
  place: "Thảo Điền, TP. HCM",
  product: "Wood Paint · sắc Khói",
  image: testimonial1
}, {
  quote: "Tủ áo cũ của con gái mình được sơn lại sắc hồng, đặt cạnh giường nhìn rất cute. Sơn 2 lớp, hết 4 hũ đủ cho cả tủ — mình đặt thêm 1 hũ dự phòng.",
  name: "Anh Phúc",
  place: "Quận Cầu Giấy, Hà Nội",
  product: "Wood Paint · sắc Hồng",
  image: testimonial2
}, {
  quote: "Mình tự sơn giường ngủ của mình, tuy lần đầu thực hiện nhưng rất dễ làm. Sơn 2 lớp là bề mặt lên đẹp. Mình sử dụng 2 hũ là đủ. Đáng đồng tiền.",
  name: "Chị Mai",
  place: "Đà Nẵng",
  product: "Woodpaint · Vàng Kem",
  image: testimonial3
}];
const faqs = [{
  q: "Người chưa từng sơn có tự làm được không?",
  a: "Hoàn toàn được. Sơn hệ nước dễ tán đều, không kén tay nghề. Bạn chỉ cần cọ hoặc rulo, một miếng giấy nhám mịn và khoảng một buổi chiều. Không cần kỹ thuật chuyên nghiệp."
}, {
  q: "Sơn gỗ hệ nước có an toàn cho nhà có trẻ nhỏ không?",
  a: "Có. Lotus là sơn hệ nước, hàm lượng VOC thấp, không chứa dung môi nặng. Bạn có thể thi công ngay trong phòng ngủ, phòng bếp; sau 4–6 giờ là có thể sinh hoạt lại bình thường."
}, {
  q: "Một hũ 1kg sơn được bao nhiêu m²?",
  a: "Khoảng 7–9 m² cho mỗi lớp tuỳ bề mặt. Khuyến nghị sơn 2 lớp để màng sơn đều và bền — tương đương 4–5 m² hoàn thiện cho 1kg."
}, {
  q: "Nên chọn sơn giữ vân gỗ hay sơn màu bệt?",
  a: "Sơn giữ vân gỗ phù hợp đồ gỗ đẹp vân tự nhiên, muốn giữ vẻ đẹp gỗ gốc. Sơn màu bệt phù hợp muốn đổi màu hoàn toàn, tạo vẻ hiện đại, đồng nhất. Cả hai đều bền, dễ vệ sinh."
}, {
  q: "Giao hàng toàn quốc không? Bao lâu nhận được?",
  a: "Lotus giao toàn quốc. Nội thành Hà Nội & TP. HCM nhận trong 1–2 ngày, các tỉnh thành khác 2–5 ngày. Thanh toán online được miễn phí vận chuyển."
}, {
  q: "Nếu chọn sai màu hoặc không ưng thì sao?",
  a: "Sản phẩm còn nguyên seal được đổi trả trong 7 ngày. Bạn có thể xem bảng màu đầy đủ trước khi đặt hàng. Màu hiển thị trên màn hình có thể chênh nhẹ so với thực tế."
}];
function Index() {
  const navigate = useNavigate();
  const [tab, setTab] = reactExports.useState("indoor");
  const [showPaletteModal, setShowPaletteModal] = reactExports.useState(false);
  const [showZaloButton, setShowZaloButton] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleScroll2 = () => {
      const heroSection = document.querySelector("section");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowZaloButton(heroBottom < 0);
      }
    };
    window.addEventListener("scroll", handleScroll2);
    return () => window.removeEventListener("scroll", handleScroll2);
  }, []);
  const handleDownloadPalette = async () => {
    const imageUrl = tab === "indoor" ? SOLID_PALETTE_IMAGE : WOODSTAIN_PALETTE_IMAGE;
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = tab === "indoor" ? "bang-mau-son-mau-bet-lotus.png" : "bang-mau-son-giu-van-go-lotus.png";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };
  const [orderProduct, setOrderProduct] = reactExports.useState("bet");
  const [orderEnv, setOrderEnv] = reactExports.useState("indoor");
  const [orderColor, setOrderColor] = reactExports.useState("");
  const [orderSurface, setOrderSurface] = reactExports.useState("bong");
  const [orderSize, setOrderSize] = reactExports.useState("1kg");
  const [orderQty, setOrderQty] = reactExports.useState(1);
  const [orderPayment, setOrderPayment] = reactExports.useState("cod");
  const [orderName, setOrderName] = reactExports.useState("");
  const [orderPhone, setOrderPhone] = reactExports.useState("");
  const [orderAddress, setOrderAddress] = reactExports.useState("");
  const [orderNote, setOrderNote] = reactExports.useState("");
  const unitPrice = PRICES[orderProduct][orderEnv][orderSize];
  const subtotal = unitPrice * orderQty;
  const total = orderPayment === "online" ? Math.round(subtotal * 0.9) : subtotal;
  const [showSticky, setShowSticky] = reactExports.useState(false);
  const handleScroll = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      const rect = heroSection.getBoundingClientRect();
      setShowSticky(rect.bottom < 0);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-cream text-charcoal font-sans antialiased overscroll-behavior-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    showSticky && /* @__PURE__ */ jsxRuntimeExports.jsx(StickyCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "hero", className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-5 pt-12 pb-20 md:px-12 md:pt-20 md:pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-x-6 gap-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-6 lg:col-span-5 flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-walnut/70", children: "Lotus · Sơn gỗ hệ nước cho gia đình" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-serif text-[38px] leading-[1.05] tracking-tight text-charcoal sm:text-[44px] md:text-[60px] lg:text-[72px]", children: [
          "Sơn lại đồ gỗ tại nhà",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-clay", children: "ít mùi, khô nhanh" }),
          ",",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "xong trong một buổi."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 max-w-md text-[15px] leading-relaxed text-walnut/80", children: "Sơn gỗ hệ nước Lotus: ít mùi, an toàn cho nhà có trẻ nhỏ, dễ tự thi công. Chọn màu, đặt online, nhận hàng tại nhà. 1 hũ sơn khoảng 7–9 m² mỗi lớp." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#advise", className: "group inline-flex items-center gap-3 bg-clay px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-cream transition hover:bg-clay/90 sm:px-7 sm:text-[13px]", children: [
            "Chọn màu & đặt mua",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#palette", className: "text-[12px] font-medium uppercase tracking-[0.18em] text-walnut underline-offset-8 hover:underline sm:text-[13px]", children: "Xem bảng màu" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[12px] text-walnut/50", children: "Ít mùi — an toàn dùng trong phòng ngủ và phòng trẻ em" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap gap-x-6 gap-y-1.5 border-t border-walnut/15 pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-walnut/60", children: "Hệ nước ít mùi" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-walnut/30", children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-walnut/60", children: "COD toàn quốc" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-walnut/30", children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-walnut/60", children: "Online giảm 10%" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "col-span-12 md:col-span-6 lg:col-span-7 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroInterior, alt: "Phòng khách với tủ gỗ hoàn thiện màu ấm, không gian sống gia đình", className: "aspect-[4/5] md:aspect-[5/6] w-full object-cover", width: 1600, height: 1200 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "absolute bottom-5 left-5 right-5 flex items-end justify-between text-[10px] uppercase tracking-[0.22em] text-cream mix-blend-difference sm:text-[11px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Phòng khách · Lotus Wood Paint" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "— 001" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "choose", className: "border-t border-walnut/10 bg-sand/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-walnut/70", children: "02 — Chọn kiểu hoàn thiện" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-[34px] leading-tight text-charcoal sm:text-4xl md:text-5xl lg:text-[56px]", children: [
          "Bạn muốn phủ kín màu",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "hay giữ vân gỗ?"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionCard, { index: "01", title: "Phủ kín màu, che vân gỗ", subtitle: "Sơn gỗ màu bệt — Nội thất", body: "Chọn loại này khi muốn đổi màu hoàn toàn cho tủ, kệ, bàn. Phủ trọn bề mặt, màng sơn mịn như sứ, che hoàn toàn vân và màu gốc.", img: diyHands, bullets: ["Tủ áo, tủ bếp, kệ TV, bàn làm việc", "Che nền cũ, đổi màu hoàn toàn", "Màu ấm: Sứ, Mộc, Khói, Rêu"], ctaText: "Chọn màu & đặt mua", ctaLink: "#advise", onCtaClick: () => setOrderProduct("bet") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionCard, { index: "02", title: "Giữ vân gỗ, nhìn giống gỗ tự nhiên", subtitle: "Woodstain Finish — Nội & Ngoại thất", body: "Chọn loại này khi muốn giữ vẻ đẹp gỗ tự nhiên cho cửa, sàn, lan can. Thấm sâu vào gỗ, tôn trọn vân, chịu nắng mưa.", img: woodstainFinish, bullets: ["Cửa, khung cửa, sàn gỗ, lan can", "Giữ vân, chống trầy, kháng ẩm", "Màu tự nhiên: Sồi, Teak, Walnut, Mun"], ctaText: "Chọn màu & đặt mua", ctaLink: "#advise", onCtaClick: () => setOrderProduct("van-go") })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-walnut/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-walnut/70", children: "03 — Quy cách" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl", children: [
            "1 hũ sơn được bao nhiêu?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Cần mua bao nhiêu?"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-xs text-[13px] leading-relaxed text-walnut/65", children: "1 hũ 1kg sơn được 7–9 m² mỗi lớp. Khuyến nghị sơn 2 lớp." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid grid-cols-2 gap-4 border-t border-walnut/20 pt-8 sm:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-cream/50 p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[28px] font-serif text-clay sm:text-[32px]", children: "1kg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] text-walnut/60", children: "Quy cách hũ" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-cream/50 p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[28px] font-serif text-clay sm:text-[32px]", children: "7–9 m²" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] text-walnut/60", children: "Độ phủ mỗi lớp" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-cream/50 p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[28px] font-serif text-clay sm:text-[32px]", children: "2 lớp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] text-walnut/60", children: "Khuyến nghị" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-cream/50 p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[28px] font-serif text-clay sm:text-[32px]", children: "30 phút" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] text-walnut/60", children: "Khô bề mặt" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 border-t border-walnut/15 pt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-[11px] text-walnut/60", children: "Gợi ý số lượng theo hạng mục" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [{
          item: "Bàn ăn 4–6 ghế",
          qty: "1 hũ 1kg"
        }, {
          item: "Tủ quần áo 2 cánh",
          qty: "2 hũ 1kg"
        }, {
          item: "Cửa gỗ 1 cánh",
          qty: "2 hũ"
        }, {
          item: "Kệ TV / kệ sách",
          qty: "1–2 hũ 1kg"
        }, {
          item: "Giường ngủ",
          qty: "2 hũ"
        }].map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-walnut/10 py-2 text-[13px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-walnut/70", children: row.item }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-charcoal", children: row.qty })
        ] }, i)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-walnut/10 bg-sand/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-walnut/70", children: "04 — Bề mặt" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl", children: [
          "Bạn đang",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "sơn gì?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-sm text-[15px] leading-relaxed text-walnut/70", children: "Chọn bề mặt để xem gợi ý dòng sơn phù hợp." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 lg:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-walnut/15", children: surfaces.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SurfaceOption, { label: s.label, desc: s.desc, recommendation: s.recommendation, detail: s.detail }, s.label)) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-walnut/10 bg-walnut text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-x-6 gap-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-4 lg:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-cream/60", children: "05 — Trước & Sau" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-[32px] leading-tight sm:text-4xl md:text-5xl", children: [
          "Đồ gỗ cũ,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "kể câu chuyện mới."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-sm text-[15px] leading-relaxed text-cream/75", children: "Một lớp Lotus đủ để biến chiếc ghế đã ngả màu thành chi tiết trầm tĩnh, hoà với phần còn lại của ngôi nhà — không cần thay mới." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 md:col-span-8 lg:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: beforeAfter, alt: "Ghế gỗ trước và sau khi sơn lại bằng Lotus Wood Paint màu rêu", loading: "lazy", className: "w-full h-auto block", width: 1600, height: 900 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-cream/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3 bg-black/40 px-2 py-1 text-[9px] uppercase tracking-[0.28em] text-cream sm:bottom-5 sm:left-[8%] sm:text-[10px]", children: "Trước khi sơn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 right-3 bg-black/40 px-2 py-1 text-[9px] uppercase tracking-[0.28em] text-cream sm:bottom-5 sm:right-[8%] sm:text-[10px]", children: "Sau khi sơn" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-walnut/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-walnut/70", children: "06 — Vì sao hệ nước" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl", children: [
            "Ít mùi.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Khô nhanh.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Dễ làm sạch."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 lg:pt-[3.5rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-[20px] leading-[1.6] text-charcoal md:text-[22px]", children: "Sơn được ngay trong phòng ngủ, cạnh con nhỏ. Không mùi xăng, không cần thông gió đặc biệt." }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-16 grid grid-cols-1 divide-y divide-walnut/12 border-t border-walnut/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0", children: [{
        n: "02",
        t: "Khô nhanh trong giờ",
        d: "Khô bề mặt sau 30 phút, sơn lớp tiếp theo sau 2 giờ. Xong trong một buổi chiều."
      }, {
        n: "03",
        t: "Rửa bằng nước thường",
        d: "Cọ, khay, tay áo — sạch chỉ với vòi nước. Không cần dung môi hay xăng."
      }, {
        n: "04",
        t: "Bền màu, không ố vàng",
        d: "Kháng ẩm, kháng trầy nhẹ, chịu lau chùi hằng ngày. Màu giữ nguyên nhiều năm."
      }].map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: `py-9 ${i === 0 ? "sm:pr-10" : i === 1 ? "sm:px-10" : "sm:pl-10"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[14px] uppercase tracking-[0.28em] text-clay", children: b.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-serif text-[19px] text-charcoal", children: b.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px] leading-relaxed text-walnut/65", children: b.d })
      ] }, b.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-walnut/10 bg-sand/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-walnut/70", children: "07 — Thi công" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl", children: [
          "Ba bước,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "một buổi chiều."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xs text-[14px] leading-relaxed text-walnut/70", children: "Không cần thợ. Không cần máy. Chỉ cọ, lăn — và một chút kiên nhẫn." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-8 md:pl-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-10 aspect-video overflow-hidden rounded-lg bg-charcoal/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-charcoal/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-5 w-5 text-charcoal/60", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 5v14l11-7z" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-walnut/50", children: "Xem video: sơn lại chiếc tủ cũ trong 1 buổi chiều" })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { children: [{
          n: "1",
          t: "Làm sạch & chà nhám nhẹ",
          d: "Lau bụi, dầu mỡ. Chà giấy nhám mịn để bề mặt mịn và bám sơn tốt."
        }, {
          n: "2",
          t: "Sơn lớp đầu, chờ khô",
          d: "Pha loãng 5–10% nước, sơn mỏng đều bằng cọ hoặc lăn. Để khô 2 giờ."
        }, {
          n: "3",
          t: "Phủ lớp hoàn thiện",
          d: "Lớp hai cho màng sơn đều màu, mịn, đạt độ bền tối ưu."
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-6 border-t border-walnut/15 py-8 md:gap-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 w-10 shrink-0 font-serif text-[2.8rem] leading-none text-clay/50 sm:text-[3.5rem]", children: s.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-[20px] leading-tight text-charcoal sm:text-[24px]", children: s.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2.5 text-[13px] leading-relaxed text-walnut/65", children: s.d })
          ] })
        ] }, s.n)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 border-t border-walnut/15 pt-6 font-serif text-[15px] italic text-walnut/50", children: "Hầu hết hoàn thành trong một buổi chiều — không cần nghỉ làm, không cần thợ." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "palette", className: "border-t border-walnut/10 bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-walnut/70", children: "08 — Bảng màu" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl", children: [
            "Chọn màu,",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "bấm xuống đặt hàng."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-lg text-[15px] leading-relaxed text-walnut/70", children: "Bấm vào màu để chọn tự động. Sau đó cuộn xuống phần đặt hàng để hoàn tất." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex border border-walnut/25 text-[11px] uppercase tracking-[0.2em] sm:text-[12px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            setTab("indoor");
            setOrderColor("");
          }, className: `px-4 py-3 transition sm:px-5 ${tab === "indoor" ? "bg-charcoal text-cream" : "text-walnut hover:bg-sand/60"}`, children: "Sơn màu bệt" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            setTab("outdoor");
            setOrderColor("");
          }, className: `px-4 py-3 transition sm:px-5 ${tab === "outdoor" ? "bg-charcoal text-cream" : "text-walnut hover:bg-sand/60"}`, children: "Sơn giữ vân gỗ" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6", children: (tab === "indoor" ? solidColors : woodStainColors).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
        setOrderColor(c.name);
        setOrderProduct(tab === "indoor" ? "bet" : "van-go");
      }, className: "group flex flex-col gap-3", children: [
        c.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.image, alt: c.name, className: `aspect-square w-full object-cover transition-all duration-200 ${orderColor === c.name ? "ring-3 ring-clay ring-offset-2 scale-105" : "group-hover:scale-[1.02]"}` }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `aspect-square w-full border border-walnut/15 bg-sand/30 transition-all duration-200 ${orderColor === c.name ? "ring-3 ring-clay ring-offset-2 scale-105" : ""}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-serif text-[14px] ${orderColor === c.name ? "text-clay font-medium" : "text-charcoal"}`, children: c.name }),
          orderColor === c.name && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-clay font-medium", children: "✓" })
        ] })
      ] }, c.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex items-center justify-between border-t border-walnut/15 pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 text-[12px] text-walnut/55", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 text-walnut/30", children: "※" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Màu hiển thị trên màn hình có thể chênh nhẹ so với thực tế." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setShowPaletteModal(true), className: "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-walnut/60 underline underline-offset-2 transition hover:text-clay", children: [
          "Xem bảng màu đầy đủ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
        ] })
      ] }),
      orderColor && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between border-t border-walnut/15 pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[13px] text-walnut/70", children: [
          "Đã chọn: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-charcoal", children: orderColor })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#advise", className: "inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-clay transition hover:text-clay/75", children: [
          "Đặt mua màu này",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }),
    showPaletteModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 backdrop-blur-sm p-4", onClick: () => setShowPaletteModal(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl w-full max-h-[90vh] bg-cream p-6 md:p-8 overflow-auto", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowPaletteModal(false), className: "absolute right-4 top-4 text-walnut/50 hover:text-charcoal transition z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-4 font-serif text-2xl text-charcoal", children: [
        "Bảng màu ",
        tab === "indoor" ? "sơn màu bệt" : "sơn giữ vân gỗ"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: tab === "indoor" ? SOLID_PALETTE_IMAGE : WOODSTAIN_PALETTE_IMAGE, alt: tab === "indoor" ? "Bảng màu sơn màu bệt Lotus cho nội thất trong nhà" : "Bảng màu sơn giữ vân gỗ Lotus cho nội thất trong và ngoài trời", className: "w-full border border-walnut/10 max-h-[60vh] object-contain" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-end gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: handleDownloadPalette, className: "inline-flex items-center gap-2 border border-walnut/20 px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-charcoal transition hover:bg-sand/60", children: [
          "Tải xuống",
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowPaletteModal(false), className: "inline-flex items-center gap-2 bg-clay px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-cream transition hover:bg-clay/90", children: "Đóng" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-walnut/10 bg-sand/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-col items-start justify-between gap-4 md:flex-row md:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-walnut/70", children: "09 — Công trình thật" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl", children: [
            "Từ đồ gỗ cũ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "đến không gian mới."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-sm text-[15px] leading-relaxed text-walnut/70", children: "Những căn nhà đã được làm mới cùng Lotus — từ đồ gỗ trầy xước đến bề mặt sạch, màu mới hoặc giữ vân gỗ đẹp." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "group lg:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: projects[0].img, alt: projects[0].label, loading: "lazy", className: "aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]", width: 1e3, height: 1250 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-4 border-t border-walnut/20 pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg text-charcoal", children: projects[0].label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] text-walnut/60", children: projects[0].place })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-5 lg:col-span-5", children: projects.slice(1).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "group flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.label, loading: "lazy", className: "aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]", width: 900, height: 675 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-3 border-t border-walnut/20 pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-base text-charcoal", children: p.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-[11px] text-walnut/60", children: p.place })
          ] })
        ] }, p.label)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-walnut/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 md:flex-row md:items-end md:justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-walnut/70", children: "10 — Cảm nhận khách hàng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl", children: [
          "Ngày cuối tuần.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Một hũ sơn. Nhà khác hẳn."
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-1 divide-y divide-walnut/15 md:grid-cols-3 md:divide-x md:divide-y-0", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: `flex flex-col py-8 md:py-0 ${i === 0 ? "md:pr-10" : i === 1 ? "md:px-10" : "md:pl-10"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 aspect-[4/3] overflow-hidden rounded-lg bg-sand/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.image, alt: t.name, className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex-1 font-serif text-[17px] leading-[1.5] text-charcoal sm:text-[18px]", children: [
          "“",
          t.quote,
          "”"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-6 border-t border-walnut/15 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-charcoal", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-0.5 text-[11px] text-walnut/55", children: [
            t.place,
            " · ",
            t.product
          ] })
        ] })
      ] }, t.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-walnut/10 bg-sand/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-walnut/70", children: "11 — Câu hỏi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl", children: [
          "Những điều",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "khách hay hỏi."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xs text-[15px] leading-relaxed text-walnut/70", children: "Mua số lượng lớn cho xưởng hoặc dự án? Liên hệ Zalo để nhận giá sỉ." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 md:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "multiple", defaultValue: ["f-0", "f-1"], className: "border-t border-walnut/20", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `f-${i}`, className: "border-b border-walnut/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "py-5 text-left font-serif text-lg text-charcoal hover:no-underline sm:text-xl", children: f.q }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "pb-6 text-[15px] leading-relaxed text-walnut/80", children: f.a })
      ] }, i)) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-walnut/10 bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-[28px] leading-tight text-charcoal sm:text-[32px]", children: "Đặt online nhanh, nhận hàng tại nhà." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[15px] leading-relaxed text-walnut/70", children: "Chọn màu, đặt hàng trong vài phút và nhận hàng tận nơi. Bạn có thể thanh toán COD khi nhận hàng, hoặc chọn thanh toán online để được giảm 10% và miễn phí giao hàng." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2", children: ["COD khi nhận hàng", "Online giảm 10%", "Miễn phí giao hàng khi thanh toán online", "Giao toàn quốc trong 1–5 ngày", "Đổi trả 7 ngày nếu giao nhầm hoặc còn nguyên seal"].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5 rounded-lg bg-sand/30 px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 flex-shrink-0 text-clay", children: "✓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] leading-snug text-charcoal", children: item })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded-lg bg-charcoal/5 px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[14px] text-walnut/80", children: [
        "Chưa chắc chọn màu hay loại sơn?",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://zalo.me/0943966662", target: "_blank", rel: "noopener noreferrer", className: "font-medium text-clay underline underline-offset-2 transition hover:text-clay/80", children: "Nhắn Zalo để được gợi ý nhanh." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#palette", className: "mt-8 inline-flex items-center gap-3 bg-clay px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-cream transition hover:bg-clay/90 sm:text-[13px]", children: [
        "Chọn màu & đặt mua ngay",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "advise", className: "border-t border-walnut/10 bg-sand/30 text-charcoal", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 text-center md:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-walnut/50", children: "12 — Đặt hàng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-serif text-[32px] leading-tight sm:text-5xl", children: [
          "Điền thông tin,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "nhận hàng tại nhà."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[15px] leading-[1.7] text-walnut/65", children: "Chọn dòng sơn, màu, kích thước. COD toàn quốc hoặc thanh toán online giảm 10%." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: async (e) => {
        e.preventDefault();
        if (!orderColor) {
          alert("Bạn chưa chọn màu sơn.");
          return;
        }
        const scriptUrl = "https://script.google.com/macros/s/AKfycbwiEZ825HeXNV4WWih31l9yE9qBc4SlfFefUAiPRkiBbQ8JhAE31VdUAajrraOnQLN7/exec";
        const orderData = {
          source: "lotus-paint",
          name: orderName,
          phone: orderPhone,
          product: orderProduct === "bet" ? "Sơn màu bệt" : "Sơn giữ vân gỗ",
          env: orderEnv === "indoor" ? "Trong nhà" : "Ngoài trời",
          color: orderColor,
          surface: orderSurface === "bong" ? "Bóng" : orderSurface === "bong-50" ? "Bóng 50%" : "Mờ",
          size: orderSize,
          qty: orderQty.toString(),
          amount: formatVND(total),
          payment: orderPayment,
          address: orderAddress,
          note: orderNote
        };
        console.log("=== Sending to Google Apps Script ===");
        console.log("URL:", scriptUrl);
        console.log("Data:", orderData);
        try {
          console.log("Starting fetch...");
          const response = await fetch(scriptUrl, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(orderData)
          });
          console.log("Fetch completed. Response:", response);
          console.log("Response status:", response.status);
          console.log("Response ok:", response.ok);
        } catch (error) {
          console.error("=== Error sending data to Google Sheet ===");
          console.error("Error:", error);
          console.error("Error message:", error.message);
          console.error("Error stack:", error.stack);
          alert("Lỗi khi gửi đơn hàng: " + error.message);
        }
        navigate({
          to: "/thank-you",
          search: {
            name: orderName,
            phone: orderPhone,
            payment: orderPayment,
            amount: formatVND(total),
            product: orderProduct === "bet" ? "Sơn màu bệt" : "Sơn giữ vân gỗ",
            env: orderEnv === "indoor" ? "Trong nhà" : "Ngoài trời",
            color: orderColor,
            surface: orderSurface === "bong" ? "Bóng" : orderSurface === "bong-50" ? "Bóng 50%" : "Mờ",
            size: orderSize,
            qty: orderQty.toString()
          }
        });
      }, className: "grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-3 block text-[11px] text-walnut/50", children: "Dòng sơn" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
                setOrderProduct("bet");
                setOrderColor("");
              }, className: `border py-3 text-[13px] transition ${orderProduct === "bet" ? "border-clay bg-clay text-cream font-medium" : "border-walnut/20 text-walnut/60 hover:border-walnut/40"}`, children: "Sơn màu bệt" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
                setOrderProduct("van-go");
                setOrderColor("");
              }, className: `border py-3 text-[13px] transition ${orderProduct === "van-go" ? "border-clay bg-clay text-cream font-medium" : "border-walnut/20 text-walnut/60 hover:border-walnut/40"}`, children: "Sơn giữ vân gỗ" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-3 block text-[11px] text-walnut/50", children: "Môi trường sử dụng" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setOrderEnv("indoor"), className: `border py-3 text-[13px] transition ${orderEnv === "indoor" ? "border-clay bg-clay text-cream font-medium" : "border-walnut/20 text-walnut/60 hover:border-walnut/40"}`, children: "Trong nhà" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setOrderEnv("outdoor"), className: `border py-3 text-[13px] transition ${orderEnv === "outdoor" ? "border-clay bg-clay text-cream font-medium" : "border-walnut/20 text-walnut/60 hover:border-walnut/40"}`, children: "Ngoài trời" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-3 block text-[11px] text-walnut/50", children: "Màu sơn" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: orderColor, onChange: (e) => setOrderColor(e.target.value), placeholder: "Nhập mã màu (ví dụ: 008, 019...)", className: "w-full border border-walnut/20 bg-cream px-4 py-3 text-[13px] text-charcoal placeholder:text-walnut/40 focus:border-clay focus:outline-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
              setTab(orderProduct === "bet" ? "indoor" : "outdoor");
              setShowPaletteModal(true);
            }, className: "mt-2 text-[11px] text-walnut/55 underline underline-offset-2 transition hover:text-clay", children: "Xem bảng màu đầy đủ" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-3 block text-[11px] text-walnut/50", children: "Bề mặt" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setOrderSurface("bong"), className: `border py-3 text-[13px] transition ${orderSurface === "bong" ? "border-clay bg-clay text-cream font-medium" : "border-walnut/20 text-walnut/60 hover:border-walnut/40"}`, children: "Bóng" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setOrderSurface("bong-50"), className: `border py-3 text-[13px] transition ${orderSurface === "bong-50" ? "border-clay bg-clay text-cream font-medium" : "border-walnut/20 text-walnut/60 hover:border-walnut/40"}`, children: "Bóng 50%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setOrderSurface("mo"), className: `border py-3 text-[13px] transition ${orderSurface === "mo" ? "border-clay bg-clay text-cream font-medium" : "border-walnut/20 text-walnut/60 hover:border-walnut/40"}`, children: "Mờ" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-3 block text-[11px] text-walnut/50", children: "Kích thước & số lượng" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setOrderSize("1kg"), className: `border py-3 text-[13px] transition ${orderSize === "1kg" ? "border-clay bg-clay text-cream font-medium" : "border-walnut/20 text-walnut/60 hover:border-walnut/40"}`, children: [
                  "Hũ 1 kg",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[11px] opacity-60", children: formatVND(PRICES[orderProduct][orderEnv]["1kg"]) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setOrderSize("5kg"), className: `border py-3 text-[13px] transition ${orderSize === "5kg" ? "border-clay bg-clay text-cream font-medium" : "border-walnut/20 text-walnut/60 hover:border-walnut/40"}`, children: [
                  "Hũ 5 kg",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[11px] opacity-60", children: formatVND(PRICES[orderProduct][orderEnv]["5kg"]) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border border-walnut/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setOrderQty(Math.max(1, orderQty - 1)), className: "flex h-[46px] w-12 items-center justify-center text-xl leading-none text-walnut/50 transition hover:text-charcoal", children: "−" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-center text-[15px] text-charcoal", children: orderQty }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setOrderQty(orderQty + 1), className: "flex h-[46px] w-12 items-center justify-center text-xl leading-none text-walnut/50 transition hover:text-charcoal", children: "+" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 border border-walnut/15 p-5 bg-cream/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-[10px] text-walnut/50", children: "Tóm tắt đơn" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-[14px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-walnut/70", children: "Sản phẩm" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-charcoal", children: orderProduct === "bet" ? "Sơn màu bệt" : "Sơn giữ vân gỗ" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-walnut/70", children: "Môi trường" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-charcoal", children: orderEnv === "indoor" ? "Trong nhà" : "Ngoài trời" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-walnut/70", children: "Màu" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-charcoal", children: orderColor || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-walnut/40", children: "Chưa chọn màu" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-walnut/70", children: "Bề mặt" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-charcoal", children: orderSurface === "bong" ? "Bóng" : orderSurface === "bong-50" ? "Bóng 50%" : "Mờ" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-walnut/15 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-walnut/70", children: [
                  "Hũ ",
                  orderSize,
                  " × ",
                  orderQty
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-charcoal", children: [
                  formatVND(unitPrice),
                  " / hũ"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-walnut/70", children: "Tạm tính" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-charcoal", children: formatVND(subtotal) })
              ] }),
              orderPayment === "online" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[13px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-clay/80", children: "Giảm 10% (online)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-clay", children: [
                  "−",
                  formatVND(Math.round(subtotal * 0.1))
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[13px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-walnut/70", children: "Vận chuyển" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: orderPayment === "online" ? "text-clay" : "text-walnut/60", children: orderPayment === "online" ? "Miễn phí" : "Tính theo địa chỉ" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-t border-walnut/20 pt-2 text-[16px] font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-walnut/80", children: "Tổng cộng" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-clay", children: formatVND(total) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-3 block text-[11px] text-walnut/50", children: "Hình thức thanh toán" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setOrderPayment("cod"), className: `w-full border p-4 text-left transition ${orderPayment === "cod" ? "border-walnut/40 bg-sand/50" : "border-walnut/15 hover:border-walnut/30"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block text-[13px] font-medium ${orderPayment === "cod" ? "text-charcoal" : "text-walnut/60"}`, children: "COD — Thanh toán khi nhận" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block text-[12px] ${orderPayment === "cod" ? "text-walnut/55" : "text-walnut/40"}`, children: "Không cần thanh toán trước" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setOrderPayment("online"), className: `w-full border p-4 text-left transition ${orderPayment === "online" ? "border-clay/60 bg-clay/5" : "border-walnut/15 hover:border-walnut/30"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block text-[13px] font-medium ${orderPayment === "online" ? "text-clay" : "text-walnut/60"}`, children: "Thanh toán Online" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block text-[13px] font-medium ${orderPayment === "online" ? "text-clay" : "text-walnut/60"}`, children: "✨ Giảm 10% + Miễn phí giao hàng" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-[13px] text-walnut/70", children: "Họ và tên" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "text", value: orderName, onChange: (e) => setOrderName(e.target.value), placeholder: "Nhập họ và tên của bạn", className: "w-full border border-walnut/20 bg-cream px-4 py-3 text-[15px] text-charcoal placeholder:text-walnut/35 focus:border-clay focus:outline-none" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-[13px] text-walnut/70", children: "Số điện thoại" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "tel", value: orderPhone, onChange: (e) => setOrderPhone(e.target.value), placeholder: "Nhập số điện thoại của bạn", className: "w-full border border-walnut/20 bg-cream px-4 py-3 text-[15px] text-charcoal placeholder:text-walnut/35 focus:border-clay focus:outline-none" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-[13px] text-walnut/70", children: "Địa chỉ nhận hàng" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "text", value: orderAddress, onChange: (e) => setOrderAddress(e.target.value), placeholder: "Số nhà, đường, phường / xã, tỉnh / thành phố...", className: "w-full border border-walnut/20 bg-cream px-4 py-3 text-[15px] text-charcoal placeholder:text-walnut/35 focus:border-clay focus:outline-none" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-[13px] text-walnut/70", children: "Ghi chú (tuỳ chọn)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: orderNote, onChange: (e) => setOrderNote(e.target.value), placeholder: "Giờ giao hàng, yêu cầu thêm...", className: "w-full min-h-[80px] border border-walnut/20 bg-cream px-4 py-3 text-[15px] text-charcoal placeholder:text-walnut/35 focus:border-clay focus:outline-none resize-none" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "h-[56px] w-full bg-clay text-[12px] font-medium uppercase tracking-[0.22em] text-cream transition hover:bg-clay/90", children: "Đặt hàng" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-center text-[11px] text-walnut/50", children: "COD toàn quốc · Đổi trả 7 ngày" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-4 text-[11px] text-walnut/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "※ Màu hiển thị trên màn hình có thể chênh nhẹ so với thực tế." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "border-t border-walnut/15 pt-4", children: [
          "Mua từ 50kg trở lên?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://zalo.me/0943966662", target: "_blank", rel: "noopener noreferrer", className: "underline underline-offset-2 transition hover:text-clay", children: "Nhắn Zalo để nhận giá sỉ." })
        ] })
      ] })
    ] }) }),
    showZaloButton && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://zalo.me/0943966662", target: "_blank", rel: "noopener noreferrer", className: "fixed bottom-6 right-6 z-50 group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition hover:shadow-xl", style: {
      backgroundColor: "#0068FF"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-white", children: "Z" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-full mr-3 w-48 rounded-lg bg-charcoal px-3 py-2 text-[11px] text-cream opacity-0 transition-opacity group-hover:opacity-100", children: "Bạn chưa chắc chọn gì? Nhắn Zalo — tư vấn miễn phí" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Header() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 border-b border-walnut/10 bg-cream/85 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-12 md:py-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoLotus, alt: "Lotus Logo", className: "h-10 w-auto" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden gap-10 text-[12px] uppercase tracking-[0.22em] text-walnut md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#choose", className: "hover:text-clay", children: "Sản phẩm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#palette", className: "hover:text-clay", children: "Bảng màu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#advise", className: "hover:text-clay", children: "Đặt hàng" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#advise", className: "inline-flex items-center gap-2 border border-charcoal px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] text-charcoal transition hover:bg-charcoal hover:text-cream sm:px-5 sm:text-[11px]", children: [
      "Chọn màu & mua",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-walnut/15 bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 py-14 md:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoLotus, alt: "Lotus Logo", className: "h-12 w-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-sm text-sm leading-relaxed text-walnut/65", children: "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ BÍCH TRANG" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-walnut/55", children: "MST: 0313351528" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-walnut/55", children: "99/5 Đường XTT26-1, Ấp 2, Xã Bà Điểm, TP.HCM" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-6 md:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.22em] text-walnut/50 mb-3", children: "Sản phẩm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2.5 text-sm text-charcoal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#choose", className: "hover:text-clay", children: "Wood Paint — Indoor" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#choose", className: "hover:text-clay", children: "Woodstain Finish — Outdoor" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#palette", className: "hover:text-clay", children: "Bảng màu" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-6 md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.22em] text-walnut/50 mb-3", children: "Liên hệ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2.5 text-sm text-charcoal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://zalo.me/0943966662", target: "_blank", rel: "noopener noreferrer", className: "hover:text-clay", children: "Hotline: 0943 966 662" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:sales@sonlotus.vn", className: "hover:text-clay", children: "sales@www.sonlotus.vn" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.sonlotus.vn", target: "_blank", rel: "noopener noreferrer", className: "hover:text-clay", children: "www.sonlotus.vn" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Giờ làm việc · 8:00 – 20:00" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col justify-between gap-3 border-t border-walnut/15 pt-6 text-[11px] text-walnut/60 md:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " CÔNG TY TNHH SX TM DV BÍCH TRANG"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Made with care · Vietnam" })
    ] })
  ] }) });
}
function SurfaceOption({
  label,
  desc,
  recommendation,
  detail
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cursor-default border-t border-walnut/15 py-5 px-1 transition-colors hover:bg-sand/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-[18px] text-charcoal sm:text-[19px]", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-[13px] text-walnut/60", children: desc })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 sm:text-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-clay", children: recommendation }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[12px] text-walnut/60 leading-relaxed", children: detail })
    ] })
  ] }) });
}
function DecisionCard({
  index,
  title,
  subtitle,
  body,
  img,
  bullets,
  ctaText,
  ctaLink,
  onCtaClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: title, loading: "lazy", className: "aspect-[5/6] w-full object-cover transition duration-700 group-hover:scale-[1.03]", width: 1200, height: 1500 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex items-baseline gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-4xl text-clay", children: index }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.25em] text-walnut/70", children: subtitle })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-serif text-[28px] leading-tight text-charcoal sm:text-3xl md:text-4xl", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-lg text-[15px] leading-relaxed text-walnut/80", children: body }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2 text-[13px] leading-relaxed text-walnut/75", children: bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "pl-4 border-l border-walnut/20", children: b }, b)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 border-t border-walnut/20 pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: ctaLink, onClick: () => onCtaClick?.(), className: "group/btn inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.18em] text-charcoal transition hover:text-clay sm:text-[13px]", children: [
      ctaText,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition group-hover/btn:translate-x-1" })
    ] }) })
  ] });
}
function StickyCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:fixed md:bottom-0 md:left-0 md:right-0 md:z-50 bg-charcoal/95 backdrop-blur border-t border-walnut/20 py-3 px-5 md:py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] flex flex-col sm:flex-row items-center justify-between gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.18em] text-cream/80 sm:text-[12px]", children: "Muốn chọn đúng sơn & số kg? Gửi ảnh bề mặt qua Zalo." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://zalo.me/0943966662", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 bg-clay px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-cream transition hover:bg-clay/90 sm:text-[12px]", children: [
      "Gửi ảnh qua Zalo",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
    ] })
  ] }) });
}
export {
  Index as component
};
