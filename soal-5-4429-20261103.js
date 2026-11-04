const namaSiswa = [
    "nova",
    "faqih",
    "afgan",
    "lia",
    "nazwa"
];

const nilaiSiswa = [89, 97, 74, 90, 86];

console.log("Jumlah siswa:", namaSiswa.length);

console.log("Nama siswa pertama:", namaSiswa[0]);
console.log("Nilai siswa pertama:", nilaiSiswa[0]);

console.log("Nama siswa terakhir:", namaSiswa[namaSiswa.length - 1]);
console.log("Nilai siswa terakhir:", nilaiSiswa[nilaiSiswa.length - 1]);

nilaiSiswa[1] = 89;
nilaiSiswa[4] = 90;

console.log("Nama siswa ketiga:", namaSiswa[2]);
console.log("Nilai siswa ketiga:", nilaiSiswa[2]);

console.log("Seluruh nama siswa:", namaSiswa);
console.log("Seluruh nilai siswa:", nilaiSiswa);