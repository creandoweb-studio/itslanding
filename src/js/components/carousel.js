export default function carousel(){

  window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__container_list'), {
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: '.carousel__indicators',
      arrows: {
        prev: '.carousel__anterior',
        next: '.carousel__siguiente'
      }
  })
})
}
