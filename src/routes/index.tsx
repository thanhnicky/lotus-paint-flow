import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

import heroInterior from "@/assets/hero-interior.jpg";
import woodGrain from "@/assets/wood-grain.jpg";
import diyHands from "@/assets/diy-hands.jpg";
import exteriorDoor from "@/assets/exterior-door.jpg";
import beforeAfter from "@/assets/before-after.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import logoLotus from "@/assets/logo-lotus.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lotus — Sơn gỗ hệ nước cho không gian sống tinh tế" },
      {
        name: "description",
        content:
          "Lotus Wood Paint & Woodstain Finish — sơn gỗ hệ nước cao cấp. Làm mới đồ gỗ tại nhà theo cách sạch hơn, đẹp hơn.",
      },
      { property: "og:title", content: "Lotus — Sơn gỗ hệ nước cho không gian sống tinh tế" },
      {
        property: "og:description",
        content: "Hoàn thiện gỗ hệ nước cho gia đình hiện đại. Nhẹ mùi, khô nhanh, dễ tự thi công.",
      },
    ],
  }),
  component: Index,
});

type ColorOption = { name: string; code?: string; image?: string; hex?: string };

// Wood stain colors with real images
const woodStainColors: ColorOption[] = [
  { name: "Sơn giữ vân gỗ 005", image: "/Son-giu-van-go-005.png" },
  { name: "Sơn giữ vân gỗ 011", image: "/Son-giu-van-go-011.png" },
  { name: "Sơn giữ vân gỗ 012", image: "/Son-giu-van-go-012.png" },
  { name: "Sơn giữ vân gỗ 018", image: "/Son-giu-van-go-018.png" },
  { name: "Sơn giữ vân gỗ 019", image: "/Son-giu-van-go-019.png" },
  { name: "Sơn giữ vân gỗ 021", image: "/Son-giu-van-go-021.png" },
];

// Solid colors with real images
const solidColors: ColorOption[] = [
  { name: "Sơn màu bệt 008", image: "/Son-mau-bet-008.png" },
  { name: "Sơn màu bệt 019", image: "/Son-mau-bet-019.png" },
  { name: "Sơn màu bệt 047", image: "/Son-mau-bet-047.png" },
  { name: "Sơn màu bệt 066", image: "/Son-mau-bet-066.png" },
  { name: "Sơn màu bệt 070", image: "/Son-mau-bet-070.png" },
  { name: "Sơn màu bệt 090", image: "/Son-mau-bet-090.png" },
];

// Real reference images
const SOLID_PALETTE_IMAGE = "https://w.ladicdn.com/5e3e73f71adefa2bf15bd42f/bang-mau-son-go-lotus-83285p-20251209012759-qpvpg.png";
const WOODSTAIN_PALETTE_IMAGE = "https://w.ladicdn.com/5e3e73f71adefa2bf15bd42f/screenshot-2025-12-09-at-081030-20251209011056-p-cij.png";

const PRICES = {
  bet: {
    indoor:  { "1kg": 255000,  "5kg": 1215000 },
    outdoor: { "1kg": 320000,  "5kg": 1540000 },
  },
  "van-go": {
    indoor:  { "1kg": 250000,  "5kg": 1188000 },
    outdoor: { "1kg": 313000,  "5kg": 1515000 },
  },
} as const;

function formatVND(n: number): string {
  return n.toLocaleString("vi-VN") + "\u00a0₫";
}

const surfaces = [
  { 
    label: "Bàn ăn / bàn làm việc", 
    desc: "Bàn gỗ nội thất dùng hàng ngày",
    recommendation: "Sơn gỗ màu bệt (Indoor)",
    detail: "2 lớp, độ phủ 8-10m²/kg, màu ấm: Sứ, Mộc, Khói"
  },
  { 
    label: "Tủ áo / tủ bếp / kệ TV", 
    desc: "Tủ kệ nội thất lớn",
    recommendation: "Sơn gỗ màu bệt (Indoor)",
    detail: "2-3 lớp, độ phủ 8-10m²/kg, che nền cũ tốt"
  },
  { 
    label: "Cửa, khung cửa, lan can", 
    desc: "Cửa nội thất hoặc ngoại thất",
    recommendation: "Woodstain Finish (Nội/Ngoại thất)",
    detail: "2-3 lớp, giữ vân gỗ, kháng ẩm & UV"
  },
  { 
    label: "Sàn gỗ, bậc cầu thang", 
    desc: "Sàn tự nhiên hoặc engineered",
    recommendation: "Woodstain Finish (Sàn)",
    detail: "3 lớp, độ bền cao, chịu ma sát"
  },
  { 
    label: "Vật dụng nhỏ (ghế, kệ, đồ trang trí)", 
    desc: "Đồ gỗ nhỏ, decor",
    recommendation: "Sơn gỗ màu bệt (Indoor)",
    detail: "2 lớp, ít sơn, dễ thi công"
  },
];


const projects = [
  { img: project1, label: "Tủ TV — sắc Rêu", place: "Căn hộ · Quận 2, TP. HCM" },
  { img: project2, label: "Bàn ăn — Walnut tự nhiên", place: "Nhà phố · Hà Nội" },
  { img: project3, label: "Tủ áo — sắc Mộc", place: "Studio · Đà Nẵng" },
];

const testimonials = [
  {
    quote:
      "Mình sơn lại bộ bàn ăn ngay trong căn hộ chung cư. Không mùi xăng, không phải dời con sang nhà ngoại. Sáng hôm sau cả nhà đã ngồi ăn bình thường.",
    name: "Chị Linh",
    place: "Thảo Điền, TP. HCM",
    product: "Wood Paint · sắc Khói",
  },
  {
    quote:
      "Tủ áo cũ của mẹ mình được sơn lại sắc Mộc, đặt cạnh giường nhìn rất tĩnh. Sơn 2 lớp, mỗi hũ 1kg đủ cho cả tủ — mình đặt thêm 1 hũ dự phòng.",
    name: "Anh Phúc",
    place: "Quận Cầu Giấy, Hà Nội",
    product: "Wood Paint · sắc Mộc",
  },
  {
    quote:
      "Mình tự sơn cửa gỗ ngoài ban công bằng Woodstain Walnut. Sau 4 tháng nắng mưa vẫn giữ màu, vân gỗ vẫn rõ. Đáng đồng tiền.",
    name: "Chị Mai",
    place: "Đà Nẵng",
    product: "Woodstain · Walnut",
  },
];

