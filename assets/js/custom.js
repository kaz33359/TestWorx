
 function contact() {
   swal.fire({
     title: "<strong>Thank you!</strong>",
     icon: "success",
     html: "Thank you for reaching out!, " + "We'll get back to you shortly",
     focusConfirm: false,
     confirmButtonText: "Close",
     confirmButtonAriaLabel: "Thumbs up, great!",
   });
 }

let form = document.getElementById("comment-form");
form.addEventListener('submit', function(event){
    event.preventDefault()
    let full_name = document.getElementById('full-name').value
    let email = document.getElementById("email").value;
    let comments = document.getElementById("comments").value;

    window.location.href = `mailto:nams.hashim@oktotech.co.uk?subject=Enquiry from ${full_name} ${email}&body= ${comments}`;

   contact();
})


setCookie = (cName, cValue, expdays) => {
  let date = new Date();
  date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires ;
}

getCookie = (cName) => {
  const name = cName + "=";
  
}

document.querySelector("#cookies-btn").addEventListener("click", () =>{
  document.querySelector("#cookies").style.display = "none";
  setCookie("cookie", true, 30);
})
