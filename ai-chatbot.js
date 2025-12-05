///*!
//* Copyright 2025, Created by AI-Agent, All rights reserved. 
//* AI Agent: Trợ lý hỗ trợ Website IAA
//* Tenant: CÔNG TY CỔ PHẦN DOANH NGHIỆP XÃ HỘI INSTITUTE OF INTERNAL AUDITORS VIETNAM
//*/

// Khởi tạo AI Chatbot sau khi script được tải
(function() {
    // Kiểm tra xem script đã được tải chưa
    function initAIChatbot() {
        if (typeof SafeLVAI !== 'undefined') {
            // Khởi tạo AI Chatbot với mã đã được mã hóa
            const embedLVAI = new SafeLVAI('eyJhcHBJZCI6IjNkNWU4ZTI3MzM0ODQyYzk4MzdmNzYwYzMyMzQ5ZTg3IiwiYmFzZVVybCI6Imh0dHBzOi8vYWkuY2xvdWRzZXJ2aWNlcy52biJ9');

            // Khởi tạo nút bắt đầu (chỉ hiển thị nút, khung chat sẽ mở khi người dùng bấm)
            embedLVAI.initButton();

            // Nếu muốn hiển thị khung chat ngay lập tức, sử dụng:
            // embedLVAI.initChatBox();

            // Các hàm API khác có thể sử dụng:
            // embedLVAI.setAuth('BEARER_TOKEN'); // Xác thực người dùng
            // embedLVAI.setWorkflows(['MA_TRO_LY']); // Thiết lập danh sách trợ lý
            // embedLVAI.setDatasources(['MA_NGUON_DU_LIEU']); // Thiết lập nguồn dữ liệu
            // embedLVAI.setDocuments(['MA_TAI_LIEU']); // Thiết lập tài liệu
            // embedLVAI.setReport('URL_REPORT'); // Thiết lập báo cáo PowerBI
        } else {
            // Nếu script chưa tải, thử lại sau 100ms
            setTimeout(initAIChatbot, 100);
        }
    }

    // Đợi DOM sẵn sàng
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // Đợi script lvai.min.js được tải
            setTimeout(initAIChatbot, 500);
        });
    } else {
        setTimeout(initAIChatbot, 500);
    }
})();

