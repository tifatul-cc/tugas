// =======================
// DATA MENU AWAL
// =======================
let menuList = [
  { nama: "Espresso Coffee", harga: 25000, deskripsi: "Kopi hitam pekat dengan aroma kuat dan rasa khas Italia.", gambar: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
  { nama: "Americano Coffee", harga: 28000, deskripsi: "Campuran espresso dan air panas dengan cita rasa ringan.", gambar: "https://images.unsplash.com/photo-1470337458703-46ad1756a187" },
  { nama: "Cappuccino Coffee", harga: 30000, deskripsi: "Perpaduan sempurna espresso, susu panas, dan buih lembut.", gambar: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03" },
];

// =======================
// RENDER MENU KE HALAMAN
// =======================
function renderMenu() {
  const container = document.querySelector(".menu-container");
  container.innerHTML = "";

  menuList.forEach((item) => {
    const menuHTML = `
      <div class="menu-item">
        <img src="${item.gambar}" alt="${item.nama}">
        <h3>${item.nama}</h3>
        <p>${item.deskripsi}</p>
        <span class="price">Rp ${item.harga.toLocaleString()}</span>
        <button class="btn-order" onclick="pilihMenu('${item.nama}')">Pesan</button>
      </div>
    `;
    container.innerHTML += menuHTML;
  });
}
renderMenu();

// =======================
// PILIH MENU DARI DAFTAR
// =======================
function pilihMenu(menu) {
  document.getElementById("menu").value = menu;
  window.location.href = "#order"; // scroll ke form
}

// =======================
// FORM PEMESANAN
// =======================
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const menu = document.getElementById("menu").value;
  const jumlah = document.getElementById("jumlah").value;
  const no_wa = "6281249226332";

  // Hitung total harga
  const item = menuList.find((m) => m.nama === menu);
  const total = item ? item.harga * jumlah : 0;

  const pesan = 
    `Halo Coffee Shop! 👋%0A` +
    `Saya ingin memesan:%0A` +
    `👤 Nama: ${nama}%0A` +
    `🍽️ Menu: ${menu}%0A` +
    `🔢 Jumlah: ${jumlah}%0A` +
    `💰 Total: Rp ${total.toLocaleString()}%0A%0A` +
    `Terima kasih ☕`;

  const url = `https://wa.me/${no_wa}?text=${pesan}`;
  window.open(url, "_blank");

  // Kirim laporan penjualan otomatis ke nomor WA admin (nomor kamu)
  const laporan = 
    `📦 Laporan Penjualan Baru%0A` +
    `=========================%0A` +
    `Nama: ${nama}%0A` +
    `Menu: ${menu}%0A` +
    `Jumlah: ${jumlah}%0A` +
    `Total: Rp ${total.toLocaleString()}%0A` +
    `=========================%0A` +
    `Pesanan telah tercatat.`;
    
  const urlLaporan = `https://wa.me/${no_wa}?text=${laporan}`;
  setTimeout(() => {
    window.open(urlLaporan, "_blank");
  }, 1500);
});

// =======================
// TAMBAH MENU BARU
// =======================
function tambahMenuBaru() {
  const namaBaru = prompt("Masukkan nama menu baru:");
  const hargaBaru = prompt("Masukkan harga menu baru:");
  const deskripsiBaru = prompt("Masukkan deskripsi menu:");
  const gambarBaru = prompt("Masukkan URL gambar menu:");

  if (namaBaru && hargaBaru && deskripsiBaru && gambarBaru) {
    menuList.push({
      nama: namaBaru,
      harga: parseInt(hargaBaru),
      deskripsi: deskripsiBaru,
      gambar: gambarBaru
    });
    renderMenu();
    alert("Menu baru berhasil ditambahkan ✅");
  } else {
    alert("Semua data menu harus diisi!");
  }
}
