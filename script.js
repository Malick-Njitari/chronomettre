//Les variables 
var sp,btn_start,btn_stop,t,ms,s,mn,h;
// La fonction pour initialiser les avleurs
window.onload=function(){
    sp=document.getElementsByTagName("span");
    btn_start=document.getElementById("start");
    btn_stop=document.getElementById("stop ");
    t;
    ms=0, s=0, mn=0, h=0;
}
// Le compteur 
function modifi_chrono(){
    ms+=1;
    if(ms==10){
        ms=1;
        s+=1}
    if(s==60){
        s=0;
        mn+=1}
    if(mn==60){
        mn=0; 
        h+=1;}

    // Inserons les valeur dans le span [0] pour dire le premier span
sp[0].innerHTML = h + "h";
sp[1].innerHTML = mn + "min";
sp[2].innerHTML = s + "s";
sp[3].innerHTML = ms + "ms";

}
// La fonction du boutyton start
function start(){
    //cette lignr dr code execute la modifi_chrono
    //Toutes les 100 ms

    t=setInterval(modifi_chrono,100);
    btn_start.disabled=true
}
function stop() {
    //suppression des valeur de t que nous avons creer
    clearInterval(t);
    btn_start.disabled=false;
}

// por initialiser les valeures des compteurs
function reset(){
    clearInterval(t);
    btn_start.disabled=false;
    ms=0, s=0, mn=0, h=0;
    //inseree les nouvelles valeurs dans le span
    sp[0].innerHTML=h+ "h";
    sp[1].innerHTML=mn+ "mn";
    sp[2].innerHTML=s+ "s";
    sp[3].innerHTML=ms+ "ms";

}