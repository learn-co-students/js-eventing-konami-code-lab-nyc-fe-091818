const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let tracker = 0

function onKeyDown(event) {
  const keycode = event.which || event.location 
  
  // 1. figure out where they were
  if (keycode === code[tracker]) {
    tracker = tracker + 1
  } else {
    // 2. reset to the beginning if they mess up
    tracker = 0
  }
  // 3. we show a success message if they win
  if (tracker === 10) {
    alert('you did it')
  }
  
  console.log(tracker)
  // 1. figure out where in the sequence they are 
  // 2. figure out if the key they pressed is right
  
}

function init() {
  // Write your JavaScript code inside the init() function
  
  document.body.addEventListener('keydown', onKeyDown)  
}

init()