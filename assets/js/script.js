// tambah class aktif
const Navigasi = document.querySelector('.navigasi');

// ketika hamburger di klik
document.querySelector('#hamburger').onclick = () => {
    Navigasi.classList.toggle('active');
};