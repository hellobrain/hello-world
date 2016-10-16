  //http://learn.javascript.ru/task/set-class-links
  
  var urls = document.getElementsByTagName("a");
  var i;
  
  for (i = 0; i < urls.length; i++){
    var a = urls[i];
    var href = a.getAttribute("href");
    
    if(!href) continue;
    if(href.indexOf("://") == -1) continue;
    
    if(href.indexOf("http://internal.com") !== -1) continue;
    
    //console.log(href);
    a.classList.add("external");
  }
