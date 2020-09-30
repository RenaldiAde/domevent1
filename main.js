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
