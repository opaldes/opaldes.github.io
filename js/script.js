window.onload = function () {
  toc = document.getElementById('markdown-toc');
  console.log(toc);
  panel = document.getElementById('insert-toc');
  panel.appendChild(toc);
}


document.onscroll = function () {
  sticky = document.getElementById("custom-toc");
  content = document.getElementById("content");
  coords = content.getBoundingClientRect();
  widthToc = window.innerWidth - (coords.right + coords.left); 
  console.log(window.innerWidth,coords.right,coords.left);
  if (coords.top <= 0) {
    sticky.className = sticky.className.split(' affix').join('');
    sticky.className = sticky.className + " affix" 
    sticky.style = "top:38px; width:" + widthToc + "px;";
    console.log(coords)
  }else{
    sticky.className = sticky.className.split(' affix').join('');
    sticky.style = "";
  };
} 
