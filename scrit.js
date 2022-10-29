/* ========== nav toggle  ========== */
const slide = () => {
      const button=  document.querySelector(".nav-toggler");
      const list=  document.querySelector(".aside");
      const link = document.querySelectorAll(".nav li");
      button.addEventListener("click", () => {
            list.classList.toggle("nav-active");
            link.forEach((link,index)  => {
                  if(link.style.animation) {
                        link.style.animation = "";
                  }
                  else{
                        link.style.animation ="";
                  }
            });
            button.classList.toggle('toggle');
      });
}
slide();