const form = document.getElementById('form');
const nama = document.getElementById('nama');
const no_hp = document.getElementById('no_hp');
const asal = document.getElementById('asal');
const tujuan = document.getElementById('tujuan');
const plat = document.getElementById('plat');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nilaiNama = nama.value;
    const nilaiNomorHp = no_hp.value;
    const nilaiAsal = asal.value;
    const nilaiTujuan = tujuan.value;
    const nilaiPlat = plat.value;

    localStorage.setItem('nilai-nama', nilaiNama);
    localStorage.setItem('nilai-no_hp', nilaiNomorHp);
    localStorage.setItem('nilai-asal', nilaiAsal);
    localStorage.setItem('nilai-tujuan', nilaiTujuan);
    localStorage.setItem('nilai-plat', nilaiPlat);

    window.location.href = 'track.html';
})