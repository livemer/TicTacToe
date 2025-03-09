/** @format */

let items = document.querySelectorAll(".item")
let next_player = document.querySelector(".next__player")
const u = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]
let isPlayer1 = true
let play = true
let winner = ""

for (let i = 0; i < items.length; i++) {
  items[i].id = i
}

items.forEach((element) => {
  element.addEventListener("click", function (e) {
    if(!play) return
    if (element.innerHTML.trim() == "") {
      if (isPlayer1) {
        element.innerText = "X"
        next_player.innerText = "O"
        isPlayer1 = false
      } else {
        element.innerText = "O"
        next_player.innerText = "X"
        isPlayer1 = true
      }
    }
    WinCheck()
  })
})

document.querySelector(".restart").addEventListener("click", function (e) {
  location.reload()
})

function WinCheck() {
  player1Arr = []
  player2Arr = []
  items.forEach((element) => {
    if (element.innerText == "X") {
      player1Arr.push(+element.id)
    } else if (element.innerText == "O") {
      player2Arr.push(+element.id)
    }
  })
  for (let i = 0; i < u.length; i++) {
    if (player1Arr.includes(u[i][0]) &&player1Arr.includes(u[i][1]) &&player1Arr.includes(u[i][2])) {
      alert("Победил X")
      document.querySelector("h2").innerText = "Победил X"
      winner = "X"
      OnEnd()
    }
    else if (player2Arr.includes(u[i][0]) &&player2Arr.includes(u[i][1]) &&player2Arr.includes(u[i][2])) {
      alert("Победил O")
      document.querySelector("h2").innerText = "Победил O"
      winner = "O"
      OnEnd()
    }
  }
}

function OnEnd(){
  next_player.innerText = ""
  play = false
  items.forEach((element) => {
    if(element.innerText != winner){
      element.style.color = "gray"
    }
  })
}