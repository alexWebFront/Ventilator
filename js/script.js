let btns = document.querySelectorAll('.item');
let popups = document.querySelectorAll('.popup');

if (btns.length) {
  btns.forEach((btn, i) => {
    btn.addEventListener("click", function (e) {
      popups[i].classList.add('active')
      localStorage.setItem('videoLeft', i + 1);
    });
  })
}
if(popups.length){
  popups.forEach(popup => {
    let close = popup.querySelector('.popup__close');
    close.addEventListener("click", function(e) {
      popup.classList.remove('active')
      localStorage.removeItem('videoLeft');
    });
  });
}

//Gallery
let gallery = document.querySelectorAll('._gallery');
if (gallery.length) {
	gallery_init();
}

function gallery_init() {
	for (let index = 0; index < gallery.length; index++) {
		const el = gallery[index];
		lightGallery(el, {
			counter: false,
			selector: 'a',
			download: false
		});
	}
}