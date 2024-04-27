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