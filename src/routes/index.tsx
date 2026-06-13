import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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

import heroInterior from "@/assets/son-lotus-hero-9.jpeg";
import woodGrain from "@/assets/wood-grain.jpg";
import diyHands from "@/assets/son-lai-tu-tivi-son-lotus.jpeg";
import exteriorDoor from "@/assets/exterior-door.jpg";
import woodstainFinish from "@/assets/son-giu-van-go-lotus-02.JPG";
import beforeAfter from "@/assets/before-after.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/son-lai-hang-rao-son-go-lotus.jpeg";
import project3 from "@/assets/son-lai-cua-cu-khong-mui-lotus.jpeg";
import testimonial1 from "@/assets/son-lai-ban-an-mau-xanh-son-lotus.jpeg";
import testimonial2 from "@/assets/son-lai-tu-quan-ao-son-khong-mui-lotus.png";
import testimonial3 from "@/assets/son-lai-giuong-ngu-son-khong-mui-lotus.png";
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
    detail: "2 lớp, độ phủ 7–9 m²/kg, màu ấm: Sứ, Mộc, Khói"
  },
  { 
    label: "Tủ áo / tủ bếp / kệ TV", 
    desc: "Tủ kệ nội thất lớn",
    recommendation: "Sơn gỗ màu bệt (Indoor)",
    detail: "2 lớp, độ phủ 7–9 m²/kg, che nền cũ tốt"
  },
  { 
    label: "Cửa, khung cửa, lan can", 
    desc: "Cửa nội thất hoặc ngoại thất",
    recommendation: "Woodstain Finish (Nội/Ngoại thất)",
    detail: "2 lớp, giữ vân gỗ, kháng ẩm và UV"
  },
  { 
    label: "Sàn gỗ, bậc cầu thang", 
    desc: "Sàn tự nhiên hoặc engineered",
    recommendation: "Woodstain Finish (Sàn)",
    detail: "2 lớp, độ bền cao, chịu ma sát"
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
  { img: project2, label: "Hàng rào — Gỗ sồi tông màu nâu đậm", place: "Nhà phố · Hà Nội" },
  { img: project3, label: "Cửa gỗ - sơn bệt màu kem", place: "Studio · Đà Nẵng" },
];

const testimonials = [
  {
    quote:
      "Mình sơn lại bộ bàn ăn ngay trong căn hộ chung cư. Không mùi xăng, không phải dời con sang nhà ngoại. Sáng hôm sau cả nhà đã ngồi ăn bình thường.",
    name: "Chị Linh",
    place: "Thảo Điền, TP. HCM",
    product: "Wood Paint · sắc Khói",
    image: testimonial1,
  },
  {
    quote:
      "Tủ áo cũ của con gái mình được sơn lại sắc hồng, đặt cạnh giường nhìn rất cute. Sơn 2 lớp, hết 4 hũ đủ cho cả tủ — mình đặt thêm 1 hũ dự phòng.",
    name: "Anh Phúc",
    place: "Quận Cầu Giấy, Hà Nội",
    product: "Wood Paint · sắc Hồng",
    image: testimonial2,
  },
  {
    quote:
      "Mình tự sơn giường ngủ của mình, tuy lần đầu thực hiện nhưng rất dễ làm. Sơn 2 lớp là bề mặt lên đẹp. Mình sử dụng 2 hũ là đủ. Đáng đồng tiền.",
    name: "Chị Mai",
    place: "Đà Nẵng",
    product: "Woodpaint · Vàng Kem",
    image: testimonial3,
  },
];

