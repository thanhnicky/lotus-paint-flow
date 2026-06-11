import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

type Palette = { name: string; hex: string; tone: string; mood: string };

const interiorPalette: Palette[] = [
  { name: "Sứ", hex: "#F4EFE6", tone: "Trắng ấm", mood: "Ấm" },
  { name: "Mộc", hex: "#E8DCC6", tone: "Be sữa", mood: "Ấm" },
  { name: "Sét", hex: "#B25C3B", tone: "Đất nung", mood: "Ấm" },
  { name: "Khói", hex: "#B7AFA3", tone: "Xám ấm", mood: "Trung tính" },
  { name: "Mây", hex: "#D9D3C7", tone: "Xám sáng", mood: "Trung tính" },
  { name: "Than", hex: "#2A2724", tone: "Đen mờ", mood: "Lạnh" },
  { name: "Rêu", hex: "#7C8A6E", tone: "Xanh trầm", mood: "Lạnh" },
  { name: "Olive", hex: "#5A6147", tone: "Xanh sâu", mood: "Lạnh" },
];

const exteriorPalette: Palette[] = [
  { name: "Sồi", hex: "#C9A26B", tone: "Vàng tự nhiên", mood: "Ấm" },
  { name: "Teak", hex: "#A6713C", tone: "Vàng ấm", mood: "Ấm" },
  { name: "Căm xe", hex: "#8B4A2B", tone: "Nâu đỏ", mood: "Ấm" },
  { name: "Hương", hex: "#6B2E22", tone: "Nâu thẫm", mood: "Trung tính" },
  { name: "Walnut", hex: "#3E2418", tone: "Óc chó", mood: "Lạnh" },
  { name: "Mun", hex: "#1F1611", tone: "Đen tự nhiên", mood: "Lạnh" },
];

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

const surfaceOptions = [
  "Bàn ăn / bàn làm việc",
  "Tủ áo / tủ bếp / kệ TV",
  "Cửa, khung cửa, lan can",
  "Sàn gỗ, bậc cầu thang",
  "Vật dụng nhỏ (ghế, kệ, đồ trang trí)",
  "Khác — sẽ mô tả thêm",
];

