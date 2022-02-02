
const soft_Left = document.getElementById('shell_left');
const soft_Right = document.getElementById('shell_right'); 

soft_Left.onclick = function(){
    document.getElementById('slider').scrollLeft-= 500;
    console.log('clicked');
}

soft_Right.onclick = function(){
    document.getElementById('slider').scrollLeft+= 500;
    console.log('clicked');
}

const sea_Left = document.getElementById('sea_left');
const sea_Right = document.getElementById('sea_right'); 

sea_Left.onclick = function(){
    document.getElementById('slider_sea').scrollLeft-= 500;
}

sea_Right.onclick = function(){
    document.getElementById('slider_sea').scrollLeft+= 500; 
}

const sun_Left = document.getElementById('sun_left');
const sun_Right = document.getElementById('sun_right'); 

sun_Left.onclick = function(){
    document.getElementById('slider_sun').scrollLeft-= 500;
}

sun_Right.onclick = function(){
    document.getElementById('slider_sun').scrollLeft+= 500;
}

const f_Left = document.getElementById('f_left');
const f_Right = document.getElementById('f_right'); 

f_Left.onclick = function(){
    document.getElementById('slider_f').scrollLeft-= 500;
}

f_Right.onclick = function(){
    document.getElementById('slider_f').scrollLeft+= 500;
}