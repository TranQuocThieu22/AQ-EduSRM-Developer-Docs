# Quy tắc sử dụng useEffect

_useEffect là một hook quan trọng trong React, giúp thực hiện các tác vụ phụ (side effects) trong các component function. Các tác vụ phụ này bao gồm cập nhật dữ liệu, gọi API, thiết lập subscription, hoặc thay đổi DOM._

### Cách sử dụng

Cú pháp cơ bản của useEffect như sau:

```ts
useEffect(() => {
  // Tác vụ cần thực hiện
  return () => {
    // Dọn dẹp (nếu cần thiết)
  };
}, [dependencies]);
```

- Callback function: Hàm đầu tiên trong useEffect là nơi đặt các tác vụ phụ.
- Return function (optional): Được gọi là "cleanup function", dùng để dọn dẹp khi component bị gỡ bỏ khỏi DOM hoặc khi các dependency thay đổi.
- Dependencies array: Một mảng gồm các biến mà khi chúng thay đổi, useEffect sẽ được kích hoạt lại.

:::warning[Lưu ý]
useEffect luôn phải đặt ở cuối xử lí login trong tsx trước return html.
ví dụ:

```tsx
import React, { useState, useEffect } from "react";

const LoginComponent: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  // Đặt useEffect ở cuối cùng, sau các hàm xử lý
  useEffect(() => {
    if (isLoggedIn) {
      console.log("Login successful");
      // Thực hiện các tác vụ khác khi đăng nhập thành công
    }
  }, [isLoggedIn]);

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginComponent;
```

Trong ví dụ trên, useEffect được đặt ở cuối cùng của phần xử lý logic sau các hàm và các biến state trước khi tới phần return. Điều này giúp useEffect hoạt động một cách có tổ chức và không gây nhầm lẫn.

Đây là một cách tốt để đảm bảo rằng useEffect chỉ chạy sau khi toàn bộ các xử lý logic khác đã được xác định.
:::
