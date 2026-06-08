import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Minus, Plus, Truck, ShieldCheck, Clock, Droplets } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lotus Wood Paint - Sơn Gỗ Hệ Nước An Toàn Tự Thi Công Tại Nhà" },
      { name: "description", content: "Sơn gỗ Lotus hệ nước Acrylic Polymer. Không mùi, khô nhanh 2h, tự sơn dễ dàng. Giao hàng toàn quốc." },
      { property: "og:title", content: "Lotus Wood Paint - Sơn Gỗ Hệ Nước Tự Thi Công" },
      { property: "og:description", content: "Sơn nội thất màu bệt & sơn ngoại thất giữ vân gỗ. An toàn, dễ dùng, đặt hàng online." },
    ],
  }),
  component: Index,
});

type ColorSwatch = { name: string; hex: string; border?: boolean };

const interiorColors: ColorSwatch[] = [
  { name: "Trắng Sứ", hex: "#F8F8F4", border: true },
  { name: "Kem Sữa", hex: "#EFE5D2" },
  { name: "Xám Khói", hex: "#8A8E92" },
  { name: "Xám Đá", hex: "#4B5563" },
  { name: "Đen Mờ", hex: "#1A1A1A" },
  { name: "Xanh Navy", hex: "#1E3A5F" },
  { name: "Xanh Ngọc", hex: "#3F6F6A" },
  { name: "Xanh Rêu", hex: "#5B6E4A" },
  { name: "Hồng Pastel", hex: "#E8C8C0" },
  { name: "Vàng Mơ", hex: "#E8C977" },
  { name: "Đỏ Đô", hex: "#7A2E2A" },
  { name: "Nâu Cafe", hex: "#5B3A29" },
];

const exteriorColors: ColorSwatch[] = [
  { name: "Sồi Tự Nhiên", hex: "#C9A26B" },
  { name: "Sồi Oak", hex: "#B07A45" },
  { name: "Căm Xe", hex: "#8B4A2B" },
  { name: "Gõ Đỏ", hex: "#6B2E22" },
  { name: "Hương Đỏ", hex: "#9B3A22" },
  { name: "Óc Chó Walnut", hex: "#3E2418" },
  { name: "Teak Vàng", hex: "#A6713C" },
  { name: "Mahogany", hex: "#5C2A20" },
];

const products = {
  interior: {
    id: "interior",
    name: "Lotus Wood Paint - Nội Thất",
    short: "Sơn Màu Bệt",
    colors: interiorColors,
    description:
      "Sơn phủ màu bệt che lấp 100% vân gỗ. Màng sơn nhẵn mịn, bám dính hoàn hảo trên mọi bề mặt gỗ cũ/mới, MDF. Chuyên dùng cho tủ áo, bàn ghế nội thất.",
  },
  exterior: {
    id: "exterior",
    name: "Lotus Woodstain Finish - Ngoại Thất & Sàn",
    short: "Sơn Giữ Vân",
    colors: exteriorColors,
    description:
      "Sơn 2-trong-1 (Tạo màu & Phủ bảo vệ). Thấm sâu vào thớ gỗ, giữ trọn nét đẹp vân gỗ tự nhiên. Công thức chống tia UV, kháng nước, chịu ma sát cao chuyên dụng cho sàn gỗ và đồ ngoại thất.",
  },
} as const;

const UNIT_PRICE = 199000;

function formatVnd(n: number) {
  return new Intl.NumberFormat("vi-VN").format(n) + " VNĐ";
}

