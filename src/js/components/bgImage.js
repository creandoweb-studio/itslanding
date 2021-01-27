export default function bgImage(){
  // console.log("imagen Fondo...")
  let slideImg = document.getElementById("slideImg");

  // console.log(slideImg)

  let images = new Array(
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg"
  );

  // console.log(images.length)
  let len = images.length;
  let i = 0;

  // console.log(len)

  function slider(){
    if(i > len-1){
      i = 0;
    }
    slideImg.src=images[i];
    i++;
    setTimeout('slider()',3000);
  }
}
