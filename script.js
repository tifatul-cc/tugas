function orderNow(menu) {
  alert(`Anda memilih untuk memesan: ${menu}`);
}

document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Pesanan Anda telah dikirim! Terima kasih telah memesan ☕");
  this.reset();
});
