
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // منع التحديث الافتراضي للصفحة

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // هنا يمكنك إرسال البيانات إلى الخادم باستخدام fetch أو Ajax
    const formData = { name, email, message };

    fetch("https://example.com/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json())
        .then((data) => {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset(); // إعادة تعيين النموذج
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        });
});