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
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Truck,
  MessageCircle,
  Quote,
} from "lucide-react";

import heroInterior from "@/assets/hero-interior.jpg";
import woodGrain from "@/assets/wood-grain.jpg";
import diyHands from "@/assets/diy-hands.jpg";
import exteriorDoor from "@/assets/exterior-door.jpg";
import beforeAfter from "@/assets/before-after.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

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

type Palette = { name: string; hex: string; tone: string };

const interiorPalette: Palette[] = [
  { name: "Sứ", hex: "#F4EFE6", tone: "Trắng ấm" },
  { name: "Mộc", hex: "#E8DCC6", tone: "Be sữa" },
  { name: "Khói", hex: "#B7AFA3", tone: "Xám ấm" },
  { name: "Mây", hex: "#D9D3C7", tone: "Xám sáng" },
  { name: "Rêu", hex: "#7C8A6E", tone: "Xanh trầm" },
  { name: "Olive", hex: "#5A6147", tone: "Xanh sâu" },
  { name: "Sét", hex: "#B25C3B", tone: "Đất nung" },
  { name: "Than", hex: "#2A2724", tone: "Đen mờ" },
];

const exteriorPalette: Palette[] = [
  { name: "Sồi", hex: "#C9A26B", tone: "Vàng tự nhiên" },
  { name: "Teak", hex: "#A6713C", tone: "Vàng ấm" },
  { name: "Căm xe", hex: "#8B4A2B", tone: "Nâu đỏ" },
  { name: "Hương", hex: "#6B2E22", tone: "Nâu thẫm" },
  { name: "Walnut", hex: "#3E2418", tone: "Óc chó" },
  { name: "Mun", hex: "#1F1611", tone: "Đen tự nhiên" },
];

const surfaces = [
  { label: "Bàn ghế", desc: "Bàn ăn, bàn cafe, ghế gỗ." },
  { label: "Tủ kệ", desc: "Tủ áo, kệ sách, tủ bếp." },
  { label: "Cửa gỗ", desc: "Cửa chính, cửa phòng, cửa thông gió." },
  { label: "Sàn gỗ", desc: "Sàn tự nhiên, sàn engineered." },
  { label: "Ngoại thất", desc: "Lam gỗ, hàng rào, đồ sân vườn." },
  { label: "Đồ gỗ cũ", desc: "Refurbish, làm mới đồ thanh lý." },
];

