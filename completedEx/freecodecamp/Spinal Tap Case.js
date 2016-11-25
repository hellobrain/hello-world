// https://www.freecodecamp.com/challenges/spinal-tap-case

function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/ |_/g, '-').toLowerCase();
}

spinalCase("AllThe-small Things");
