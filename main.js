let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #558d33 ;">I create websites and I like technology.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
