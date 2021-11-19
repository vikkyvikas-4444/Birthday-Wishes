var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image(get_image)

{
     fabric.Image.fromURL(get_image, function(Img) {
     block_image_object.scaleToWidth(block_image_width);
     block_image_object.scaleToHeight(block_image_height);
     block_image_object.set(  
        
        { top:block_y,
           left:block_x
           });

           canvas.add(block_image_object);
        });


     }
    

function playSound(){
    x.play();
	
}
