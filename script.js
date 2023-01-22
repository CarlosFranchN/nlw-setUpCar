const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}

nlwSetup.setData(data)
nlwSetup.load()

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  //new Date().toLocalDateString('pt-br').slice(0,-5)
  //output == 21/01
  const dayExist = nlwSetup.dayExists(today)
  if (dayExist == true) {
    alert('Dia já incluso')
  } else {
    alert('Adicionado com Sucesso')
    nlwSetup.addDay(today)
  }
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
  //objeto que guarda na memoria do browser
}

// const data = {
//   run: ['01-01', '01-02', '01-06'],
//   takePills: ['01-04'],
//   jornal: ['01-05']
// }

// nlwSetup.setData(data)
// nlwSetup.load()
