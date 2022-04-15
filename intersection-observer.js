const targets = document.querySelectorAll("img");

const lazyLoad = (target)=>{
  const io = new IntersectionObserver((entries,observer)=>{
      entries.forEach(entry=>{
          if(entry.isIntersecting){
              const img=entry.target;
              const src=img.getAttribute("data-src");

              img.setAttribute("src",src);
              img.classList.add("fade");
              observer.disconnect();
          }
      })
  },{threshold:[0.7]});

  io.observe(target);
}
targets.forEach(lazyLoad);
