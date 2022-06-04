// const preventDefault = () => {
//   const button = document.getElementById('submit');
//   button.addEventListener('click', (e) => {
//     e.preventDefault();
//   })
// }

const getConsent = () => {
  const button = document.getElementById('submit');
  button.addEventListener('click', (e) => {
    const input = document.getElementById('second-aggrement');

    if (!input.checked) {
      e.preventDefault();
    }
  });
}

const validateName = () => {
  const button = document.getElementById('submit');
  button.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (name.length < 11 || name.length > 39 || email.length < 11 || email.length > 49) {
      alert('Dados Inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
  })
}

// preventDefault();
getConsent();
validateName();