const faqs = [
  {
    q: "Lotus có thực sự an toàn để sơn trong nhà có trẻ nhỏ không?",
    a: "Có. Lotus là sơn hệ nước, không chứa dung môi nặng và hàm lượng VOC thấp. Bạn có thể thi công ngay trong phòng ngủ, phòng bếp; sau 4–6 giờ là có thể sinh hoạt lại bình thường. Vẫn nên mở cửa cho thoáng trong lúc sơn.",
  },
  {
    q: "Tôi chưa sơn bao giờ, có tự làm được không?",
    a: "Hoàn toàn được. Sơn hệ nước dễ tãi đều, không kén tay nghề. Bạn chỉ cần cọ hoặc rulo, một miếng giấy nhám P240 và khoảng một buổi chiều. Hướng dẫn thi công chi tiết có trong phần Thi công bên dưới."
  },
  {
    q: "Mua số lượng lớn có giá tốt không?",
    a: "Có. Đơn từ 10 hũ trở lên được giá sỉ. Liên hệ Zalo để nhận báo giá riêng cho xưởng, công ty, hoặc dự án lớn."
  },
  {
    q: "Nếu chọn sai màu hoặc không ưng thì sao?",
    a: "Sản phẩm còn nguyên seal được đổi trả trong 7 ngày. Bạn có thể xem bảng màu đầy đủ trước khi đặt hàng. Màu hiển thị trên màn hình có thể chênh nhẹ so với thực tế."
  },
  {
    q: "Một hũ 1kg sơn được bao nhiêu m²?",
    a: "Khoảng 8–10 m² cho mỗi lớp tuỳ bề mặt. Khuyến nghị sơn 2 lớp để màng sơn đều và bền — tương đương 4–5 m² hoàn thiện cho 1kg.",
  },
  {
    q: "Sơn lên đồ gỗ cũ đã có sơn cũ thì cần xử lý thế nào?",
    a: "Chà nhám nhẹ bằng giấy P180–P240 để lớp sơn cũ bớt bóng và bám tốt hơn. Nếu bề mặt bong tróc nhiều, cần cạo phần bong rồi chà phẳng. Lotus bám trực tiếp lên sơn cũ còn nguyên, không cần lót.",
  },
  {
    q: "Bao lâu thì có thể sử dụng bình thường?",
    a: "Khô bề mặt sau 30 phút, sơn lớp tiếp theo sau 2 giờ. Sử dụng nhẹ sau 24 giờ. Đạt độ cứng tối đa sau khoảng 7 ngày — trong tuần đầu hạn chế vật nặng kéo lê trên bề mặt.",
  },
  {
    q: "Tôi ở tỉnh, có giao hàng không? Bao lâu nhận được?",
    a: "Lotus giao toàn quốc. Nội thành Hà Nội & TP. HCM nhận trong 1–2 ngày, các tỉnh thành khác 2–5 ngày. Đơn từ 2 hũ trở lên được miễn phí vận chuyển. Thanh toán khi nhận hàng (COD).",
  },
];

/*
ART DIRECTION REFACTOR — B2C FOCUS

Mục tiêu: Tối ưu conversion cho khách B2C tự sơn tại nhà
- CTA chính: Gửi ảnh qua Zalo để tư vấn loại sơn + số kg
- Decision flow: 2 kiểu hoàn thiện rõ ràng ngay sau hero
- Selector bề mặt thực tế với gợi ý dòng sơn phù hợp
- Flow: Bảng màu → Ảnh thực tế → Testimonial
- Form cuối trang là kênh phụ, tối giản

Tone: Premium, nội thất, ấm áp, không icon/emoji/grid startup
*/

