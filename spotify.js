let wrap = $("#wrap"); 
wrap.on("scroll", function(e) {
  wrap.preventDefault(e);
  if(this.scrollTop>2) {
    wrap.addClass("fix-header");
  } else {
    wrap.removeClass("fix-header");
  }
})