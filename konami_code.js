const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let tracker = 0

function onKeyDown(event) {
  const keyCode = event.which || event.location
  
// 1. figure out where in the sequence they are 
  if (keyCode === code[tracker]) {
    tracker = tracker + 1
  } else {
    // 2. reset to beggining if they mess up
    tracker = 0
  }
  
  // 3. show a success message if they win
  if (tracker === 9) {
    alert('you did it')
  }
}

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', onKeyDown)
}

init()