// andiamo a selezionare le 4 checkbox dei gatti
const fourCheckboxes = document.querySelectorAll('.btn-group > .btn-check')
console.log('fourCheckboxes', fourCheckboxes)

// andiamo a selezionare le prime 4 card con i gatti
const allTheCatCards = document.getElementsByClassName('card') // tutte le cards, e ne crea un HTMLCollection
const allTheCatCardsAsArray = Array.from(allTheCatCards) // converto l'HTMLCollection in un vero e proprio array
const firstFourCatCards = allTheCatCardsAsArray.slice(0, 4) // di tutte le cards (18) salvo in un nuovo array solamente le prime 4

// const thirdCheckbox = fourCheckboxes[2] // gatto 3
// thirdCheckbox è un <input />, per "ascoltare" le sue modifiche utilizziamo un evento che si chiama "change"
// thirdCheckbox.addEventListener('change', function (e) {
//   //   console.log(e.target.checked) // torna true se la checkbox è "accesa", false nel caso contrario
//   //   ora nel caso entrassimo in questo evento,
//   console.log(firstFourCatCards[2])
//   firstFourCatCards[2].classList.toggle('invisible') // tutto in una riga
//   // toggle aggiunge la classe "invisible" se l'elemento non la possiede
//   // toggle rimuove la classe "invisible" se l'elemento già la possiede

//   //   // oppure, altro modo di farlo ascoltando il valore di e.target.checked (true/false)
//   //   if (e.target.checked === true) {
//   // ho cliccato la checkbox per accenderla
//   //     firstFourCatCards[2].classList.add('invisible')
//   //   } else {
//   //  ho cliccato la checkbox per spegnerla
//   //     firstFourCatCards[2].classList.remove('invisible')
//   //   }
// })

// ora applico questo event listener a TUTTE e 4 le checkboxes:
fourCheckboxes.forEach((checkbox, i) => {
  checkbox.addEventListener('change', function (e) {
    firstFourCatCards[i].classList.toggle('invisible')
    // al primo ciclo, applicherò alla prima checkbox l'interazione con la card firstFourCatCards[0]
    // al secondo ciclo, applicherò alla seconda checkbox l'interazione con la card firstFourCatCards[1]
    // al terzo ciclo, applicherò alla terza checkbox l'interazione con la card firstFourCatCards[2]
    // al quarto ciclo, applicherò alla quarta checkbox l'interazione con la card firstFourCatCards[3]
  })
})