function Index() {
  const [activeTab, setActiveTab] = useState<"interior" | "exterior">("interior");
  const [selectedInterior, setSelectedInterior] = useState(interiorColors[0]);
  const [selectedExterior, setSelectedExterior] = useState(exteriorColors[0]);
  const [qty, setQty] = useState(2);

  const selectedProduct = products[activeTab];
  const selectedColor = activeTab === "interior" ? selectedInterior : selectedExterior;
  const total = useMemo(() => qty * UNIT_PRICE, [qty]);
  const freeShip = qty >= 2;

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Top bar */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600 text-white font-bold">L</div>
            <span className="text-lg font-bold tracking-tight text-slate-900">LOTUS Paint</span>
          </div>
          <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#products" className="hover:text-green-600">Sản phẩm</a>
            <a href="#compare" className="hover:text-green-600">So sánh</a>
            <a href="#order" className="hover:text-green-600">Đặt hàng</a>
          </nav>
          <a href="#order" className="hidden text-sm font-semibold text-green-700 md:inline">
            Hotline: 1900 0000
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-200 bg-gray-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              <Droplets className="h-3.5 w-3.5" /> Công nghệ Acrylic Polymer gốc nước
            </span>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Giải Pháp Tự Sơn Gỗ Tại Nhà - Hệ Nước An Toàn Lotus
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Công nghệ màng sơn Acrylic Polymer gốc nước. Không mùi độc hại, khô siêu tốc trong 2h, dễ dàng thi công mà không cần thợ.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#products">
                <Button className="h-12 bg-green-600 px-6 text-base font-semibold hover:bg-green-700">
                  Chọn Màu & Đặt Hàng
                </Button>
              </a>
              <a href="#compare">
                <Button variant="outline" className="h-12 border-gray-300 px-6 text-base">
                  So sánh với sơn PU
                </Button>
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 text-slate-700"><Clock className="h-4 w-4 text-green-600" /> Khô 1-2h</div>
              <div className="flex items-center gap-2 text-slate-700"><ShieldCheck className="h-4 w-4 text-green-600" /> Không mùi độc</div>
              <div className="flex items-center gap-2 text-slate-700"><Truck className="h-4 w-4 text-green-600" /> Free ship 2 hũ</div>
            </div>
          </div>

          {/* Split visual */}
          <div className="relative">
            <div className="grid h-80 grid-cols-2 overflow-hidden rounded-2xl border border-gray-200 shadow-sm md:h-[460px]">
              <div className="relative bg-[#EFE5D2]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#1E3A5F]" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
                  Nội Thất — Màu Bệt
                </div>
              </div>
              <div className="relative bg-[#8B4A2B]">
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, rgba(0,0,0,0.18) 0 2px, transparent 2px 22px), repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 11px)",
                  }}
                />
                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
                  Ngoại Thất — Giữ Vân
                </div>
              </div>
            </div>

            {/* Floating promo badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-green-600 px-5 py-3 text-sm font-bold text-white shadow-lg">
              🎁 Ưu đãi: Mua 2 hũ 1kg - Miễn Phí Vận Chuyển
            </div>
          </div>
        </div>
      </section>

      {/* Products + Order */}
      <section id="products" className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 lg:grid-cols-3">
          {/* Tabs - left 2 cols */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Chọn Dòng Sơn & Màu Yêu Thích</h2>
              <p className="mt-2 text-slate-600">Hai dòng sản phẩm chuyên biệt cho nội thất và ngoại thất.</p>
            </div>

            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "interior" | "exterior")}>
              <TabsList className="grid h-auto w-full grid-cols-2 rounded-xl bg-gray-100 p-1">
                <TabsTrigger value="interior" className="rounded-lg py-3 text-sm font-semibold data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=active]:shadow-sm">
                  Lotus Wood Paint
                  <span className="ml-2 hidden text-xs font-normal text-slate-500 md:inline">Nội Thất</span>
                </TabsTrigger>
                <TabsTrigger value="exterior" className="rounded-lg py-3 text-sm font-semibold data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=active]:shadow-sm">
                  Lotus Woodstain Finish
                  <span className="ml-2 hidden text-xs font-normal text-slate-500 md:inline">Ngoại Thất & Sàn</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="interior" className="mt-6">
                <ProductPanel
                  title="Lotus Wood Paint - Nội Thất (Sơn Màu Bệt)"
                  description={products.interior.description}
                  colors={interiorColors}
                  selected={selectedInterior}
                  onSelect={setSelectedInterior}
                />
              </TabsContent>
              <TabsContent value="exterior" className="mt-6">
                <ProductPanel
                  title="Lotus Woodstain Finish - Ngoại Thất & Sàn (Sơn Giữ Vân)"
                  description={products.exterior.description}
                  colors={exteriorColors}
                  selected={selectedExterior}
                  onSelect={setSelectedExterior}
                />
              </TabsContent>
            </Tabs>
          </div>

          {/* Sticky checkout - right col */}
          <aside id="order" className="lg:col-span-1">
            <div className="lg:sticky lg:top-6">
              <div className="rounded-xl border-2 border-green-500 bg-white p-6 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900">Đặt Hàng Nhanh</h3>
                <p className="mt-1 text-sm text-slate-500">Tự phục vụ - giao tận nhà toàn quốc</p>

                {/* Summary */}
                <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-0.5 h-10 w-10 flex-shrink-0 rounded-full border border-gray-300 shadow-inner"
                      style={{ backgroundColor: selectedColor.hex }}
                    />
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-slate-900">{selectedProduct.name}</div>
                      <div className="text-xs text-slate-600">
                        Màu: <span className="font-medium text-slate-800">{selectedColor.name}</span>
                      </div>
                      <div className="mt-1 text-xs text-slate-500">Quy cách: Hũ 1kg</div>
                    </div>
                  </div>
                </div>

                {/* Price + qty */}
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500">Đơn giá</div>
                    <div className="text-xl font-bold text-slate-900">{formatVnd(UNIT_PRICE)}<span className="text-sm font-normal text-slate-500"> / Hũ</span></div>
                  </div>
                  <div className="flex items-center rounded-lg border border-gray-300">
                    <button
                      type="button"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="flex h-10 w-10 items-center justify-center text-slate-600 hover:bg-gray-50"
                      aria-label="Giảm số lượng"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-10 text-center text-base font-semibold text-slate-900">{qty}</span>
                    <button
                      type="button"
                      onClick={() => setQty((q) => q + 1)}
                      className="flex h-10 w-10 items-center justify-center text-slate-600 hover:bg-gray-50"
                      aria-label="Tăng số lượng"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Alert */}
                <div className={`mt-4 flex items-start gap-2 rounded-lg border p-3 text-xs ${freeShip ? "border-green-200 bg-green-50 text-green-800" : "border-amber-200 bg-amber-50 text-amber-800"}`}>
                  <Truck className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>
                    {freeShip
                      ? "Đơn của bạn được Miễn Phí Giao Hàng Toàn Quốc."
                      : "Mua từ 2 hũ để được Miễn Phí Giao Hàng Toàn Quốc."}
                  </span>
                </div>

                {/* Form */}
                <form
                  className="mt-5 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(`Đặt hàng thành công!\n${selectedProduct.name}\nMàu: ${selectedColor.name}\nSố lượng: ${qty}\nTổng: ${formatVnd(total)}`);
                  }}
                >
                  <FloatingInput id="name" label="Họ và Tên" required />
                  <FloatingInput id="phone" label="Số điện thoại di động" type="tel" required pattern="[0-9 +]{8,}" />
                  <FloatingInput id="address" label="Địa chỉ nhận hàng chi tiết" required />

                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <span className="text-sm text-slate-600">Tổng cộng</span>
                    <span className="text-2xl font-extrabold text-slate-900">{formatVnd(total)}</span>
                  </div>

                  <Button
                    type="submit"
                    className="h-14 w-full bg-green-600 text-base font-bold tracking-wide hover:bg-green-700"
                  >
                    Đặt Hàng & Nhận Tại Nhà
                  </Button>
                  <p className="text-center text-[11px] text-slate-500">
                    Thanh toán khi nhận hàng (COD) · Đổi trả 7 ngày
                  </p>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Compare */}
      <section id="compare" className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Vì sao chọn Lotus thay vì sơn PU truyền thống?</h2>
            <p className="mt-3 text-slate-600">So sánh trực tiếp các tiêu chí quan trọng nhất khi bạn tự thi công tại nhà.</p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border-2 border-green-500 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                <Check className="h-3.5 w-3.5" /> KHUYẾN NGHỊ
              </div>
              <h3 className="text-xl font-bold text-slate-900">Lotus Water-based</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  "Hệ nước an toàn cho sức khỏe gia đình",
                  "Không mùi - thi công ngay trong nhà ở",
                  "Dụng cụ rửa sạch bằng nước thường",
                  "Khô nhanh chỉ 1-2 giờ giữa các lớp",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-slate-700">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-slate-600">
                Truyền thống
              </div>
              <h3 className="text-xl font-bold text-slate-900">Sơn PU hệ dung môi</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  "Chứa dung môi độc hại, ảnh hưởng sức khỏe",
                  "Mùi nồng gắt, phải ở nơi thoáng khí",
                  "Cần xăng thơm / dung môi để rửa dụng cụ",
                  "Cần thợ chuyên nghiệp thi công đúng kỹ thuật",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 text-xs">✕</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-500 md:flex-row">
          <div>© {new Date().getFullYear()} Lotus Paint. Sơn gỗ hệ nước an toàn.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-700">Chính sách đổi trả</a>
            <a href="#" className="hover:text-slate-700">Vận chuyển</a>
            <a href="#" className="hover:text-slate-700">Liên hệ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProductPanel({
  title,
  description,
  colors,
  selected,
  onSelect,
}: {
  title: string;
  description: string;
  colors: ColorSwatch[];
  selected: ColorSwatch;
  onSelect: (c: ColorSwatch) => void;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-800">Bảng màu</span>
          <span className="text-sm text-slate-500">
            Đã chọn: <span className="font-semibold text-slate-900">{selected.name}</span>
          </span>
        </div>

        <div className="mt-4 grid grid-cols-6 gap-3 sm:grid-cols-8 md:grid-cols-6 lg:grid-cols-8">
          {colors.map((c) => {
            const active = c.name === selected.name;
            return (
              <button
                key={c.name}
                type="button"
                onClick={() => onSelect(c)}
                title={c.name}
                aria-label={`Chọn màu ${c.name}`}
                className={`group flex flex-col items-center gap-1 focus:outline-none`}
              >
                <span
                  className={`relative flex h-12 w-12 items-center justify-center rounded-full border transition ${
                    active
                      ? "ring-2 ring-green-600 ring-offset-2 border-transparent"
                      : "border-gray-300 group-hover:scale-105"
                  }`}
                  style={{ backgroundColor: c.hex }}
                >
                  {active && (
                    <Check
                      className="h-5 w-5 drop-shadow"
                      style={{ color: isLight(c.hex) ? "#0f172a" : "#ffffff" }}
                    />
                  )}
                </span>
                <span className="line-clamp-1 text-[11px] text-slate-600">{c.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4 text-sm md:grid-cols-4">
        <Stat label="Quy cách" value="Hũ 1kg" />
        <Stat label="Độ phủ" value="~8-10 m²/kg" />
        <Stat label="Khô bề mặt" value="30 phút" />
        <Stat label="Sơn lớp 2" value="Sau 2 giờ" />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-slate-500">{label}</div>
      <div className="font-semibold text-slate-900">{value}</div>
    </div>
  );
}

function FloatingInput({
  id,
  label,
  type = "text",
  required,
  pattern,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  pattern?: string;
}) {
  return (
    <div className="relative">
      <Input
        id={id}
        type={type}
        required={required}
        pattern={pattern}
        placeholder=" "
        className="peer h-12 rounded-lg border-gray-300 pt-4 text-sm placeholder-transparent focus-visible:ring-green-600"
      />
      <Label
        htmlFor={id}
        className="pointer-events-none absolute left-3 top-1 text-[11px] font-medium text-slate-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-focus:top-1 peer-focus:text-[11px] peer-focus:text-green-700"
      >
        {label}
      </Label>
    </div>
  );
}

function isLight(hex: string) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}

// (legacy Index removed)
