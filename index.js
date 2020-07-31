$(function(){

  $(".member-image").hover(function(){
    console.log(1)
    $("#member-image-before").css('display','none')
    $("#member-image-after").css('display','block')
  },function(){
    $("#member-image-before").css('display','block')
    $("#member-image-after").css('display','none')
  })
})