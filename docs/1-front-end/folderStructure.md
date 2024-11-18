---
sidebar_position: 2
---

# Cấu trúc folder

![alt text](image.png)

### Giải thích:

1. **.next** folder chạy web sau khi build.
1. **.vscode** chứa các setting như prettier khi sử dụng vscode
1. **node_modules** chứa các thư viện cài đặt sau khi chạy npm install
1. **public** chứa các media tĩnh (img,docx,videos)

   ![alt text](image-3.png)

1. **app** chứa các page router của web
1. **components** chứa toàn bộ components tự setup để sử dụng làm giao diện

   ![alt text](image-4.png)
   ![alt text](image-5.png)

1. **constants** chứa các biến chung để sử dụng:

   ![alt text](image-1.png)
   ![alt text](image-2.png)

1. **hooks** chứa các hàm đặc biệt cho phép bạn sử dụng các tính năng của React như state và lifecycle

   ![alt text](image-7.png)
   ![alt text](image-6.png)

1. **interfaces** chứa các interface định nghĩa dùng chung

   ![alt text](image-8.png)
   ![alt text](image-9.png)

1. **lib** chứa hàm để sử dụng cho thư viện ui.aceternity - tailwind (không cần quan tâm)

1. **providers** config các provider của react query, mantine để áp dụng chung cho toàn bộ component mà không cần phải đi định nghĩa từng components

   ![alt text](image-10.png)
   ![alt text](image-11.png)
   ![alt text](image-12.png)

1. **stores** chứa các store (global state management - zustand) chung để sử dụng cho các việc authenticate các setting sidebar (lưu giá trị bật tắt, hành động), theme

   ![alt text](image-13.png)
   ![alt text](image-14.png)

1. **utils** chứa các hàm tiện dụng dùng chung nhóm tự tạo

   ![alt text](image-15.png)
   ![alt text](image-16.png)
