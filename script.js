document.getElementById("btn").addEventListener("click", () => {
  const now = new Date().toLocaleString("vi-VN");
  document.getElementById("msg").textContent = "Xin chào! Bây giờ là " + now;
});
