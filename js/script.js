window.onload = function () {
  toc = document.getElementById('markdown-toc');
  console.log(toc);
  panel = document.getElementById('insert-toc');
  panel.appendChild(toc);
}
bar = document.getElementById("content");
if (bar.offsetHeight > window.innerHeight ) {
  bar.classname = bar.classname + " scroll"
};

document.onscroll = function () {
  sticky = document.getElementById("custom-toc");
  content = document.getElementById("content");
  coords = content.getBoundingClientRect();
  widthToc = sticky.offsetWidth; 
  if (coords.top <= 0 && windoe.innerWidth > 970) {
    sticky.className = sticky.className.split(' affix').join('');
    sticky.className = sticky.className + " affix" 
    sticky.style = "top:38px; width:" + widthToc + "px;";
    console.log(coords)
  }else{
    sticky.className = sticky.className.split(' affix').join('');
    sticky.style = "";
  };
} 
