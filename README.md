# Website IIA Vietnam - The Institute of Internal Auditors Vietnam

Website chính thức của Viện Kiểm toán Nội bộ Việt Nam (IIA Vietnam), được xây dựng với thiết kế hiện đại, responsive và tích hợp AI Chatbot.

## 📋 Mô tả dự án

Website giới thiệu về The Institute of Internal Auditors Vietnam, cung cấp thông tin về:
- Về chúng tôi
- Hội viên
- Chuẩn mực kiểm toán nội bộ
- Chứng chỉ chuyên nghiệp
- Khóa học và đào tạo
- Dịch vụ
- Tài liệu
- Hội thảo & Webinar
- Tin tức
- Liên hệ

## 🚀 Tính năng

### Giao diện
- ✅ **Responsive Design**: Tối ưu cho mọi thiết bị (Desktop, Tablet, Mobile)
- ✅ **Modern UI/UX**: Thiết kế hiện đại, clean và professional
- ✅ **Flat Icons**: Tất cả icons sử dụng flat design style
- ✅ **Gradient Colors**: Màu sắc gradient xanh dương → xanh lá phù hợp với brand
- ✅ **Smooth Animations**: Hiệu ứng chuyển động mượt mà

### Chức năng
- ✅ **Navigation Menu**: Menu điều hướng với hover effects
- ✅ **Search Functionality**: Tìm kiếm khóa học và nội dung
- ✅ **Shopping Cart**: Giỏ hàng cho các khóa học
- ✅ **Language Selector**: Chọn ngôn ngữ (hiện tại: VIE)
- ✅ **Mobile Menu**: Menu hamburger cho mobile
- ✅ **Hero Banner**: Banner hero với call-to-action
- ✅ **Course Discovery**: Tìm kiếm và lọc khóa học
- ✅ **Benefits Section**: Giới thiệu lợi ích của IIA
- ✅ **Events & Updates**: Hiển thị sự kiện và cập nhật mới nhất
- ✅ **Partners Section**: Giới thiệu đối tác

### AI Chatbot
- ✅ **AI Assistant**: Tích hợp AI Chatbot từ CloudServices.vn
- ✅ **Custom Button**: Nút chat tùy chỉnh với gradient
- ✅ **Smart Integration**: Tự động khởi tạo và xử lý

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc semantic
- **CSS3**: 
  - Custom Properties (CSS Variables)
  - Flexbox & Grid Layout
  - Animations & Transitions
  - Media Queries cho Responsive
- **JavaScript (Vanilla)**: 
  - DOM Manipulation
  - Event Handling
  - Mobile Menu Toggle
  - Smooth Scrolling
- **Google Fonts**: Inter font family
- **AI Chatbot SDK**: CloudServices.vn LVAI

## 📁 Cấu trúc thư mục

```
IAA-Mock-Website/
├── index.html          # File HTML chính
├── styles.css          # File CSS chính
├── script.js           # File JavaScript chính
├── ai-chatbot.js       # File khởi tạo AI Chatbot
├── top_logo_4ececd64cf.png  # Logo IIA Vietnam
└── README.md           # File hướng dẫn này
```

## 🎨 Màu sắc chủ đạo

Website sử dụng bảng màu nhất quán:

```css
--primary-color: #4ececd      /* Teal */
--secondary-color: #2a9d9c    /* Dark Teal */
--accent-blue: #0066cc        /* Blue */
--accent-green: #32cd32      /* Green */
--dark-blue: #1e3a5f          /* Dark Blue */
--text-dark: #333            /* Dark Gray */
--white: #ffffff             /* White */
```

## 🚀 Hướng dẫn cài đặt và chạy

### Yêu cầu
- Web server (có thể dùng Live Server trong VS Code)
- Hoặc mở trực tiếp file `index.html` trong trình duyệt

### Cách chạy

#### Option 1: Sử dụng Live Server (VS Code)
1. Mở thư mục dự án trong VS Code
2. Cài đặt extension "Live Server" (nếu chưa có)
3. Click chuột phải vào `index.html` → chọn "Open with Live Server"

#### Option 2: Sử dụng Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# Sau đó mở trình duyệt: http://localhost:8000
```

#### Option 3: Sử dụng Node.js http-server
```bash
# Cài đặt http-server
npm install -g http-server

