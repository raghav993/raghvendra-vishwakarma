 document.getElementById('year').textContent = new Date().getFullYear();

  var nav = document.getElementById('siteNav');
  var onScroll = function(){
    if(window.scrollY > 12){ nav.classList.add('scrolled'); }
    else{ nav.classList.remove('scrolled'); }
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  var navCheck = document.getElementById('nav-check');
  document.querySelectorAll('.nav-links a').forEach(function(a){
    a.addEventListener('click', function(){ navCheck.checked = false; });
  });

  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, {threshold:0.1, rootMargin:'0px 0px -40px 0px'});
    document.querySelectorAll('.reveal, .reveal-item').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal, .reveal-item').forEach(function(el){ el.classList.add('in'); });
  }