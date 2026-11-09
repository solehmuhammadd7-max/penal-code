const charges=[
 {
  "code": "A01",
  "name": "Driving without a driver's license",
  "category": "A-Lalu Lintas",
  "class": "Infraction",
  "time": 0,
  "fine": 10000,
  "desc": "Mengemudikan kendaraan tanpa memiliki SIM yang sah."
 },
 {
  "code": "A02",
  "name": "Reckless Driving",
  "category": "A-Lalu Lintas",
  "class": "Infraction",
  "time": 0,
  "fine": 12000,
  "desc": "Mengemudi secara ugal-ugalan dan membahayakan pengguna jalan lain."
 },
 {
  "code": "A03",
  "name": "Illegal Parking",
  "category": "A-Lalu Lintas",
  "class": "Infraction",
  "time": 0,
  "fine": 15000,
  "desc": "Memarkir kendaraan sembarangan di area terlarang atau mengganggu lalu lintas."
 },
 {
  "code": "A04",
  "name": "Unregistered Vehicle",
  "category": "A-Lalu Lintas",
  "class": "Infraction",
  "time": 0,
  "fine": 13500,
  "desc": "Mengemudikan kendaraan yang tidak memiliki plat nomor."
 },
 {
  "code": "A05",
  "name": "Hit and Run",
  "category": "A-Lalu Lintas",
  "class": "Misdemeanor",
  "time": 5,
  "fine": 18000,
  "desc": "Kabur dari lokasi kecelakaan tanpa bertanggung jawab."
 },
 {
  "code": "A06",
  "name": "Vehicular Manslaughter",
  "category": "A-Lalu Lintas",
  "class": "Infraction",
  "time": 0,
  "fine": 50000,
  "desc": "Kecelakaan lalu lintas yang menyebabkan korban jiwa."
 },
 {
  "code": "A07",
  "name": "Driving Against Traffic",
  "category": "A-Lalu Lintas",
  "class": "Infraction",
  "time": 0,
  "fine": 14000,
  "desc": "Mengemudi melawan arus lalu lintas."
 },
 {
  "code": "A08",
  "name": "Overloading Passengers",
  "category": "A-Lalu Lintas",
  "class": "Infraction",
  "time": 0,
  "fine": 20000,
  "desc": "Mengangkut penumpang melebihi kapasitas kendaraan."
 },
 {
  "code": "A09",
  "name": "Evading a Police Officer",
  "category": "A-Lalu Lintas",
  "class": "Infraction",
  "time": 0,
  "fine": 17000,
  "desc": "Menghindar atau tidak berhenti saat diperintahkan petugas."
 },
 {
  "code": "A10",
  "name": "Hitting Traffic Signs",
  "category": "A-Lalu Lintas",
  "class": "Infraction",
  "time": 0,
  "fine": 12000,
  "desc": "Menabrak rambu lalu lintas hingga rusak."
 },
 {
  "code": "A11",
  "name": "Illegal Vehicle Modification (Nitro & Flame Exhaust)",
  "category": "A-Lalu Lintas",
  "class": "Infraction",
  "time": 0,
  "fine": 14500,
  "desc": "Memasang modifikasi ilegal pada kendaraan seperti nitro dan knalpot api."
 },
 {
  "code": "A12",
  "name": "Street Racing",
  "category": "A-Lalu Lintas",
  "class": "Misdemeanor",
  "time": 15,
  "fine": 45000,
  "desc": "Mengikuti atau menyelenggarakan balap liar di jalan umum."
 },
 {
  "code": "A13",
  "name": "Breaking Through Police Barricade",
  "category": "A-Lalu Lintas",
  "class": "Infraction",
  "time": 0,
  "fine": 25000,
  "desc": "Menerobos barikade yang dipasang kepolisian."
 },
 {
  "code": "A14",
  "name": "Driving Under the Influence (Alcohol)",
  "category": "A-Lalu Lintas",
  "class": "Misdemeanor",
  "time": 5,
  "fine": 26500,
  "desc": "Mengemudi dalam keadaan mabuk akibat alkohol."
 },
 {
  "code": "A15",
  "name": "Excessive Speeding",
  "category": "A-Lalu Lintas",
  "class": "Infraction",
  "time": 0,
  "fine": 10500,
  "desc": "Mengemudi dengan kecepatan melebihi batas yang ditentukan."
 },
 {
  "code": "B01",
  "name": "Simple Assault",
  "category": "B-Kekerasan",
  "class": "Infraction",
  "time": 0,
  "fine": 15000,
  "desc": "Penganiayaan ringan terhadap orang lain."
 },
 {
  "code": "B02",
  "name": "Aggravated Assault",
  "category": "B-Kekerasan",
  "class": "Misdemeanor",
  "time": 10,
  "fine": 35000,
  "desc": "Penganiayaan berat yang menyebabkan luka serius."
 },
 {
  "code": "B03",
  "name": "Criminal Threats",
  "category": "B-Kekerasan",
  "class": "Misdemeanor",
  "time": 5,
  "fine": 20000,
  "desc": "Mengancam orang lain dengan kekerasan atau bahaya."
 },
 {
  "code": "B04",
  "name": "Public Assault",
  "category": "B-Kekerasan",
  "class": "Misdemeanor",
  "time": 3,
  "fine": 18000,
  "desc": "Melakukan pemukulan di tempat umum."
 },
 {
  "code": "B05",
  "name": "Attempted Murder",
  "category": "B-Kekerasan",
  "class": "Felony",
  "time": 40,
  "fine": 80000,
  "desc": "Berusaha membunuh orang lain namun tidak berhasil."
 },
 {
  "code": "B06",
  "name": "Murder",
  "category": "B-Kekerasan",
  "class": "Felony",
  "time": 60,
  "fine": 150000,
  "desc": "Dengan sengaja menghilangkan nyawa orang lain."
 },
 {
  "code": "B07",
  "name": "Kidnapping",
  "category": "B-Kekerasan",
  "class": "Felony",
  "time": 45,
  "fine": 90000,
  "desc": "Menculik atau membawa seseorang secara paksa."
 },
 {
  "code": "B08",
  "name": "Hostage Taking",
  "category": "B-Kekerasan",
  "class": "Felony",
  "time": 50,
  "fine": 100000,
  "desc": "Menyandera seseorang untuk tujuan tertentu."
 },
 {
  "code": "B09",
  "name": "Harassment",
  "category": "B-Kekerasan",
  "class": "Misdemeanor",
  "time": 5,
  "fine": 25000,
  "desc": "Pelecehan terhadap orang lain."
 },
 {
  "code": "B10",
  "name": "Brawl (Group Fight)",
  "category": "B-Kekerasan",
  "class": "Misdemeanor",
  "time": 8,
  "fine": 30000,
  "desc": "Tawuran antar kelompok."
 },
 {
  "code": "B11",
  "name": "Fighting",
  "category": "B-Kekerasan",
  "class": "Infraction",
  "time": 0,
  "fine": 12000,
  "desc": "Perkelahian antar individu."
 },
 {
  "code": "B12",
  "name": "Assaulting an Officer",
  "category": "B-Kekerasan",
  "class": "Felony",
  "time": 20,
  "fine": 60000,
  "desc": "Menyerang petugas yang sedang bertugas."
 },
 {
  "code": "B13",
  "name": "Intimidation",
  "category": "B-Kekerasan",
  "class": "Misdemeanor",
  "time": 4,
  "fine": 22000,
  "desc": "Menakut-nakuti atau menekan orang lain secara psikologis."
 },
 {
  "code": "B14",
  "name": "Torture",
  "category": "B-Kekerasan",
  "class": "Felony",
  "time": 30,
  "fine": 70000,
  "desc": "Menyiksa seseorang secara fisik maupun mental."
 },
 {
  "code": "C01",
  "name": "Petty Theft",
  "category": "C-Properti",
  "class": "Misdemeanor",
  "time": 3,
  "fine": 15000,
  "desc": "Pencurian barang bernilai kecil."
 },
 {
  "code": "C02",
  "name": "Grand Theft Auto",
  "category": "C-Properti",
  "class": "Misdemeanor",
  "time": 15,
  "fine": 40000,
  "desc": "Mencuri kendaraan milik orang lain."
 },
 {
  "code": "C03",
  "name": "Store Robbery",
  "category": "C-Properti",
  "class": "Felony",
  "time": 25,
  "fine": 70000,
  "desc": "Merampok toko dengan ancaman atau kekerasan."
 },
 {
  "code": "C04",
  "name": "Bank Robbery",
  "category": "C-Properti",
  "class": "Felony",
  "time": 70,
  "fine": 200000,
  "desc": "Merampok bank."
 },
 {
  "code": "C05",
  "name": "Burglary",
  "category": "C-Properti",
  "class": "Felony",
  "time": 20,
  "fine": 55000,
  "desc": "Membobol rumah untuk mencuri."
 },
 {
  "code": "C06",
  "name": "Property Damage",
  "category": "C-Properti",
  "class": "Misdemeanor",
  "time": 3,
  "fine": 20000,
  "desc": "Merusak properti milik orang lain."
 },
 {
  "code": "C07",
  "name": "Vandalism",
  "category": "C-Properti",
  "class": "Infraction",
  "time": 0,
  "fine": 12000,
  "desc": "Mencoret atau merusak fasilitas umum maupun pribadi."
 },
 {
  "code": "C08",
  "name": "Trespassing",
  "category": "C-Properti",
  "class": "Misdemeanor",
  "time": 2,
  "fine": 15000,
  "desc": "Memasuki properti tanpa izin pemilik."
 },
 {
  "code": "C09",
  "name": "Receiving Stolen Goods",
  "category": "C-Properti",
  "class": "Misdemeanor",
  "time": 15,
  "fine": 45000,
  "desc": "Menampung atau menadah barang hasil curian."
 },
 {
  "code": "C10",
  "name": "Fraud",
  "category": "C-Properti",
  "class": "Misdemeanor",
  "time": 10,
  "fine": 38000,
  "desc": "Menipu orang lain demi keuntungan pribadi."
 },
 {
  "code": "C11",
  "name": "Arson",
  "category": "C-Properti",
  "class": "Felony",
  "time": 25,
  "fine": 65000,
  "desc": "Membakar properti dengan sengaja."
 },
 {
  "code": "C12",
  "name": "Extortion",
  "category": "C-Properti",
  "class": "Felony",
  "time": 18,
  "fine": 50000,
  "desc": "Merampas atau memeras harta orang lain."
 },
 {
  "code": "C13",
  "name": "Theft of Government Vehicle",
  "category": "C-Properti",
  "class": "Felony",
  "time": 30,
  "fine": 90000,
  "desc": "Mencuri kendaraan dinas pemerintah atau instansi."
 },
 {
  "code": "D01",
  "name": "Possession of Narcotics (Light)",
  "category": "D-Narkotika",
  "class": "Misdemeanor",
  "time": 5,
  "fine": 25000,
  "desc": "Memiliki narkoba dalam jumlah kecil."
 },
 {
  "code": "D02",
  "name": "Possession of Narcotics (Heavy)",
  "category": "D-Narkotika",
  "class": "Felony",
  "time": 20,
  "fine": 60000,
  "desc": "Memiliki narkoba dalam jumlah besar."
 },
 {
  "code": "D03",
  "name": "Drug Use",
  "category": "D-Narkotika",
  "class": "Misdemeanor",
  "time": 3,
  "fine": 15000,
  "desc": "Menggunakan narkoba."
 },
 {
  "code": "D04",
  "name": "Drug Trafficking (Buying/Selling)",
  "category": "D-Narkotika",
  "class": "Felony",
  "time": 35,
  "fine": 90000,
  "desc": "Jual beli narkoba."
 },
 {
  "code": "D05",
  "name": "Drug Manufacturing",
  "category": "D-Narkotika",
  "class": "Felony",
  "time": 55,
  "fine": 150000,
  "desc": "Memproduksi narkoba."
 },
 {
  "code": "D06",
  "name": "Drug Smuggling",
  "category": "D-Narkotika",
  "class": "Felony",
  "time": 60,
  "fine": 180000,
  "desc": "Menyelundupkan narkoba."
 },
 {
  "code": "D07",
  "name": "Cannabis Cultivation",
  "category": "D-Narkotika",
  "class": "Misdemeanor",
  "time": 12,
  "fine": 40000,
  "desc": "Menanam ganja."
 },
 {
  "code": "D08",
  "name": "Possession of Drug Paraphernalia",
  "category": "D-Narkotika",
  "class": "Infraction",
  "time": 0,
  "fine": 10000,
  "desc": "Memiliki alat untuk mengonsumsi narkoba."
 },
 {
  "code": "D09",
  "name": "Driving Under the Influence (Drugs)",
  "category": "D-Narkotika",
  "class": "Misdemeanor",
  "time": 8,
  "fine": 30000,
  "desc": "Mengemudi dalam pengaruh narkoba."
 },
 {
  "code": "D10",
  "name": "Precursor Trafficking",
  "category": "D-Narkotika",
  "class": "Felony",
  "time": 45,
  "fine": 120000,
  "desc": "Memperdagangkan bahan prekursor narkoba."
 },
 {
  "code": "D11",
  "name": "Storing Illegal Chemicals",
  "category": "D-Narkotika",
  "class": "Misdemeanor",
  "time": 10,
  "fine": 35000,
  "desc": "Menyimpan bahan kimia ilegal."
 },
 {
  "code": "D12",
  "name": "Public Alcohol Consumption",
  "category": "D-Narkotika",
  "class": "Infraction",
  "time": 0,
  "fine": 8000,
  "desc": "Mengonsumsi alkohol di tempat umum."
 },
 {
  "code": "D13",
  "name": "Drug Distribution",
  "category": "D-Narkotika",
  "class": "Felony",
  "time": 30,
  "fine": 80000,
  "desc": "Mengedarkan narkoba kepada orang lain."
 },
 {
  "code": "E01",
  "name": "Carrying a Weapon Without a License",
  "category": "E-Senjata",
  "class": "Misdemeanor",
  "time": 8,
  "fine": 30000,
  "desc": "Membawa senjata tanpa izin resmi."
 },
 {
  "code": "E02-1",
  "name": "Illegal Firearm (First Class)",
  "category": "E-Senjata",
  "class": "Felony",
  "time": 40,
  "fine": 0,
  "desc": "Memiliki senjata api ilegal kelas pertama."
 },
 {
  "code": "E02-2",
  "name": "Illegal Firearm (Second Class)",
  "category": "E-Senjata",
  "class": "Felony",
  "time": 60,
  "fine": 0,
  "desc": "Memiliki senjata api ilegal kelas kedua."
 },
 {
  "code": "E02-3",
  "name": "Illegal Firearm (Third Class)",
  "category": "E-Senjata",
  "class": "Felony",
  "time": 100,
  "fine": 0,
  "desc": "Memiliki senjata api ilegal kelas ketiga."
 },
 {
  "code": "E03",
  "name": "Possession of Kevlar",
  "category": "E-Senjata",
  "class": "Felony",
  "time": 75,
  "fine": 0,
  "desc": "Memiliki rompi anti peluru (kevlar) secara ilegal."
 },
 {
  "code": "E04",
  "name": "Brandishing a Weapon",
  "category": "E-Senjata",
  "class": "Misdemeanor",
  "time": 10,
  "fine": 35000,
  "desc": "Mengacungkan senjata kepada orang lain."
 },
 {
  "code": "E05",
  "name": "Illegal Explosives",
  "category": "E-Senjata",
  "class": "Felony",
  "time": "Life",
  "fine": 0,
  "desc": "Memiliki bahan peledak ilegal."
 },
 {
  "code": "E06",
  "name": "Illegal Ammunition",
  "category": "E-Senjata",
  "class": "Misdemeanor",
  "time": 6,
  "fine": 25000,
  "desc": "Memiliki amunisi tanpa izin."
 },
 {
  "code": "E07",
  "name": "Carrying a Bladed Weapon",
  "category": "E-Senjata",
  "class": "Misdemeanor",
  "time": 3,
  "fine": 15000,
  "desc": "Membawa senjata tajam."
 },
 {
  "code": "E08",
  "name": "Illegal Weapon Modification",
  "category": "E-Senjata",
  "class": "Felony",
  "time": 18,
  "fine": 50000,
  "desc": "Memodifikasi senjata secara ilegal."
 },
 {
  "code": "E09",
  "name": "Red Money 20k-50k",
  "category": "E-Senjata",
  "class": "Felony",
  "time": 20,
  "fine": 0,
  "desc": "Memiliki uang merah (hasil kejahatan) senilai 20k-50k."
 },
 {
  "code": "E10",
  "name": "Red Money 50k-100k",
  "category": "E-Senjata",
  "class": "Felony",
  "time": 30,
  "fine": 0,
  "desc": "Memiliki uang merah (hasil kejahatan) senilai 50k-100k."
 },
 {
  "code": "E11",
  "name": "Red Money 100k-200k",
  "category": "E-Senjata",
  "class": "Felony",
  "time": 50,
  "fine": 0,
  "desc": "Memiliki uang merah (hasil kejahatan) senilai 100k-200k."
 },
 {
  "code": "F01",
  "name": "Highway Robbery",
  "category": "F-Kriminal Berat",
  "class": "Felony",
  "time": 35,
  "fine": 0,
  "desc": "Pembegalan di jalan."
 },
 {
  "code": "F02",
  "name": "Convenience Store Robbery",
  "category": "F-Kriminal Berat",
  "class": "Felony",
  "time": 25,
  "fine": 0,
  "desc": "Perampokan warung."
 },
 {
  "code": "F03",
  "name": "Car Theft",
  "category": "F-Kriminal Berat",
  "class": "Misdemeanor",
  "time": 15,
  "fine": 0,
  "desc": "Pencurian mobil."
 },
 {
  "code": "F04",
  "name": "Attack on Government Agency",
  "category": "F-Kriminal Berat",
  "class": "Felony",
  "time": 20,
  "fine": 0,
  "desc": "Menyerang instansi yang sedang bertugas."
 },
 {
  "code": "F05",
  "name": "Hostage Taking (Civilian/Agency)",
  "category": "F-Kriminal Berat",
  "class": "Felony",
  "time": 70,
  "fine": 0,
  "desc": "Menyandera warga atau anggota instansi."
 },
 {
  "code": "F06",
  "name": "Armed Gang War",
  "category": "F-Kriminal Berat",
  "class": "Felony",
  "time": 30,
  "fine": 0,
  "desc": "Peperangan bersenjata antar kelompok."
 },
 {
  "code": "F07",
  "name": "Prison Escape",
  "category": "F-Kriminal Berat",
  "class": "Felony",
  "time": 35,
  "fine": 90000,
  "desc": "Melarikan diri dari penjara."
 },
 {
  "code": "F08",
  "name": "Aiding a Prison Escape",
  "category": "F-Kriminal Berat",
  "class": "Felony",
  "time": 18,
  "fine": 55000,
  "desc": "Membantu tahanan melarikan diri."
 },
 {
  "code": "F09",
  "name": "Human Trafficking",
  "category": "F-Kriminal Berat",
  "class": "Felony",
  "time": 75,
  "fine": 200000,
  "desc": "Memperdagangkan manusia."
 },
 {
  "code": "F10",
  "name": "Bribery of an Officer",
  "category": "F-Kriminal Berat",
  "class": "Felony",
  "time": 22,
  "fine": 70000,
  "desc": "Menyuap petugas."
 },
 {
  "code": "F11",
  "name": "Terrorism",
  "category": "F-Kriminal Berat",
  "class": "Felony",
  "time": 80,
  "fine": 0,
  "desc": "Tindakan terorisme."
 },
 {
  "code": "F12",
  "name": "Money Laundering",
  "category": "F-Kriminal Berat",
  "class": "Felony",
  "time": 45,
  "fine": 120000,
  "desc": "Mencuci uang hasil kejahatan."
 },
 {
  "code": "F13",
  "name": "Murder",
  "category": "F-Kriminal Berat",
  "class": "Felony",
  "time": "Life",
  "fine": 0,
  "desc": "Pembunuhan dengan hukuman berat."
 },
 {
  "code": "F15",
  "name": "Flecca Bank Robbery",
  "category": "F-Kriminal Berat",
  "class": "Felony",
  "time": 100,
  "fine": 0,
  "desc": "Perampokan Bank Flecca."
 },
 {
  "code": "F16",
  "name": "Shooting Civilian/Police",
  "category": "F-Kriminal Berat",
  "class": "Felony",
  "time": 70,
  "fine": 0,
  "desc": "Menembak warga sipil atau polisi."
 },
 {
  "code": "G01",
  "name": "Online Trade Fraud",
  "category": "G-Ekonomi",
  "class": "Misdemeanor",
  "time": 8,
  "fine": 30000,
  "desc": "Menipu dalam transaksi jual beli."
 },
 {
  "code": "G02",
  "name": "Counterfeiting Money",
  "category": "G-Ekonomi",
  "class": "Felony",
  "time": 35,
  "fine": 100000,
  "desc": "Memalsukan atau mengedarkan uang palsu."
 },
 {
  "code": "G03",
  "name": "Unlicensed Selling",
  "category": "G-Ekonomi",
  "class": "Infraction",
  "time": 0,
  "fine": 12000,
  "desc": "Berjualan tanpa izin usaha."
 },
 {
  "code": "G04",
  "name": "Embezzlement",
  "category": "G-Ekonomi",
  "class": "Felony",
  "time": 28,
  "fine": 80000,
  "desc": "Menggelapkan dana milik orang lain atau perusahaan."
 },
 {
  "code": "G05",
  "name": "Unpaid Taxes",
  "category": "G-Ekonomi",
  "class": "Infraction",
  "time": 0,
  "fine": 20000,
  "desc": "Tidak membayar pajak yang diwajibkan."
 },
 {
  "code": "G06",
  "name": "Illegal Gambling",
  "category": "G-Ekonomi",
  "class": "Misdemeanor",
  "time": 5,
  "fine": 25000,
  "desc": "Berjudi atau menyelenggarakan judi secara ilegal."
 },
 {
  "code": "G07",
  "name": "Hoarding Goods",
  "category": "G-Ekonomi",
  "class": "Misdemeanor",
  "time": 6,
  "fine": 30000,
  "desc": "Menimbun barang demi keuntungan pribadi."
 },
 {
  "code": "G08",
  "name": "Price Manipulation",
  "category": "G-Ekonomi",
  "class": "Misdemeanor",
  "time": 3,
  "fine": 22000,
  "desc": "Memanipulasi harga barang atau jasa."
 },
 {
  "code": "G09",
  "name": "Forged Business License",
  "category": "G-Ekonomi",
  "class": "Misdemeanor",
  "time": 6,
  "fine": 28000,
  "desc": "Memalsukan surat izin usaha."
 },
 {
  "code": "G10",
  "name": "Illegal Business",
  "category": "G-Ekonomi",
  "class": "Felony",
  "time": 18,
  "fine": 60000,
  "desc": "Menjalankan bisnis yang melanggar hukum."
 },
 {
  "code": "G11",
  "name": "Illegal Transaction",
  "category": "G-Ekonomi",
  "class": "Misdemeanor",
  "time": 10,
  "fine": 40000,
  "desc": "Melakukan transaksi yang dilarang hukum."
 },
 {
  "code": "H01",
  "name": "Obstructing an Officer",
  "category": "H-Lain-lain",
  "class": "Misdemeanor",
  "time": 6,
  "fine": 25000,
  "desc": "Menghalangi petugas yang sedang menjalankan tugas."
 },
 {
  "code": "H02",
  "name": "False Statement",
  "category": "H-Lain-lain",
  "class": "Misdemeanor",
  "time": 8,
  "fine": 30000,
  "desc": "Memberikan keterangan palsu kepada petugas."
 },
 {
  "code": "H03",
  "name": "Ignoring Officer's Orders",
  "category": "H-Lain-lain",
  "class": "Infraction",
  "time": 0,
  "fine": 12000,
  "desc": "Mengabaikan perintah petugas yang sah."
 },
 {
  "code": "H04",
  "name": "Disturbing the Peace",
  "category": "H-Lain-lain",
  "class": "Infraction",
  "time": 0,
  "fine": 10000,
  "desc": "Membuat keributan yang mengganggu ketertiban."
 },
 {
  "code": "H05",
  "name": "Entering Restricted Area",
  "category": "H-Lain-lain",
  "class": "Misdemeanor",
  "time": 3,
  "fine": 18000,
  "desc": "Memasuki area terlarang."
 },
 {
  "code": "H06",
  "name": "Impersonating via Fake Uniform",
  "category": "H-Lain-lain",
  "class": "Misdemeanor",
  "time": 12,
  "fine": 45000,
  "desc": "Menggunakan seragam instansi secara palsu."
 },
 {
  "code": "H07",
  "name": "Impersonating an Officer",
  "category": "H-Lain-lain",
  "class": "Misdemeanor",
  "time": 15,
  "fine": 50000,
  "desc": "Menyamar sebagai petugas."
 },
 {
  "code": "H08",
  "name": "Evading Arrest",
  "category": "H-Lain-lain",
  "class": "Misdemeanor",
  "time": 10,
  "fine": 35000,
  "desc": "Kabur saat hendak ditangkap."
 },
 {
  "code": "H09",
  "name": "Insulting an Officer",
  "category": "H-Lain-lain",
  "class": "Misdemeanor",
  "time": 4,
  "fine": 20000,
  "desc": "Menghina petugas yang sedang bertugas."
 },
 {
  "code": "H10",
  "name": "Non-Cooperation",
  "category": "H-Lain-lain",
  "class": "Infraction",
  "time": 0,
  "fine": 8000,
  "desc": "Tidak kooperatif terhadap petugas."
 },
 {
  "code": "H11",
  "name": "Emergency Line Misuse",
  "category": "H-Lain-lain",
  "class": "Misdemeanor",
  "time": 2,
  "fine": 15000,
  "desc": "Menyalahgunakan nomor darurat."
 }
];
