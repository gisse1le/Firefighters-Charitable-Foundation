function addDonor() {
    const form = document.querySelector("#form")
                const submitButton = document.querySelector("#submit")
                const scriptURL = 'https://script.google.com/macros/s/AKfycby5yeYML8sx6iNIQBZwXW3csm-gyardYdKz01u8s-nklDWpASQNGymsSKibFYmQtE7z/exec'
            
                form.addEventListener('submit', e => {
                 e.preventDefault();
                 submitButton.disabled = true
             
                 console.log(form);
                 fetch(scriptURL, {method: 'POST', body: new FormData(form)})
                   .then(response => {
                    submitButton.disabled = false
                    submitButton.innerHTML = "Submit"
                    alert('Success!', response)})
                    validateForm()
                   .catch(error => alert(validateForm()))
                })
}


function validateForm(){
    var phonePattern = /^\d{10}$/;
    const phoneNumber = document.getElementById('phone')
    const form = document.getElementById('form')
    const errorElement = document.getElementById('error')
    form.addEventListener('submit', (e) => {
      let messages = []
      /*VALIDATIONS BELOW */
      if(!phonePattern.test(phoneNumber)){
        messages.push('Please enter valid phone number')
      }

      // ERRORS
      if (messages.length > 0) {
        e.preventDefault()
        return errorElement.innerText = messages.join(', ')
      }
    })
}


function homeDonate(){
    var donorName = prompt("Enter your name:");
    if (donorName) {
        var newParagraph = document.createElement("p");
        newParagraph.textContent = donorName;
        var nameList = document.getElementById("nameList");
        nameList.appendChild(newParagraph);
    }}
