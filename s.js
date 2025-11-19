// 1️⃣ DATA CUACA DALAM ARRAY OBJEK
const cuacaMingguan = [
    { hari: "Senin", suhu: 30, kondisi: "normal" },
    { hari: "Selasa", suhu: 33, kondisi: "panas" },
    { hari: "Rabu", suhu: 27, kondisi: "sejuk" },
    { hari: "Kamis", suhu: 32, kondisi: "panas" },
    { hari: "Jumat", suhu: 29, kondisi: "normal" },
    { hari: "Sabtu", suhu: 34, kondisi: "panas" },
    { hari: "Minggu", suhu: 26, kondisi: "sejuk" }
];

// Variabel tambahan
let suhuTertinggi = -999;
let hariTertinggi = "";

let suhuTerendah = 999;
let hariTerendah = "";

let totalSuhu = 0;

// Ambil tabel
const tabel = document.getElementById("tabelCuaca");

// PERULANGAN MENAMPILKAN DATA
for (let i = 0; i < cuacaMingguan.length; i++) {
    const data = cuacaMingguan[i];

    totalSuhu += data.suhu;

    // CARI SUHU TERTINGGI
    if (data.suhu > suhuTertinggi) {
        suhuTertinggi = data.suhu;
        hariTertinggi = data.hari;
    }

    // CARI SUHU TERENDAH
    if (data.suhu < suhuTerendah) {
        suhuTerendah = data.suhu;
        hariTerendah = data.hari;
    }

    //  PERCABANGAN KETERANGAN
    let keterangan = "";
    if (data.suhu > 32) {
        keterangan = "Cuaca Panas";
    } else if (data.suhu >= 28 && data.suhu <= 32) {
        keterangan = "Cuaca Normal";
    } else {
        keterangan = "Cuaca Sejuk";
    }

    // TAMBAHKAN KE DALAM TABEL
    tabel.innerHTML += `
        <tr>
            <td>${data.hari}</td>
            <td>${data.suhu}</td>
            <td>${data.kondisi}</td>
            <td>${keterangan}</td>
        </tr>
    `;
}

// HITUNG RATA-RATA
let rataRata = totalSuhu / cuacaMingguan.length;

// 5️⃣ OUTPUT HASIL AKHIR
document.getElementById("hasilAkhir").innerHTML = `
    <h3>Hasil Akhir Pengolahan Data Cuaca</h3>
    <p><b>Rata-rata suhu mingguan:</b> ${rataRata.toFixed(2)} °C</p>
    <p><b>Suhu tertinggi:</b> ${suhuTertinggi}°C (Hari ${hariTertinggi})</p>
    <p><b>Suhu terendah:</b> ${suhuTerendah}°C (Hari ${hariTerendah})</p>
`;