import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Select$1, a as SelectValue$1, b as SelectTrigger$1, c as SelectIcon, d as SelectPortal, e as SelectContent$1, f as SelectViewport, g as SelectItem$1, h as SelectItemIndicator, i as SelectItemText, j as SelectScrollUpButton$1, k as SelectScrollDownButton$1, l as SelectLabel$1, m as SelectSeparator$1 } from "../_libs/radix-ui__react-select.mjs";
import { R as Root2, I as Item, H as Header$1, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { A as ArrowRight, Q as Quote, S as ShieldCheck, T as Truck, M as MessageCircle, C as ChevronDown, a as Check, b as ChevronUp } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Select = Select$1;
const SelectValue = SelectValue$1;
const SelectTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectTrigger$1,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectIcon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectTrigger$1.displayName;
const SelectScrollUpButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectScrollUpButton$1,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
const SelectScrollDownButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectScrollDownButton$1,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
const SelectContent = reactExports.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectPortal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectContent$1,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SelectViewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectContent$1.displayName;
const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectLabel$1,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectLabel$1.displayName;
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SelectItem$1,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectItem$1.displayName;
const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SelectSeparator$1,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectSeparator$1.displayName;
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
const heroInterior = "/assets/hero-interior-DT1l1_U9-v2.jpg";
const diyHands = "/assets/diy-hands-CCuqMEBn-v2.jpg";
const exteriorDoor = "/assets/exterior-door-BGKN49Z6-v2.jpg";
const beforeAfter = "/assets/before-after-Bz7UqToO-v2.jpg";
const project1 = "/assets/project-1-dSmkHL4H-v2.jpg";
const project2 = "/assets/project-2-JUJyhsNw-v2.jpg";
const project3 = "/assets/project-3-BjUNJyrO-v2.jpg";
const logoLotus = "/assets/logo-lotus-C0CbJd0t-v2.jpg";
const interiorPalette = [{
  name: "Sứ",
  hex: "#F4EFE6",
  tone: "Trắng ấm",
  mood: "Ấm"
}, {
  name: "Mộc",
  hex: "#E8DCC6",
  tone: "Be sữa",
  mood: "Ấm"
}, {
  name: "Sét",
  hex: "#B25C3B",
  tone: "Đất nung",
  mood: "Ấm"
}, {
  name: "Khói",
  hex: "#B7AFA3",
  tone: "Xám ấm",
  mood: "Trung tính"
}, {
  name: "Mây",
  hex: "#D9D3C7",
  tone: "Xám sáng",
  mood: "Trung tính"
}, {
  name: "Than",
  hex: "#2A2724",
  tone: "Đen mờ",
  mood: "Lạnh"
}, {
  name: "Rêu",
  hex: "#7C8A6E",
  tone: "Xanh trầm",
  mood: "Lạnh"
}, {
  name: "Olive",
  hex: "#5A6147",
  tone: "Xanh sâu",
  mood: "Lạnh"
}];
const exteriorPalette = [{
  name: "Sồi",
  hex: "#C9A26B",
  tone: "Vàng tự nhiên",
  mood: "Ấm"
}, {
  name: "Teak",
  hex: "#A6713C",
  tone: "Vàng ấm",
  mood: "Ấm"
}, {
  name: "Căm xe",
  hex: "#8B4A2B",
  tone: "Nâu đỏ",
  mood: "Ấm"
}, {
  name: "Hương",
  hex: "#6B2E22",
  tone: "Nâu thẫm",
  mood: "Trung tính"
}, {
  name: "Walnut",
  hex: "#3E2418",
  tone: "Óc chó",
  mood: "Lạnh"
}, {
  name: "Mun",
  hex: "#1F1611",
  tone: "Đen tự nhiên",
  mood: "Lạnh"
}];
const surfaces = [{
  label: "Bàn ăn / bàn làm việc",
  desc: "Bàn gỗ nội thất dùng hàng ngày",
  recommendation: "Sơn gỗ màu bệt (Indoor)",
  detail: "2 lớp, độ phủ 8-10m²/kg, màu ấm: Sứ, Mộc, Khói"
}, {
  label: "Tủ áo / tủ bếp / kệ TV",
  desc: "Tủ kệ nội thất lớn",
  recommendation: "Sơn gỗ màu bệt (Indoor)",
  detail: "2-3 lớp, độ phủ 8-10m²/kg, che nền cũ tốt"
}, {
  label: "Cửa, khung cửa, lan can",
  desc: "Cửa nội thất hoặc ngoại thất",
  recommendation: "Woodstain Finish (Nội/Ngoại thất)",
  detail: "2-3 lớp, giữ vân gỗ, kháng ẩm & UV"
}, {
  label: "Sàn gỗ, bậc cầu thang",
  desc: "Sàn tự nhiên hoặc engineered",
  recommendation: "Woodstain Finish (Sàn)",
  detail: "3 lớp, độ bền cao, chịu ma sát"
}, {
  label: "Vật dụng nhỏ (ghế, kệ, đồ trang trí)",
  desc: "Đồ gỗ nhỏ, decor",
  recommendation: "Sơn gỗ màu bệt (Indoor)",
  detail: "2 lớp, ít sơn, dễ thi công"
}];
const surfaceOptions = ["Bàn ăn / bàn làm việc", "Tủ áo / tủ bếp / kệ TV", "Cửa, khung cửa, lan can", "Sàn gỗ, bậc cầu thang", "Vật dụng nhỏ (ghế, kệ, đồ trang trí)", "Khác — sẽ mô tả thêm"];
const paintOptions = ["Chưa rõ, nhờ tư vấn", "Sơn gỗ màu bệt (Indoor)", "Woodstain Finish (Nội/Ngoại thất)"];
const projects = [{
  img: project1,
  label: "Tủ TV — sắc Rêu",
  place: "Căn hộ · Quận 2, TP. HCM"
}, {
  img: project2,
  label: "Bàn ăn — Walnut tự nhiên",
  place: "Nhà phố · Hà Nội"
}, {
  img: project3,
  label: "Tủ áo — sắc Mộc",
  place: "Studio · Đà Nẵng"
}];
const testimonials = [{
  quote: "Mình sơn lại bộ bàn ăn ngay trong căn hộ chung cư. Không mùi xăng, không phải dời con sang nhà ngoại. Sáng hôm sau cả nhà đã ngồi ăn bình thường.",
  name: "Chị Linh",
  place: "Thảo Điền, TP. HCM",
  product: "Wood Paint · sắc Khói"
}, {
  quote: "Tủ áo cũ của mẹ mình được sơn lại sắc Mộc, đặt cạnh giường nhìn rất tĩnh. Đội Lotus tư vấn rất kỹ về số lớp và lượng sơn cần đặt.",
  name: "Anh Phúc",
  place: "Quận Cầu Giấy, Hà Nội",
  product: "Wood Paint · sắc Mộc"
}, {
  quote: "Mình tự sơn cửa gỗ ngoài ban công bằng Woodstain Walnut. Sau 4 tháng nắng mưa vẫn giữ màu, vân gỗ vẫn rõ. Đáng đồng tiền.",
  name: "Chị Mai",
  place: "Đà Nẵng",
  product: "Woodstain · Walnut"
}];
const faqs = [{
  q: "Lotus có thực sự an toàn để sơn trong nhà có trẻ nhỏ không?",
  a: "Có. Lotus là sơn hệ nước, không chứa dung môi nặng và hàm lượng VOC thấp. Bạn có thể thi công ngay trong phòng ngủ, phòng bếp; sau 4–6 giờ là có thể sinh hoạt lại bình thường. Vẫn nên mở cửa cho thoáng trong lúc sơn."
}, {
  q: "Tôi chưa sơn bao giờ, có tự làm được không?",
  a: "Hoàn toàn được. Sơn hệ nước dễ tãi đều, không kén tay nghề. Bạn chỉ cần cọ hoặc rulo, một miếng giấy nhám P240 và khoảng một buổi chiều. Đội Lotus có thể nhắn hướng dẫn theo đúng bề mặt của bạn trước khi sơn."
}, {
  q: "Một hũ 1kg sơn được bao nhiêu m²?",
  a: "Khoảng 8–10 m² cho mỗi lớp tuỳ bề mặt. Khuyến nghị sơn 2 lớp để màng sơn đều và bền — tương đương 4–5 m² hoàn thiện cho 1kg."
}, {
  q: "Sơn lên đồ gỗ cũ đã có sơn cũ thì cần xử lý thế nào?",
  a: "Chà nhám nhẹ bằng giấy P180–P240 để lớp sơn cũ bớt bóng và bám tốt hơn. Nếu bề mặt bong tróc nhiều, cần cạo phần bong rồi chà phẳng. Lotus bám trực tiếp lên sơn cũ còn nguyên, không cần lót."
}, {
  q: "Bao lâu thì có thể sử dụng bình thường?",
  a: "Khô bề mặt sau 30 phút, sơn lớp tiếp theo sau 2 giờ. Sử dụng nhẹ sau 24 giờ. Đạt độ cứng tối đa sau khoảng 7 ngày — trong tuần đầu hạn chế vật nặng kéo lê trên bề mặt."
}, {
  q: "Tôi ở tỉnh, có giao hàng không? Bao lâu nhận được?",
  a: "Lotus giao toàn quốc. Nội thành Hà Nội & TP. HCM nhận trong 1–2 ngày, các tỉnh thành khác 2–5 ngày. Đơn từ 2 hũ trở lên được miễn phí vận chuyển. Thanh toán khi nhận hàng (COD)."
}, {
  q: "Nếu chọn sai màu hoặc không ưng thì sao?",
  a: "Lotus cam kết tư vấn đúng hệ sơn theo bề mặt bạn mô tả. Sản phẩm còn nguyên seal được đổi trả trong 7 ngày. Với màu sắc, đội tư vấn có thể gửi swatch thật trước khi bạn quyết định."
}];
function Index() {
  const [tab, setTab] = reactExports.useState("indoor");
  const palette = tab === "indoor" ? interiorPalette : exteriorPalette;
  const [surface, setSurface] = reactExports.useState("");
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-cream text-charcoal font-sans antialiased", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    showSticky && /* @__PURE__ */ jsxRuntimeExports.jsx(StickyCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "hero", className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-5 pt-10 pb-16 md:px-12 md:pt-16 md:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-x-6 gap-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-6 lg:col-span-5 flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-walnut/70", children: "Lotus · Sơn gỗ hệ nước cho gia đình" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-serif text-[38px] leading-[1.05] tracking-tight text-charcoal sm:text-[44px] md:text-[60px] lg:text-[72px]", children: [
          "Làm mới đồ gỗ tại nhà",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "not-italic text-clay", children: "ít mùi, an toàn" }),
          ",",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "tự thi công được."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 max-w-md text-[15px] leading-relaxed text-walnut/80", children: "Sơn gỗ hệ nước Lotus có 2 kiểu hoàn thiện: màu bệt phủ kín hoặc giữ vân gỗ tự nhiên. Gửi ảnh bề mặt qua Zalo để được tư vấn đúng dòng sơn + số kg cụ thể cho đồ gỗ của bạn." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://zalo.me/843966662", target: "_blank", rel: "noopener noreferrer", className: "group inline-flex items-center gap-3 bg-clay px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-cream transition hover:bg-clay/90 sm:px-7 sm:text-[13px]", children: [
            "Gửi ảnh bề mặt qua Zalo",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#choose", className: "text-[12px] font-medium uppercase tracking-[0.18em] text-walnut underline-offset-8 hover:underline sm:text-[13px]", children: "Xem 2 kiểu hoàn thiện" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-14 grid grid-cols-3 gap-5 border-t border-walnut/15 pt-8 text-walnut", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "01", v: "Hệ nước ít mùi" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "02", v: "2 kiểu: bệt / giữ vân" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "03", v: "Tư vấn qua Zalo" })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "choose", className: "border-t border-walnut/10 bg-sand/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-walnut/70", children: "02 — Chọn kiểu hoàn thiện" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-[34px] leading-tight text-charcoal sm:text-4xl md:text-5xl", children: [
          "Bạn muốn phủ kín màu",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "hay giữ vân gỗ?"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionCard, { index: "01", title: "Phủ kín màu, che vân gỗ", subtitle: "Sơn gỗ màu bệt — Nội thất", body: "Phủ trọn bề mặt gỗ, MDF, plywood. Màng sơn mịn như sứ, độ cứng cao, che hoàn toàn vân và màu gốc. Phù hợp tủ, kệ, bàn nội thất muốn đổi màu hoàn toàn.", img: diyHands, bullets: ["Tủ áo, tủ bếp, kệ TV, bàn làm việc", "Che nền cũ, đổi màu hoàn toàn", "Màu ấm: Sứ, Mộc, Khói, Rêu"], ctaText: "Xem bảng màu sơn bệt", ctaLink: "#palette", onCtaClick: () => setTab("indoor") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DecisionCard, { index: "02", title: "Giữ vân gỗ, nhìn giống gỗ tự nhiên", subtitle: "Woodstain Finish — Nội & Ngoại thất", body: "Thấm sâu vào gỗ, tôn trọn vân tự nhiên. Dẻo dai, kháng ẩm, chịu nắng mưa. Phù hợp cửa, sàn, lan can, đồ ngoại thất muốn giữ vẻ đẹp gỗ.", img: exteriorDoor, bullets: ["Cửa, khung cửa, sàn gỗ, lan can", "Giữ vân, chống trầy, kháng ẩm", "Màu tự nhiên: Sồi, Teak, Walnut, Mun"], ctaText: "Xem bảng màu sơn giữ vân gỗ", ctaLink: "#palette", onCtaClick: () => setTab("outdoor") })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-walnut/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "grid grid-cols-12 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-walnut/70", children: "03 — Quy cách" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl", children: [
            "Mọi con số bạn",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "cần biết trước khi đặt."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "col-span-12 md:col-span-6 md:pt-12 text-[15px] leading-relaxed text-walnut/80", children: "Thông số tham khảo cho người dùng tự thi công — đã được Lotus kiểm thử trên các bề mặt gỗ phổ biến tại Việt Nam. Đội tư vấn sẽ tính chính xác lượng sơn theo diện tích thực tế của bạn." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid grid-cols-2 gap-y-10 border-t border-walnut/20 sm:grid-cols-4 sm:divide-x sm:divide-walnut/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SpecCell, { k: "Quy cách", v: "Hũ 1kg", sub: "Có thể đặt combo nhiều hũ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SpecCell, { k: "Độ phủ tham khảo", v: "8–10 m²/kg", sub: "Mỗi lớp · bề mặt phẳng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SpecCell, { k: "Số lớp khuyến nghị", v: "2 lớp", sub: "3 lớp cho sàn & ngoại thất" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SpecCell, { k: "Thời gian khô", v: "30 phút", sub: "Khô bề mặt · sơn lớp 2 sau 2h" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col items-start justify-between gap-4 border-t border-walnut/20 pt-8 sm:flex-row sm:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-walnut/75", children: "Cần tính chính xác lượng sơn cho diện tích nhà bạn?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#advise", className: "inline-flex items-center gap-3 border border-charcoal px-5 py-3 text-[12px] uppercase tracking-[0.2em] text-charcoal transition hover:bg-charcoal hover:text-cream", children: [
          "Nhận tư vấn lượng sơn",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-walnut/10 bg-sand/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-walnut/70", children: "04 — Bề mặt" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl", children: [
          "Bạn đang",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "sơn gì?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-sm text-[15px] leading-relaxed text-walnut/80", children: "Chọn bề mặt để xem gợi ý dòng sơn phù hợp. Gửi ảnh qua Zalo để được tư vấn chi tiết." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: surfaces.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SurfaceOption, { label: s.label, desc: s.desc, recommendation: s.recommendation, detail: s.detail }, s.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-6 border-t border-walnut/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://zalo.me/843966662", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.18em] text-charcoal transition hover:text-clay sm:text-[13px]", children: [
          "Gửi ảnh bề mặt này qua Zalo để xem kỹ hơn",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-walnut/10 bg-walnut text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-x-6 gap-y-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-cream/60", children: "05 — Trước & Sau" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-[32px] leading-tight sm:text-4xl md:text-5xl", children: [
          "Đồ gỗ cũ,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "kể câu chuyện mới."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-sm text-[15px] leading-relaxed text-cream/75", children: "Một lớp Lotus đủ để biến chiếc ghế đã ngả màu thành chi tiết trầm tĩnh, hoà với phần còn lại của ngôi nhà — không cần thay mới." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#advise", className: "mt-8 inline-flex items-center gap-3 border-b border-cream/60 pb-1 text-[12px] uppercase tracking-[0.2em] hover:text-clay hover:border-clay sm:text-[13px]", children: [
          "Nhận tư vấn theo bề mặt gỗ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 md:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: beforeAfter, alt: "Ghế gỗ trước và sau khi sơn lại bằng Lotus Wood Paint màu rêu", loading: "lazy", className: "aspect-[16/10] w-full object-cover", width: 1600, height: 1e3 }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-walnut/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "grid grid-cols-12 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-walnut/70", children: "06 — Vì sao hệ nước" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl", children: [
            "Sạch hơn cho ngôi nhà.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Dễ hơn cho đôi tay."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "col-span-12 md:col-span-6 md:pt-12 text-[15px] leading-relaxed text-walnut/80", children: "Lotus được pha chế gốc nước — không dung môi nặng, không mùi gắt, không cần phòng thi công riêng. Bạn có thể sơn trong căn hộ, ở cạnh con nhỏ, và quay lại sinh hoạt bình thường chỉ sau vài giờ." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4", children: [{
        n: "01",
        t: "Hệ nước nhẹ mùi",
        d: "Không xăng thơm, không dung môi nặng. An toàn cho phòng ngủ và phòng trẻ."
      }, {
        n: "02",
        t: "Khô nhanh trong giờ",
        d: "Khô bề mặt 30 phút, sơn lớp tiếp theo sau 2 giờ. Một buổi chiều là xong."
      }, {
        n: "03",
        t: "Rửa bằng nước thường",
        d: "Cọ, khay, tay áo — sạch chỉ với vòi nước. Không cần dung môi."
      }, {
        n: "04",
        t: "Bền cho đời sống thật",
        d: "Kháng ẩm, kháng trầy nhẹ, chịu được lau chùi hằng ngày trong gia đình."
      }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "border-t border-walnut/20 pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.3em] text-clay", children: b.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-serif text-xl text-charcoal sm:text-2xl", children: b.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-walnut/75", children: b.d })
      ] }, b.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-walnut/10 bg-sand/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-walnut/70", children: "07 — Thi công" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl", children: [
          "Ba bước,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "một buổi chiều."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-sm text-[15px] leading-relaxed text-walnut/80", children: "Quy trình tinh giản — không cần thợ, không cần máy chuyên dụng. Chỉ cọ, lăn và một chút kiên nhẫn." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "col-span-12 md:col-span-7 space-y-8", children: [{
        n: "I.",
        t: "Làm sạch & chà nhám nhẹ",
        d: "Lau bụi, dầu mỡ. Chà nhám P240 cho bề mặt mịn và bám sơn tốt."
      }, {
        n: "II.",
        t: "Sơn lớp đầu, chờ 2 giờ",
        d: "Pha loãng 5–10% nước, sơn mỏng đều bằng cọ hoặc lăn. Để khô trong 2 giờ."
      }, {
        n: "III.",
        t: "Phủ lớp hoàn thiện",
        d: "Sơn lớp thứ hai để màng sơn đều màu, mịn và đạt độ bền tối ưu."
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "grid grid-cols-12 items-baseline gap-4 border-t border-walnut/15 pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "col-span-2 font-serif text-2xl text-clay sm:text-3xl", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl text-charcoal sm:text-2xl", children: s.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-walnut/75", children: s.d })
        ] })
      ] }, s.n)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "palette", className: "border-t border-walnut/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-walnut/70", children: "08 — Bảng màu" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl", children: [
            "Chọn màu phù hợp",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "với không gian của bạn."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex border border-walnut/25 text-[11px] uppercase tracking-[0.2em] sm:text-[12px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab("indoor"), className: `px-4 py-3 transition sm:px-5 ${tab === "indoor" ? "bg-charcoal text-cream" : "text-walnut hover:bg-sand/60"}`, children: "Màu Bệt" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab("outdoor"), className: `px-4 py-3 transition sm:px-5 ${tab === "outdoor" ? "bg-charcoal text-cream" : "text-walnut hover:bg-sand/60"}`, children: "Màu Giữ Vân Gỗ" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 space-y-12", children: ["Ấm", "Trung tính", "Lạnh"].map((mood) => {
        const moodColors = palette.filter((c) => c.mood === mood);
        if (moodColors.length === 0) return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] uppercase tracking-[0.25em] text-clay mb-6", children: [
            "Mood: ",
            mood
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4", children: moodColors.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] w-full transition group-hover:scale-[1.01]", style: {
              backgroundColor: c.hex
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-4 flex items-baseline justify-between border-t border-walnut/20 pt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg text-charcoal", children: c.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] text-walnut/60 sm:text-[11px]", children: c.tone })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-walnut/50 sm:text-[11px]", children: c.hex })
            ] })
          ] }, c.name)) })
        ] }, mood);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-walnut/10 bg-sand/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-col items-start justify-between gap-4 md:flex-row md:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-walnut/70", children: "09 — Công trình thật" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl", children: [
            "Từ đồ gỗ cũ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "đến không gian mới."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-sm text-[14px] leading-relaxed text-walnut/75", children: "Những căn nhà đã được làm mới cùng Lotus — từ đồ gỗ trầy xước đến bề mặt sạch, màu mới hoặc giữ vân gỗ đẹp." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.label, loading: "lazy", className: "aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]", width: 1e3, height: 1250 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-4 border-t border-walnut/20 pt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg text-charcoal", children: p.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] uppercase tracking-[0.2em] text-walnut/60", children: p.place })
        ] })
      ] }, p.label)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-walnut/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-walnut/70", children: "10 — Cảm nhận khách hàng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl", children: [
          "Vợ chồng trẻ,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "chủ nhà tự làm DIY."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "flex flex-col border border-walnut/20 bg-cream p-7 sm:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-5 w-5 text-clay", strokeWidth: 1.5 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 flex-1 font-serif text-[19px] leading-[1.45] text-charcoal sm:text-[20px]", children: t.quote }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-7 border-t border-walnut/15 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-charcoal", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] uppercase tracking-[0.2em] text-walnut/60", children: [
            t.place,
            " · ",
            t.product
          ] })
        ] })
      ] }, t.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.facebook.com/lotuspaint", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.18em] text-charcoal transition hover:text-clay sm:text-[13px]", children: [
        "Xem thêm ảnh & feedback trên fanpage Lotus",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-walnut/10 bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Commit, { k: "Tư vấn đúng hệ sơn", v: "Đội Lotus xác nhận đúng dòng sơn theo bề mặt thực tế của bạn — không tư vấn dư, không bán nhầm.", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5", strokeWidth: 1.5 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Commit, { k: "Đổi trả trong 7 ngày", v: "Sản phẩm còn nguyên seal được đổi hoặc trả lại trong 7 ngày kể từ ngày nhận hàng.", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5", strokeWidth: 1.5 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Commit, { k: "Giao toàn quốc · COD", v: "Nội thành 1–2 ngày, các tỉnh 2–5 ngày. Miễn phí vận chuyển từ 2 hũ. Thanh toán khi nhận.", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-5 w-5", strokeWidth: 1.5 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Commit, { k: "Hỗ trợ trong khi thi công", v: "Có vướng mắc khi tự sơn? Nhắn Lotus qua Zalo, đội kỹ thuật trả lời trong giờ làm việc.", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5", strokeWidth: 1.5 }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-walnut/10 bg-sand/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-walnut/70", children: "11 — Câu hỏi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl", children: [
          "Những điều",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "khách hay hỏi."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xs text-[14px] leading-relaxed text-walnut/75", children: "Chưa thấy câu trả lời cho trường hợp của bạn? Gửi câu hỏi qua form bên dưới — Lotus sẽ phản hồi trong vòng 24 giờ." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 md:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "border-t border-walnut/20", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `f-${i}`, className: "border-b border-walnut/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "py-5 text-left font-serif text-lg text-charcoal hover:no-underline sm:text-xl", children: f.q }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "pb-6 text-[15px] leading-relaxed text-walnut/80", children: f.a })
      ] }, i)) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "advise", className: "border-t border-walnut/10 bg-charcoal text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-x-6 gap-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-cream/60", children: "12 — Đặt hàng nhanh" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-[36px] leading-tight sm:text-5xl md:text-6xl", children: [
          "Nếu bạn đã rõ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "mình cần gì."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-md text-[15px] leading-relaxed text-cream/75", children: "Nếu bạn đã xem kỹ hướng dẫn và muốn đặt hàng nhanh, điền form dưới đây. Nếu vẫn phân vân, hãy nhắn Zalo để gửi ảnh bề mặt." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://zalo.me/843966662", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-3 border border-cream/40 px-5 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-cream transition hover:bg-cream/10 hover:border-cream sm:text-[13px]", children: [
          "Gửi ảnh bề mặt qua Zalo",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        alert("Cảm ơn bạn — Lotus sẽ liên hệ trong vòng 24 giờ.");
      }, className: "col-span-12 md:col-span-6 md:pl-10 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Họ và tên", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, className: "h-12 rounded-none border-0 border-b border-cream/30 bg-transparent px-0 text-base text-cream placeholder:text-cream/40 focus-visible:border-clay focus-visible:ring-0" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Số điện thoại / Zalo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, type: "tel", className: "h-12 rounded-none border-0 border-b border-cream/30 bg-transparent px-0 text-base text-cream placeholder:text-cream/40 focus-visible:border-clay focus-visible:ring-0" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Bề mặt dự định sơn", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: surface, onValueChange: setSurface, required: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-12 rounded-none border-0 border-b border-cream/30 bg-transparent px-0 text-base text-cream focus:border-clay focus:ring-0 [&>span]:text-cream data-[placeholder]:[&>span]:text-cream/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Chọn loại bề mặt" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: surfaceOptions.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: o, children: o }, o)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Dòng sơn dự kiến", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { required: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-12 rounded-none border-0 border-b border-cream/30 bg-transparent px-0 text-base text-cream focus:border-clay focus:ring-0 [&>span]:text-cream data-[placeholder]:[&>span]:text-cream/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Chọn dòng sơn" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: paintOptions.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: o, children: o }, o)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", id: "zalo-sent", className: "mt-1 h-4 w-4 border-cream/30 bg-transparent text-clay focus:ring-clay" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "zalo-sent", className: "text-sm text-cream/80", children: "Tôi đã gửi ảnh bề mặt qua Zalo / Facebook" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "mt-4 h-14 w-full rounded-none bg-clay text-[12px] font-medium uppercase tracking-[0.2em] text-cream hover:bg-clay/90 sm:text-[13px]", children: "Gửi yêu cầu đặt hàng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.18em] text-cream/50", children: "Lotus sẽ phản hồi trong vòng 24 giờ làm việc." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Header() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 border-b border-walnut/10 bg-cream/85 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-12 md:py-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoLotus, alt: "Lotus Logo", className: "h-10 w-auto" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden gap-10 text-[12px] uppercase tracking-[0.22em] text-walnut md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#choose", className: "hover:text-clay", children: "Sản phẩm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#palette", className: "hover:text-clay", children: "Bảng màu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#advise", className: "hover:text-clay", children: "Tư vấn" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#advise", className: "inline-flex items-center gap-2 border border-charcoal px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] text-charcoal transition hover:bg-charcoal hover:text-cream sm:px-5 sm:text-[11px]", children: [
      "Chọn loại sơn",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-walnut/15 bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-5 py-14 md:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoLotus, alt: "Lotus Logo", className: "h-12 w-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-sm text-sm leading-relaxed text-walnut/70", children: "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ BÍCH TRANG" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-walnut/60", children: "MST: 0313351528" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-walnut/60", children: "99/5 Đường XTT26-1, Ấp 2, Xã Bà Điểm, TP.HCM" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-6 md:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.22em] text-walnut/60", children: "Sản phẩm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-charcoal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#choose", className: "hover:text-clay", children: "Wood Paint — Indoor" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#choose", className: "hover:text-clay", children: "Woodstain Finish — Outdoor" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#palette", className: "hover:text-clay", children: "Bảng màu" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-6 md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.22em] text-walnut/60", children: "Liên hệ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-charcoal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://zalo.me/843966662", target: "_blank", rel: "noopener noreferrer", className: "hover:text-clay", children: "Hotline: 0943 966 662" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:sales@sonlotus.vn", className: "hover:text-clay", children: "sales@sonlotus.vn" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://sonlotus.vn", target: "_blank", rel: "noopener noreferrer", className: "hover:text-clay", children: "www.sonlotus.vn" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Giờ làm việc · 8:00 – 20:00" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col justify-between gap-3 border-t border-walnut/15 pt-6 text-[11px] uppercase tracking-[0.2em] text-walnut/60 md:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " CÔNG TY TNHH SX TM DV BÍCH TRANG"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Made with care · Vietnam" })
    ] })
  ] }) });
}
function Stat({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[11px] uppercase tracking-[0.25em] text-clay", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-2 text-[12px] leading-snug text-walnut/85 sm:text-[13px]", children: v })
  ] });
}
function SpecCell({
  k,
  v,
  sub
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:px-6 sm:first:pl-0 sm:last:pr-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.25em] text-clay", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-serif text-2xl text-charcoal sm:text-3xl", children: v }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[12px] text-walnut/65", children: sub })
  ] });
}
function Commit({
  k,
  v,
  icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "border-t border-walnut/20 pt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-clay", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 font-serif text-lg text-charcoal sm:text-xl", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm leading-relaxed text-walnut/75", children: v })
  ] });
}
function SurfaceOption({
  label,
  desc,
  recommendation,
  detail
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-walnut/15 bg-cream/50 p-5 transition hover:bg-cream/80", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-xl text-charcoal", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-walnut/70", children: desc }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-walnut/15", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.2em] text-clay", children: "Gợi ý" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-medium text-charcoal", children: recommendation }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-walnut/70", children: detail })
    ] })
  ] });
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-2xl text-clay", children: index }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.25em] text-walnut/70", children: subtitle })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-serif text-[28px] leading-tight text-charcoal sm:text-3xl md:text-4xl", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-lg text-[15px] leading-relaxed text-walnut/80", children: body }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2 text-[13px] leading-relaxed text-walnut/75", children: bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "pl-4 border-l border-walnut/20", children: b }, b)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 border-t border-walnut/20 pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: ctaLink, onClick: () => onCtaClick?.(), className: "group/btn inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.18em] text-charcoal transition hover:text-clay sm:text-[13px]", children: [
      ctaText,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition group-hover/btn:translate-x-1" })
    ] }) })
  ] });
}
function StickyCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur border-t border-walnut/20 py-3 px-5 md:py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] flex flex-col sm:flex-row items-center justify-between gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.18em] text-cream/80 sm:text-[12px]", children: "Muốn chọn đúng sơn & số kg? Gửi ảnh bề mặt qua Zalo." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://zalo.me/843966662", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 bg-clay px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-cream transition hover:bg-clay/90 sm:text-[12px]", children: [
      "Gửi ảnh qua Zalo",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
    ] })
  ] }) });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.22em] text-cream/60", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children })
  ] });
}
export {
  Index as component
};