function Index() {
  const [tab, setTab] = useState<"indoor" | "outdoor">("indoor");
  const [showPaletteModal, setShowPaletteModal] = useState(false);

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

  const [orderProduct, setOrderProduct] = useState<"bet" | "van-go">("bet");
  const [orderEnv, setOrderEnv] = useState<"indoor" | "outdoor">("indoor");
  const [orderColor, setOrderColor] = useState("");
  const [orderSurface, setOrderSurface] = useState<"bong" | "bong-50" | "mo">("bong");
  const [orderSize, setOrderSize] = useState<"1kg" | "5kg">("1kg");
  const [orderQty, setOrderQty] = useState(1);
  const [orderPayment, setOrderPayment] = useState<"cod" | "online">("cod");
  const [orderName, setOrderName] = useState("");
  const [orderPhone, setOrderPhone] = useState("");
  const [orderAddress, setOrderAddress] = useState("");
  const [orderNote, setOrderNote] = useState("");

  const unitPrice = PRICES[orderProduct][orderEnv][orderSize];
  const subtotal = unitPrice * orderQty;
  const total = orderPayment === "online" ? Math.round(subtotal * 0.9) : subtotal;
  const [showSticky, setShowSticky] = useState(false);

  // Sticky CTA bar trigger on scroll
  const handleScroll = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      const rect = heroSection.getBoundingClientRect();
      setShowSticky(rect.bottom < 0);
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans antialiased">
      <Header />
      {showSticky && <StickyCTA />}

      {/* HERO — B2C OPTIMIZED */}
      <section id="hero" className="relative">
        <div className="mx-auto max-w-[1400px] px-5 pt-10 pb-16 md:px-12 md:pt-16 md:pb-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col">
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">
                Lotus · Sơn gỗ hệ nước cho gia đình
              </span>
              <h1 className="mt-6 font-serif text-[38px] leading-[1.05] tracking-tight text-charcoal sm:text-[44px] md:text-[60px] lg:text-[72px]">
                Làm mới đồ gỗ tại nhà
                <br />
                <em className="not-italic text-clay">ít mùi, an toàn</em>,
                <br />
                tự thi công được.
              </h1>
              <p className="mt-7 max-w-md text-[15px] leading-relaxed text-walnut/80">
                Sơn gỗ hệ nước Lotus có 2 kiểu hoàn thiện: màu bệt phủ kín hoặc giữ vân gỗ tự nhiên.
                Tự thi công tại nhà, giao toàn quốc, đặt hàng trực tiếp — không cần tư vấn.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#advise"
                  className="group inline-flex items-center gap-3 bg-clay px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-cream transition hover:bg-clay/90 sm:px-7 sm:text-[13px]"
                >
                  Chọn màu &amp; đặt mua
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#palette"
                  className="text-[12px] font-medium uppercase tracking-[0.18em] text-walnut underline-offset-8 hover:underline sm:text-[13px]"
                >
                  Xem bảng màu
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-1.5 border-t border-walnut/15 pt-6">
                <span className="text-[11px] uppercase tracking-[0.22em] text-walnut/60">Hệ nước ít mùi</span>
                <span className="text-[11px] text-walnut/30">/</span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-walnut/60">COD toàn quốc</span>
                <span className="text-[11px] text-walnut/30">/</span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-walnut/60">Online giảm 10%</span>
              </div>
            </div>

            <figure className="col-span-12 md:col-span-6 lg:col-span-7 relative">
              <img
                src={heroInterior}
                alt="Phòng khách với tủ gỗ hoàn thiện màu ấm, không gian sống gia đình"
                className="aspect-[4/5] md:aspect-[5/6] w-full object-cover"
                width={1600}
                height={1200}
              />
              <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[10px] uppercase tracking-[0.22em] text-cream mix-blend-difference sm:text-[11px]">
                <span>Phòng khách · Lotus Wood Paint</span>
                <span>— 001</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* DECISION BLOCK — 2 KIỂU HOÀN THIỆN */}
      <section id="choose" className="border-t border-walnut/10 bg-sand/40">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
          <header>
            <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">02 — Chọn kiểu hoàn thiện</span>
            <h2 className="mt-5 font-serif text-[34px] leading-tight text-charcoal sm:text-4xl md:text-5xl lg:text-[56px]">
              Bạn muốn phủ kín màu
              <br />
              hay giữ vân gỗ?
            </h2>
          </header>

          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <DecisionCard
              index="01"
              title="Phủ kín màu, che vân gỗ"
              subtitle="Sơn gỗ màu bệt — Nội thất"
              body="Phủ trọn bề mặt gỗ, MDF, plywood. Màng sơn mịn như sứ, độ cứng cao, che hoàn toàn vân và màu gốc. Phù hợp tủ, kệ, bàn nội thất muốn đổi màu hoàn toàn."
              img={diyHands}
              bullets={[
                "Tủ áo, tủ bếp, kệ TV, bàn làm việc",
                "Che nền cũ, đổi màu hoàn toàn",
                "Màu ấm: Sứ, Mộc, Khói, Rêu"
              ]}
              ctaText="Chọn màu & đặt mua"
              ctaLink="#advise"
              onCtaClick={() => setOrderProduct("bet")}
            />
            <DecisionCard
              index="02"
              title="Giữ vân gỗ, nhìn giống gỗ tự nhiên"
              subtitle="Woodstain Finish — Nội & Ngoại thất"
              body="Thấm sâu vào gỗ, tôn trọn vân tự nhiên. Dẻo dai, kháng ẩm, chịu nắng mưa. Phù hợp cửa, sàn, lan can, đồ ngoại thất muốn giữ vẻ đẹp gỗ."
              img={exteriorDoor}
              bullets={[
                "Cửa, khung cửa, sàn gỗ, lan can",
                "Giữ vân, chống trầy, kháng ẩm",
                "Màu tự nhiên: Sồi, Teak, Walnut, Mun"
              ]}
              ctaText="Chọn màu & đặt mua"
              ctaLink="#advise"
              onCtaClick={() => setOrderProduct("van-go")}
            />
          </div>
        </div>
      </section>

      {/* SPECS — Quy cách & thông số */}
      <section className="border-t border-walnut/10">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-28">
          <header className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">03 — Quy cách</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
                Mọi con số bạn
                <br />
                cần biết trước khi đặt.
              </h2>
            </div>
            <p className="max-w-xs text-[13px] leading-relaxed text-walnut/65">
              1 hũ sơn khoảng 8–10 m² mỗi lớp. Khuyến nghị sơn 2 lớp.
            </p>
          </header>

          <div className="mt-14 grid grid-cols-2 gap-y-12 border-t border-walnut/20 pt-2 sm:grid-cols-4 sm:divide-x sm:divide-walnut/15">
            <SpecCell k="Quy cách" v="Hũ 1kg" sub="Đặt combo nhiều hũ" />
            <SpecCell k="Độ phủ" v="8–10 m²" sub="Mỗi lớp · bề mặt phẳng" />
            <SpecCell k="Số lớp" v="2 lớp" sub="3 lớp cho sàn & ngoại thất" />
            <SpecCell k="Khô bề mặt" v="30 phút" sub="Lớp 2 sau 2 giờ" />
          </div>

        </div>
      </section>

      {/* SURFACE SELECTOR — BẠN ĐANG SƠN GÌ */}
      <section className="border-t border-walnut/10 bg-sand/40">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">04 — Bề mặt</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
                Bạn đang
                <br />
                sơn gì?
              </h2>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-walnut/80">
                Chọn bề mặt để xem gợi ý dòng sơn phù hợp.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <div className="border-b border-walnut/15">
                {surfaces.map((s) => (
                  <SurfaceOption
                    key={s.label}
                    label={s.label}
                    desc={s.desc}
                    recommendation={s.recommendation}
                    detail={s.detail}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="border-t border-walnut/10 bg-walnut text-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 md:col-span-4 lg:col-span-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-cream/60">05 — Trước & Sau</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight sm:text-4xl md:text-5xl">
                Đồ gỗ cũ,
                <br />
                kể câu chuyện mới.
              </h2>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-cream/75">
                Một lớp Lotus đủ để biến chiếc ghế đã ngả màu thành chi tiết trầm tĩnh,
                hoà với phần còn lại của ngôi nhà — không cần thay mới.
              </p>
            </div>
            <div className="col-span-12 md:col-span-8 lg:col-span-8">
              <div className="relative overflow-hidden">
                <img
                  src={beforeAfter}
                  alt="Ghế gỗ trước và sau khi sơn lại bằng Lotus Wood Paint màu rêu"
                  loading="lazy"
                  className="w-full h-auto block"
                  width={1600}
                  height={900}
                />
                {/* Divider line center */}
                <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-cream/30" />
                {/* Labels */}
                <div className="absolute bottom-4 left-[8%] text-[9px] uppercase tracking-[0.28em] text-cream/75 sm:bottom-5 sm:text-[10px]">
                  Trước khi sơn
                </div>
                <div className="absolute bottom-4 right-[8%] text-[9px] uppercase tracking-[0.28em] text-cream/75 sm:bottom-5 sm:text-[10px]">
                  Sau khi sơn
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-t border-walnut/10">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-12 md:py-36">
          {/* Top — headline + featured main point */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">06 — Vì sao hệ nước</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
                Sạch hơn cho ngôi nhà.
                <br />
                Dễ hơn cho đôi tay.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-[3.5rem]">
              <p className="font-serif text-[20px] leading-[1.6] text-charcoal md:text-[22px]">
                Lotus không có mùi xăng — bạn sơn được ngay trong phòng ngủ, cạnh con nhỏ, không cần thông gió đặc biệt hay tạm dời đồ ra khỏi phòng.
              </p>
            </div>
          </div>

          {/* Bottom — 3 supporting points */}
          <ul className="mt-16 grid grid-cols-1 divide-y divide-walnut/12 border-t border-walnut/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              { n: "02", t: "Khô nhanh trong giờ", d: "Khô bề mặt 30 phút, sơn lớp tiếp theo sau 2 giờ. Một buổi chiều là xong." },
              { n: "03", t: "Rửa bằng nước thường", d: "Cọ, khay, tay áo — sạch chỉ với vòi nước. Không cần dung môi." },
              { n: "04", t: "Bền màu, không ố vàng", d: "Kháng ẩm, kháng trầy nhẹ, chịu lau chùi hằng ngày trong nhiều năm." },
            ].map((b, i) => (
              <li key={b.n} className={`py-9 ${
                i === 0 ? "sm:pr-10" : i === 1 ? "sm:px-10" : "sm:pl-10"
              }`}>
                <div className="text-[10px] uppercase tracking-[0.28em] text-clay">{b.n}</div>
                <div className="mt-3 font-serif text-[19px] text-charcoal">{b.t}</div>
                <p className="mt-2 text-[13px] leading-relaxed text-walnut/58">{b.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-walnut/10 bg-sand/40">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">07 — Thi công</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
                Ba bước,
                <br />
                một buổi chiều.
              </h2>
              <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-walnut/70">
                Không cần thợ. Không cần máy. Chỉ cọ, lăn — và một chút kiên nhẫn.
              </p>
            </div>

            <div className="col-span-12 md:col-span-8 md:pl-4">
              <ol>
                {[
                  { n: "1", t: "Làm sạch & chà nhám nhẹ", d: "Lau bụi, dầu mỡ. Chà P240 để bề mặt mịn và bám sơn tốt." },
                  { n: "2", t: "Sơn lớp đầu, chờ khô", d: "Pha loãng 5–10% nước, sơn mỏng đều bằng cọ hoặc lăn. Để khô 2 giờ." },
                  { n: "3", t: "Phủ lớp hoàn thiện", d: "Lớp hai cho màng sơn đều màu, mịn, đạt độ bền tối ưu." },
                ].map((s) => (
                  <li key={s.n} className="flex gap-6 border-t border-walnut/15 py-8 md:gap-10">
                    <span className="mt-0.5 w-10 shrink-0 font-serif text-[2.8rem] leading-none text-clay/50 sm:text-[3.5rem]">{s.n}</span>
                    <div className="pt-1">
                      <h3 className="font-serif text-[20px] leading-tight text-charcoal sm:text-[24px]">{s.t}</h3>
                      <p className="mt-2.5 text-[13px] leading-relaxed text-walnut/60">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-2 border-t border-walnut/15 pt-6 font-serif text-[15px] italic text-walnut/50">
                Hầu hết hoàn thành trong một buổi chiều — không cần nghỉ làm, không cần thợ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PALETTE — BẢNG MÀU */}
      <section id="palette" className="border-t border-walnut/10 bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
          <header className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">08 — Bảng màu</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
                Chọn màu
                <br />
                phù hợp với không gian.
              </h2>
              <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-walnut/65">
                Khám phá bộ màu Lotus. Để đặt hàng, chọn màu trực tiếp trong phần đặt hàng bên dưới.
              </p>
            </div>
            <div className="inline-flex border border-walnut/25 text-[11px] uppercase tracking-[0.2em] sm:text-[12px]">
              <button
                onClick={() => { setTab("indoor"); setOrderColor(""); }}
                className={`px-4 py-3 transition sm:px-5 ${tab === "indoor" ? "bg-charcoal text-cream" : "text-walnut hover:bg-sand/60"}`}
              >
                Sơn màu bệt
              </button>
              <button
                onClick={() => { setTab("outdoor"); setOrderColor(""); }}
                className={`px-4 py-3 transition sm:px-5 ${tab === "outdoor" ? "bg-charcoal text-cream" : "text-walnut hover:bg-sand/60"}`}
              >
                Sơn giữ vân gỗ
              </button>
            </div>
          </header>

          {/* Color swatch grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {(tab === "indoor" ? solidColors : woodStainColors).map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={() => {
                  setOrderColor(c.name);
                  setOrderProduct(tab === "indoor" ? "bet" : "van-go");
                }}
                className="group flex flex-col gap-3"
              >
                {c.image ? (
                  <img
                    src={c.image}
                    alt={c.name}
                    className={`aspect-square w-full object-cover transition-all duration-200 ${
                      orderColor === c.name
                        ? "ring-2 ring-clay ring-offset-2"
                        : "opacity-80 group-hover:opacity-100 group-hover:scale-[1.02]"
                    }`}
                  />
                ) : (
                  <div
                    className={`aspect-square w-full border border-walnut/15 bg-sand/30 transition-all duration-200 ${
                      orderColor === c.name
                        ? "ring-2 ring-clay ring-offset-2"
                        : "opacity-80 group-hover:opacity-100"
                    }`}
                  />
                )}
                <div className="flex items-center justify-between">
                  <span className={`font-serif text-[14px] ${orderColor === c.name ? "text-clay font-medium" : "text-charcoal"}`}>
                    {c.name}
                  </span>
                  {orderColor === c.name && (
                    <span className="text-[10px] uppercase tracking-[0.14em] text-clay">Đã chọn</span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Reference link + Modal button */}
          <div className="mt-10 flex items-center justify-between border-t border-walnut/15 pt-6">
            <div className="flex items-start gap-3 text-[12px] text-walnut/50">
              <span className="mt-0.5 text-walnut/30">※</span>
              <p>
                Màu hiển thị trên màn hình có thể chênh nhẹ so với thực tế.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowPaletteModal(true)}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-walnut/60 underline underline-offset-2 transition hover:text-clay"
            >
              Xem bảng màu đầy đủ
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* CTA to order section */}
          {orderColor && (
            <div className="mt-8 flex items-center justify-between border-t border-walnut/15 pt-6">
              <span className="text-[13px] text-walnut/60">
                Đã chọn: <strong className="text-charcoal">{orderColor}</strong>
              </span>
              <a href="#advise"
                className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-clay transition hover:text-clay/75">
                Đặt mua màu này
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* PALETTE MODAL */}
      {showPaletteModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 backdrop-blur-sm p-4"
          onClick={() => setShowPaletteModal(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-cream p-6 md:p-8 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowPaletteModal(false)}
              className="absolute right-4 top-4 text-walnut/50 hover:text-charcoal transition z-10"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="mb-4 font-serif text-2xl text-charcoal">
              Bảng màu {tab === "indoor" ? "sơn màu bệt" : "sơn giữ vân gỗ"}
            </h3>
            <img
              src={tab === "indoor" ? SOLID_PALETTE_IMAGE : WOODSTAIN_PALETTE_IMAGE}
              alt={tab === "indoor" ? "Bảng màu sơn màu bệt Lotus" : "Bảng màu sơn giữ vân gỗ Lotus"}
              className="w-full border border-walnut/10 max-h-[60vh] object-contain"
            />
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={handleDownloadPalette}
                className="inline-flex items-center gap-2 border border-walnut/20 px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-charcoal transition hover:bg-sand/60"
              >
                Tải xuống
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setShowPaletteModal(false)}
                className="inline-flex items-center gap-2 bg-clay px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-cream transition hover:bg-clay/90"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PROJECTS / TRUST GALLERY — CÔNG TRÌNH THẬT */}
      <section className="border-t border-walnut/10 bg-sand/40">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
          <header className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">09 — Công trình thật</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
                Từ đồ gỗ cũ
                <br />
                đến không gian mới.
              </h2>
            </div>
            <p className="max-w-sm text-[14px] leading-relaxed text-walnut/75">
              Những căn nhà đã được làm mới cùng Lotus — từ đồ gỗ trầy xước đến bề mặt sạch, màu mới hoặc giữ vân gỗ đẹp.
            </p>
          </header>

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12">
            <figure className="group lg:col-span-7">
              <div className="overflow-hidden">
                <img
                  src={projects[0].img}
                  alt={projects[0].label}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  width={1000}
                  height={1250}
                />
              </div>
              <figcaption className="mt-4 border-t border-walnut/20 pt-3">
                <div className="font-serif text-lg text-charcoal">{projects[0].label}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-walnut/60">{projects[0].place}</div>
              </figcaption>
            </figure>
            <div className="flex flex-col gap-5 lg:col-span-5">
              {projects.slice(1).map((p) => (
                <figure key={p.label} className="group flex-1">
                  <div className="overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.label}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      width={900}
                      height={675}
                    />
                  </div>
                  <figcaption className="mt-3 border-t border-walnut/20 pt-3">
                    <div className="font-serif text-base text-charcoal">{p.label}</div>
                    <div className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-walnut/60">{p.place}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — CẢM NHẬN KHÁCH HÀNG B2C */}
      <section className="border-t border-walnut/10">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-12 md:py-36">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">10 — Cảm nhận khách hàng</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
                Vợ chồng trẻ,
                <br />
                chủ nhà tự làm DIY.
              </h2>
            </div>
            <a
              href="https://www.facebook.com/lotuspaint"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.18em] text-walnut/55 transition hover:text-clay"
            >
              Xem thêm trên fanpage
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 divide-y divide-walnut/15 md:grid-cols-3 md:divide-x md:divide-y-0">
            {testimonials.map((t, i) => (
              <blockquote
                key={t.name}
                className={`flex flex-col py-10 md:py-0 ${
                  i === 0 ? "md:pr-10" : i === 1 ? "md:px-10" : "md:pl-10"
                }`}
              >
                <p className="flex-1 font-serif text-[18px] leading-[1.6] text-charcoal sm:text-[19px]">
                  “{t.quote}”
                </p>
                <footer className="mt-8 border-t border-walnut/15 pt-5">
                  <div className="text-sm font-medium text-charcoal">{t.name}</div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-[0.2em] text-walnut/55">
                    {t.place} · {t.product}
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-10 md:hidden">
            <a
              href="https://www.facebook.com/lotuspaint"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.18em] text-charcoal transition hover:text-clay sm:text-[13px]"
            >
              Xem thêm ảnh & feedback trên fanpage Lotus
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* TRUST / COMMITMENTS */}
      <section className="border-t border-walnut/10 bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-serif text-[22px] leading-[1.65] text-charcoal md:text-[25px]">
              Đặt hàng trực tiếp, nhận hàng tại nhà — không cần gặp mặt, không cần tư vấn.
            </p>
            <p className="mt-6 text-[15px] leading-[1.75] text-walnut/65">
              Thanh toán COD khi nhận hàng, hoặc thanh toán online để được giảm 10% và miễn phí giao hàng. Giao toàn quốc trong 1–5 ngày. Đổi trả trong 7 ngày nếu sản phẩm giao nhầm hoặc còn nguyên seal.
            </p>
            <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
              {[
                "COD — nhận hàng mới trả tiền",
                "Thanh toán online giảm 10%",
                "Miễn phí ship khi thanh toán online",
                "Giao toàn quốc 1–5 ngày",
                "Đổi trả 7 ngày",
              ].map((item) => (
                <li key={item} className="text-[12px] uppercase tracking-[0.18em] text-walnut/60">{item}</li>
              ))}
            </ul>
            <a
              href="#advise"
              className="mt-10 inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.18em] text-charcoal transition hover:text-clay sm:text-[13px]"
            >
              Chọn màu & đặt mua ngay
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-walnut/10 bg-sand/40">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">11 — Câu hỏi</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
                Những điều
                <br />
                khách hay hỏi.
              </h2>
              <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-walnut/75">
                Mua số lượng lớn cho xưởng hoặc dự án? Liên hệ Zalo để nhận giá sỉ.
              </p>
            </div>

            <div className="col-span-12 md:col-span-8">
              <Accordion type="single" collapsible className="border-t border-walnut/20">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`f-${i}`}
                    className="border-b border-walnut/20"
                  >
                    <AccordionTrigger className="py-5 text-left font-serif text-lg text-charcoal hover:no-underline sm:text-xl">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-[15px] leading-relaxed text-walnut/80">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* ORDER — ĐẶT HÀNG */}
      <section id="advise" className="border-t border-walnut/10 bg-sand/30 text-charcoal">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">

          {/* Header */}
          <div className="mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/50">12 — Đặt hàng</span>
            <h2 className="mt-4 font-serif text-[34px] leading-tight sm:text-5xl">
              Chọn màu,
              <br />đặt hàng ngay.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.7] text-walnut/70">
              Mua lẻ trực tiếp — không cần tư vấn. Chọn dòng sơn, môi trường sử dụng, màu và kích thước. Lotus giao toàn quốc.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-x-10 gap-y-16">

            {/* LEFT — Selectors */}
            <div className="col-span-12 lg:col-span-7 space-y-11">

              {/* 01 Dòng sơn */}
              <div>
                <div className="mb-4 text-[11px] uppercase tracking-[0.25em] text-walnut/40">01 — Dòng sơn</div>
                <div className="inline-flex border border-walnut/20">
                  <button type="button"
                    onClick={() => { setOrderProduct("bet"); setOrderColor(""); }}
                    className={`px-6 py-3.5 text-[13px] transition ${orderProduct === "bet" ? "bg-clay text-cream font-medium" : "text-walnut/60 hover:text-charcoal"}`}>
                    Sơn màu bệt
                  </button>
                  <button type="button"
                    onClick={() => { setOrderProduct("van-go"); setOrderColor(""); }}
                    className={`border-l border-walnut/20 px-6 py-3.5 text-[13px] transition ${orderProduct === "van-go" ? "bg-clay text-cream font-medium" : "text-walnut/60 hover:text-charcoal"}`}>
                    Sơn giữ vân gỗ
                  </button>
                </div>
              </div>

              {/* 02 Môi trường */}
              <div>
                <div className="mb-4 text-[11px] uppercase tracking-[0.25em] text-walnut/40">02 — Môi trường sử dụng</div>
                <div className="inline-flex border border-walnut/20">
                  <button type="button"
                    onClick={() => setOrderEnv("indoor")}
                    className={`px-6 py-3.5 text-[13px] transition ${orderEnv === "indoor" ? "bg-clay text-cream font-medium" : "text-walnut/60 hover:text-charcoal"}`}>
                    Trong nhà
                  </button>
                  <button type="button"
                    onClick={() => setOrderEnv("outdoor")}
                    className={`border-l border-walnut/20 px-6 py-3.5 text-[13px] transition ${orderEnv === "outdoor" ? "bg-clay text-cream font-medium" : "text-walnut/60 hover:text-charcoal"}`}>
                    Ngoài trời
                  </button>
                </div>
              </div>

              {/* 03 Màu sơn */}
              <div>
                <div className="mb-4 text-[11px] uppercase tracking-[0.25em] text-walnut/40">03 — Màu sơn</div>
                <input
                  type="text"
                  value={orderColor}
                  onChange={(e) => setOrderColor(e.target.value)}
                  placeholder="Nhập mã màu (ví dụ: 008, 019...)"
                  className="w-full border border-walnut/20 bg-cream px-4 py-3 text-[13px] text-charcoal placeholder:text-walnut/40 focus:border-clay focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => {
                    setTab(orderProduct === "bet" ? "indoor" : "outdoor");
                    setShowPaletteModal(true);
                  }}
                  className="mt-2 text-[11px] text-walnut/50 underline underline-offset-2 transition hover:text-clay"
                >
                  Xem bảng màu đầy đủ
                </button>
              </div>

              {/* 04 Bề mặt */}
              <div>
                <div className="mb-4 text-[11px] uppercase tracking-[0.25em] text-walnut/40">04 — Bề mặt</div>
                <div className="inline-flex border border-walnut/20">
                  <button type="button"
                    onClick={() => setOrderSurface("bong")}
                    className={`px-6 py-3.5 text-[13px] transition ${orderSurface === "bong" ? "bg-clay text-cream font-medium" : "text-walnut/60 hover:text-charcoal"}`}>
                    Bóng
                  </button>
                  <button type="button"
                    onClick={() => setOrderSurface("bong-50")}
                    className={`border-l border-walnut/20 px-6 py-3.5 text-[13px] transition ${orderSurface === "bong-50" ? "bg-clay text-cream font-medium" : "text-walnut/60 hover:text-charcoal"}`}>
                    Bóng 50%
                  </button>
                  <button type="button"
                    onClick={() => setOrderSurface("mo")}
                    className={`border-l border-walnut/20 px-6 py-3.5 text-[13px] transition ${orderSurface === "mo" ? "bg-clay text-cream font-medium" : "text-walnut/60 hover:text-charcoal"}`}>
                    Mờ
                  </button>
                </div>
              </div>

              {/* 05 Kích thước & số lượng */}
              <div>
                <div className="mb-4 text-[11px] uppercase tracking-[0.25em] text-walnut/40">05 — Kích thước & số lượng</div>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="inline-flex border border-walnut/20">
                    <button type="button" onClick={() => setOrderSize("1kg")}
                      className={`px-5 py-3.5 text-[13px] transition ${orderSize === "1kg" ? "bg-clay text-cream font-medium" : "text-walnut/60 hover:text-charcoal"}`}>
                      Hũ 1 kg
                      <span className="ml-2 text-[11px] opacity-60">{formatVND(PRICES[orderProduct][orderEnv]["1kg"])}</span>
                    </button>
                    <button type="button" onClick={() => setOrderSize("5kg")}
                      className={`border-l border-walnut/20 px-5 py-3.5 text-[13px] transition ${orderSize === "5kg" ? "bg-clay text-cream font-medium" : "text-walnut/60 hover:text-charcoal"}`}>
                      Hũ 5 kg
                      <span className="ml-2 text-[11px] opacity-60">{formatVND(PRICES[orderProduct][orderEnv]["5kg"])}</span>
                    </button>
                  </div>
                  <div className="flex items-center border border-walnut/20">
                    <button type="button" onClick={() => setOrderQty(Math.max(1, orderQty - 1))}
                      className="flex h-[46px] w-11 items-center justify-center text-xl leading-none text-walnut/50 transition hover:text-charcoal">−</button>
                    <span className="w-10 text-center text-[15px] text-charcoal">{orderQty}</span>
                    <button type="button" onClick={() => setOrderQty(orderQty + 1)}
                      className="flex h-[46px] w-11 items-center justify-center text-xl leading-none text-walnut/50 transition hover:text-charcoal">+</button>
                  </div>
                </div>
              </div>

              {/* 06 Thanh toán */}
              <div>
                <div className="mb-4 text-[11px] uppercase tracking-[0.25em] text-walnut/40">06 — Hình thức thanh toán</div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button type="button" onClick={() => setOrderPayment("cod")}
                    className={`flex flex-col gap-2 border p-5 text-left transition ${orderPayment === "cod" ? "border-walnut/40 bg-sand/50" : "border-walnut/15 hover:border-walnut/30"}`}>
                    <span className={`text-[13px] font-medium ${orderPayment === "cod" ? "text-charcoal" : "text-walnut/60"}`}>COD — Thanh toán khi nhận</span>
                    <span className={`text-[12px] ${orderPayment === "cod" ? "text-walnut/55" : "text-walnut/40"}`}>Không cần thanh toán trước</span>
                  </button>
                  <button type="button" onClick={() => setOrderPayment("online")}
                    className={`flex flex-col gap-2 border p-5 text-left transition ${orderPayment === "online" ? "border-clay/60 bg-clay/5" : "border-walnut/15 hover:border-walnut/30"}`}>
                    <span className={`text-[13px] font-medium ${orderPayment === "online" ? "text-clay" : "text-walnut/60"}`}>Thanh toán Online</span>
                    <span className={`text-[12px] ${orderPayment === "online" ? "text-clay/80" : "text-walnut/40"}`}>Giảm 10% + Miễn phí giao hàng</span>
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT — Summary + Form */}
            <div className="col-span-12 lg:col-span-5 lg:border-l lg:border-walnut/15 lg:pl-12">

              {/* Live order summary */}
              <div className="mb-10 space-y-3 border border-walnut/15 p-6 bg-cream/30">
                <div className="mb-4 text-[10px] uppercase tracking-[0.3em] text-walnut/40">Tóm tắt đơn</div>
                <div className="flex items-center justify-between text-[14px]">
                  <span className="text-walnut/60">Sản phẩm</span>
                  <span className="text-charcoal">{orderProduct === "bet" ? "Sơn màu bệt" : "Sơn giữ vân gỗ"}</span>
                </div>
                <div className="flex items-center justify-between text-[14px]">
                  <span className="text-walnut/60">Môi trường</span>
                  <span className="text-charcoal">{orderEnv === "indoor" ? "Trong nhà" : "Ngoài trời"}</span>
                </div>
                <div className="flex items-center justify-between text-[14px]">
                  <span className="text-walnut/60">Màu</span>
                  <span className="text-charcoal">
                    {orderColor || <span className="italic text-walnut/35">Chưa chọn</span>}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[14px]">
                  <span className="text-walnut/60">Bề mặt</span>
                  <span className="text-charcoal">
                    {orderSurface === "bong" ? "Bóng" : orderSurface === "bong-50" ? "Bóng 50%" : "Mờ"}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-walnut/15 pt-3 text-[14px]">
                  <span className="text-walnut/60">Hũ {orderSize} × {orderQty}</span>
                  <span className="text-charcoal">{formatVND(unitPrice)} / hũ</span>
                </div>
                <div className="flex items-center justify-between text-[14px]">
                  <span className="text-walnut/60">Tạm tính</span>
                  <span className="text-charcoal">{formatVND(subtotal)}</span>
                </div>
                {orderPayment === "online" && (
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-clay/80">Giảm 10% (online)</span>
                    <span className="text-clay">−{formatVND(Math.round(subtotal * 0.1))}</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-walnut/60">Vận chuyển</span>
                  <span className={orderPayment === "online" ? "text-clay" : "text-walnut/60"}>
                    {orderPayment === "online" ? "Miễn phí" : "Tính theo địa chỉ"}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-walnut/20 pt-3 text-[16px] font-medium">
                  <span className="text-walnut/70">Tổng cộng</span>
                  <span className="text-clay">{formatVND(total)}</span>
                </div>
              </div>

              {/* Contact form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!orderColor) { alert("Bạn chưa chọn màu sơn."); return; }
                  alert(`Cảm ơn ${orderName} — Lotus sẽ liên hệ ${orderPhone} để xác nhận và giao hàng.`);
                }}
                className="space-y-5"
              >
                <Field label="Họ và tên">
                  <Input required value={orderName} onChange={(e) => setOrderName(e.target.value)}
                    placeholder="Nhập họ và tên của bạn"
                    className="h-[52px] rounded-none border-0 border-b border-walnut/25 bg-transparent px-0 text-[15px] text-charcoal placeholder:text-walnut/35 focus-visible:border-clay focus-visible:ring-0" />
                </Field>
                <Field label="Số điện thoại">
                  <Input required type="tel" value={orderPhone} onChange={(e) => setOrderPhone(e.target.value)}
                    placeholder="Nhập số điện thoại của bạn"
                    className="h-[52px] rounded-none border-0 border-b border-walnut/25 bg-transparent px-0 text-[15px] text-charcoal placeholder:text-walnut/35 focus-visible:border-clay focus-visible:ring-0" />
                </Field>
                <Field label="Địa chỉ nhận hàng">
                  <Input required value={orderAddress} onChange={(e) => setOrderAddress(e.target.value)}
                    placeholder="Số nhà, đường, phường / xã, tỉnh / thành phố..."
                    className="h-[52px] rounded-none border-0 border-b border-walnut/25 bg-transparent px-0 text-[15px] text-charcoal placeholder:text-walnut/35 focus-visible:border-clay focus-visible:ring-0" />
                </Field>
                <Field label="Ghi chú (tuỳ chọn)">
                  <Textarea value={orderNote} onChange={(e) => setOrderNote(e.target.value)}
                    placeholder="Giờ giao hàng, yêu cầu thêm..."
                    className="min-h-[52px] resize-none rounded-none border-0 border-b border-walnut/25 bg-transparent px-0 text-[15px] text-charcoal placeholder:text-walnut/35 focus-visible:border-clay focus-visible:ring-0" />
                </Field>
                <div className="pt-3">
                  <Button type="submit"
                    className="h-[54px] w-full rounded-none bg-clay text-[12px] font-medium uppercase tracking-[0.22em] text-cream transition hover:bg-clay/90 sm:text-[13px]">
                    Đặt hàng — Lotus xác nhận trong 24h
                  </Button>
                  <p className="mt-4 text-[11px] tracking-[0.15em] text-walnut/40">
                    COD toàn quốc · Đổi trả 7 ngày · Hỗ trợ kỹ thuật miễn phí
                  </p>
                </div>
              </form>

              {/* Color accuracy note */}
              <div className="mt-6 flex items-start gap-3 text-[11px] text-walnut/40">
                <span className="mt-0.5 text-walnut/25">※</span>
                <p>
                  Màu hiển thị trên màn hình có thể chênh nhẹ so với thực tế.
                </p>
              </div>

              {/* Bulk order note */}
              <div className="mt-8 border-t border-walnut/15 pt-6">
                <p className="text-[13px] text-walnut/50">
                  Mua số lượng lớn cho xưởng hoặc công ty?{" "}
                  <a href="https://zalo.me/843966662" target="_blank" rel="noopener noreferrer"
                    className="text-walnut/60 underline underline-offset-2 transition hover:text-clay">
                    Nhắn Zalo để được hỗ trợ riêng.
                  </a>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-walnut/10 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-12 md:py-5">
        <a href="#" className="flex items-center">
          <img src={logoLotus} alt="Lotus Logo" className="h-10 w-auto" />
        </a>
        <nav className="hidden gap-10 text-[12px] uppercase tracking-[0.22em] text-walnut md:flex">
          <a href="#choose" className="hover:text-clay">Sản phẩm</a>
          <a href="#palette" className="hover:text-clay">Bảng màu</a>
          <a href="#advise" className="hover:text-clay">Đặt hàng</a>
        </nav>
        <a
          href="#advise"
          className="inline-flex items-center gap-2 border border-charcoal px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] text-charcoal transition hover:bg-charcoal hover:text-cream sm:px-5 sm:text-[11px]"
        >
          Chọn màu & mua
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-walnut/15 bg-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-12">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <img src={logoLotus} alt="Lotus Logo" className="h-12 w-auto mb-4" />
            <p className="max-w-sm text-sm leading-relaxed text-walnut/70">
              CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ BÍCH TRANG
            </p>
            <p className="mt-2 text-xs text-walnut/60">
              MST: 0313351528
            </p>
            <p className="mt-2 text-xs text-walnut/60">
              99/5 Đường XTT26-1, Ấp 2, Xã Bà Điểm, TP.HCM
            </p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.22em] text-walnut/60">Sản phẩm</div>
            <ul className="mt-4 space-y-2 text-sm text-charcoal">
              <li><a href="#choose" className="hover:text-clay">Wood Paint — Indoor</a></li>
              <li><a href="#choose" className="hover:text-clay">Woodstain Finish — Outdoor</a></li>
              <li><a href="#palette" className="hover:text-clay">Bảng màu</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.22em] text-walnut/60">Liên hệ</div>
            <ul className="mt-4 space-y-2 text-sm text-charcoal">
              <li><a href="https://zalo.me/843966662" target="_blank" rel="noopener noreferrer" className="hover:text-clay">Hotline: 0943 966 662</a></li>
              <li><a href="mailto:sales@sonlotus.vn" className="hover:text-clay">sales@sonlotus.vn</a></li>
              <li><a href="https://sonlotus.vn" target="_blank" rel="noopener noreferrer" className="hover:text-clay">www.sonlotus.vn</a></li>
              <li>Giờ làm việc · 8:00 – 20:00</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-walnut/15 pt-6 text-[11px] uppercase tracking-[0.2em] text-walnut/60 md:flex-row">
          <span>© {new Date().getFullYear()} CÔNG TY TNHH SX TM DV BÍCH TRANG</span>
          <span>Made with care · Vietnam</span>
        </div>
      </div>
    </footer>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-[0.25em] text-clay">{k}</dt>
      <dd className="mt-2 text-[12px] leading-snug text-walnut/85 sm:text-[13px]">{v}</dd>
    </div>
  );
}

function SpecCell({ k, v, sub }: { k: string; v: string; sub: string }) {
  return (
    <div className="pt-8 sm:px-8 sm:pt-10 sm:first:pl-0 sm:last:pr-0">
      <div className="text-[10px] uppercase tracking-[0.28em] text-clay">{k}</div>
      <div className="mt-4 font-serif text-[2.8rem] leading-none text-charcoal sm:text-[3.2rem] md:text-[3.8rem]">{v}</div>
      <div className="mt-2 text-[12px] text-walnut/55">{sub}</div>
    </div>
  );
}

function Commit({ k, v, icon }: { k: string; v: string; icon: React.ReactNode }) {
  return (
    <li className="border-t border-walnut/20 pt-6">
      <div className="text-clay">{icon}</div>
      <div className="mt-4 font-serif text-lg text-charcoal sm:text-xl">{k}</div>
      <div className="mt-2 text-sm leading-relaxed text-walnut/75">{v}</div>
    </li>
  );
}

function FinishCard({
  index,
  eyebrow,
  title,
  body,
  img,
  tags,
  price,
  unit,
}: {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  img: string;
  tags: string[];
  price: string;
  unit: string;
}) {
  return (
    <article className="group flex flex-col">
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="aspect-[5/6] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          width={1200}
          height={1500}
        />
      </div>
      <div className="mt-7 flex items-baseline gap-4">
        <span className="font-serif text-2xl text-clay">{index}</span>
        <span className="text-[11px] uppercase tracking-[0.25em] text-walnut/70">{eyebrow}</span>
      </div>
      <h3 className="mt-4 font-serif text-[28px] leading-tight text-charcoal sm:text-3xl md:text-4xl">{title}</h3>
      <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-walnut/80">{body}</p>
      <ul className="mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.18em] text-walnut sm:text-[11px]">
        {tags.map((t) => (
          <li key={t} className="border border-walnut/30 px-3 py-1.5">{t}</li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-4 border-t border-walnut/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-serif text-2xl text-charcoal">{price}</div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-walnut/60">{unit}</div>
        </div>
        <a
          href="#advise"
          className="group/btn inline-flex items-center justify-center gap-3 bg-charcoal px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.18em] text-cream transition hover:bg-clay sm:px-7"
        >
          Đặt mua ngay
          <ArrowRight className="h-4 w-4 transition group-hover/btn:translate-x-1" />
        </a>
      </div>
    </article>
  );
}

function SurfaceOption({
  label,
  desc,
  recommendation,
  detail,
}: {
  label: string;
  desc: string;
  recommendation: string;
  detail: string;
}) {
  return (
    <div className="flex cursor-default items-start justify-between gap-6 border-t border-walnut/15 py-5 px-1 transition-colors hover:bg-sand/40">
      <div className="flex-1 min-w-0">
        <div className="font-serif text-[19px] text-charcoal">{label}</div>
        <div className="mt-0.5 text-[13px] text-walnut/60">{desc}</div>
      </div>
      <div className="shrink-0 text-right max-w-[200px]">
        <div className="text-[10px] uppercase tracking-[0.2em] text-clay">{recommendation}</div>
        <div className="mt-1 text-[12px] text-walnut/60 leading-relaxed">{detail}</div>
      </div>
    </div>
  );
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
  onCtaClick,
}: {
  index: string;
  title: string;
  subtitle: string;
  body: string;
  img: string;
  bullets: string[];
  ctaText: string;
  ctaLink: string;
  onCtaClick?: () => void;
}) {
  return (
    <article className="group flex flex-col">
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="aspect-[5/6] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          width={1200}
          height={1500}
        />
      </div>
      <div className="mt-7 flex items-baseline gap-4">
        <span className="font-serif text-2xl text-clay">{index}</span>
        <span className="text-[11px] uppercase tracking-[0.25em] text-walnut/70">{subtitle}</span>
      </div>
      <h3 className="mt-4 font-serif text-[28px] leading-tight text-charcoal sm:text-3xl md:text-4xl">{title}</h3>
      <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-walnut/80">{body}</p>
      <ul className="mt-6 space-y-2 text-[13px] leading-relaxed text-walnut/75">
        {bullets.map((b) => (
          <li key={b} className="pl-4 border-l border-walnut/20">
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t border-walnut/20 pt-6">
        <a
          href={ctaLink}
          onClick={() => onCtaClick?.()}
          className="group/btn inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.18em] text-charcoal transition hover:text-clay sm:text-[13px]"
        >
          {ctaText}
          <ArrowRight className="h-4 w-4 transition group-hover/btn:translate-x-1" />
        </a>
      </div>
    </article>
  );
}

function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur border-t border-walnut/20 py-3 px-5 md:py-4">
      <div className="mx-auto max-w-[1400px] flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] uppercase tracking-[0.18em] text-cream/80 sm:text-[12px]">
          Muốn chọn đúng sơn & số kg? Gửi ảnh bề mặt qua Zalo.
        </p>
        <a
          href="https://zalo.me/843966662"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-clay px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-cream transition hover:bg-clay/90 sm:text-[12px]"
        >
          Gửi ảnh qua Zalo
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.22em] text-cream/60">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}