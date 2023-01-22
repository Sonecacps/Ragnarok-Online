const botaoTrailer = document.querySelector(".btn-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById('video');
const modal = document.querySelector('.modal');
const linkDoVideo = video.src;


function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    video.setAttribute("src", linkDoVideo);
    alternarModal();
});

botaoFecharModal.addEventListener("click", () =>{
 video.setAttribute("src","");
 alternarModal();
});
