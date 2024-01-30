
var parts_of_life = document.getElementsByClassName("part_of_my_life");

var urls = ['progpage.html', 'coffeepage.html', 'theatrepage.html', 'ktmpage.html', 'otherpage.html'];

for(var i = 0; i<5; i++){
    let str=urls[i];
    parts_of_life[i].onclick=function() {
        window.location.href= str;
    };
}

var normal_header = document.getElementById('normal_header');
var start_header = document.getElementById('start_header');
    
    window.addEventListener('scroll', function() {
        arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
    });