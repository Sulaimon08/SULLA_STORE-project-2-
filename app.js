let searchForm = document.querySelector('.search-form');


document.querySelector('.search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    Nav.classList.remove('active');
    loginProfile.classList.remove('active');
    shoppingCart.classList.remove('active');
}



let shoppingCart = document.querySelector('.shopping-cart');


document.querySelector('.shopping-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    Nav.classList.remove('active');
    loginProfile.classList.remove('active');
    searchForm.classList.remove('active');

}



let loginProfile = document.querySelector('.login-profile');

document.querySelector('.login-btn').onclick = () => {
    loginProfile.classList.toggle('active');
    Nav.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');

}

let Nav = document.querySelector('nav');
document.querySelector('.menu-btn').onclick =() => {
    Nav.classList.toggle('active');
    loginProfile.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');

}

 window.onscroll = () => {
    Nav.classList.remove('active');
    loginProfile.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');

 }

// product=section
 var swiper = new Swiper(".product-slide", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
    
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });


//   review-section

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });