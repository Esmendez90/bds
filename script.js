document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // stop default submit
  
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const formMsg = document.getElementById('formMsg');
  
    if (!name || !email || !message) {
      formMsg.textContent = 'Please fill out all fields.';
      formMsg.style.color = 'red';
      return;
    }
  
    // Prepare form data for submission
    const data = new FormData(form);
  
    // Send data via Fetch API to Formsubmit
    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        formMsg.textContent = 'Thank you! Your message has been sent.';
        formMsg.style.color = 'green';
        form.reset();
      } else {
        formMsg.textContent = 'Oops! There was a problem submitting your form.';
        formMsg.style.color = 'red';
      }
    })
    .catch(() => {
      formMsg.textContent = 'Oops! There was a problem submitting your form.';
      formMsg.style.color = 'red';
    });
  });
  