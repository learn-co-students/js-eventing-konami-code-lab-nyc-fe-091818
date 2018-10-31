const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let tracker = 0

function onKeyDown(event) {

  const keycode = event.which || event.location
  
if (keycode === code[tracker]) {
  tracker = tracker + 1
} else {
  tracker = 0
}

if (tracker === 9) {
  alert('you did it')
}

console.log(tracker)

}

function init() {
  // Write your JavaScript code inside the init() function

document.body.addEventListener('keydown', onKeyDown)

}

init()