(function(){
  var btn=document.getElementById('copy-email');
  var addr=document.getElementById('email-addr');
  if(!btn||!addr) return;
  btn.addEventListener('click',function(){
    var text=addr.textContent.trim();
    function selectIt(){var r=document.createRange(); r.selectNodeContents(addr); var s=window.getSelection(); s.removeAllRanges(); s.addRange(r); btn.textContent='Selected, press Ctrl+C';}
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(function(){btn.textContent='Copied'; setTimeout(function(){btn.textContent='Copy address';},1800);}).catch(selectIt);
    } else { selectIt(); }
  });
})();
