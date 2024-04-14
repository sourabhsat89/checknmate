const scriptURL = 'https://script.google.com/macros/s/AKfycbwFGW7tXOHNvymQU3Hp341NoM2Hw5cM3gYunx4GPORjXNBhEMHwcbXN-szuQwqZxVHv/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (response.ok) {
        
        window.confirm('Thank you! Your request is submitted successfully.We will reach out to you shortly', '');



        window.location.reload();
      } else {
        throw new Error('Network response was not OK');
      }
    })
    .catch(error => console.error('Error!', error.message))
})

