window.addEventListener("keydown", key_down)
var canvas= new fabric.Canvas("SuperheroCanvas"); 
var superhero= {
    x:100,
    y:100
}
var superhero_object;
function playerupdate(){
    fabric.Image.fromURL("player.png", function(img){
        superhero_object=img;
        superhero_object.scaleToWidth(150);
        superhero_object.scaleToHeight(140);
        superhero_object.set({
        top:superhero.y,
        left:superhero.x
        });
        canvas.add(superhero_object);
    });
}
function key_down(e){
    if (e.keyCode==37){
        left();
    }
    if (e.keyCode==38){
        up();
    }
    if (e.keyCode==39){
        right();
    }
    if (e.keyCode==40){
        down();
    }
    if (keyPressed=='76'){
        new_image('hulk_legs.png');
        console.log('l');
    }
    if (keyPressed=='82'){
        new_image('thor_right_hand.png');
        console.log('r')
    }
    if (keyPressed=='72'){
        new_image('captain_america_left_hand.png')
    }
}
function left(){
    if (superhero.x>=0){
        superhero.x=superhero.x-10;
        canvas.remove(superhero_object);
        playerupdate();
    }
}
function right(){
    if (superhero.x<=550){
        superhero.x=superhero.x+10;
        canvas.remove(superhero_object);
        playerupdate();
    }
}
function up(){
    if (superhero.y>=0){
        superhero.y=superhero.y-10;
        canvas.remove(superhero_object);
        playerupdate();
    }
}
function down(){
    if (superhero.y<=360){
        superhero.y=superhero.y+10;
        canvas.remove(superhero_object);
        playerupdate();
    }
}