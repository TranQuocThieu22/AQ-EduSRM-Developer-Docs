# Quy tắt đặt tên constants

Ví dụ:

```ts
export const COLORS = {
  mantineBackgroundPrimary:
    "light-dark(var(--mantine-color-white), var(--mantine-color-dark))",
  mantineBackgroundSecondary:
    "light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-8))",
  mantineBackgroundBlueLight: "var(--mantine-color-blue-light)",
};
```

Trong ví dụ trên, quy tắc đặt tên cho các constants có thể được mô tả như sau:

1. Tất cả tên biến của constants đều viết hoa: COLORS. Đây là cách thông dụng để dễ dàng phân biệt constants với các biến khác trong mã nguồn.
1. Đặt tên theo phạm vi sử dụng (scope): Các keys trong COLORS bắt đầu với từ khóa mantineBackground, thể hiện rõ ràng rằng chúng liên quan đến background của Mantine UI.
1. Cấu trúc tên chi tiết theo thứ tự đặc điểm chung đến cụ thể:
   - Phần đầu là mantineBackground, chỉ rõ các hằng này liên quan đến background của Mantine.
   - Phần cuối cùng là chi tiết màu cụ thể: Primary, Secondary, BlueLight, giúp phân biệt các loại background.
1. Cách ngăn cách các thành phần trong tên biến:
   - Sử dụng camelCase (chữ cái đầu của từ thứ hai trở đi viết hoa), giúp tên biến dễ đọc.
   - Phần "Light" hoặc "Dark" thêm vào sau màu để làm rõ sắc thái.
1. Tránh các từ ngữ thừa: Đặt tên cụ thể nhưng ngắn gọn, không chứa từ ngữ không cần thiết để duy trì tính rõ ràng và gọn gàng.

Tóm tắt quy tắc:

- Tên constants chung viết hoa toàn bộ.
- Tên thuộc tính theo dạng camelCase, từ chung đến cụ thể.
- Tránh từ ngữ thừa, chỉ dùng từ khóa mô tả rõ ràng, ngắn gọn.
