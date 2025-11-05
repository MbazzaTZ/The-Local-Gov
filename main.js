document.addEventListener("DOMContentLoaded", () => {
  // ===== PAYMENTS =====
  const paymentForm = document.getElementById("paymentForm");
  const receiptMsg = document.getElementById("receiptMsg");

  paymentForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const service = document.getElementById("service").value;
    const amount = document.getElementById("amount").value;
    const method = document.getElementById("method").value;
    const receipt = `✅ Payment Successful!\nService: ${service}\nAmount: TZS ${amount}\nMethod: ${method}`;
    receiptMsg.textContent = receipt;
    localStorage.setItem("lastPayment", receipt);
  });

  // ===== CONTACT =====
  const contactForm = document.getElementById("contactForm");
  const contactMsg = document.getElementById("contactMsg");
  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    contactMsg.textContent = `📬 Thank you, ${name}! Your message has been received.`;
  });

  // ===== CERTIFICATE GENERATOR =====
  const certForm = document.getElementById("certificateForm");
  const certPreview = document.getElementById("certificatePreview");

  certForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const type = document.getElementById("certificateType").value;
    const name = document.getElementById("fullName").value;
    const nida = document.getElementById("nationalId").value;
    const address = document.getElementById("address").value;
    const date = new Date().toLocaleDateString();

    document.getElementById("certTitle").textContent = `${type} (Preview)`;
    document.getElementById("certName").textContent = name;
    document.getElementById("certId").textContent = nida;
    document.getElementById("certAddress").textContent = address;
    document.getElementById("certDate").textContent = date;

    certPreview.classList.remove("hidden");
  });

  // ===== DASHBOARD CHART =====
  const ctx = document.getElementById("revenueChart");
  if (ctx) {
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Property Tax", "Business License", "Land Rent", "Service Levy"],
        datasets: [{
          label: "Revenue (TZS Millions)",
          data: [420, 310, 260, 150],
          backgroundColor: ["#FFD700", "#FFB800", "#F4D03F", "#F7DC6F"]
        }]
      },
      options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
      }
    });
  }
});