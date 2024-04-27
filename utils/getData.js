const map = document.getElementById('map');
const nama = localStorage.getItem('nilai-nama');
const no_hp = localStorage.getItem('nilai-no_hp');
const asal = localStorage.getItem('nilai-asal');
const tujuan = localStorage.getItem('nilai-tujuan');
const plat = localStorage.getItem('nilai-plat');


document.getElementById('nama').innerText = nama;
document.getElementById('no_hp').innerText = no_hp;
document.getElementById('plat').innerText = plat;
document.getElementById('asal').innerText = asal;
document.getElementById('tujuan').innerText = tujuan;

map.addEventListener('click', function(e) {
    if (asal === 'Halte SMP 6') {
        const koordinatAsal = "-6.858894307253639, 109.12600904703892";
    } else if (asal === 'Halte Yos Sudarso') {
        const koordinatAsal = "-6.85462980066191, 109.13632385767966";
    } else if (asal === 'Halte UPTD SPF SMPN 7 Kota Tegal') {
        const koordinatAsal = "-6.874869159391598, 109.12771860000753";
    } else if (asal === 'Terminal Tegal') {
        const koordinatAsal = "-6.872592013388431, 109.10778548651574";
    } else {
        const koordinatAsal = "-6.877636725534338, 109.14042347302396";
    }

    if (tujuan === 'Halte SMP 6') {
        const koordinatTujuan = "-6.858894307253639, 109.12600904703892";
    } else if (tujuan === 'Halte Yos Sudarso') {
        const koordinatTujuan = "-6.85462980066191, 109.13632385767966";
    } else if (tujuan === 'Halte UPTD SPF SMPN 7 Kota Tegal') {
        const koordinatTujuan = "-6.874869159391598, 109.12771860000753";
    } else if (tujuan === 'Terminal Tegal') {
        const koordinatTujuan = "-6.872592013388431, 109.10778548651574";
    } else {
        const koordinatTujuan = "-6.877636725534338, 109.14042347302396";
    }

    e.preventDefault();

    localStorage.setItem('koordinat-asal', koordinatAsal);
    localStorage.setItem('koordinat-tujuan', koordinatTujuan);
    window.location.href = 'map.html';
})