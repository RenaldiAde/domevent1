// kita buat sebuah fungsi untuk munculkan modal
const showModal = () => {
    //kita dapatkan elemen MODAL yang mau dimunculkan
    let modal = document.getElementById('modalMenu')
    // kita atur styling element modalnya
    modal.style.display = 'flex'
}

const closeModal = () => {
    let modal = document.getElementById('modalMenu')
    // kita atur styling element modalnya
    modal.style.display = 'none'
}

// kita ambil dulu element yang diinginkan
let showcase = document.getElementById('wrapper_showcase')
// kita lanjut elementnya dengan sintax HTML
// showcase.innerHTML += `
// <img src="https://picsum.photos/seed/678/900" alt="gambar no 678" />
// `
for (var i = 0; i < 36; i++) {
    showcase.innerHTML += `
     <img src='https://picsum.photos/seed/${800 + i}/130' alt='gambar ke ${i}'/>
    `
}