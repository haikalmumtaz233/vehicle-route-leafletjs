const nama = localStorage.getItem('nilai-nama');
const no_hp = localStorage.getItem('nilai-no_hp');
const asal = localStorage.getItem('nilai-asal');
const tujuan = localStorage.getItem('nilai-tujuan');


document.getElementById('nama').innerText = nama;
document.getElementById('no_hp').innerText = no_hp;
document.getElementById('asal').innerText = asal;
document.getElementById('tujuan').innerText = tujuan;