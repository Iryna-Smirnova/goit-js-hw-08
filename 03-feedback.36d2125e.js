const e=document.querySelector(".feedback-form"),t=e.querySelector('input[name="email"]'),a=e.querySelector('textarea[name="message"]'),l=_.throttle((()=>{const e={email:t.value,message:a.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);t.addEventListener("input",l),a.addEventListener("input",l);const o=localStorage.getItem("feedback-form-state");if(o){const e=JSON.parse(o);t.value=e.email,a.value=e.message}e.addEventListener("submit",(e=>{e.preventDefault();const l={email:t.value,message:a.value};console.log(l),localStorage.removeItem("feedback-form-state"),t.value="",a.value=""}));
//# sourceMappingURL=03-feedback.36d2125e.js.map