window.onload = function(){

    //popup
    var popup = document.getElementById("popupWrap");
    var popupClose = document.getElementById("close");

    popupClose.onclick = function(){
        popup.classList.add("popupclose");
    }

    //slick
    $(document).ready(function(){
        $('.slick-slider').slick({
            dots: true,
            arrows: true,
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
            ]
        });
    });

    //mouse
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor_follower");
    var navLinks = document.querySelectorAll("#gnb li");
    
    function Trailer(e) {

        gsap.to(cursor, { duration: 0.3, left: e.pageX - 5, top: e.pageY - 5 });
        gsap.to(follower, { duration: 0.8, left: e.pageX - 15, top: e.pageY - 15 });

        navLinks.forEach(function(menu){
            menu.addEventListener("mouseover", function(){
                cursor.classList.add("link_hover");
            });
            menu.addEventListener("mouseleave", function(){
                cursor.classList.remove("link_hover");
            });
        });
    }
    document.addEventListener("mousemove", Trailer);

    //menu
    var toggleMenu = false;
    var trigerMenu = document.getElementById("menu");
    var gnbMenu = document.getElementById("gnb");

    trigerMenu.onclick = function(){
        if(window.innerWidth < 1024){
            if(toggleMenu){
                toggleMenu = false;
                gnbMenu.style.width = "0";
            } else {
                toggleMenu = true;
                gnbMenu.style.width = "100%";
            }
            gnbMenu.style.transition = "all .5s"
           
            this.classList.toggle("active");
            gnbMenu.classList.toggle("active");
        }
        
    };
    window.onresize = function(){
        gnbMenu.style.transition = "none";

        if(window.innerWidth > 1024){
            gnbMenu.style.width ="calc(100% - 175px)";
        } else {
            toggleMenu = false;
            gnbMenu.style.width = "0";
            trigerMenu.classList.remove("active");
        }
    }

    //dark-mode
    var button = document.getElementById("button");
    var wrap = document.getElementById("wrap");

    button.onclick = function(){
        wrap.classList.toggle("dark-mode");
        if(button.innerHTML == "Dark Mode"){
            button.innerHTML = "Light Mode";
        }else{
            button.innerHTML = "Dark Mode";
        }
    }  

    //clock
    var clockSet = document.createElement("div");
    clockSet.setAttribute('id', 'clock');

    var span1 = document.createElement("span");
    span1.setAttribute('id', 'hour');
    var span2 = document.createElement("span");
    span2.setAttribute('id', 'min');
    var span3 = document.createElement("span");
    span3.setAttribute('id', 'sec');
    var span4 = document.createElement("span");
    span4.setAttribute('id', 'point');

    document.getElementById("clockSection").appendChild(clockSet);
    document.getElementById("clock").appendChild(span1);
    document.getElementById("clock").appendChild(span2);
    document.getElementById("clock").appendChild(span3);
    document.getElementById("clock").appendChild(span4);

    var myDate = new Date();
    var year;
    var month;
    var date;
    var day;
    var hour;
    var min;
    var sec;
    var ampm;
    var myday = ["일", "월", "화", "수", "목", "금", "토"];

    var myTime = function(){
        myDate = new Date();
        year = myDate.getFullYear();
        month = myDate.getMonth() + 1;
        date = myDate.getDate();
        day = myDate.getDay();
        hour = myDate.getHours();
        min = myDate.getMinutes();
        sec = myDate.getSeconds();

        if(hour < 13){
            ampm = "AM";
        }else{
            ampm = "PM";
        }
        if(hour > 12){
            hour -= 12;
        }
        if(hour < 10){
            hour = "0" + hour;
        }
        if(min < 10){
            min = "0" + min;
        }
        if(sec < 10){
            sec = "0" + sec;
        }

        document.getElementById("text1").innerText = year + "년 " + month + "월 "+ date +"일 "+ myday[day] +"요일";
        document.getElementById("text2").innerText = "["+ ampm +". " + hour + ":" + min + ":" + sec + "]";
    
        document.getElementById("hour").style.transform = "rotate(" + (hour * 30 + min * 0.5) + "deg)";
        document.getElementById("min").style.transform = "rotate(" + (min * 6 + sec * 0.1) + "deg)";
        document.getElementById("sec").style.transform = "rotate(" + (sec * 6) + "deg)";

    }

    setInterval(function(){

        myTime();
    }, 1000);

    myTime();

    //scrollTop
    document.getElementById("scrollTop").onclick = function(){
        window.scrollTo(0, 0);
    }
}