const inputBtn = document.getElementById('input-btn')
let myLeads = ['valu1', 'valu2', 'valu3']
const inputEl = document.getElementById('input-el')

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  //console.log(myLeads)
})

for (item in myLeads) {
  console.log(item)
}

