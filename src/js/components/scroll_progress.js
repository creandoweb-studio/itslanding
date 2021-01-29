export default function scrollProgress(){


    let preogressbar = document.getElementById("preogressbar");
    let percent = document.getElementById("percent");

    let totalHeight = document.body.scrollHeight - window.innerHeight;

    window.onscroll=function(){
        let progress=(window.pageYOffset / totalHeight)*100;
        preogressbar.style.height=progress + "%";
        // percent.innerHTML=Math.round(progress)+ "%";
    }

}