imagesList = [
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d685dc8a-601b-4ee3-b43d-8c025552b3ab/dc9h2gk-101166e0-75b5-4ace-bf28-486d19f70618.png/v1/fill/w_1600,h_1101,q_80,strp/listen____by_angusburgers_dc9h2gk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMTAxIiwicGF0aCI6IlwvZlwvZDY4NWRjOGEtNjAxYi00ZWUzLWI0M2QtOGMwMjU1NTJiM2FiXC9kYzloMmdrLTEwMTE2NmUwLTc1YjUtNGFjZS1iZjI4LTQ4NmQxOWY3MDYxOC5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RvYGZWY6uE31bEODeZelHaJfwEw_in7xE5py9H4UnHk",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10c18efa-6f2d-4204-93ff-1adcee889756/d6s8mv4-33d75e08-0609-4b35-aedc-01789fb40bd6.jpg/v1/fill/w_988,h_809,q_70,strp/facebots_by_jameszapata_d6s8mv4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzEwYzE4ZWZhLTZmMmQtNDIwNC05M2ZmLTFhZGNlZTg4OTc1NlwvZDZzOG12NC0zM2Q3NWUwOC0wNjA5LTRiMzUtYWVkYy0wMTc4OWZiNDBiZDYuanBnIiwid2lkdGgiOiI8PTEyMjIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.AVcu-6t_AHSWzhZ5T9vZA_ub0MizHfjLbwgqfBKuTPs"
]

imageURL = null;

function toggleImageSize(image){
	if (image.hasClass("vertical")){
    image.addClass("horizontal");
    image.removeClass("vertical");
  }else{
    image.removeClass("horizontal");
    image.addClass("vertical");
  }
}

function nextImage(image){
  nextIndex = imagesList.indexOf(imageURL) + 1;
  if (nextIndex == -1 || imagesList.length <= nextIndex) {
    nextIndex = 0;
  }
  imageURL = imagesList[nextIndex];
  image.css("background-image", "url(" + imageURL + ")")
}

function toggleMenu(){
  $("#menu-bar").toggle();
}


$(document).ready(function(){
  image = $("#image");
  documentWidth = $( document ).width();
  margin = documentWidth * 0.05;
  
  image.css("top", margin + "px").css("bottom", margin + "px").css("left", margin + "px").css("right", margin + "px");
  
  nextImage(image);
 
  $("#nextImage").click(function(){
    nextImage(image);
  });
  $("#toggleImageSize").click(function(){
    toggleImageSize(image);
  });
});
