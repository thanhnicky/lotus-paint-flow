import { createFileRoute, useSearch } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/thank-you")({
  component: ThankYouPage,
  validateSearch: (search: Record<string, unknown>) => ({
    name: typeof search.name === "string" ? search.name : "",
    phone: typeof search.phone === "string" ? search.phone : "",
    payment: typeof search.payment === "string" ? search.payment : "cod",
    amount: typeof search.amount === "string" ? search.amount : "",
    product: typeof search.product === "string" ? search.product : "",
    env: typeof search.env === "string" ? search.env : "",
    color: typeof search.color === "string" ? search.color : "",
    surface: typeof search.surface === "string" ? search.surface : "",
    size: typeof search.size === "string" ? search.size : "",
    qty: typeof search.qty === "string" ? search.qty : "1",
  }),
});

function ThankYouPage() {
  const { name, phone, payment, amount, product, env, color, surface, size, qty } = Route.useSearch();

  const bankInfo = {
    account: "211014851223910",
    bank: "Eximbank",
    bankId: "EIB",
    branch: "CN TP.HCM",
    name: "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ BÍCH TRANG",
  };

  // Generate QR code with VietQR API
  const transferSyntax = `Lotus ${phone}`;
  const accountNameEncoded = encodeURIComponent(bankInfo.name);
  const amountClean = amount.replace(/[^\d]/g, ''); // Remove non-numeric characters
  const qrUrl = `https://img.vietqr.io/image/${bankInfo.bankId}-${bankInfo.account}-compact2.png?amount=${amountClean}&addInfo=${encodeURIComponent(transferSyntax)}&accountName=${accountNameEncoded}`;

  return (
    <div className="min-h-screen bg-sand/30 py-16 px-5">
      <div className="mx-auto max-w-[600px]">
        <div className="bg-cream border border-walnut/15 p-8 text-center">
          <div className="mb-6 text-5xl">✓</div>
          <h1 className="mb-4 font-serif text-3xl text-charcoal">
            Cảm ơn Anh/chị {name} đã sử dụng sản phẩm của Sơn Lotus
          </h1>

          {/* Order Summary */}
          <div className="mb-8 rounded-lg border border-walnut/15 bg-sand/30 p-6 text-left">
            <h2 className="mb-4 text-[13px] uppercase tracking-[0.25em] text-walnut/50">
              Tóm tắt đơn hàng
            </h2>
            <div className="space-y-2 text-[14px]">
              <div className="flex justify-between">
                <span className="text-walnut/70">Sản phẩm</span>
                <span className="text-charcoal">{product}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-walnut/70">Môi trường</span>
                <span className="text-charcoal">{env}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-walnut/70">Màu</span>
                <span className="text-charcoal">{color}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-walnut/70">Bề mặt</span>
                <span className="text-charcoal">{surface}</span>
              </div>
              <div className="flex justify-between border-t border-walnut/15 pt-2">
                <span className="text-walnut/70">Quy cách</span>
                <span className="text-charcoal">{size} × {qty}</span>
              </div>
              <div className="flex justify-between border-t border-walnut/20 pt-2 text-[16px] font-medium">
                <span className="text-walnut/80">Tổng cộng</span>
                <span className="text-clay">{amount}</span>
              </div>
            </div>
          </div>

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
                <p><span className="font-medium text-charcoal">Số tiền:</span> {amount}</p>
                <p><span className="font-medium text-charcoal">Nội dung chuyển khoản:</span> <span className="text-clay">{transferSyntax}</span></p>
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
