import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import heroInterior from "@/assets/hero-interior.jpg";
import woodGrain from "@/assets/wood-grain.jpg";
import diyHands from "@/assets/diy-hands.jpg";
import exteriorDoor from "@/assets/exterior-door.jpg";
import beforeAfter from "@/assets/before-after.jpg";

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

function Index() {
  const [tab, setTab] = useState<"indoor" | "outdoor">("indoor");
  const palette = tab === "indoor" ? interiorPalette : exteriorPalette;

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans antialiased">
      <Header />

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-[1400px] px-6 pt-10 pb-16 md:px-12 md:pt-16 md:pb-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col">
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">
                Lotus · Wood Finishing Studio
              </span>
              <h1 className="mt-8 font-serif text-[44px] leading-[1.05] tracking-tight text-charcoal md:text-[64px] lg:text-[76px]">
                Làm mới đồ gỗ
                <br />
                <em className="not-italic text-clay">tại nhà</em>, theo cách
                <br />
                sạch hơn, đẹp hơn.
              </h1>
              <p className="mt-8 max-w-md text-[15px] leading-relaxed text-walnut/80">
                Sơn gỗ hệ nước Lotus — hoàn thiện bề mặt gỗ trong không gian sống của bạn:
                nhẹ mùi, an toàn cho gia đình, đủ tinh tế cho một ngôi nhà hiện đại.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#choose"
                  className="group inline-flex items-center gap-3 bg-charcoal px-7 py-4 text-[13px] font-medium uppercase tracking-[0.18em] text-cream transition hover:bg-clay"
                >
                  Chọn loại sơn phù hợp
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#palette"
                  className="text-[13px] font-medium uppercase tracking-[0.18em] text-walnut underline-offset-8 hover:underline"
                >
                  Xem bảng màu
                </a>
              </div>

              <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-walnut/15 pt-8 text-walnut">
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
              <figcaption className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[11px] uppercase tracking-[0.22em] text-cream mix-blend-difference">
                <span>Lotus Wood Paint · sắc Mộc</span>
                <span>—  001</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* TWO FINISHES */}
      <section id="choose" className="border-t border-walnut/10 bg-sand/40">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-32">
          <header className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">02 — Hai kiểu hoàn thiện</span>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
              Hai dòng sản phẩm.
              <br />
              Hai cảm xúc thẩm mỹ.
            </h2>
          </header>

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <FinishCard
              index="i."
              eyebrow="Lotus Wood Paint — Indoor"
              title="Màu bệt hiện đại"
              body="Sơn phủ màu bệt 1 thành phần hệ nước. Màng sơn bóng nhẹ, mịn như sứ, độ cứng cao và hạn chế trầy xước — phủ trọn bề mặt gỗ nội thất, MDF, plywood, hay làm mới những món đồ gỗ cũ."
              img={diyHands}
              tags={["Nội thất", "MDF / Plywood", "Đồ gỗ cũ"]}
            />
            <FinishCard
              index="ii."
              eyebrow="Lotus Woodstain Finish — Ngoại thất & Sàn"
              title="Giữ vân tự nhiên"
              body="Sơn 2-trong-1 vừa tạo màu vừa hoàn thiện, công nghệ polyurethane hybrid hệ nước. Thấm sâu, tôn trọn vân gỗ, dẻo dai và kháng ẩm — bền đẹp cho cửa, sàn và đồ ngoại thất."
              img={exteriorDoor}
              tags={["Cửa & Sàn", "Ngoại thất", "Kháng UV & nước"]}
            />
          </div>
        </div>
      </section>

      {/* SURFACES — Bạn đang sơn gì */}
      <section className="border-t border-walnut/10">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">03 — Bề mặt</span>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
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
              {surfaces.map((s, i) => (
                <li key={s.label}>
                  <a
                    href="#advise"
                    className="group flex items-center justify-between gap-6 px-2 py-7 transition hover:bg-sand/50"
                  >
                    <div>
                      <div className="font-serif text-2xl text-charcoal">{s.label}</div>
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
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-32">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 md:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.3em] text-cream/60">04 — Trước & Sau</span>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
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
                className="mt-10 inline-flex items-center gap-3 border-b border-cream/60 pb-1 text-[13px] uppercase tracking-[0.2em] hover:text-clay hover:border-clay"
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
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-32">
          <header className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6">
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">05 — Vì sao hệ nước</span>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
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

          <ul className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Hệ nước nhẹ mùi", d: "Không xăng thơm, không dung môi nặng. An toàn cho phòng ngủ và phòng trẻ." },
              { n: "02", t: "Khô nhanh trong giờ", d: "Khô bề mặt 30 phút, sơn lớp tiếp theo sau 2 giờ. Một buổi chiều là xong." },
              { n: "03", t: "Rửa bằng nước thường", d: "Cọ, khay, tay áo — sạch chỉ với vòi nước. Không cần dung môi." },
              { n: "04", t: "Bền cho đời sống thật", d: "Kháng ẩm, kháng trầy nhẹ, chịu được lau chùi hằng ngày trong gia đình." },
            ].map((b) => (
              <li key={b.n} className="border-t border-walnut/20 pt-6">
                <div className="text-[11px] uppercase tracking-[0.3em] text-clay">{b.n}</div>
                <h3 className="mt-4 font-serif text-2xl text-charcoal">{b.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-walnut/75">{b.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-walnut/10 bg-sand/40">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">06 — Thi công</span>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
                Ba bước,
                <br />
                một buổi chiều.
              </h2>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-walnut/80">
                Quy trình tinh giản — không cần thợ, không cần máy chuyên dụng.
                Chỉ cọ, lăn và một chút kiên nhẫn.
              </p>
            </div>

            <ol className="col-span-12 md:col-span-7 space-y-10">
              {[
                { n: "I.", t: "Làm sạch & chà nhám nhẹ", d: "Lau bụi, dầu mỡ. Chà nhám P240 cho bề mặt mịn và bám sơn tốt." },
                { n: "II.", t: "Sơn lớp đầu, chờ 2 giờ", d: "Pha loãng 5–10% nước, sơn mỏng đều bằng cọ hoặc lăn. Để khô trong 2 giờ." },
                { n: "III.", t: "Phủ lớp hoàn thiện", d: "Sơn lớp thứ hai để màng sơn đều màu, mịn và đạt độ bền tối ưu." },
              ].map((s) => (
                <li key={s.n} className="grid grid-cols-12 items-baseline gap-4 border-t border-walnut/15 pt-6">
                  <span className="col-span-2 font-serif text-3xl text-clay">{s.n}</span>
                  <div className="col-span-10">
                    <h3 className="font-serif text-2xl text-charcoal">{s.t}</h3>
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
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-32">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">07 — Bảng màu</span>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
                Một bảng màu
                <br />
                cho ngôi nhà tĩnh tại.
              </h2>
            </div>
            <div className="inline-flex border border-walnut/25 text-[12px] uppercase tracking-[0.2em]">
              <button
                onClick={() => setTab("indoor")}
                className={`px-5 py-3 transition ${tab === "indoor" ? "bg-charcoal text-cream" : "text-walnut hover:bg-sand/60"}`}
              >
                Indoor
              </button>
              <button
                onClick={() => setTab("outdoor")}
                className={`px-5 py-3 transition ${tab === "outdoor" ? "bg-charcoal text-cream" : "text-walnut hover:bg-sand/60"}`}
              >
                Outdoor
              </button>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {palette.map((c) => (
              <figure key={c.name} className="group">
                <div
                  className="aspect-[4/5] w-full transition group-hover:scale-[1.01]"
                  style={{ backgroundColor: c.hex }}
                />
                <figcaption className="mt-4 flex items-baseline justify-between border-t border-walnut/20 pt-3">
                  <div>
                    <div className="font-serif text-lg text-charcoal">{c.name}</div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-walnut/60">{c.tone}</div>
                  </div>
                  <span className="text-[11px] text-walnut/50">{c.hex}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="border-t border-walnut/10 bg-cream">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-32">
          <div className="grid grid-cols-12 gap-6">
            <figure className="col-span-12 md:col-span-5">
              <img
                src={woodGrain}
                alt="Cận cảnh vân gỗ tự nhiên được hoàn thiện bằng Lotus Woodstain"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
                width={1400}
                height={1000}
              />
            </figure>
            <blockquote className="col-span-12 md:col-span-7 md:pl-10 flex flex-col justify-center">
              <span className="text-[11px] uppercase tracking-[0.3em] text-walnut/70">08 — Cảm nhận</span>
              <p className="mt-6 font-serif text-3xl leading-[1.3] text-charcoal md:text-4xl">
                “Mình sơn lại bộ bàn ăn ngay trong căn hộ chung cư. Không mùi xăng,
                không phải dời con sang nhà ngoại. Sáng hôm sau cả nhà đã ngồi ăn
                bình thường — chiếc bàn nhìn như mới hoàn toàn.”
              </p>
              <footer className="mt-8 text-sm text-walnut/70">
                Linh — Thảo Điền, TP. HCM · Lotus Wood Paint sắc Khói
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA / ADVISE */}
      <section id="advise" className="border-t border-walnut/10 bg-charcoal text-cream">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-32">
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 md:col-span-6">
              <span className="text-[11px] uppercase tracking-[0.3em] text-cream/60">09 — Tư vấn</span>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
                Để Lotus
                <br />
                gợi ý cho bạn.
              </h2>
              <p className="mt-8 max-w-md text-[15px] leading-relaxed text-cream/75">
                Gửi cho chúng tôi bề mặt gỗ bạn đang muốn làm mới — Lotus sẽ tư vấn
                dòng sơn, sắc màu, dung tích và cách thi công phù hợp, hoàn toàn miễn phí.
              </p>
              <div className="mt-12 space-y-4 text-sm text-cream/70">
                <div>Hotline · <span className="text-cream">1900 0000</span></div>
                <div>Email · <span className="text-cream">hello@lotuspaint.vn</span></div>
                <div>Giờ tư vấn · 8:00 – 20:00, mỗi ngày</div>
              </div>
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
                  placeholder="Nguyễn An"
                />
              </Field>
              <Field label="Số điện thoại">
                <Input
                  required
                  type="tel"
                  className="h-12 rounded-none border-0 border-b border-cream/30 bg-transparent px-0 text-base text-cream placeholder:text-cream/40 focus-visible:border-clay focus-visible:ring-0"
                  placeholder="09xx xxx xxx"
                />
              </Field>
              <Field label="Bề mặt bạn muốn sơn">
                <Textarea
                  required
                  rows={3}
                  className="rounded-none border-0 border-b border-cream/30 bg-transparent px-0 text-base text-cream placeholder:text-cream/40 focus-visible:border-clay focus-visible:ring-0"
                  placeholder="VD: Bộ bàn ăn gỗ sồi cũ, mong muốn sơn lại màu xanh rêu nhẹ."
                />
              </Field>

              <Button
                type="submit"
                className="mt-4 h-14 w-full rounded-none bg-clay text-[13px] font-medium uppercase tracking-[0.2em] text-cream hover:bg-clay/90"
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
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <a href="#" className="font-serif text-2xl tracking-tight text-charcoal">
          Lotus<span className="text-clay">.</span>
        </a>
        <nav className="hidden gap-10 text-[12px] uppercase tracking-[0.22em] text-walnut md:flex">
          <a href="#choose" className="hover:text-clay">Sản phẩm</a>
          <a href="#palette" className="hover:text-clay">Bảng màu</a>
          <a href="#advise" className="hover:text-clay">Tư vấn</a>
        </nav>
        <a
          href="#choose"
          className="hidden md:inline-flex items-center gap-2 border border-charcoal px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] text-charcoal transition hover:bg-charcoal hover:text-cream"
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
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-12">
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
              <li>Hotline · 1900 0000</li>
              <li>hello@lotuspaint.vn</li>
              <li>Showroom · Thảo Điền, TP. HCM</li>
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
      <dd className="mt-2 text-[13px] leading-snug text-walnut/85">{v}</dd>
    </div>
  );
}

function FinishCard({
  index,
  eyebrow,
  title,
  body,
  img,
  tags,
}: {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  img: string;
  tags: string[];
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
      <div className="mt-8 flex items-baseline gap-4">
        <span className="font-serif text-2xl text-clay">{index}</span>
        <span className="text-[11px] uppercase tracking-[0.25em] text-walnut/70">{eyebrow}</span>
      </div>
      <h3 className="mt-4 font-serif text-3xl leading-tight text-charcoal md:text-4xl">{title}</h3>
      <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-walnut/80">{body}</p>
      <ul className="mt-7 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-walnut">
        {tags.map((t) => (
          <li key={t} className="border border-walnut/30 px-3 py-1.5">{t}</li>
        ))}
      </ul>
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