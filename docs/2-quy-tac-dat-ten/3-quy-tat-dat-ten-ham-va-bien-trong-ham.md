# Quy tắc đặt tên hàm và biến trong hàm

Tất cả các hàm action của react viết dưới dạng arrow function

```ts
const handleSendEmail = () => {};
```

Các hàm tiện dụng (utils) hoặc hàm trong zustand viết dưới dạng function

```ts
function sendEmail() {}
```

:::tip
Chữ cái đầu tiên của hàm là chữ thường các từ sau được in hoa chữ cái đầu tiên
Các biến trong hàm cũng không được in hoa chữ cái đầu tiên hoặc là một số và các từ sau được ngăn cách bơi các từ in hoa đầu

```ts
function sendEmail(userEmail, contentHtml) {}
```

:::

:::danger[Không được]
1 hàm chỉ nên thực hiện 1 nhiệm vụ

Sai:

```ts
function checkAndSendEmail() {}
```

:::
