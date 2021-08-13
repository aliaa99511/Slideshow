

var array=["images/1.jpg","images/2.jpg","images/3.jpg"];
var i=0;

var slideshow = function(){

    document.slide.src=array[i];
    
    if(i < array.length-1){
        i++
    }else{
        i=0
    }
    setTimeout(slideshow,2000)

}
slideshow()