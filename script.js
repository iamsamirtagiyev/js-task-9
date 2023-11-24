// ------------------------> 1 <-----------------------

const body = document.querySelector("body")

// let radio1 = document.createElement("input")
// radio1.type = "radio"
// radio1.name = "radio"
// radio1.value = "Yaslilar Ucun"

// let radio1Div = document.createElement("div")
// radio1Div.textContent = "Yaslilar Ucun"
// radio1Div.setAttribute("style", "display:inline-block")

// body.append(radio1)
// body.append(radio1Div)

// let radio2 = document.createElement("input")
// radio2.type = "radio"
// radio2.name = "radio"
// radio2.value = "Boyukler Ucun"

// let radio2Div = document.createElement("div")
// radio2Div.textContent = "Boyukler Ucun"
// radio2Div.setAttribute("style", "display:inline-block")

// body.append(radio2)
// body.append(radio2Div)

// let radio3 = document.createElement("input")
// radio3.type = "radio"
// radio3.name = "radio"
// radio3.value = "Kicikler ucun"

// let radio3Div = document.createElement("div")
// radio3Div.textContent = "Kicikler Ucun"
// radio3Div.setAttribute("style", "display:inline-block")

// body.append(radio3)
// body.append(radio3Div)

// let addBtn = document.createElement("button")
// addBtn.textContent = "Add"

// body.append(addBtn)

// addBtn.addEventListener('click', ()=>{
//     let check = document.querySelector("input[name = 'radio']:checked")
//     console.log(check.value);
// })

// ------------------------> 2 <-----------------------

let input = document.createElement("input")
input.type = "text"

let openBtn = document.createElement("button")
openBtn.textContent = "Open"
openBtn.disabled = true

let closeBtn = document.createElement("button")
closeBtn.textContent = "Close"

body.append(input)
body.append(closeBtn)
body.append(openBtn)

closeBtn.addEventListener('click', ()=>{
    input.disabled = true
    openBtn.disabled = false
    closeBtn.disabled = true
})

openBtn.addEventListener('click', ()=>{
    input.disabled = false
    openBtn.disabled = true
    closeBtn.disabled = false
})
