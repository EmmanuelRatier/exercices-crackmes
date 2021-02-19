// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = ''

const crackme11 = (password) => {
  if (password.length < 7 && password[5] === '1' && password.startsWith('dea')) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme11(password)