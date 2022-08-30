const menu = document.getElementById("menu-btn");
const close = document.getElementById("close-btn");
const sideNav = document.querySelector(".left-aside");
const themeToggler = document.querySelector(".theme-toggler");

menu.addEventListener("click", ()=> {
  sideNav.style.display = "block";
});

close.addEventListener("click", ()=> {
  sideNav.style.display = "none";
});

themeToggler.addEventListener("click", ()=> {
  document.body.classList.toggle("dark-theme");

  themeToggler.querySelector("i:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("i:nth-child(2)").classList.toggle("active");
});


orders.forEach(order => {
  const tr = document.createElement('tr');
  const trContent = ` <td>${order.productName}</td>
                      <td class="product-number">${order.productNummber}</td>
                      <td>${order.paymentStatus}</td>
                      <td class="${order.shipping === "Declined" ? "error" : order.shipping === "Pending" ? "warning" : "primary"}">${order.shipping}</td>
                      <td class="primary">Details</td>`;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
})