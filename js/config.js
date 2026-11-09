// Password admin = SHA-256 hash (bukan teks asli).
// Ganti: buka console browser, jalankan:
crypto.subtle.digest("SHA-256",new TextEncoder().encode("PASSWORDBARU")).then(b=>console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")))
// lalu tempel hasilnya di passHash.
// logo & banner: isi dengan link Imgur langsung (https://i.imgur.com/xxxxx.png). Kosong = pakai default.
const CONFIG = {
 passHash: "c54feb7386bfacf07093365ff4b3b72a2dc9c6367fc9598a291dd1f8f6b3be68",
 siteName: "Nexotis Roleplay",
 logo: "https://i.imgur.com/KmeXtaH.jpeg",
 banner: "https://i.imgur.com/Keu5rKu.jpeg"
};
