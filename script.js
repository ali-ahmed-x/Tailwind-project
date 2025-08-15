

  const projectBtn = document.getElementById('projectBtn');
  const popUp = document.getElementById('popUp');
  const closeBtn = document.getElementById('close-btn');

  projectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popUp.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    popUp.classList.add('hidden');
  });

  popUp.addEventListener('click', (e) => {
  if (e.target === popUp) {
    popUp.classList.add('hidden');
  }
  });


                                // Form Validation check 

 document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value; 
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");

                                 // Name validation
    if (name.length < 3) {
        nameError.textContent = "⚠️ Name must be at least 3 characters.";
        return;
    } else {
      nameError.textContent = "";
      }

                                    // Email validation
    if (email !== email.toLowerCase() || !email.includes('@') || !email.includes('com') )  {
        emailError.textContent = "⚠️ Enter Valid Email Formate";
        return;
    } else {
      emailError.textContent = "";
      }

     // save form datain a local storage 

      const formData = {
        'name': name,
        'email' : email,
        'message' : message,
      };
      
      let storedData = JSON.parse(localStorage.getItem('formData')) || [];
      storedData.push(formData);
      localStorage.setItem('formData', JSON.stringify(storedData));


    // submit form 
    alert("Form submitted successfully!");
    e.target.submit();

});



