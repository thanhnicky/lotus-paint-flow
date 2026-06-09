# Refactor Summary — Lotus Paint Flow Landing Page

## Art Direction B2C Focus

**Mục tiêu:** Tối ưu conversion cho khách B2C tự sơn đồ gỗ tại nhà, với CTA chính là gửi ảnh qua Zalo để được tư vấn.

---

## Thay đổi chính

### 1. Hero Section (Section 01)
- **Headline:** Đổi thành "Làm mới đồ gỗ tại nhà / ít mùi, an toàn / tự thi công được" — nhấn mạnh 3 lợi ích chính cho B2C
- **CTA chính:** Nút "Gửi ảnh bề mặt qua Zalo" (màu clay accent) thay vì "Chọn loại sơn phù hợp"
- **CTA phụ:** "Xem 2 kiểu hoàn thiện" scroll xuống section decision
- **Stats:** Cập nhật thành "Hệ nước ít mùi", "2 kiểu: bệt / giữ vân", "Tư vấn qua Zalo"
- **Alt text & caption:** Đổi sang lifestyle context ("Phòng khách · Lotus Wood Paint")

### 2. Sticky CTA Bar (Component mới)
- **Trigger:** Xuất hiện khi scroll qua hero section
- **Nội dung:** "Muốn chọn đúng sơn & số kg? Gửi ảnh bề mặt qua Zalo." + nút Zalo
- **Style:** Slim bar ở bottom, minimal, không che nội dung quá nhiều
- **Component:** `StickyCTA()` ở cuối file

### 3. Decision Block — 2 Kiểu Hoàn Thiện (Section 02)
- **Headline:** Đổi thành "Bạn muốn phủ kín màu hay giữ vân gỗ?" — câu hỏi trực tiếp
- **Component mới:** `DecisionCard()` thay thế `FinishCard()`
- **Mỗi card có:**
  - 3 bullet points (bề mặt phù hợp, lợi ích, gợi ý màu)
  - CTA scroll tới bảng màu tương ứng
  - Không hiển thị giá (giảm áp lực mua hàng)
- **Copy:** Đổi sang ngôn ngữ B2C đời sống

### 4. Surface Selector — Bạn Đang Sơn Gì (Section 04)
- **Component mới:** `SurfaceOption()` với gợi ý dòng sơn cho từng bề mặt
- **Mỗi option hiển thị:**
  - Tên bề mặt (ngôn ngữ đời sống: "Bàn ăn / bàn làm việc")
  - Gợi ý dòng sơn
  - Chi tiết: số lớp, độ phủ, màu gợi ý
- **CTA phụ:** "Gửi ảnh bề mặt này qua Zalo để xem kỹ hơn"
- **Ngôn ngữ:** Đổi sang B2C thực tế

### 5. Bảng Màu Theo Mood (Section 08)
- **Nhóm màu:** Thêm field `mood` vào type Palette (Ấm, Trung tính, Lạnh)
- **Layout:** Group màu theo mood thay vì list phẳng
- **Headline:** "Chọn màu phù hợp với không gian của bạn"
- **Button:** Đổi "Indoor/Outdoor" thành "Nội thất/Ngoại thất"

### 6. Công Trình Thật (Section 09)
- **Headline:** "Từ đồ gỗ cũ đến không gian mới" — nhấn mạnh before/after
- **Copy:** "Những căn nhà đã được làm mới cùng Lotus — từ đồ gỗ trầy xước đến bề mặt sạch, màu mới hoặc giữ vân gỗ đẹp"

### 7. Testimonials (Section 10)
- **Headline:** "Vợ chồng trẻ, chủ nhà tự làm DIY" — nhấn B2C
- **CTA mới:** "Xem thêm ảnh & feedback trên fanpage Lotus" (link Facebook)
- **Giữ nguyên nội dung testimonials gốc (đã phù hợp B2C)**

