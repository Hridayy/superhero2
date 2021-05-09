var canvas=new fabric.Canvas('myCanvas');
var player_x = 10; var player_y = 10;
 var block_image_width = 30;
  var block_image_height = 30;
  var player_object= "";
 var block_image_object= "";

 function player_update()
 {fabric.Image.fromURL("https://drive.google.com/file/d/1fGz6T2OZeGqzLGfhN1fZ2VffCG-OzWxL/view?usp=sharing",function (Img){
player_object=Img;

player_object.scaleToWidth(150)
player_object.scaleToHeight(140)

player_object.set({
top:player_y,
left:player_x
})
canvas.add(player_object);
 })}

 function new_image(get_image)
 {fabric.Image.fromURL(get_image,function (Img){
block_image_object=Img;

block_image_object.scaleToWidth(block_image_width)
block_image_object.scaleToHeight(block_image_height)

block_image_object.set({
top:player_y,
left:player_x
})
canvas.add(block_image_object);
 })}
 window.addEventListener("keydown",my_keydown)

 function my_keydown(e){
keypressed=e.keyCode
console.log(keypressed);
if(e.shiftKey==true && keypressed=='80'){
console.log("shiftKey and p pressed")
block_image_width=block_image_width+10;
block_image_height=block_image_height+10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
}

if(e.shiftKey==true && keypressed=='77'){
    console.log("shiftKey and m pressed")
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keypressed=='38')
    {
Up()
console.log("up");
    }

    if(keypressed=='40')
    {
down()
console.log("down");
    }

    if(keypressed=='37')
    {
left()
console.log("left");
    }

    if(keypressed=='39')
    {
right()
console.log("right");
    }

  if(keypressed=='87'){
new_image("https://images-na.ssl-images-amazon.com/images/I/81w6jjXIzJL._AC_SY550_.jpg");
console.log("ironmam-face")
  }  

  if(keypressed=='71'){
    new_image("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn78jAwSlL1LYoXYn90ulFDxb0J183xZO3tQ&usqp=CAU");
    console.log("thor's-hammer")
      }  

      if(keypressed=='76'){
        new_image("https://i.pinimg.com/originals/b8/a8/e9/b8a8e98f901343d315393f9174bd3bc2.jpg");
        console.log("spider-man_face")
          }  

          if(keypressed=='84'){
            new_image("https://i.pinimg.com/originals/77/bc/77/77bc7767b0b99f98f4574226f026b302.jpg");
            console.log("iron_mam-body")
              }  

              if(keypressed=='82'){
                new_image("https://n2.sdlcdn.com/imgs/j/b/a/Marvel-Avengers-Captain-America-Face-SDL884059527-1-0bcff.jpg");
                console.log("cap-face")
                  }  

                  if(keypressed=='89'){
                    new_image("https://allactionnoplot.files.wordpress.com/2014/06/wpid-photo-29-jun-2014-822-pm.jpg?w=960&h=576&crop=1");
                    console.log("falcon-face")
                      }  

                      if(keypressed=='68'){
                        new_image("https://fandomwire.com/wp-content/uploads/2020/10/falcon-wings-6.png");
                        console.log("falcon-wings")
                          }  

                          if(keypressed=='67'){
                            new_image("https://wallpapercave.com/wp/wp5052445.jpg");
                            console.log("hanuman_ji")
                              }  

                              if(keypressed=='85'){
                                new_image("http://sanskrit-ai.com/data/xfmg/thumbnail/0/82-5dbfc779f62b6f2a43735d4d3d8f9e44.jpg?1602672300");
                                console.log("ghatothkach")
                                  }  
 }