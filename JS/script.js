
$("button").click(function() {
    document.getElementById("05").innerHTML="";
    document.getElementById("04").innerHTML="";
    document.getElementById("03").innerHTML="";
    document.getElementById("02").innerHTML="";
    document.getElementById("01").innerHTML="";
    
    if(this.id=='5'){
        document.getElementById("05").innerHTML="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.";
    }
    else if(this.id=='4'){
        document.getElementById("04").innerHTML="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.";
    
    }
    else if(this.id=='3'){
        document.getElementById("03").innerHTML="Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.";

    }else if(this.id=='2'){
        document.getElementById("02").innerHTML="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹&nbsp;199 to ₹&nbsp;799 a month. No extra costs, no contracts.";
    

    }else if(this.id=='1'){
        document.getElementById("01").innerHTML="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br><br>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!";
        
    }else{

    }
});