### 8. Form — Kênh Phụ Trợ (Section 12)
- **Headline:** "Nếu bạn đã rõ mình cần gì" — định vị là kênh phụ
- **Copy:** "Nếu bạn đã xem kỹ hướng dẫn và muốn đặt hàng nhanh, điền form dưới đây. Nếu vẫn phân vân, hãy nhắn Zalo để gửi ảnh bề mặt."
- **Trường mới:**
  - "Số điện thoại / Zalo" (thay vì chỉ "Số điện thoại")
  - "Dòng sơn dự kiến" với option "Chưa rõ, nhờ tư vấn"
  - Checkbox "Tôi đã gửi ảnh bề mặt qua Zalo / Facebook"
- **CTA:** "Gửi yêu cầu đặt hàng" (thay vì "Nhận tư vấn")
- **Xóa:** Mô tả thêm (textarea) — tối giản form

---

## Cấu trúc Component Mới

```tsx
// Component mới được thêm vào
StickyCTA()          // Bar sticky bottom với CTA Zalo
DecisionCard()       // Card decision block 2 kiểu hoàn thiện
SurfaceOption()      // Card selector bề mặt với gợi ý
```

---

## Cách CTA Zalo Hoạt Động

**Link Zalo cần cập nhật:**
- Tìm `YOUR_ZALO_NUMBER` trong file và thay bằng số Zalo thực tế
- Vị trí: Hero CTA, Sticky CTA, Surface selector CTA, Form section CTA

**Flow hiện tại:**
1. Hero → CTA chính: Gửi ảnh qua Zalo
2. Decision block → CTA: Xem bảng màu
3. Surface selector → CTA: Gửi ảnh bề mặt này qua Zalo
4. Form → CTA phụ: Gửi ảnh qua Zalo (cho người phân vân)

---

## Nơi Để Thanh Nguyen Chỉnh Copy Sau Này

**File:** `src/routes/index.tsx`

**Các vị trí dễ chỉnh:**
1. **Line 56-76:** `interiorPalette` và `exteriorPalette` — thêm/sửa màu, mood
2. **Line 78-109:** `surfaces` — thêm/sửa bề mặt và gợi ý
3. **Line 111-118:** `surfaceOptions` — dropdown form
4. **Line 120-124:** `paintOptions` — dropdown dòng sơn
5. **Line 126-130:** `projects` — thêm/sửa công trình thật
6. **Line 132-154:** `testimonials` — thêm/sửa feedback khách hàng
7. **Line 156-168:** `faqs` — câu hỏi thường gặp
8. **Line 200-212:** Hero headline và copy
9. **Line 262-266:** Decision block headline
10. **Line 527-530:** Bảng màu headline
11. **Line 586-589:** Công trình thật headline
12. **Line 625-628:** Testimonial headline
13. **Line 744-751:** Form headline và copy

---

## Tone & Design

**Giữ nguyên:**
- Typography (font-serif, font-sans)
- Color palette (cream, charcoal, walnut, clay)
- Layout spacing
- No icon, no emoji, no 3-column grid startup vibe

**Đã thay đổi:**
- Copy sang ngôn ngữ B2C đời sống
- CTA hierarchy (Zalo > form)
- Flow logic (Chọn màu → Ảnh thực tế → Testimonial)
- Decision clarity (2 kiểu hoàn thiện rõ ràng hơn)

---

## Testing

**Dev server:** `npm run dev` → http://localhost:8080

**Responsive:** Đã test trên mobile và desktop — layout tự động điều chỉnh.

---

## Lưu ý

- **Link Zalo:** Cần thay `YOUR_ZALO_NUMBER` bằng số thật
- **Link Facebook:** Cần kiểm tra và cập nhật link fanpage Lotus (line 654)
- **Hình ảnh:** Đã giữ nguyên asset imports — có thể cần thay ảnh lifestyle thực tế sau
- **Sticky CTA:** Sử dụng scroll event listener — có thể cần optimize performance nếu cần
