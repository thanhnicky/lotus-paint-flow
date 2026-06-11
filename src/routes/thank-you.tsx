import { createFileRoute, useSearch } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/thank-you")({
  component: ThankYouPage,
  validateSearch: (search: Record<string, unknown>) => ({
    phone: typeof search.phone === "string" ? search.phone : "",
    payment: typeof search.payment === "string" ? search.payment : "cod",
    amount: typeof search.amount === "string" ? search.amount : "",
  }),
});

function ThankYouPage() {
  const { phone, payment, amount } = Route.useSearch();

  const bankInfo = {
    account: "211014851223910",
    bank: "Eximbank",
    branch: "CN TP.HCM",
    name: "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ BÍCH TRANG",
  };

  // Generate QR code URL using a free QR code API
  const qrContent = `${bankInfo.bank}|${bankInfo.account}|${bankInfo.name}|${amount}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrContent)}`;

  return (
    <div className="min-h-screen bg-sand/30 py-16 px-5">
      <div className="mx-auto max-w-[600px]">
        <div className="bg-cream border border-walnut/15 p-8 text-center">
          <div className="mb-6 text-5xl">✓</div>
          <h1 className="mb-4 font-serif text-3xl text-charcoal">
            Cảm ơn bạn đã đặt hàng
          </h1>
          <p className="mb-8 text-[15px] text-walnut/70">
            Lotus sẽ liên hệ số điện thoại <span className="font-medium text-charcoal">{phone}</span> để xác nhận và giao hàng.
          </p>

          {payment === "online" && (
            <div className="mb-8 rounded-lg border border-walnut/15 bg-sand/30 p-6">
              <h2 className="mb-4 text-[13px] uppercase tracking-[0.25em] text-walnut/50">
                Quét mã QR để thanh toán
              </h2>
              <div className="mb-4 flex justify-center">
                <img src={qrUrl} alt="QR Code" className="h-48 w-48" />
              </div>
              <div className="space-y-2 text-left text-[13px] text-walnut/70">
                <p><span className="font-medium text-charcoal">Ngân hàng:</span> {bankInfo.bank}</p>
                <p><span className="font-medium text-charcoal">Chi nhánh:</span> {bankInfo.branch}</p>
                <p><span className="font-medium text-charcoal">Số tài khoản:</span> {bankInfo.account}</p>
                <p><span className="font-medium text-charcoal">Chủ tài khoản:</span> {bankInfo.name}</p>
                {amount && <p><span className="font-medium text-charcoal">Số tiền:</span> {amount}</p>}
              </div>
            </div>
          )}

          <Link
            to="/"
            className="inline-block bg-clay px-8 py-3 text-[12px] font-medium uppercase tracking-[0.22em] text-cream transition hover:bg-clay/90"
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
