
document.getElementById("tbattack").addEventListener("click",function changeattack(){
    var x=document.getElementsByTagName("table");
    x[0].innerHTML='<tr><td><strong>Range</strong></td><td>9.67</td></tr><tr><td><strong>Reload</strong></td><td>1.9 seconds</td></tr><tr><td><strong>Bullets/second</strong></td><td>4</td></tr><tr><td><strong>Damage/Shuriken</strong></td><td>440(closest)178(furthest)</td></tr>'
});
document.getElementById("tbspecial").addEventListener("click",function changespecial(){
    var x=document.getElementsByTagName("table");
    x[0].innerHTML='<tr><td><strong>Super</strong></td><td>Smoke Bomb</td></tr><tr><td><strong>Duration</strong></td><td>6 seconds</td></tr><tr><td><strong>Hits to charge</strong></td><td>9-21 hits</td></tr><tr><td><strong>Star Power 1</strong></td><td>Smoke Trails</td></tr><tr><td><strong>Star Power 2</strong></td><td>Invisiheal</td></tr>'
});
document.getElementById("tbnormal").addEventListener("click",function changenormal(){
    var x=document.getElementsByTagName("table");
    x[0].innerHTML='<tr><td><strong>Nama</strong></td><td>Leon</td></tr><tr><td><strong>Rarity</strong></td><td>Legendary</td></tr><tr><td><strong>Class</strong></td><td>Assassin</td></tr><tr><td><strong>Movespeed</strong></td><td>820(1017 with Smoke Trails)</td></tr><tr><td><strong>Health</strong></td><td>3200(level 1)</td></tr>'
});