const paintOptions = [
  "Chưa rõ, nhờ tư vấn",
  "Sơn gỗ màu bệt (Indoor)",
  "Woodstain Finish (Nội/Ngoại thất)",
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
      "Tủ áo cũ của mẹ mình được sơn lại sắc Mộc, đặt cạnh giường nhìn rất tĩnh. Đội Lotus tư vấn rất kỹ về số lớp và lượng sơn cần đặt.",
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
    a: "Hoàn toàn được. Sơn hệ nước dễ tãi đều, không kén tay nghề. Bạn chỉ cần cọ hoặc rulo, một miếng giấy nhám P240 và khoảng một buổi chiều. Đội Lotus có thể nhắn hướng dẫn theo đúng bề mặt của bạn trước khi sơn.",
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
  {
    q: "Nếu chọn sai màu hoặc không ưng thì sao?",
    a: "Lotus cam kết tư vấn đúng hệ sơn theo bề mặt bạn mô tả. Sản phẩm còn nguyên seal được đổi trả trong 7 ngày. Với màu sắc, đội tư vấn có thể gửi swatch thật trước khi bạn quyết định.",
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
  const palette = tab === "indoor" ? interiorPalette : exteriorPalette;
  const [surface, setSurface] = useState<string>("");
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
                Gửi ảnh bề mặt qua Zalo để được tư vấn đúng dòng sơn + số kg cụ thể cho đồ gỗ của bạn.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="https://zalo.me/843966662"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-clay px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-cream transition hover:bg-clay/90 sm:px-7 sm:text-[13px]"
                >
                  Gửi ảnh bề mặt qua Zalo
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#choose"
                  className="text-[12px] font-medium uppercase tracking-[0.18em] text-walnut underline-offset-8 hover:underline sm:text-[13px]"
                >
                  Xem 2 kiểu hoàn thiện
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-1.5 border-t border-walnut/15 pt-6">
                <span className="text-[11px] uppercase tracking-[0.22em] text-walnut/60">Hệ nước ít mùi</span>
                <span className="text-[11px] text-walnut/30">/</span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-walnut/60">2 kiểu hoàn thiện</span>
                <span className="text-[11px] text-walnut/30">/</span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-walnut/60">Tư vấn qua Zalo</span>
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
              ctaText="Xem bảng màu sơn bệt"
              ctaLink="#palette"
              onCtaClick={() => setTab("indoor")}
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
              ctaText="Xem bảng màu sơn giữ vân gỗ"
              ctaLink="#palette"
              onCtaClick={() => setTab("outdoor")}
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
              Đội tư vấn sẽ tính chính xác lượng sơn theo diện tích thực tế của bạn.
            </p>
          </header>

          <div className="mt-14 grid grid-cols-2 gap-y-12 border-t border-walnut/20 pt-2 sm:grid-cols-4 sm:divide-x sm:divide-walnut/15">
            <SpecCell k="Quy cách" v="Hũ 1kg" sub="Đặt combo nhiều hũ" />
            <SpecCell k="Độ phủ" v="8–10 m²" sub="Mỗi lớp · bề mặt phẳng" />
            <SpecCell k="Số lớp" v="2 lớp" sub="3 lớp cho sàn & ngoại thất" />
            <SpecCell k="Khô bề mặt" v="30 phút" sub="Lớp 2 sau 2 giờ" />
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-walnut/20 pt-8 sm:flex-row sm:items-center">
            <p className="text-sm text-walnut/75">
              Cần tính chính xác lượng sơn cho diện tích nhà bạn?
            </p>
            <a
              href="#advise"
              className="inline-flex items-center gap-3 border border-charcoal px-5 py-3 text-[12px] uppercase tracking-[0.2em] text-charcoal transition hover:bg-charcoal hover:text-cream"
            >
              Nhận tư vấn lượng sơn
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
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
                Chọn bề mặt để xem gợi ý dòng sơn phù hợp. Gửi ảnh qua Zalo để được tư vấn chi tiết.
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

              <div className="mt-8 pt-6 border-t border-walnut/20">
                <a
                  href="https://zalo.me/843966662"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.18em] text-charcoal transition hover:text-clay sm:text-[13px]"
                >
                  Gửi ảnh bề mặt này qua Zalo để xem kỹ hơn
                  <ArrowRight className="h-4 w-4" />
                </a>
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
              <a
                href="#advise"
                className="mt-8 inline-flex items-center gap-3 border-b border-cream/60 pb-1 text-[12px] uppercase tracking-[0.2em] hover:text-clay hover:border-clay sm:text-[13px]"
              >
                Nhận tư vấn theo bề mặt gỗ
                <ArrowRight className="h-4 w-4" />
              </a>
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

      {/* PALETTE — BẢNG MÀU THEO MOOD */}
      <section id="palette" className="border-t border-walnut/10">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-8">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">08 — Bảng màu</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
                Chọn màu phù hợp
                <br />
                với không gian của bạn.
              </h2>
            </div>
            <div className="inline-flex border border-walnut/25 text-[11px] uppercase tracking-[0.2em] sm:text-[12px]">
              <button
                onClick={() => setTab("indoor")}
                className={`px-4 py-3 transition sm:px-5 ${tab === "indoor" ? "bg-charcoal text-cream" : "text-walnut hover:bg-sand/60"}`}
              >
                Màu Bệt
              </button>
              <button
                onClick={() => setTab("outdoor")}
                className={`px-4 py-3 transition sm:px-5 ${tab === "outdoor" ? "bg-charcoal text-cream" : "text-walnut hover:bg-sand/60"}`}
              >
                Màu Giữ Vân Gỗ
              </button>
            </div>
          </div>

          <div className="mt-12 space-y-12">
            {["Ấm", "Trung tính", "Lạnh"].map((mood) => {
              const moodColors = palette.filter((c) => c.mood === mood);
              if (moodColors.length === 0) return null;
              return (
                <div key={mood}>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-walnut/45 mb-6">{mood}</div>
                  <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4">
                    {moodColors.map((c) => (
                      <figure key={c.name} className="group">
                        <div
                          className="aspect-square w-full transition-transform duration-300 group-hover:scale-[1.02]"
                          style={{ backgroundColor: c.hex }}
                        />
                        <figcaption className="mt-4 flex items-baseline justify-between border-t border-walnut/20 pt-3">
                          <div>
                            <div className="font-serif text-lg text-charcoal">{c.name}</div>
                            <div className="text-[10px] uppercase tracking-[0.2em] text-walnut/60 sm:text-[11px]">{c.tone}</div>
                          </div>
                          <span className="text-[10px] text-walnut/50 sm:text-[11px]">{c.hex}</span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
              Lotus đồng hành từ lúc bạn chưa biết cần mua gì — đến khi hoàn thiện xong bề mặt cuối cùng.
            </p>
            <p className="mt-6 text-[15px] leading-[1.75] text-walnut/65">
              Đội kỹ thuật tư vấn miễn phí qua Zalo — xác nhận đúng dòng sơn theo bề mặt thực tế, không tư vấn dư, không bán nhầm. Giao toàn quốc, thanh toán khi nhận, đổi trả trong 7 ngày nếu sản phẩm còn nguyên seal.
            </p>
            <a
              href="https://zalo.me/843966662"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.18em] text-charcoal transition hover:text-clay sm:text-[13px]"
            >
              Nhắn Zalo để hỏi trước khi mua
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
                Chưa thấy câu trả lời cho trường hợp của bạn? Gửi câu hỏi qua form
                bên dưới — Lotus sẽ phản hồi trong vòng 24 giờ.
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

      {/* FORM — TƯVAN & ĐẶT HÀNG */}
      <section id="advise" className="border-t border-walnut/10 bg-charcoal text-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
          <div className="grid grid-cols-12 gap-x-6 gap-y-14">
            <div className="col-span-12 md:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.3em] text-cream/45">12 — Tư vấn & đặt hàng</span>
              <h2 className="mt-5 font-serif text-[34px] leading-tight sm:text-5xl">
                Để Lotus gợi ý
                <br />
                combo phù hợp.
              </h2>
              <p className="mt-7 max-w-sm text-[15px] leading-[1.75] text-cream/58">
                Bạn chỉ cần điền tên và bề mặt dự định sơn. Đội ngũ Lotus sẽ liên hệ để đề xuất dòng sơn và lượng cần dùng phù hợp nhất cho không gian của bạn.
              </p>
              <div className="mt-10">
                <a
                  href="https://zalo.me/843966662"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border-b border-cream/30 pb-1 text-[12px] font-medium uppercase tracking-[0.18em] text-cream/70 transition hover:text-cream hover:border-cream/60"
                >
                  Hoặc nhắn ảnh bề mặt qua Zalo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Cảm ơn bạn — Lotus sẽ liên hệ trong vòng 24 giờ.");
              }}
              className="col-span-12 md:col-span-7 md:border-l md:border-cream/12 md:pl-14 space-y-7"
            >
              <Field label="Họ và tên">
                <Input
                  required
                  className="h-[52px] rounded-none border-0 border-b border-cream/25 bg-transparent px-0 text-[15px] text-cream placeholder:text-cream/30 focus-visible:border-clay focus-visible:ring-0"
                />
              </Field>
              <Field label="Số điện thoại / Zalo">
                <Input
                  required
                  type="tel"
                  className="h-[52px] rounded-none border-0 border-b border-cream/25 bg-transparent px-0 text-[15px] text-cream placeholder:text-cream/30 focus-visible:border-clay focus-visible:ring-0"
                />
              </Field>
              <Field label="Bề mặt dự định sơn">
                <Select value={surface} onValueChange={setSurface} required>
                  <SelectTrigger className="h-[52px] rounded-none border-0 border-b border-cream/25 bg-transparent px-0 text-[15px] text-cream focus:border-clay focus:ring-0 [&>span]:text-cream data-[placeholder]:[&>span]:text-cream/30">
                    <SelectValue placeholder="Chọn loại bề mặt" />
                  </SelectTrigger>
                  <SelectContent>
                    {surfaceOptions.map((o) => (
                      <SelectItem key={o} value={o}>{o}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Dòng sơn dự kiến">
                <Select required>
                  <SelectTrigger className="h-[52px] rounded-none border-0 border-b border-cream/25 bg-transparent px-0 text-[15px] text-cream focus:border-clay focus:ring-0 [&>span]:text-cream data-[placeholder]:[&>span]:text-cream/30">
                    <SelectValue placeholder="Chọn dòng sơn, hoặc ‘Nhờ tư vấn’" />
                  </SelectTrigger>
                  <SelectContent>
                    {paintOptions.map((o) => (
                      <SelectItem key={o} value={o}>{o}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>

              <div className="pt-3">
                <Button
                  type="submit"
                  className="h-[54px] w-full rounded-none bg-clay text-[12px] font-medium uppercase tracking-[0.22em] text-cream transition hover:bg-clay/90 sm:text-[13px]"
                >
                  Gửi thông tin — Lotus liên hệ trong 24h
                </Button>
                <p className="mt-4 text-[11px] tracking-[0.15em] text-cream/30">
                  Không spam. Không chia sẻ thông tin.
                </p>
              </div>
            </form>
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
          <a href="#advise" className="hover:text-clay">Tư vấn</a>
        </nav>
        <a
          href="#advise"
          className="inline-flex items-center gap-2 border border-charcoal px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] text-charcoal transition hover:bg-charcoal hover:text-cream sm:px-5 sm:text-[11px]"
        >
          Chọn loại sơn
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