const surfaceOptions = [
  "Bàn / Ghế gỗ",
  "Tủ áo / Kệ sách / Tủ bếp",
  "Cửa gỗ",
  "Sàn gỗ",
  "Lam gỗ / Đồ ngoại thất",
  "Đồ gỗ cũ — refurbish",
  "Khác — sẽ mô tả thêm",
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

function Index() {
  const [tab, setTab] = useState<"indoor" | "outdoor">("indoor");
  const palette = tab === "indoor" ? interiorPalette : exteriorPalette;
  const [surface, setSurface] = useState<string>("");

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans antialiased">
      <Header />

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-[1400px] px-5 pt-10 pb-16 md:px-12 md:pt-16 md:pb-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col">
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">
                Lotus · Wood Finishing Studio
              </span>
              <h1 className="mt-6 font-serif text-[38px] leading-[1.05] tracking-tight text-charcoal sm:text-[44px] md:text-[60px] lg:text-[72px]">
                Làm mới đồ gỗ
                <br />
                <em className="not-italic text-clay">tại nhà</em>, theo cách
                <br />
                sạch hơn, đẹp hơn.
              </h1>
              <p className="mt-7 max-w-md text-[15px] leading-relaxed text-walnut/80">
                Sơn gỗ hệ nước Lotus — hoàn thiện bề mặt gỗ trong không gian sống của bạn:
                nhẹ mùi, an toàn cho gia đình, đủ tinh tế cho một ngôi nhà hiện đại.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#choose"
                  className="group inline-flex items-center gap-3 bg-charcoal px-6 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-cream transition hover:bg-clay sm:px-7 sm:text-[13px]"
                >
                  Chọn loại sơn phù hợp
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#palette"
                  className="text-[12px] font-medium uppercase tracking-[0.18em] text-walnut underline-offset-8 hover:underline sm:text-[13px]"
                >
                  Xem bảng màu
                </a>
              </div>

              <dl className="mt-14 grid grid-cols-3 gap-5 border-t border-walnut/15 pt-8 text-walnut">
                <Stat k="01" v="Hệ nước Acrylic & PU hybrid" />
                <Stat k="02" v="Khô bề mặt sau 30 phút" />
                <Stat k="03" v="Tự thi công không cần thợ" />
              </dl>
            </div>

            <figure className="col-span-12 md:col-span-6 lg:col-span-7 relative">
              <img
                src={heroInterior}
                alt="Tủ gỗ hoàn thiện màu kem trong không gian nội thất ấm"
                className="aspect-[4/5] md:aspect-[5/6] w-full object-cover"
                width={1600}
                height={1200}
              />
              <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[10px] uppercase tracking-[0.22em] text-cream mix-blend-difference sm:text-[11px]">
                <span>Lotus Wood Paint · sắc Mộc</span>
                <span>— 001</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* TWO FINISHES */}
      <section id="choose" className="border-t border-walnut/10 bg-sand/40">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
          <header className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">02 — Hai kiểu hoàn thiện</span>
            <h2 className="mt-5 font-serif text-[34px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
              Hai dòng sản phẩm.
              <br />
              Hai cảm xúc thẩm mỹ.
            </h2>
          </header>

          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <FinishCard
              index="i."
              eyebrow="Lotus Wood Paint — Indoor"
              title="Màu bệt hiện đại"
              body="Sơn phủ màu bệt 1 thành phần hệ nước. Màng sơn bóng nhẹ, mịn như sứ, độ cứng cao và hạn chế trầy xước — phủ trọn bề mặt gỗ nội thất, MDF, plywood, hay làm mới những món đồ gỗ cũ."
              img={diyHands}
              tags={["Nội thất", "MDF / Plywood", "Đồ gỗ cũ"]}
              price="199.000đ"
              unit="/ hũ 1kg"
            />
            <FinishCard
              index="ii."
              eyebrow="Lotus Woodstain Finish — Ngoại thất & Sàn"
              title="Giữ vân tự nhiên"
              body="Sơn 2-trong-1 vừa tạo màu vừa hoàn thiện, công nghệ polyurethane hybrid hệ nước. Thấm sâu, tôn trọn vân gỗ, dẻo dai và kháng ẩm — bền đẹp cho cửa, sàn và đồ ngoại thất."
              img={exteriorDoor}
              tags={["Cửa & Sàn", "Ngoại thất", "Kháng UV & nước"]}
              price="259.000đ"
              unit="/ hũ 1kg"
            />
          </div>
        </div>
      </section>

      {/* SPECS — Quy cách & thông số */}
      <section className="border-t border-walnut/10">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-28">
          <header className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6">
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">03 — Quy cách</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
                Mọi con số bạn
                <br />
                cần biết trước khi đặt.
              </h2>
            </div>
            <p className="col-span-12 md:col-span-6 md:pt-12 text-[15px] leading-relaxed text-walnut/80">
              Thông số tham khảo cho người dùng tự thi công — đã được Lotus kiểm thử
              trên các bề mặt gỗ phổ biến tại Việt Nam. Đội tư vấn sẽ tính chính xác
              lượng sơn theo diện tích thực tế của bạn.
            </p>
          </header>

          <div className="mt-14 grid grid-cols-2 gap-y-10 border-t border-walnut/20 sm:grid-cols-4 sm:divide-x sm:divide-walnut/20">
            <SpecCell k="Quy cách" v="Hũ 1kg" sub="Có thể đặt combo nhiều hũ" />
            <SpecCell k="Độ phủ tham khảo" v="8–10 m²/kg" sub="Mỗi lớp · bề mặt phẳng" />
            <SpecCell k="Số lớp khuyến nghị" v="2 lớp" sub="3 lớp cho sàn & ngoại thất" />
            <SpecCell k="Thời gian khô" v="30 phút" sub="Khô bề mặt · sơn lớp 2 sau 2h" />
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

      {/* SURFACES — Bạn đang sơn gì */}
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
                Chọn bề mặt — chúng tôi sẽ gợi ý dòng sơn, độ phủ và cách thi công
                phù hợp nhất cho không gian của bạn.
              </p>
            </div>

            <ul className="col-span-12 lg:col-span-8 grid grid-cols-1 divide-y divide-walnut/15 border-y border-walnut/15 sm:grid-cols-2 sm:divide-y-0 sm:[&>li]:border-b sm:[&>li]:border-walnut/15">
              {surfaces.map((s) => (
                <li key={s.label}>
                  <a
                    href="#advise"
                    className="group flex items-center justify-between gap-6 px-1 py-6 transition hover:bg-cream/80 sm:px-2 sm:py-7"
                  >
                    <div>
                      <div className="font-serif text-xl text-charcoal sm:text-2xl">{s.label}</div>
                      <div className="mt-1 text-sm text-walnut/70">{s.desc}</div>
                    </div>
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-walnut/30 text-walnut transition group-hover:bg-charcoal group-hover:text-cream group-hover:border-charcoal">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="border-t border-walnut/10 bg-walnut text-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 md:col-span-5">
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
            <div className="col-span-12 md:col-span-7">
              <img
                src={beforeAfter}
                alt="Ghế gỗ trước và sau khi sơn lại bằng Lotus Wood Paint màu rêu"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
                width={1600}
                height={1000}
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-t border-walnut/10">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
          <header className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6">
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">06 — Vì sao hệ nước</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
                Sạch hơn cho ngôi nhà.
                <br />
                Dễ hơn cho đôi tay.
              </h2>
            </div>
            <p className="col-span-12 md:col-span-6 md:pt-12 text-[15px] leading-relaxed text-walnut/80">
              Lotus được pha chế gốc nước — không dung môi nặng, không mùi gắt,
              không cần phòng thi công riêng. Bạn có thể sơn trong căn hộ, ở cạnh con nhỏ,
              và quay lại sinh hoạt bình thường chỉ sau vài giờ.
            </p>
          </header>

          <ul className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Hệ nước nhẹ mùi", d: "Không xăng thơm, không dung môi nặng. An toàn cho phòng ngủ và phòng trẻ." },
              { n: "02", t: "Khô nhanh trong giờ", d: "Khô bề mặt 30 phút, sơn lớp tiếp theo sau 2 giờ. Một buổi chiều là xong." },
              { n: "03", t: "Rửa bằng nước thường", d: "Cọ, khay, tay áo — sạch chỉ với vòi nước. Không cần dung môi." },
              { n: "04", t: "Bền cho đời sống thật", d: "Kháng ẩm, kháng trầy nhẹ, chịu được lau chùi hằng ngày trong gia đình." },
            ].map((b) => (
              <li key={b.n} className="border-t border-walnut/20 pt-6">
                <div className="text-[11px] uppercase tracking-[0.3em] text-clay">{b.n}</div>
                <h3 className="mt-4 font-serif text-xl text-charcoal sm:text-2xl">{b.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-walnut/75">{b.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-walnut/10 bg-sand/40">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">07 — Thi công</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
                Ba bước,
                <br />
                một buổi chiều.
              </h2>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-walnut/80">
                Quy trình tinh giản — không cần thợ, không cần máy chuyên dụng.
                Chỉ cọ, lăn và một chút kiên nhẫn.
              </p>
            </div>

            <ol className="col-span-12 md:col-span-7 space-y-8">
              {[
                { n: "I.", t: "Làm sạch & chà nhám nhẹ", d: "Lau bụi, dầu mỡ. Chà nhám P240 cho bề mặt mịn và bám sơn tốt." },
                { n: "II.", t: "Sơn lớp đầu, chờ 2 giờ", d: "Pha loãng 5–10% nước, sơn mỏng đều bằng cọ hoặc lăn. Để khô trong 2 giờ." },
                { n: "III.", t: "Phủ lớp hoàn thiện", d: "Sơn lớp thứ hai để màng sơn đều màu, mịn và đạt độ bền tối ưu." },
              ].map((s) => (
                <li key={s.n} className="grid grid-cols-12 items-baseline gap-4 border-t border-walnut/15 pt-6">
                  <span className="col-span-2 font-serif text-2xl text-clay sm:text-3xl">{s.n}</span>
                  <div className="col-span-10">
                    <h3 className="font-serif text-xl text-charcoal sm:text-2xl">{s.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-walnut/75">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* PALETTE */}
      <section id="palette" className="border-t border-walnut/10">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-8">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">08 — Bảng màu</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
                Một bảng màu
                <br />
                cho ngôi nhà tĩnh tại.
              </h2>
            </div>
            <div className="inline-flex border border-walnut/25 text-[11px] uppercase tracking-[0.2em] sm:text-[12px]">
              <button
                onClick={() => setTab("indoor")}
                className={`px-4 py-3 transition sm:px-5 ${tab === "indoor" ? "bg-charcoal text-cream" : "text-walnut hover:bg-sand/60"}`}
              >
                Indoor
              </button>
              <button
                onClick={() => setTab("outdoor")}
                className={`px-4 py-3 transition sm:px-5 ${tab === "outdoor" ? "bg-charcoal text-cream" : "text-walnut hover:bg-sand/60"}`}
              >
                Outdoor
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4">
            {palette.map((c) => (
              <figure key={c.name} className="group">
                <div
                  className="aspect-[4/5] w-full transition group-hover:scale-[1.01]"
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
      </section>

      {/* PROJECTS / TRUST GALLERY */}
      <section className="border-t border-walnut/10 bg-sand/40">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
          <header className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">09 — Công trình thật</span>
              <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
                Đã có mặt
                <br />
                trong những căn nhà.
              </h2>
            </div>
            <p className="max-w-sm text-[14px] leading-relaxed text-walnut/75">
              Một vài không gian sống đã được hoàn thiện cùng Lotus —
              chia sẻ bởi chính khách hàng của chúng tôi.
            </p>
          </header>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {projects.map((p) => (
              <figure key={p.label} className="group">
                <div className="overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.label}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    width={1000}
                    height={1250}
                  />
                </div>
                <figcaption className="mt-4 border-t border-walnut/20 pt-3">
                  <div className="font-serif text-lg text-charcoal">{p.label}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-walnut/60">{p.place}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-walnut/10">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
          <header className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">10 — Cảm nhận</span>
            <h2 className="mt-5 font-serif text-[32px] leading-tight text-charcoal sm:text-4xl md:text-5xl">
              Lời kể từ
              <br />
              chính ngôi nhà của họ.
            </h2>
          </header>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="flex flex-col border border-walnut/20 bg-cream p-7 sm:p-8"
              >
                <Quote className="h-5 w-5 text-clay" strokeWidth={1.5} />
                <p className="mt-5 flex-1 font-serif text-[19px] leading-[1.45] text-charcoal sm:text-[20px]">
                  {t.quote}
                </p>
                <footer className="mt-7 border-t border-walnut/15 pt-4">
                  <div className="text-sm font-medium text-charcoal">{t.name}</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-walnut/60">
                    {t.place} · {t.product}
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / COMMITMENTS */}
      <section className="border-t border-walnut/10 bg-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-12 md:py-24">
          <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <Commit
              k="Tư vấn đúng hệ sơn"
              v="Đội Lotus xác nhận đúng dòng sơn theo bề mặt thực tế của bạn — không tư vấn dư, không bán nhầm."
              icon={<ShieldCheck className="h-5 w-5" strokeWidth={1.5} />}
            />
            <Commit
              k="Đổi trả trong 7 ngày"
              v="Sản phẩm còn nguyên seal được đổi hoặc trả lại trong 7 ngày kể từ ngày nhận hàng."
              icon={<ShieldCheck className="h-5 w-5" strokeWidth={1.5} />}
            />
            <Commit
              k="Giao toàn quốc · COD"
              v="Nội thành 1–2 ngày, các tỉnh 2–5 ngày. Miễn phí vận chuyển từ 2 hũ. Thanh toán khi nhận."
              icon={<Truck className="h-5 w-5" strokeWidth={1.5} />}
            />
            <Commit
              k="Hỗ trợ trong khi thi công"
              v="Có vướng mắc khi tự sơn? Nhắn Lotus qua Zalo, đội kỹ thuật trả lời trong giờ làm việc."
              icon={<MessageCircle className="h-5 w-5" strokeWidth={1.5} />}
            />
          </ul>
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

      {/* CTA / ADVISE */}
      <section id="advise" className="border-t border-walnut/10 bg-charcoal text-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-32">
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 md:col-span-6">
              <span className="text-[11px] uppercase tracking-[0.3em] text-cream/60">12 — Tư vấn</span>
              <h2 className="mt-5 font-serif text-[36px] leading-tight sm:text-5xl md:text-6xl">
                Để Lotus
                <br />
                gợi ý cho bạn.
              </h2>
              <p className="mt-8 max-w-md text-[15px] leading-relaxed text-cream/75">
                Gửi cho chúng tôi bề mặt gỗ bạn đang muốn làm mới — Lotus sẽ tư vấn
                dòng sơn, sắc màu, dung tích và cách thi công phù hợp, hoàn toàn miễn phí.
              </p>
              <ul className="mt-12 space-y-5 text-sm text-cream/75">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 text-clay" strokeWidth={1.5} />
                  <span>Cam kết tư vấn đúng hệ sơn theo bề mặt — không bán dư.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Truck className="mt-0.5 h-4 w-4 text-clay" strokeWidth={1.5} />
                  <span>Giao toàn quốc · COD · Miễn phí ship từ 2 hũ.</span>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-4 w-4 text-clay" strokeWidth={1.5} />
                  <span>Phản hồi trong 24 giờ làm việc, mỗi ngày 8:00 – 20:00.</span>
                </li>
              </ul>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Cảm ơn bạn — Lotus sẽ liên hệ trong vòng 24 giờ.");
              }}
              className="col-span-12 md:col-span-6 md:pl-10 space-y-6"
            >
              <Field label="Họ và tên">
                <Input
                  required
                  className="h-12 rounded-none border-0 border-b border-cream/30 bg-transparent px-0 text-base text-cream placeholder:text-cream/40 focus-visible:border-clay focus-visible:ring-0"
                />
              </Field>
              <Field label="Số điện thoại">
                <Input
                  required
                  type="tel"
                  className="h-12 rounded-none border-0 border-b border-cream/30 bg-transparent px-0 text-base text-cream placeholder:text-cream/40 focus-visible:border-clay focus-visible:ring-0"
                />
              </Field>
              <Field label="Loại bề mặt cần sơn">
                <Select value={surface} onValueChange={setSurface} required>
                  <SelectTrigger className="h-12 rounded-none border-0 border-b border-cream/30 bg-transparent px-0 text-base text-cream focus:border-clay focus:ring-0 [&>span]:text-cream data-[placeholder]:[&>span]:text-cream/40">
                    <SelectValue placeholder="Chọn loại bề mặt" />
                  </SelectTrigger>
                  <SelectContent>
                    {surfaceOptions.map((o) => (
                      <SelectItem key={o} value={o}>{o}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Mô tả thêm (tuỳ chọn)">
                <Textarea
                  rows={3}
                  className="rounded-none border-0 border-b border-cream/30 bg-transparent px-0 text-base text-cream placeholder:text-cream/40 focus-visible:border-clay focus-visible:ring-0"
                  placeholder="Diện tích, màu mong muốn, thời gian thi công…"
                />
              </Field>

              <Button
                type="submit"
                className="mt-4 h-14 w-full rounded-none bg-clay text-[12px] font-medium uppercase tracking-[0.2em] text-cream hover:bg-clay/90 sm:text-[13px]"
              >
                Nhận tư vấn theo bề mặt gỗ
              </Button>
              <p className="text-[11px] uppercase tracking-[0.18em] text-cream/50">
                Lotus sẽ phản hồi trong vòng 24 giờ làm việc.
              </p>
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
        <a href="#" className="font-serif text-2xl tracking-tight text-charcoal">
          Lotus<span className="text-clay">.</span>
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
            <div className="font-serif text-3xl text-charcoal">Lotus<span className="text-clay">.</span></div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-walnut/70">
              Sơn gỗ hệ nước cho không gian sống tinh tế.
              Hoàn thiện đẹp, an toàn — dành cho gia đình hiện đại.
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
              <li><a href="#advise" className="hover:text-clay">Gửi yêu cầu tư vấn</a></li>
              <li>Giờ làm việc · 8:00 – 20:00</li>
              <li>Giao hàng toàn quốc</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-walnut/15 pt-6 text-[11px] uppercase tracking-[0.2em] text-walnut/60 md:flex-row">
          <span>© {new Date().getFullYear()} Lotus Paint Studio</span>
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
    <div className="sm:px-6 sm:first:pl-0 sm:last:pr-0">
      <div className="text-[11px] uppercase tracking-[0.25em] text-clay">{k}</div>
      <div className="mt-3 font-serif text-2xl text-charcoal sm:text-3xl">{v}</div>
      <div className="mt-1 text-[12px] text-walnut/65">{sub}</div>
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.22em] text-cream/60">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}