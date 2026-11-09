// Password admin = SHA-256 hash (bukan teks asli).
// Ganti: buka console browser, jalankan:
// crypto.subtle.digest("SHA-256",new TextEncoder().encode("PASSWORDBARU")).then(b=>console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")))
// lalu tempel hasilnya di passHash.
// logo & banner: isi dengan link Imgur langsung (https://i.imgur.com/xxxxx.png). Kosong = pakai default.
const CONFIG = {
 passHash: "aaf93b35c8434edac2afcdeffe8eb10c7c8de15aa6079766e253cd0c5c5ea518",
 siteName: "Nexotis Roleplay",
 logo: "https://i.imgur.com/KmeXtaH.jpeg",
 banner: "https://i.imgur.com/Keu5rKu.jpeg"
};
