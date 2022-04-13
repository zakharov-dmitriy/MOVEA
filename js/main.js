document.addEventListener('DOMContentLoaded', function () {
   const modalWindow = document.querySelector('.modal');
   const buttonsModal = document.querySelectorAll('.button-play');
   const frame = document.querySelector('.frame');
   const videoUrl = "https://www.youtube.com/embed/320TyBx43j8";

   buttonsModal.forEach((item, i) => {
      item.addEventListener('click', () => {
         modalWindow.classList.add('active');
         frame.setAttribute('src', videoUrl);
      });
   });

   modalWindow.addEventListener('click', () => {
      modalWindow.classList.remove('active');
      frame.setAttribute('src', '404');
   });
});