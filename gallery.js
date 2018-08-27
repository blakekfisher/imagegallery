var images = document.querySelectorAll("img");
var imgName;
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    console.log("this was clicked");
    var imgName = images[i];
    console.log(imgName);
  });
}
