---
sidebar_position: 1
---

# Quy tắc sử dụng state

_State là một đối tượng chứa dữ liệu hoặc giá trị thay đổi của một component. Nó giúp React theo dõi và quản lý các thay đổi về dữ liệu, từ đó cập nhật giao diện một cách tự động khi dữ liệu này thay đổi. State là một trong những tính năng quan trọng để tạo ra giao diện động và tương tác trong React._

Ví dụ về cách đặt chuẩn:

```ts
const [username, setUsername] = useState("");
```

Các quy tắc sử dụng state có thể được mô tả như sau:

1. Khởi tạo state:
   - useState nhận vào một giá trị khởi tạo (trong trường hợp này là một chuỗi rỗng ""), và trả về một mảng gồm hai phần tử:
   - username: giá trị hiện tại của state.
   - setUsername: hàm dùng để cập nhật giá trị của state.
2. Quy tắc đặt tên:
   - State thường được đặt tên theo kiểu camelCase, như username, để thể hiện rõ đây là một biến trạng thái (state).
   - Hàm cập nhật state (thường là set + tên state) được đặt theo quy tắc setUsername trong trường hợp này.
3. Chỉ thay đổi state thông qua hàm setter:
   - setUsername phải được sử dụng để thay đổi giá trị của state. Không được thay đổi giá trị của username trực tiếp.
   - Việc thay đổi trực tiếp giá trị state (ví dụ: username = "new value") sẽ không kích hoạt việc render lại component.
4. Cập nhật state là bất đồng bộ:
   - Cập nhật state qua setUsername không xảy ra ngay lập tức. React sẽ lên lịch lại việc render component sau khi state được cập nhật, vì vậy ngay lập tức truy cập username sau khi gọi setUsername có thể không trả về giá trị mới.
5. Cập nhật state có thể dùng hàm callback:

   - Nếu bạn cần cập nhật state dựa trên giá trị hiện tại của state (ví dụ: tăng giá trị, thay đổi phần của chuỗi), có thể truyền một hàm vào setUsername thay vì một giá trị trực tiếp:
     javascript
     Copy code

     ```ts
     setUsername((prevUsername) => prevUsername + " updated");
     ```

6. Tránh gọi state cập nhật trong vòng lặp hoặc điều kiện không cần thiết:
   - Đảm bảo rằng các cuộc gọi setUsername không nằm trong các vòng lặp hoặc các điều kiện mà có thể khiến state bị cập nhật liên tục, gây ra render lại vô hạn.
7. Tránh thay đổi state không cần thiết:
   - Chỉ thay đổi state khi thực sự cần thiết. Việc thay đổi quá nhiều lần mà không có lý do hợp lý có thể làm giảm hiệu suất của ứng dụng.