# Chạy server
http-server

# Sau đó mở trình duyệt: http://localhost:8080
```

#### Option 4: Mở trực tiếp
- Double-click vào file `index.html` để mở trong trình duyệt
- **Lưu ý**: Một số tính năng có thể không hoạt động do CORS policy

## 🤖 AI Chatbot Integration

Website tích hợp AI Chatbot từ CloudServices.vn để hỗ trợ người dùng.

### Cấu hình

File `ai-chatbot.js` chứa cấu hình AI Chatbot:
- **App ID**: Được mã hóa trong SafeLVAI
- **Base URL**: `https://ai.cloudservices.vn`
- **Mode**: Button mode (hiển thị nút, mở chat khi click)

### Tùy chỉnh

Để thay đổi cấu hình AI Chatbot, chỉnh sửa file `ai-chatbot.js`:

```javascript
// Hiển thị chat box ngay lập tức
embedLVAI.initChatBox();

// Hoặc sử dụng các API khác
embedLVAI.setAuth('BEARER_TOKEN');
embedLVAI.setWorkflows(['MA_TRO_LY']);
embedLVAI.setDatasources(['MA_NGUON_DU_LIEU']);
```

### Template Button

Nút chat được tùy chỉnh trong `index.html` với:
- Gradient background (xanh dương → xanh lá)
- Icon chat bubble
- Text "Chat với AI"
- Responsive: Ẩn text trên mobile, chỉ hiển thị icon

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px

## 🎯 Các section chính

1. **Header & Navigation**
   - Top bar với login, search, cart, language
   - Main navigation với menu items
   - Sticky header khi scroll

2. **Hero Banner**
   - Full-width banner với gradient overlay
   - Call-to-action button
   - Pagination dots

3. **Course Discovery**
   - Search bar
   - Filter buttons
   - Course cards với overlay

4. **Benefits**
   - 3 benefit cards với icons
   - Gradient backgrounds

5. **Membership CTA**
   - Call-to-action section

6. **Updates & Events**
   - List các cập nhật và sự kiện
   - Date icons

7. **Partners**
   - Grid layout cho đối tác

8. **Footer**
   - Social media links
   - Copyright information

## 🔧 Tùy chỉnh

### Thay đổi màu sắc

Chỉnh sửa CSS variables trong `styles.css`:

```css
:root {
    --primary-color: #4ececd;
    --accent-blue: #0066cc;
    --accent-green: #32cd32;
    /* ... */
}
```

### Thay đổi font

Font hiện tại là Inter từ Google Fonts. Để thay đổi:

1. Thay đổi link trong `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

2. Cập nhật trong `styles.css`:
```css
body {
    font-family: 'YourFont', sans-serif;
}
```

### Thêm section mới

1. Thêm HTML trong `index.html`
2. Thêm CSS tương ứng trong `styles.css`
3. Đảm bảo responsive cho mobile

## 📝 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### AI Chatbot không hiển thị
- Kiểm tra kết nối internet
- Kiểm tra console browser để xem lỗi
- Đảm bảo script `lvai.min.js` được tải thành công

### Menu không hoạt động trên mobile
- Kiểm tra file `script.js` đã được load
- Kiểm tra class name `.mobile-menu-btn` và `.nav-menu`

### Icons không hiển thị
- Kiểm tra SVG code trong HTML
- Đảm bảo `stroke` và `fill` attributes đúng

## 📄 License

Copyright © 2025 The Institute of Internal Auditors. All rights reserved.

## 👥 Thông tin liên hệ

**CÔNG TY CỔ PHẦN DOANH NGHIỆP XÃ HỘI INSTITUTE OF INTERNAL AUDITORS VIETNAM**

- Website: [IIA Vietnam](https://www.iia.org.vn)
- Email: contact@iia.org.vn

## 🙏 Acknowledgments

- **AI Chatbot**: CloudServices.vn
- **Icons**: Feather Icons (SVG)
- **Fonts**: Google Fonts - Inter
- **Design**: Inspired by modern corporate websites

## 📚 Tài liệu tham khảo

- [AI Chatbot Documentation](https://ai.cloudservices.vn/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

---

**Phiên bản**: 1.0.0  
**Cập nhật lần cuối**: 2025