const faqs = [
  {
    q: "Người chưa từng sơn có tự làm được không?",
    a: "Hoàn toàn được. Sơn hệ nước dễ tán đều, không kén tay nghề. Bạn chỉ cần cọ hoặc rulo, một miếng giấy nhám mịn và khoảng một buổi chiều. Không cần kỹ thuật chuyên nghiệp.",
  },
  {
    q: "Sơn gỗ hệ nước có an toàn cho nhà có trẻ nhỏ không?",
    a: "Có. Lotus là sơn hệ nước, hàm lượng VOC thấp, không chứa dung môi nặng. Bạn có thể thi công ngay trong phòng ngủ, phòng bếp; sau 4–6 giờ là có thể sinh hoạt lại bình thường.",
  },
  {
    q: "Một hũ 1kg sơn được bao nhiêu m²?",
    a: "Khoảng 7–9 m² cho mỗi lớp tuỳ bề mặt. Khuyến nghị sơn 2 lớp để màng sơn đều và bền — tương đương 4–5 m² hoàn thiện cho 1kg.",
  },
  {
    q: "Nên chọn sơn giữ vân gỗ hay sơn màu bệt?",
    a: "Sơn giữ vân gỗ phù hợp đồ gỗ đẹp vân tự nhiên, muốn giữ vẻ đẹp gỗ gốc. Sơn màu bệt phù hợp muốn đổi màu hoàn toàn, tạo vẻ hiện đại, đồng nhất. Cả hai đều bền, dễ vệ sinh.",
  },
  {
    q: "Giao hàng toàn quốc không? Bao lâu nhận được?",
    a: "Lotus giao toàn quốc. Nội thành Hà Nội & TP. HCM nhận trong 1–2 ngày, các tỉnh thành khác 2–5 ngày. Thanh toán online được miễn phí vận chuyển.",
  },
  {
    q: "Nếu chọn sai màu hoặc không ưng thì sao?",
    a: "Sản phẩm còn nguyên seal được đổi trả trong 7 ngày. Bạn có thể xem bảng màu đầy đủ trước khi đặt hàng. Màu hiển thị trên màn hình có thể chênh nhẹ so với thực tế.",
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
  const navigate = useNavigate();
  const [tab, setTab] = useState<"indoor" | "outdoor">("indoor");
  const [showPaletteModal, setShowPaletteModal] = useState(false);
  const [showZaloButton, setShowZaloButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("section");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowZaloButton(heroBottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <div className="min-h-screen bg-cream text-charcoal font-sans antialiased overscroll-behavior-none">
      <Header />
      {showSticky && <StickyCTA />}

      {/* HERO — B2C OPTIMIZED */}
      <section id="hero" className="relative">
        <div className="mx-auto max-w-[1400px] px-5 pt-12 pb-20 md:px-12 md:pt-20 md:pb-32">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col">
              <span className="text-[13px] uppercase tracking-[0.3em] text-walnut/70">
                Sơn Gỗ Hệ Nước Không Pha Dung Môi
              </span>
              <h1 className="mt-6 font-serif text-[38px] leading-[1.05] tracking-tight text-charcoal sm:text-[44px] md:text-[60px] lg:text-[72px]">
                Sơn lại đồ gỗ tại nhà
                <br />
                <em className="not-italic text-clay">ít mùi, khô nhanh</em>,
                <br />
                xong trong một buổi.
              </h1>
              <p className="mt-7 max-w-md text-[15px] leading-relaxed text-walnut/80">
                Sơn gỗ hệ nước Lotus: ít mùi, an toàn cho nhà có trẻ nhỏ, dễ tự thi công. Chọn màu, đặt online, nhận hàng tại nhà. 1 hũ sơn khoảng 7–9 m² mỗi lớp.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#advise"
                  className="group inline-flex items-center gap-3 bg-clay px-6 py-4 text-[13px] font-medium uppercase tracking-[0.18em] text-cream transition hover:bg-clay/90 sm:px-7 sm:text-[13px]"
                >
                  Chọn màu & đặt mua
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#palette"
                  className="text-[13px] font-medium uppercase tracking-[0.18em] text-walnut underline-offset-8 hover:underline sm:text-[13px]"
                >
                  Xem bảng màu
                </a>
              </div>
              <p className="mt-3 text-[13px] text-walnut/50">
                Ít mùi — an toàn dùng trong phòng ngủ và phòng trẻ em
              </p>

              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-1.5 border-t border-walnut/15 pt-6">
                <span className="text-[13px] text-walnut/60">Hệ nước ít mùi</span>
                <span className="text-[13px] text-walnut/30">/</span>
                <span className="text-[13px] text-walnut/60">COD toàn quốc</span>
                <span className="text-[13px] text-walnut/30">/</span>
                <span className="text-[13px] text-walnut/60">Online giảm 10%</span>
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
              <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[13px] uppercase tracking-[0.22em] text-cream mix-blend-difference sm:text-[13px]">
                <span>Phòng khách · Lotus Wood Paint</span>
                <span>— 001</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* DECISION BLOCK — 2 KIỂU HOÀN THIỆN */}
      <section id="choose" className="border-t border-walnut/10 bg-sand/40">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-28">
          <header>
            <span className="text-[13px] uppercase tracking-[0.3em] text-walnut/70">02 — Chọn kiểu hoàn thiện</span>
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
              body="Chọn loại này khi muốn đổi màu hoàn toàn cho tủ, kệ, bàn. Phủ trọn bề mặt, màng sơn mịn như sứ, che hoàn toàn vân và màu gốc."
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
              body="Chọn loại này khi muốn giữ vẻ đẹp gỗ tự nhiên cho cửa, sàn, lan can. Thấm sâu vào gỗ, tôn trọn vân, chịu nắng mưa."
              img={woodstainFinish}
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
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-24">
          <header className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
            <div>
              <span className="text-[13px] uppercase tracking-[0.3em] text-walnut/70">03 — Quy cách</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
                1 hũ sơn được bao nhiêu?
                <br />
                Cần mua bao nhiêu?
              </h2>
            </div>
            <p className="max-w-xs text-[13px] leading-relaxed text-walnut/65">
              1 hũ 1kg sơn được 7–9 m² mỗi lớp. Khuyến nghị sơn 2 lớp.
            </p>
          </header>

          <div className="mt-14 grid grid-cols-2 gap-4 border-t border-walnut/20 pt-8 sm:grid-cols-4">
            <div className="rounded-lg bg-cream/50 p-4 text-center">
              <div className="text-[28px] font-serif text-clay sm:text-[32px]">1kg</div>
              <div className="mt-1 text-[13px] text-walnut/60">Quy cách hũ</div>
            </div>
            <div className="rounded-lg bg-cream/50 p-4 text-center">
              <div className="text-[28px] font-serif text-clay sm:text-[32px]">7–9 m²</div>
              <div className="mt-1 text-[13px] text-walnut/60">Độ phủ mỗi lớp</div>
            </div>
            <div className="rounded-lg bg-cream/50 p-4 text-center">
              <div className="text-[28px] font-serif text-clay sm:text-[32px]">2 lớp</div>
              <div className="mt-1 text-[13px] text-walnut/60">Khuyến nghị</div>
            </div>
            <div className="rounded-lg bg-cream/50 p-4 text-center">
              <div className="text-[28px] font-serif text-clay sm:text-[32px]">30 phút</div>
              <div className="mt-1 text-[13px] text-walnut/60">Khô bề mặt</div>
            </div>
          </div>

          {/* Quantity Suggestion Table */}
          <div className="mt-12 border-t border-walnut/15 pt-8">
            <p className="mb-4 text-[13px] text-walnut/60">Gợi ý số lượng theo hạng mục</p>
            <div className="space-y-2">
              {[
                { item: "Bàn ăn 4–6 ghế", qty: "1 hũ 1kg" },
                { item: "Tủ quần áo 2 cánh", qty: "2 hũ 1kg" },
                { item: "Cửa gỗ 1 cánh", qty: "2 hũ" },
                { item: "Kệ TV / kệ sách", qty: "1–2 hũ 1kg" },
                { item: "Giường ngủ", qty: "2 hũ" },
              ].map((row, i) => (
                <div key={i} className="flex justify-between border-b border-walnut/10 py-2 text-[13px]">
                  <span className="text-walnut/70">{row.item}</span>
                  <span className="text-charcoal">{row.qty}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SURFACE SELECTOR — BẠN ĐANG SƠN GÌ */}
      <section className="border-t border-walnut/10 bg-sand/40">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-28">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4">
              <span className="text-[13px] uppercase tracking-[0.3em] text-walnut/70">04 — Bề mặt</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
                Bạn đang
                <br />
                sơn gì?
              </h2>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-walnut/70">
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
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 md:col-span-4 lg:col-span-4">
              <span className="text-[13px] uppercase tracking-[0.3em] text-cream/60">05 — Trước & Sau</span>
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
                <div className="absolute bottom-3 left-3 bg-black/40 px-2 py-1 text-[9px] uppercase tracking-[0.28em] text-cream sm:bottom-5 sm:left-[8%] sm:text-[13px]">
                  Trước khi sơn
                </div>
                <div className="absolute bottom-3 right-3 bg-black/40 px-2 py-1 text-[9px] uppercase tracking-[0.28em] text-cream sm:bottom-5 sm:right-[8%] sm:text-[13px]">
                  Sau khi sơn
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-t border-walnut/10">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
          {/* Top — headline + featured main point */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <span className="text-[13px] uppercase tracking-[0.3em] text-walnut/70">06 — Vì sao hệ nước</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
                Ít mùi.
                <br />
                Khô nhanh.
                <br />
                Dễ làm sạch.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-[3.5rem]">
              <p className="font-serif text-[20px] leading-[1.6] text-charcoal md:text-[22px]">
                Sơn được ngay trong phòng ngủ, cạnh con nhỏ. Không mùi xăng, không cần thông gió đặc biệt.
              </p>
            </div>
          </div>

          {/* Bottom — 3 supporting points */}
          <ul className="mt-16 grid grid-cols-1 divide-y divide-walnut/12 border-t border-walnut/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              { n: "02", t: "Khô nhanh trong giờ", d: "Khô bề mặt sau 30 phút, sơn lớp tiếp theo sau 2 giờ. Xong trong một buổi chiều." },
              { n: "03", t: "Rửa bằng nước thường", d: "Cọ, khay, tay áo — sạch chỉ với vòi nước. Không cần dung môi hay xăng." },
              { n: "04", t: "Bền màu, không ố vàng", d: "Kháng ẩm, kháng trầy nhẹ, chịu lau chùi hằng ngày. Màu giữ nguyên nhiều năm." },
            ].map((b, i) => (
              <li key={b.n} className={`py-9 ${
                i === 0 ? "sm:pr-10" : i === 1 ? "sm:px-10" : "sm:pl-10"
              }`}>
                <div className="text-[14px] uppercase tracking-[0.28em] text-clay">{b.n}</div>
                <div className="mt-3 font-serif text-[19px] text-charcoal">{b.t}</div>
                <p className="mt-2 text-[14px] leading-relaxed text-walnut/65">{b.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-walnut/10 bg-sand/40">
        <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-12 md:py-28">
          {/* Header */}
          <div className="mb-6 text-center md:mb-10 md:text-left">
            <span className="text-[13px] uppercase tracking-[0.3em] text-walnut/70">07 — Thi công</span>
            <h2 className="mt-4 font-serif text-[28px] leading-tight text-charcoal sm:text-4xl md:mt-5 md:text-5xl">
              Ba bước,
              <br />
              một buổi chiều.
            </h2>
            <p className="mt-3 max-w-lg mx-auto text-[13px] leading-relaxed text-walnut/70 md:mt-4 md:mx-0 md:text-[14px]">
              Không cần thợ. Không cần máy. Chỉ cọ, lăn — và một chút kiên nhẫn.
            </p>
          </div>

          {/* Video - Short style on mobile */}
          <div className="mb-8 flex justify-center md:mb-12">
            <div className="w-full max-w-[420px] aspect-[9/16] overflow-hidden rounded-2xl bg-charcoal md:max-w-4xl md:aspect-video md:rounded-xl md:shadow-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/nQ8QXB0wgcQ"
                title="Sơn lại chiếc tủ cũ trong 1 buổi chiều"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-3">
            {[
              { n: "1", t: "Làm sạch & chà nhám nhẹ", d: "Lau bụi, dầu mỡ. Chà giấy nhám mịn để bề mặt mịn và bám sơn tốt." },
              { n: "2", t: "Sơn lớp đầu, chờ khô", d: "Pha loãng 5–10% nước, sơn mỏng đều bằng cọ hoặc lăn. Để khô 2 giờ." },
              { n: "3", t: "Phủ lớp hoàn thiện", d: "Lớp hai cho màng sơn đều màu, mịn, đạt độ bền tối ưu." },
            ].map((s) => (
              <div key={s.n} className="rounded-lg bg-cream/50 p-5 md:p-6">
                <div className="mb-3 font-serif text-[2.5rem] leading-none text-clay/50 md:mb-4 md:text-[3rem]">{s.n}</div>
                <h3 className="mb-2 font-serif text-[17px] leading-tight text-charcoal md:text-[18px]">{s.t}</h3>
                <p className="text-[13px] leading-relaxed text-walnut/65">{s.d}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center font-serif text-[14px] italic text-walnut/50 md:mt-10 md:text-[15px]">
            Hầu hết hoàn thành trong một buổi chiều — không cần nghỉ làm, không cần thợ.
          </p>
        </div>
      </section>

      {/* PALETTE — BẢNG MÀU */}
      <section id="palette" className="border-t border-walnut/10 bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-28">
          <header className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-[13px] uppercase tracking-[0.3em] text-walnut/70">08 — Bảng màu</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
                Chọn màu,
                <br />
                bấm xuống đặt hàng.
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-walnut/70">
                Bấm vào màu để chọn tự động. Sau đó cuộn xuống phần đặt hàng để hoàn tất.
              </p>
            </div>
            <div className="inline-flex border border-walnut/25 text-[13px] uppercase tracking-[0.2em] sm:text-[13px]">
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
                        ? "ring-3 ring-clay ring-offset-2 scale-105"
                        : "group-hover:scale-[1.02]"
                    }`}
                  />
                ) : (
                  <div
                    className={`aspect-square w-full border border-walnut/15 bg-sand/30 transition-all duration-200 ${
                      orderColor === c.name
                        ? "ring-3 ring-clay ring-offset-2 scale-105"
                        : ""
                    }`}
                  />
                )}
                <div className="flex items-center justify-between">
                  <span className={`font-serif text-[14px] ${orderColor === c.name ? "text-clay font-medium" : "text-charcoal"}`}>
                    {c.name}
                  </span>
                  {orderColor === c.name && (
                    <span className="text-[13px] text-clay font-medium">✓</span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Reference link + Modal button */}
          <div className="mt-10 flex items-center justify-between border-t border-walnut/15 pt-6">
            <div className="flex items-start gap-3 text-[13px] text-walnut/55">
              <span className="mt-0.5 text-walnut/30">※</span>
              <p>
                Màu hiển thị trên màn hình có thể chênh nhẹ so với thực tế.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowPaletteModal(true)}
              className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] text-walnut/60 underline underline-offset-2 transition hover:text-clay"
            >
              Xem bảng màu đầy đủ
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* CTA to order section */}
          {orderColor && (
            <div className="mt-8 flex items-center justify-between border-t border-walnut/15 pt-6">
              <span className="text-[13px] text-walnut/70">
                Đã chọn: <strong className="text-charcoal">{orderColor}</strong>
              </span>
              <a href="#advise"
                className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.18em] text-clay transition hover:text-clay/75">
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
              alt={tab === "indoor" ? "Bảng màu sơn màu bệt Lotus cho nội thất trong nhà" : "Bảng màu sơn giữ vân gỗ Lotus cho nội thất trong và ngoài trời"}
              className="w-full border border-walnut/10 max-h-[60vh] object-contain"
            />
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={handleDownloadPalette}
                className="inline-flex items-center gap-2 border border-walnut/20 px-6 py-3 text-[13px] uppercase tracking-[0.18em] text-charcoal transition hover:bg-sand/60"
              >
                Tải xuống
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setShowPaletteModal(false)}
                className="inline-flex items-center gap-2 bg-clay px-6 py-3 text-[13px] uppercase tracking-[0.18em] text-cream transition hover:bg-clay/90"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PROJECTS / TRUST GALLERY — CÔNG TRÌNH THẬT */}
      <section className="border-t border-walnut/10 bg-sand/40">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-28">
          <header className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-[13px] uppercase tracking-[0.3em] text-walnut/70">09 — Công trình thật</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
                Từ đồ gỗ cũ
                <br />
                đến không gian mới.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-walnut/70">
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
                <div className="mt-1 text-[13px] text-walnut/60">{projects[0].place}</div>
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
                    <div className="mt-0.5 text-[13px] text-walnut/60">{p.place}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — CẢM NHẬN KHÁCH HÀNG B2C */}
      <section className="border-t border-walnut/10">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-[13px] uppercase tracking-[0.3em] text-walnut/70">10 — Cảm nhận khách hàng</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
                Ngày cuối tuần.
                <br />
                Một hũ sơn. Nhà khác hẳn.
              </h2>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 divide-y divide-walnut/15 md:grid-cols-3 md:divide-x md:divide-y-0">
            {testimonials.map((t, i) => (
              <blockquote
                key={t.name}
                className={`flex flex-col py-8 md:py-0 ${
                  i === 0 ? "md:pr-10" : i === 1 ? "md:px-10" : "md:pl-10"
                }`}
              >
                <div className="mb-4 aspect-[4/3] overflow-hidden rounded-lg bg-sand/30">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="flex-1 font-serif text-[17px] leading-[1.5] text-charcoal sm:text-[18px]">
                  “{t.quote}”
                </p>
                <footer className="mt-6 border-t border-walnut/15 pt-4">
                  <div className="text-sm font-medium text-charcoal">{t.name}</div>
                  <div className="mt-0.5 text-[13px] text-walnut/55">
                    {t.place} · {t.product}
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-walnut/10 bg-sand/40">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-28">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <span className="text-[13px] uppercase tracking-[0.3em] text-walnut/70">11 — Câu hỏi</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
                Những điều
                <br />
                khách hay hỏi.
              </h2>
              <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-walnut/70">
                Mua số lượng lớn cho xưởng hoặc dự án? Liên hệ Zalo để nhận giá sỉ.
              </p>
            </div>

            <div className="col-span-12 md:col-span-8">
              <Accordion type="multiple" defaultValue={["f-0", "f-1"]} className="border-t border-walnut/20">
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

      {/* TRUST / PURCHASE REASSURANCE */}
      <section className="border-t border-walnut/10 bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-[28px] leading-tight text-charcoal sm:text-[32px]">
              Đặt online nhanh, nhận hàng tại nhà.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-walnut/70">
              Chọn màu, đặt hàng trong vài phút và nhận hàng tận nơi. Bạn có thể thanh toán COD khi nhận hàng, hoặc chọn thanh toán online để được giảm 10% và miễn phí giao hàng.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "COD khi nhận hàng",
                "Online giảm 10%",
                "Miễn phí giao hàng khi thanh toán online",
                "Giao toàn quốc trong 1–5 ngày",
                "Đổi trả 7 ngày nếu giao nhầm hoặc còn nguyên seal",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 rounded-lg bg-sand/30 px-4 py-3">
                  <span className="mt-0.5 flex-shrink-0 text-clay">✓</span>
                  <span className="text-[13px] leading-snug text-charcoal">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg bg-charcoal/5 px-5 py-4">
              <p className="text-[14px] text-walnut/80">
                Chưa chắc chọn màu hay loại sơn?{" "}
                <a href="https://zalo.me/0943966662" target="_blank" rel="noopener noreferrer" className="font-medium text-clay underline underline-offset-2 transition hover:text-clay/80">
                  Nhắn Zalo để được gợi ý nhanh.
                </a>
              </p>
            </div>

            <a
              href="#palette"
              className="mt-8 inline-flex items-center gap-3 bg-clay px-6 py-4 text-[13px] font-medium uppercase tracking-[0.18em] text-cream transition hover:bg-clay/90 sm:text-[13px]"
            >
              Chọn màu & đặt mua ngay
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ORDER — ĐẶT HÀNG (NEW MOBILE-FIRST VERSION) */}
      <section id="advise" className="border-t border-walnut/10 bg-sand/30 text-charcoal">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-28">

          {/* Header */}
          <div className="mb-10 text-center md:text-left">
            <span className="text-[13px] uppercase tracking-[0.3em] text-walnut/50">12 — Đặt hàng</span>
            <h2 className="mt-4 font-serif text-[32px] leading-tight sm:text-5xl">
              Điền thông tin,
              <br />nhận hàng tại nhà.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-walnut/65">
              Chọn dòng sơn, màu, kích thước. COD toàn quốc hoặc thanh toán online giảm 10%.
            </p>
          </div>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (!orderColor) { alert("Bạn chưa chọn màu sơn."); return; }

              // Send data to Google Apps Script
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
                note: orderNote,
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
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(orderData),
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

              // Navigate to thank-you page
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
                  qty: orderQty.toString(),
                },
              });
            }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"
          >
            {/* LEFT COLUMN - Product Selection */}
            <div className="space-y-6">
              {/* Dòng sơn */}
              <div>
                <label className="mb-3 block text-[13px] text-walnut/50">Dòng sơn</label>
                <div className="grid grid-cols-2 gap-3">
                  <button type="button"
                    onClick={() => { setOrderProduct("bet"); setOrderColor(""); }}
                    className={`border py-3 text-[13px] transition ${orderProduct === "bet" ? "border-clay bg-clay text-cream font-medium" : "border-walnut/20 text-walnut/60 hover:border-walnut/40"}`}>
                    Sơn màu bệt
                  </button>
                  <button type="button"
                    onClick={() => { setOrderProduct("van-go"); setOrderColor(""); }}
                    className={`border py-3 text-[13px] transition ${orderProduct === "van-go" ? "border-clay bg-clay text-cream font-medium" : "border-walnut/20 text-walnut/60 hover:border-walnut/40"}`}>
                    Sơn giữ vân gỗ
                  </button>
                </div>
              </div>

              {/* Môi trường */}
              <div>
                <label className="mb-3 block text-[13px] text-walnut/50">Môi trường sử dụng</label>
                <div className="grid grid-cols-2 gap-3">
                  <button type="button"
                    onClick={() => setOrderEnv("indoor")}
                    className={`border py-3 text-[13px] transition ${orderEnv === "indoor" ? "border-clay bg-clay text-cream font-medium" : "border-walnut/20 text-walnut/60 hover:border-walnut/40"}`}>
                    Trong nhà
                  </button>
                  <button type="button"
                    onClick={() => setOrderEnv("outdoor")}
                    className={`border py-3 text-[13px] transition ${orderEnv === "outdoor" ? "border-clay bg-clay text-cream font-medium" : "border-walnut/20 text-walnut/60 hover:border-walnut/40"}`}>
                    Ngoài trời
                  </button>
                </div>
              </div>

              {/* Màu sơn */}
              <div>
                <label className="mb-3 block text-[13px] text-walnut/50">Màu sơn</label>
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
                  className="mt-2 text-[13px] text-walnut/55 underline underline-offset-2 transition hover:text-clay"
                >
                  Xem bảng màu đầy đủ
                </button>
              </div>

              {/* Bề mặt */}
              <div>
                <label className="mb-3 block text-[13px] text-walnut/50">Bề mặt</label>
                <div className="grid grid-cols-3 gap-3">
                  <button type="button"
                    onClick={() => setOrderSurface("bong")}
                    className={`border py-3 text-[13px] transition ${orderSurface === "bong" ? "border-clay bg-clay text-cream font-medium" : "border-walnut/20 text-walnut/60 hover:border-walnut/40"}`}>
                    Bóng
                  </button>
                  <button type="button"
                    onClick={() => setOrderSurface("bong-50")}
                    className={`border py-3 text-[13px] transition ${orderSurface === "bong-50" ? "border-clay bg-clay text-cream font-medium" : "border-walnut/20 text-walnut/60 hover:border-walnut/40"}`}>
                    Bóng 50%
                  </button>
                  <button type="button"
                    onClick={() => setOrderSurface("mo")}
                    className={`border py-3 text-[13px] transition ${orderSurface === "mo" ? "border-clay bg-clay text-cream font-medium" : "border-walnut/20 text-walnut/60 hover:border-walnut/40"}`}>
                    Mờ
                  </button>
                </div>
              </div>

              {/* Kích thước & số lượng */}
              <div>
                <label className="mb-3 block text-[13px] text-walnut/50">Kích thước & số lượng</label>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <button type="button" onClick={() => setOrderSize("1kg")}
                      className={`border py-3 text-[13px] transition ${orderSize === "1kg" ? "border-clay bg-clay text-cream font-medium" : "border-walnut/20 text-walnut/60 hover:border-walnut/40"}`}>
                      Hũ 1 kg
                      <span className="ml-2 text-[13px] opacity-60">{formatVND(PRICES[orderProduct][orderEnv]["1kg"])}</span>
                    </button>
                    <button type="button" onClick={() => setOrderSize("5kg")}
                      className={`border py-3 text-[13px] transition ${orderSize === "5kg" ? "border-clay bg-clay text-cream font-medium" : "border-walnut/20 text-walnut/60 hover:border-walnut/40"}`}>
                      Hũ 5 kg
                      <span className="ml-2 text-[13px] opacity-60">{formatVND(PRICES[orderProduct][orderEnv]["5kg"])}</span>
                    </button>
                  </div>
                  <div className="flex items-center border border-walnut/20">
                    <button type="button" onClick={() => setOrderQty(Math.max(1, orderQty - 1))}
                      className="flex h-[46px] w-12 items-center justify-center text-xl leading-none text-walnut/50 transition hover:text-charcoal">−</button>
                    <span className="flex-1 text-center text-[15px] text-charcoal">{orderQty}</span>
                    <button type="button" onClick={() => setOrderQty(orderQty + 1)}
                      className="flex h-[46px] w-12 items-center justify-center text-xl leading-none text-walnut/50 transition hover:text-charcoal">+</button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Summary, Payment, Customer Info */}
            <div className="space-y-6">
              {/* Order Summary */}
            <div className="space-y-3 border border-walnut/15 p-5 bg-cream/30">
              <div className="mb-3 text-[13px] text-walnut/50">Tóm tắt đơn</div>
              <div className="space-y-2 text-[14px]">
                <div className="flex justify-between">
                  <span className="text-walnut/70">Sản phẩm</span>
                  <span className="text-charcoal">{orderProduct === "bet" ? "Sơn màu bệt" : "Sơn giữ vân gỗ"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-walnut/70">Môi trường</span>
                  <span className="text-charcoal">{orderEnv === "indoor" ? "Trong nhà" : "Ngoài trời"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-walnut/70">Màu</span>
                  <span className="text-charcoal">{orderColor || <span className="text-walnut/40">Chưa chọn màu</span>}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-walnut/70">Bề mặt</span>
                  <span className="text-charcoal">{orderSurface === "bong" ? "Bóng" : orderSurface === "bong-50" ? "Bóng 50%" : "Mờ"}</span>
                </div>
                <div className="flex justify-between border-t border-walnut/15 pt-2">
                  <span className="text-walnut/70">Hũ {orderSize} × {orderQty}</span>
                  <span className="text-charcoal">{formatVND(unitPrice)} / hũ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-walnut/70">Tạm tính</span>
                  <span className="text-charcoal">{formatVND(subtotal)}</span>
                </div>
                {orderPayment === "online" && (
                  <div className="flex justify-between text-[13px]">
                    <span className="text-clay/80">Giảm 10% (online)</span>
                    <span className="text-clay">−{formatVND(Math.round(subtotal * 0.1))}</span>
                  </div>
                )}
                <div className="flex justify-between text-[13px]">
                  <span className="text-walnut/70">Vận chuyển</span>
                  <span className={orderPayment === "online" ? "text-clay" : "text-walnut/60"}>
                    {orderPayment === "online" ? "Miễn phí" : "Tính theo địa chỉ"}
                  </span>
                </div>
                <div className="flex justify-between border-t border-walnut/20 pt-2 text-[16px] font-medium">
                  <span className="text-walnut/80">Tổng cộng</span>
                  <span className="text-clay">{formatVND(total)}</span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <label className="mb-3 block text-[13px] text-walnut/50">Hình thức thanh toán</label>
              <div className="space-y-3">
                <button type="button" onClick={() => setOrderPayment("cod")}
                  className={`w-full border p-4 text-left transition ${orderPayment === "cod" ? "border-walnut/40 bg-sand/50" : "border-walnut/15 hover:border-walnut/30"}`}>
                  <span className={`block text-[13px] font-medium ${orderPayment === "cod" ? "text-charcoal" : "text-walnut/60"}`}>COD — Thanh toán khi nhận</span>
                  <span className={`block text-[13px] ${orderPayment === "cod" ? "text-walnut/55" : "text-walnut/40"}`}>Không cần thanh toán trước</span>
                </button>
                <button type="button" onClick={() => setOrderPayment("online")}
                  className={`w-full border p-4 text-left transition ${orderPayment === "online" ? "border-clay/60 bg-clay/5" : "border-walnut/15 hover:border-walnut/30"}`}>
                  <span className={`block text-[13px] font-medium ${orderPayment === "online" ? "text-clay" : "text-walnut/60"}`}>Thanh toán Online</span>
                  <span className={`block text-[13px] font-medium ${orderPayment === "online" ? "text-clay" : "text-walnut/60"}`}>✨ Giảm 10% + Miễn phí giao hàng</span>
                </button>
              </div>
            </div>

            {/* Customer Info */}
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-[13px] text-walnut/70">Họ và tên</label>
                <input
                  required
                  type="text"
                  value={orderName}
                  onChange={(e) => setOrderName(e.target.value)}
                  placeholder="Nhập họ và tên của bạn"
                  className="w-full border border-walnut/20 bg-cream px-4 py-3 text-[15px] text-charcoal placeholder:text-walnut/35 focus:border-clay focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-[13px] text-walnut/70">Số điện thoại</label>
                <input
                  required
                  type="tel"
                  value={orderPhone}
                  onChange={(e) => setOrderPhone(e.target.value)}
                  placeholder="Nhập số điện thoại của bạn"
                  className="w-full border border-walnut/20 bg-cream px-4 py-3 text-[15px] text-charcoal placeholder:text-walnut/35 focus:border-clay focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-[13px] text-walnut/70">Địa chỉ nhận hàng</label>
                <input
                  required
                  type="text"
                  value={orderAddress}
                  onChange={(e) => setOrderAddress(e.target.value)}
                  placeholder="Số nhà, đường, phường / xã, tỉnh / thành phố..."
                  className="w-full border border-walnut/20 bg-cream px-4 py-3 text-[15px] text-charcoal placeholder:text-walnut/35 focus:border-clay focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-[13px] text-walnut/70">Ghi chú (tuỳ chọn)</label>
                <textarea
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  placeholder="Giờ giao hàng, yêu cầu thêm..."
                  className="w-full min-h-[80px] border border-walnut/20 bg-cream px-4 py-3 text-[15px] text-charcoal placeholder:text-walnut/35 focus:border-clay focus:outline-none resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="h-[56px] w-full bg-clay text-[13px] font-medium uppercase tracking-[0.22em] text-cream transition hover:bg-clay/90"
              >
                Đặt hàng
              </button>
              <p className="mt-4 text-center text-[13px] text-walnut/50">
                COD toàn quốc · Đổi trả 7 ngày
              </p>
            </div>
            </div>
          </form>

          {/* Notes */}
          <div className="mt-8 space-y-4 text-[13px] text-walnut/50">
            <p>※ Màu hiển thị trên màn hình có thể chênh nhẹ so với thực tế.</p>
            <p className="border-t border-walnut/15 pt-4">
              Mua từ 50kg trở lên?{" "}
              <a href="https://zalo.me/0943966662" target="_blank" rel="noopener noreferrer"
                className="underline underline-offset-2 transition hover:text-clay">
                Nhắn Zalo để nhận giá sỉ.
              </a>
            </p>
          </div>

        </div>
      </section>

      {/* Floating Zalo Button */}
      {showZaloButton && (
        <a
          href="https://zalo.me/0943966662"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 group"
        >
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition hover:shadow-xl" style={{ backgroundColor: "#0068FF" }}>
            <span className="text-2xl font-bold text-white">Z</span>
            {/* Tooltip */}
            <div className="absolute right-full mr-3 w-48 rounded-lg bg-charcoal px-3 py-2 text-[13px] text-cream opacity-0 transition-opacity group-hover:opacity-100">
              Bạn chưa chắc chọn gì? Nhắn Zalo — tư vấn miễn phí
            </div>
          </div>
        </a>
      )}

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
        <nav className="hidden gap-10 text-[13px] uppercase tracking-[0.22em] text-walnut md:flex">
          <a href="#choose" className="hover:text-clay">Sản phẩm</a>
          <a href="#palette" className="hover:text-clay">Bảng màu</a>
          <a href="#advise" className="hover:text-clay">Đặt hàng</a>
        </nav>
        <a
          href="#advise"
          className="inline-flex items-center gap-2 border border-charcoal px-4 py-2.5 text-[13px] uppercase tracking-[0.2em] text-charcoal transition hover:bg-charcoal hover:text-cream sm:px-5 sm:text-[13px]"
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
            <p className="max-w-sm text-sm leading-relaxed text-walnut/65">
              CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ BÍCH TRANG
            </p>
            <p className="mt-2 text-xs text-walnut/55">
              MST: 0313351528
            </p>
            <p className="mt-2 text-xs text-walnut/55">
              99/5 Đường XTT26-1, Ấp 2, Xã Bà Điểm, TP.HCM
            </p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="text-[13px] uppercase tracking-[0.22em] text-walnut/50 mb-3">Sản phẩm</div>
            <ul className="mt-4 space-y-2.5 text-sm text-charcoal">
              <li><a href="#choose" className="hover:text-clay">Wood Paint — Indoor</a></li>
              <li><a href="#choose" className="hover:text-clay">Woodstain Finish — Outdoor</a></li>
              <li><a href="#palette" className="hover:text-clay">Bảng màu</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-4">
            <div className="text-[13px] uppercase tracking-[0.22em] text-walnut/50 mb-3">Liên hệ</div>
            <ul className="mt-4 space-y-2.5 text-sm text-charcoal">
              <li><a href="https://zalo.me/0943966662" target="_blank" rel="noopener noreferrer" className="hover:text-clay">Hotline: 0943 966 662</a></li>
              <li><a href="mailto:sales@sonlotus.vn" className="hover:text-clay">sales@www.sonlotus.vn</a></li>
              <li><a href="https://www.sonlotus.vn" target="_blank" rel="noopener noreferrer" className="hover:text-clay">www.sonlotus.vn</a></li>
              <li>Giờ làm việc · 8:00 – 20:00</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-walnut/15 pt-6 text-[13px] text-walnut/60 md:flex-row">
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
      <dt className="text-[13px] uppercase tracking-[0.25em] text-clay">{k}</dt>
      <dd className="mt-2 text-[13px] leading-snug text-walnut/85 sm:text-[13px]">{v}</dd>
    </div>
  );
}

function SpecCell({ k, v, sub }: { k: string; v: string; sub: string }) {
  return (
    <div className="pt-8 sm:px-8 sm:pt-10 sm:first:pl-0 sm:last:pr-0">
      <div className="text-[13px] uppercase tracking-[0.28em] text-clay">{k}</div>
      <div className="mt-4 font-serif text-[2.8rem] leading-none text-charcoal sm:text-[3.2rem] md:text-[3.8rem]">{v}</div>
      <div className="mt-2 text-[13px] text-walnut/55">{sub}</div>
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
        <span className="text-[13px] uppercase tracking-[0.25em] text-walnut/70">{eyebrow}</span>
      </div>
      <h3 className="mt-4 font-serif text-[28px] leading-tight text-charcoal sm:text-3xl md:text-4xl">{title}</h3>
      <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-walnut/80">{body}</p>
      <ul className="mt-6 flex flex-wrap gap-2 text-[13px] uppercase tracking-[0.18em] text-walnut sm:text-[13px]">
        {tags.map((t) => (
          <li key={t} className="border border-walnut/30 px-3 py-1.5">{t}</li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-4 border-t border-walnut/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-serif text-2xl text-charcoal">{price}</div>
          <div className="text-[13px] text-walnut/60">{unit}</div>
        </div>
        <a
          href="#advise"
          className="group/btn inline-flex items-center justify-center gap-3 bg-charcoal px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.18em] text-cream transition hover:bg-clay sm:px-7"
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
    <div className="cursor-default border-t border-walnut/15 py-5 px-1 transition-colors hover:bg-sand/40">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="flex-1 min-w-0">
          <div className="font-serif text-[18px] text-charcoal sm:text-[19px]">{label}</div>
          <div className="mt-0.5 text-[13px] text-walnut/60">{desc}</div>
        </div>
        <div className="shrink-0 sm:text-right">
          <div className="text-[13px] text-clay">{recommendation}</div>
          <div className="mt-1 text-[13px] text-walnut/60 leading-relaxed">{detail}</div>
        </div>
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
        <span className="font-serif text-4xl text-clay">{index}</span>
        <span className="text-[13px] uppercase tracking-[0.25em] text-walnut/70">{subtitle}</span>
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

      <div className="mt-6 border-t border-walnut/20 pt-6">
        <a
          href={ctaLink}
          onClick={() => onCtaClick?.()}
          className="group/btn inline-flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.18em] text-charcoal transition hover:text-clay sm:text-[13px]"
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
    <div className="hidden md:fixed md:bottom-0 md:left-0 md:right-0 md:z-50 bg-charcoal/95 backdrop-blur border-t border-walnut/20 py-3 px-5 md:py-4">
      <div className="mx-auto max-w-[1400px] flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[13px] uppercase tracking-[0.18em] text-cream/80 sm:text-[13px]">
          Muốn chọn đúng sơn & số kg? Gửi ảnh bề mặt qua Zalo.
        </p>
        <a
          href="https://zalo.me/0943966662"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-clay px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.18em] text-cream transition hover:bg-clay/90 sm:text-[13px]"
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
      <span className="text-[13px] uppercase tracking-[0.22em] text-cream/60">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}