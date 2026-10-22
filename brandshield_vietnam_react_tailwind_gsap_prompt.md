# Bộ Prompt Thiết Kế & Lập Trình Website BrandShield Vietnam Co., Ltd (Phong Cách MarqVision)

Tài liệu này cung cấp bộ **Master Prompt** và **Prompt chi tiết theo từng phân đoạn** để bạn dán trực tiếp vào các công cụ lập trình AI (như Cursor, Claude, Windsurf, v0, hoặc Bolt.new) nhằm khởi tạo mã nguồn trang web cho **[BrandShield Vietnam Co., Ltd](https://jobsgo.vn/tuyen-dung/cong-ty-tnhh-brandshield-viet-nam-7231333502.html)** (`CÔNG TY TNHH BRANDSHIELD VIỆT NAM` - [MST: 0319263557](https://thuvienphapluat.vn/ma-so-thue/cong-ty-tnhh-brandshield-viet-nam-mst-0319263557.html)).

Toàn bộ cấu trúc được thiết kế theo triết lý thị giác của [MarqVision Brand Protection](https://www.marqvision.com/brand-protection) nhưng mang bản sắc công nghệ lõi của [BrandShield Online Brand Protection & External Cybersecurity](https://www.brandshield.com/products/online-brand-protection/): sử dụng **100% Coded Interactive UI Mockups** (dựng giao diện sản phẩm trực tiếp bằng HTML/Tailwind DOM thay vì ảnh tĩnh), hiệu ứng cuộn ghim màn hình bằng [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/), chuyển đổi trạng thái bằng [Motion for React](https://motion.dev/docs/react) và cuộn mượt bằng [Lenis](https://github.com/darkroomengineering/lenis).

## 1. Cấu Hình Môi Trường & Thư Viện Cần Cài Đặt

Trước khi chạy Prompt tạo giao diện, hãy khởi tạo dự án [Next.js (App Router)](https://nextjs.org/docs) hoặc Vite + React + TypeScript cùng [Tailwind CSS](https://tailwindcss.com/docs/styling-with-utility-classes) và cài đặt các gói phụ thuộc sau:

```bash
npm install gsap @gsap/react lenis motion lucide-react clsx tailwind-merge
```

| Thư viện | Phiên bản / Gói NPM | Vai trò trong kiến trúc hiệu ứng |
| :--- | :--- | :--- |
| **React / Next.js** | `next`, `react`, `react-dom` | Quản lý trạng thái (state) cho các bảng Dashboard giả lập, bộ lọc ngành hàng và đa ngôn ngữ (VI / EN). |
| **Tailwind CSS** | `tailwindcss` | Xây dựng hệ thống Dark/Light theme, lưới Bento, viền mảnh `border-white/10`, hiệu ứng kính mờ `backdrop-blur-xl` và đồ họa UI sản phẩm. |
| **GSAP & ScrollTrigger** | `gsap`, `@gsap/react` | Điều khiển hiệu ứng ghim màn hình (`pin: true`), đồng bộ tiến trình cuộn (`scrub: 1`), hiệu ứng chuyển màu nền Dark sang Light và nhảy số liệu (number ticker). |
| **Motion (Framer Motion)** | `motion` | Tạo hiệu ứng chuyển tab mượt mà với `layoutId`, đóng/mở chi tiết mối đe dọa bằng `AnimatePresence` và micro-interactions khi rê chuột. |
| **Lenis Smooth Scroll** | `lenis` | Tạo quán tính cuộn mượt (smooth inertia scroll) đồng bộ với `ScrollTrigger.update` để các đoạn ghim màn hình không bị giật khung hình. |
| **Lucide Icons** | `lucide-react` | Cung cấp hệ thống biểu tượng bảo mật mạng, radar, cảnh báo phishing, khiên bảo vệ và trạng thái thực thi pháp lý. |

## 2. Master Prompt Tổng Thể (Dùng Cho Cursor / Claude / Bolt / v0)

Bạn có thể sao chép toàn bộ nội dung trong khối dưới đây và gửi cho AI Agent để tạo toàn bộ trang Landing Page hoàn chỉnh:

```markdown
Bạn là một Senior Creative Frontend Engineer và UI/UX Architect chuyên xây dựng các trang web B2B SaaS & Cybersecurity đạt chuẩn Awwwards (tương tự phong cách của MarqVision.com, Linear.app và Raycast.com).

Hãy xây dựng một trang chủ (Landing Page) hoàn chỉnh, giàu tính tương tác cho **BrandShield Vietnam Co., Ltd (Công ty TNHH BrandShield Việt Nam)** sử dụng **React (TypeScript), Tailwind CSS, GSAP (kèm ScrollTrigger & @gsap/react), Motion (framer-motion) và Lenis Smooth Scroll**.

### 1. BỐI CẢNH THƯƠNG HIỆU & DỮ LIỆU THỰC TẾ CẦN ĐƯA VÀO TRANG
- **Định vị thương hiệu:** BrandShield Vietnam Co., Ltd là pháp nhân và trung tâm vận hành tại Việt Nam (trụ sở tại TP. Hồ Chí Minh) của BrandShield — nền tảng hàng đầu thế giới kết hợp **Online Brand Protection (Bảo vệ thương hiệu trực tuyến)** và **External Cybersecurity (An ninh mạng bề mặt tấn công bên ngoài)**.
- **Công nghệ cốt lõi:**
  1. **AI.ClusterX™ Threat Clustering:** Tự động gom cụm các mối đe dọa có liên kết (chung chủ sở hữu, chung mã nguồn, chung tài khoản ngân hàng/kho hàng, chung mạng lưới quảng cáo lừa đảo) trên nhiều kênh thành một chiến dịch để triệt phá tận gốc.
  2. **Website Duplication Detector & Anti-Phishing Engine:** Phát hiện sớm các trang web giả mạo giao diện, tên miền typosquatting/cybersquatting (`.vn`, `.com.vn`, `.shop`, `.click`), lừa đảo tài chính và đánh cắp tài khoản.
  3. **Cross-Platform Marketplace & Social Monitoring:** Quét 24/7 trên các sàn TMĐT và mạng xã hội tại Việt Nam & toàn cầu (Shopee VN, Lazada, TikTok Shop, Tiki, Facebook, Instagram, Zalo, Telegram, YouTube, Google/Meta Paid Ads).
  4. **Human-in-the-Loop Managed Enforcement:** Đội ngũ **Digital Risk Investigators** (Điều tra viên rủi ro số tại TP.HCM) và chuyên gia pháp lý IP toàn cầu trực tiếp xác thực và thực thi gỡ bỏ (Takedown) với thời gian khách hàng phải can thiệp dưới 1 giờ/tuần.
- **Số liệu bảo chứng (Social Proof & Metrics):**
  - `1.5M+` lượt gỡ bỏ vi phạm mỗi năm (Yearly Takedowns).
  - `#1` xếp hạng trên G2 về Online Brand Protection.
  - `96.7%` điểm hài lòng khách hàng (CSAT Score).
  - Bảo vệ các ngành trọng điểm: Tài chính - Ngân hàng & Fintech, Dược phẩm & Chăm sóc sức khỏe, Thời trang & Hàng xa xỉ, Bán lẻ & TMĐT, Công nghệ & Game, Crypto.

### 2. NGUYÊN TẮC THIẾT KẾ THỊ GIÁC (DESIGN SYSTEM)
- **Nguyên tắc "ZERO Static Placeholder Images":** Tuyệt đối KHÔNG dùng thẻ `<img>` chứa ảnh chụp màn hình tĩnh hay link ảnh Unsplash cho phần minh họa sản phẩm. Toàn bộ giao diện Dashboard, sơ đồ mạng lưới AI.ClusterX™, bảng danh sách phishing domain, khung chat AI và biểu đồ phải được dựng **100% bằng HTML/Tailwind DOM thật (Coded Interactive UI Mockups)** có trạng thái động, badge màu, thanh tiến trình và nút bấm tương tác được.
- **Bảng màu (Color System):**
  - **Dark Theme chủ đạo:** Nền chính `#06080E`, nền thẻ cấp 1 `#0C101B`, nền thẻ cấp 2 `#111726`, đường viền mảnh `rgba(255, 255, 255, 0.08)` và họa tiết lưới nền mảnh `bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:48px_48px]`.
  - **Màu nhấn (BrandShield Cyber Accents):** Electric Cobalt (`#2563EB`), Cyber Cyan (`#06B6D4`), Threat Emerald (`#10B981` cho trạng thái "Đã gỡ bỏ / An toàn"), Alert Amber (`#F59E0B` cho "Đang điều tra") và Critical Crimson (`#EF4444` cho "Mối đe dọa Phishing / Hàng giả mức nghiêm trọng 9.8/10").
  - **Light Theme tương phản (Dành riêng cho Section Đội ngũ Chuyên gia & Trung tâm Vận hành Việt Nam):** Nền trắng `#FFFFFF` và xám sáng `#F8FAFC`, chữ `#0F172A` để tạo cú chuyển thị giác ấn tượng khi cuộn trang.
- **Typography:** Sử dụng font không chân hiện đại (`Inter` hoặc `Plus Jakarta Sans`) cho tiêu đề/nội dung và `JetBrains Mono` cho mọi chỉ số phần trăm, địa chỉ IP, tên miền giả mạo, mã hồ sơ (`BS-VN-2049`) và bộ đếm thời gian thực.

### 3. CẤU TRÚC 8 SECTION & YÊU CẦU HIỆU ỨNG (GSAP + MOTION)

#### Section 1: Top Announcement Bar & Sticky Glass Navbar
- **Announcement Bar:** Hiển thị thông báo có chấm xanh nhấp nháy: *"Mới: Công nghệ AI.ClusterX™ thế hệ mới kết hợp Trung tâm Điều tra Rủi ro Số tại TP. Hồ Chí Minh — Khám phá ngay ->"*.
- **Sticky Navbar:** Hiệu ứng `backdrop-blur-xl bg-[#06080E]/80 border-b border-white/10`. Gồm Logo **BRANDSHIELD VIETNAM**, menu dropdown (*Giải pháp*, *Công nghệ AI.ClusterX™*, *Ngành hàng*, *Trung tâm Vận hành VN*), nút chuyển ngôn ngữ `VI | EN`, nút viền sáng *"Quét thử thương hiệu"* và nút CTA chính *"Đặt lịch Demo"* có hiệu ứng viền sáng chạy quanh (conic-gradient border).

#### Section 2: Hero Section (Fluid Mesh Gradient + Live Threat Radar)
- **Background:** Dựng hiệu ứng dải lụa ánh sáng chuyển động mượt mà (HTML5 Canvas Mesh Gradient hoặc CSS Aurora Blur chuyển động chậm) kết hợp lưới kỹ thuật số.
- **Nội dung trái/giữa:**
  - Badge bảo chứng: `Xếp hạng #1 trên G2 · 96.7% CSAT · Bảo vệ 24/7 tại Việt Nam & Toàn cầu`.
  - Tiêu đề lớn (Staggered Text Reveal bằng GSAP): **"Thương hiệu của bạn. Bề mặt số của bạn. Bất khả xâm phạm."** (Cụm *"Bất khả xâm phạm."* dùng hiệu ứng chữ gradient xanh Cobalt sang Cyan).
  - Mô tả: *"BrandShield Vietnam kết hợp trí tuệ nhân tạo AI.ClusterX™ cùng đội ngũ chuyên gia điều tra rủi ro số tại TP.HCM để phát hiện, gom cụm và triệt phá tận gốc web giả mạo (phishing), hàng giả TMĐT, mạo danh lãnh đạo và quảng cáo lừa đảo."*
  - Cụm 2 nút CTA: *"Yêu cầu Demo chuyên sâu ->"* và *"Quét rủi ro thương hiệu miễn phí"*.
- **Khối tương tác ngay dưới Hero:** Thanh trạng thái **Live Threat Ticker** chạy ngang theo thời gian thực hiển thị số lượng quét tại Việt Nam & Đông Nam Á (ví dụ: `Shopee VN: +4,120 sản phẩm vừa kiểm tra · 2s trước`, `Tên miền .vn/.com.vn: +890 domain mới quét · 4s trước`, `Meta/TikTok Ads VN: +1,450 quảng cáo vừa phân tích · 6s trước`).

#### Section 3: Scroll-Pinned 6-Step Defense Pipeline (Trọng tâm GSAP ScrollTrigger)
- **Cơ chế GSAP:** Sử dụng `ScrollTrigger.create({ trigger: sectionRef, start: "top top", end: "+=400%", pin: true, scrub: 0.8 })`.
- **Cột trái (40%):** Danh sách 6 bước quy trình với thanh progress bar dọc tự chạy theo thanh cuộn:
  - `01 Phát hiện đa kênh (Detect)`: Quét 24/7 trên tên miền, sàn TMĐT, mạng xã hội, quảng cáo trả phí, kho ứng dụng và Dark Web.
  - `02 Gom cụm bằng AI.ClusterX™ (Cluster)`: Kết nối hàng trăm gian hàng và domain rời rạc về cùng một mạng lưới tội phạm đứng sau.
  - `03 Chấm điểm rủi ro & Nhân bản (Analyze)`: Dùng *Website Duplication Detector* và thị giác máy tính đo mức độ giống nhau về logo, giao diện, giá bán.
  - `04 Chuyên gia xác thực (Validate)`: Đội ngũ *Digital Risk Investigators* tại Việt Nam và chuyên gia pháp lý IP kiểm duyệt để loại bỏ báo động giả.
  - `05 Thực thi gỡ bỏ tốc độ cao (Enforce)`: Gửi yêu cầu gỡ bỏ tự động và làm việc trực tiếp với nhà đăng ký tên miền, sàn TMĐT, mạng xã hội.
  - `06 Báo cáo & Thu hồi doanh thu (Prove)`: Theo dõi chỉ số giảm thiểu mối đe dọa hàng tháng với chưa đến 1 giờ/tuần vận hành từ phía khách hàng.
- **Cột phải (60% - Coded Interactive Dashboard):** Một khung trình duyệt tối màu tự động biến đổi giao diện mượt mà theo từng bước từ `01` đến `06`:
  - Bước 1-2: Hiển thị bản đồ mạng lưới node (SVG/Canvas) gom 38 gian hàng Shopee/TikTok Shop và 12 tên miền giả mạo ngân hàng/thương hiệu về `Cluster #VN-882`.
  - Bước 3-4: Hiển thị giao diện so sánh trực diện giữa trang web chính thức và trang Phishing nhân bản (`98.4% UI Match`, `Cảnh báo thu thập OTP/Thẻ tín dụng`, trạng thái `Đã xác nhận bởi Chuyên gia BrandShield VN`).
  - Bước 5-6: Hiển thị nhật ký thực thi (`Takedown Executed in 2h 15m`, `1.5M+ Yearly Takedowns`) và biểu đồ sụt giảm 82% số lượng mạo danh.

#### Section 4: AI-Driven Full Spectrum Solutions (6 Tabs Coded Product UI)
- Cho phép người dùng bấm chuyển đổi giữa 6 giải pháp chủ lực (kèm hiệu ứng trượt tab bằng `layoutId` của Motion):
  1. `Chống Phishing & Web Giả Mạo` (Hiển thị bảng phát hiện domain typosquatting, chứng chỉ SSL lừa đảo, trạng thái khóa domain).
  2. `Bảo Vệ Sàn TMĐT & Chống Hàng Giả` (Mô phỏng danh sách gian hàng vi phạm trên Shopee, Lazada, TikTok Shop với cảnh báo giá thấp hơn 75% niêm yết và dùng ảnh trái phép).
  3. `Chống Mạo Danh Thương Hiệu & Lãnh Đạo` (Mô phỏng phát hiện tài khoản Facebook/Zalo/Telegram giả mạo CEO hoặc fanpage tích xanh giả chạy sự kiện tặng quà lừa đảo).
  4. `Chặn Quảng Cáo Lừa Đảo (Paid Ad Scams)` (Mô phỏng giao diện phát hiện quảng cáo Google Search / Facebook Ads đấu thầu từ khóa thương hiệu để dẫn về trang độc hại).
  5. `Giám Sát Ứng Dụng Giả (Rogue Apps)` (Mô phỏng phát hiện file APK lừa đảo và ứng dụng nhái trên kho ứng dụng thứ ba).
  6. `Bảo Vệ Tên Miền & AI Platforms` (Quản lý danh mục tên miền tương tự và bảo vệ hiện diện thương hiệu trên các công cụ tìm kiếm AI).

#### Section 5: Ngành Hàng Bảo Vệ & Bộ Lọc Tương Tác (Interactive Industry Matrix)
- Hiển thị các thẻ ngành hàng lớn tại Việt Nam & Quốc tế: *Ngân hàng & Fintech*, *Dược phẩm & Thực phẩm chức năng*, *Thời trang & Mỹ phẩm*, *Bán lẻ & Chuỗi cửa hàng*, *Công nghệ & Game*, *Hàng xa xỉ*.
- Khi người dùng bấm vào một ngành hàng, bảng bên dưới tự động cập nhật: **Các mối đe dọa phổ biến nhất tại Việt Nam**, **Kênh bị tấn công nhiều nhất**, **Giải pháp BrandShield kích hoạt** và **Kết quả thực tế**.

#### Section 6: Light-Mode Contrast Section — Đội Ngũ Chuyên Gia & Trung Tâm Vận Hành Việt Nam
- Khi cuộn tới section này, dùng GSAP đổi mượt màu nền toàn trang sang trắng sáng (`#FFFFFF`) và chữ sang `#0F172A`.
- Trình bày mô hình kết hợp **"AI Tốc Độ Cao + Chuyên Gia Bản Địa"**:
  - Giới thiệu trung tâm vận hành của **BrandShield Vietnam Co., Ltd tại TP. Hồ Chí Minh** với đội ngũ *Digital Risk Investigators* am hiểu sâu sắc ngôn ngữ, hành vi lừa đảo nội địa (Zalo, Facebook, Shopee VN, TikTok Shop VN, chuyển khoản VietQR giả mạo) kết nối trực tiếp với mạng lưới chuyên gia pháp lý IP & Cybersecurity toàn cầu của BrandShield.
  - Sơ đồ tương tác 4 AI Agents + Con người chạy song song với bộ đếm nhảy số trực tiếp (`Detection Agent`, `AI.ClusterX™ Agent`, `Duplication Scanner`, `Managed Takedown Team`).

#### Section 7: Scroll-Scrubbed ROI & Threat Reduction Timeline (Biểu Đồ Cuộn 8 Tháng)
- Quay trở lại nền tối (`#06080E`). Khi người dùng cuộn qua biểu đồ, con chạy thời gian di chuyển từ **Tháng 1 đến Tháng 8**:
  - Tỷ lệ xuất hiện link lừa đảo & hàng giả trên trang 1 kết quả tìm kiếm giảm dần từ `54%` xuống còn `6%`.
  - Các chỉ số bên cạnh tự động nhảy số: `Thời gian gỡ bỏ trung bình: giảm xuống 3.2 giờ`, `Tỷ lệ tái phạm giảm 78% nhờ AI.ClusterX™`, `Thời gian đội ngũ nội bộ phải tự xử lý: < 45 phút/tuần`.

#### Section 8: Công Cụ Quét Thử Rủi Ro Tương Tác (Interactive Free Brand Scan Preview) & Footer
- Cho phép người dùng gõ thử tên thương hiệu của họ vào ô input (ví dụ: gõ `"VietTechBank"` hoặc `"AuraCosmetics"`).
- Ngay khi người dùng gõ, bảng **Scan Preview (Mô phỏng trực quan)** bên phải lập tức cập nhật tên thương hiệu đó vào các ví dụ cảnh báo:
  - Tên miền nghi vấn: `{brand}-vn-login.shop` (Mức độ nguy hiểm: `9.8/10 - Phishing`), `{brand}-official-sale.click` (`9.2/10 - Impersonation`).
  - Quảng cáo & Mạng xã hội giả mạo: `Sponsored: Ưu đãi 80% {Brand} Chính Hãng Hôm Nay`.
  - Nút CTA kết nối ngay bên dưới: *"Nhận báo cáo phân tích mối đe dọa thật cho {Brand} ->"* kèm form đăng ký nhanh (Họ tên, Email doanh nghiệp, Số điện thoại, Chức vụ).
- **Footer:** Đầy đủ thông tin pháp nhân **Công ty TNHH BrandShield Việt Nam (BrandShield Vietnam Co., Ltd)**, Mã số thuế `0319263557`, địa chỉ tại TP. Hồ Chí Minh, liên kết đến các giải pháp và thông tin tuân thủ bảo mật.
```

## 3. Bộ Prompt Chi Tiết & Mã Nguồn Mẫu Cho 3 Hiệu Ứng Khó Nhất

Nếu bạn muốn yêu cầu AI tạo từng phần để đạt độ mượt tối đa, hãy sử dụng các đoạn mã chuẩn và prompt chuyên biệt dưới đây:

### 3.1. Cấu hình Cuộn Mượt Lenis Đồng Bộ Với GSAP ScrollTrigger

Dán đoạn mã hoặc prompt này để đảm bảo khi ghim màn hình (`pin: true`) trên React không bị hiện tượng giật cục (jitter):

```tsx
// components/SmoothScrollProvider.tsx
"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

### 3.2. Prompt Chuyên Biệt Cho Section "Scroll-Pinned 6-Step Defense Pipeline"

Khi muốn tinh chỉnh riêng phần cuộn ghim 6 bước giống hệt khu vực `01 Detect → 06 Prove` của MarqVision, hãy dùng prompt sau:

```markdown
Hãy viết component `PinnedDefensePipeline.tsx` bằng React + Tailwind CSS + `@gsap/react` (`useGSAP`) và `ScrollTrigger` cho BrandShield Vietnam Co., Ltd:

1. **Cấu trúc bố cục:**
   - Container ngoài cùng `ref={containerRef}` có chiều cao `h-screen w-full overflow-hidden bg-[#06080E]` được ghim cố định bằng `ScrollTrigger` trong khoảng cuộn `+=350%`.
   - Chia làm 2 cột trên Desktop (`grid-cols-12`):
     - **Cột trái (5 cột):** Hiển thị tiêu đề cố định *"Từ phát hiện bề mặt tấn công đến triệt phá tận gốc"* và danh sách 6 bước (`01 Detect`, `02 AI.ClusterX™`, `03 Analyze`, `04 Validate`, `05 Enforce`, `06 Prove`). Bước nào đang active (dựa theo `activeStep` từ進 trình `self.progress` của ScrollTrigger) sẽ sáng chữ trắng `#FFFFFF`, mở rộng phần mô tả chi tiết và chạy thanh progress bar màu xanh `#06B6D4` bên dưới. Người dùng cũng có thể click trực tiếp vào từng bước để cuộn tới vị trí tương ứng.
     - **Cột phải (7 cột):** Khung **Interactive Threat Command Center** dựng hoàn toàn bằng HTML/Tailwind DOM. Tùy theo giá trị `activeStep` (0 đến 5), nội dung bên trong cửa sổ chuyển đổi mượt mà với hiệu ứng `AnimatePresence` của `motion/react`:
       - **Step 0 (Detect):** Radar quét thời gian thực hiển thị lưu lượng quét trên Shopee VN, Lazada, TikTok Shop, Facebook, Zalo và hệ thống tên miền `.vn` với bộ đếm nhảy số.
       - **Step 1 (AI.ClusterX™):** Sơ đồ SVG liên kết 42 gian hàng giả mạo và 9 trang web phishing về chung 1 đối tượng vận hành (`Cluster #VN-208` - Trùng số điện thoại, trùng kho gửi hàng và mã nguồn thanh toán).
       - **Step 2 (Analyze):** Giao diện *Website Duplication Detector* đặt song song trang web chính hãng và trang web giả mạo với các khung chấm đỏ chỉ ra: `99.1% Visual Clone`, `Spoofed SSL Certificate`, `Fake VietQR Payment Gateway`.
       - **Step 3 (Validate):** Giao diện phê duyệt của *Digital Risk Investigator (TP.HCM)* với ghi chú chuyên gia, phân loại mức độ nghiêm trọng `9.8/10 Critical` và nút xác nhận `Approved for Immediate Takedown`.
       - **Step 4 (Enforce):** Tiến trình gỡ bỏ đa kênh đang chạy (`Registrar Notified -> Hosting Suspended -> Shopee/TikTok Listing Removed -> Google Safe Browsing Blacklisted`) kèm đồng hồ đếm thời gian phản hồi trung bình `2h 18m`.
       - **Step 5 (Prove):** Bảng tổng kết chiến dịch hiển thị biểu đồ đường giảm 86% lượng truy cập vào các trang lừa đảo và số giờ đội ngũ khách hàng tiết kiệm được (`< 1 giờ/tuần`).
```

### 3.3. Prompt Chuyên Biệt Cho Section "Interactive Free Brand Scan & Live AI.ClusterX™ Preview"

Để tạo khu vực nhập tên thương hiệu và xem ngay kết quả mô phỏng trực quan ở cuối trang (giống mục *Free brand scan* trên trang chủ MarqVision), hãy dùng prompt sau:

```markdown
Hãy viết component `InteractiveBrandScanner.tsx` bằng React + Tailwind CSS + `motion/react`:

1. **Chức năng tương tác:**
   - Có một ô input lớn cho phép người dùng nhập tên thương hiệu của họ (mặc định nếu để trống sẽ hiển thị `"brandshield-client"`, nếu người dùng nhập ví dụ `"VinPharma"` thì chuẩn hóa chuỗi slug thành `"vinpharma"` và tên hiển thị `"VinPharma"`).
   - Có 4 nút gợi ý nhanh bên dưới ô input để người dùng bấm thử: `Ngân hàng số`, `Dược phẩm`, `Thời trang cao cấp`, `Sàn giao dịch / Fintech`.
2. **Bảng Live Simulation bên phải (Dựng bằng Tailwind DOM):**
   - Cập nhật tức thì theo từng ký tự người dùng gõ vào ô input:
     - **4 Thẻ chỉ số rủi ro mô phỏng:** `Tên miền tương tự (Lookalike Domains): 18`, `Quảng cáo giả mạo (Scam Ads): 9`, `Gian hàng TMĐT nghi vấn: 142`, `Mạng lưới liên kết (AI.ClusterX™): 3 cụm`.
     - **Danh sách Tên miền Phishing & Giả mạo phát hiện:**
       - `{slug}-vn-online.shop` · Badge đỏ `Phishing 9.8` · Trạng thái `Đang thu thập thông tin thẻ`
       - `{slug}-chinhhang-sale80.click` · Badge cam `Impersonation 9.1` · Trạng thái `Nhân bản giao diện 96%`
       - `login-{slug}-support.com` · Badge đỏ `Credential Theft 9.9` · Trạng thái `Mới đăng ký 2 ngày trước`
     - **Mô phỏng Quảng cáo & Gian hàng giả mạo:**
       - Hiển thị 1 thẻ quảng cáo tìm kiếm giả lập: `[Được tài trợ] {BrandName} Official Việt Nam - Ưu đãi độc quyền giảm 80% hôm nay` trỏ về `{slug}-vn-online.shop`.
   - Kèm nút CTA nổi bật: **"Yêu cầu báo cáo quét thật cho {BrandName} từ chuyên gia BrandShield Vietnam ->"** mở ra Modal đăng ký nhận báo cáo chi tiết.
```

## 4. Checklist Kiểm Tra Chất Lượng Sau Khi Chạy Code

| Tiêu chí kiểm tra | Cách tinh chỉnh nếu chưa đạt |
| :--- | :--- |
| **Độ sắc nét của các màn hình sản phẩm** | Đảm bảo AI không dùng thẻ `<img>` ngoài cho dashboard mà dùng các thẻ `div`, `span`, `svg` với font `text-xs font-mono` và viền `border-white/10`. |
| **Độ mượt khi cuộn qua khu vực Pinned 6 bước** | Kiểm tra `ScrollTrigger.refresh()` đã được gọi sau khi font và layout tải xong, và dùng `useGSAP()` thay vì `useEffect()` thông thường để tự động dọn dẹp (cleanup) khi component unmount. |
| **Hiệu ứng chuyển nền Dark sang Light ở Section 6** | Dùng `ScrollTrigger` gắn vào `Section 6` với `onEnter` và `onLeaveBack` để đổi class hoặc biến CSS `--bg-surface` của thẻ `<main>` cùng `transition-colors duration-700`. |
| **Khả năng hiển thị trên Mobile (Responsive)** | Với màn hình `< 1024px` (`lg:`), chuyển khu vực ghim 6 bước từ cuộn ghim dọc sang dạng thẻ xếp chồng (stacked cards) hoặc thanh trượt ngang để thao tác chạm trên điện thoại tự nhiên nhất. |
