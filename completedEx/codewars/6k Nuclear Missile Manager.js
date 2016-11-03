function launchAll(launchMissile) {
  for(var i = 0; i < 5; i++) {
  
    (function(i){
    
      setTimeout(function() {
          launchMissile(i);
        }, i * 1000);
        
     })(i);
  }
}
