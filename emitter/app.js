var Emitter = require('./emitter');// Inyectamos la dependencia de emitter.js
var emtr = new Emitter();

emtr.on('greet', function(){ // Intyectamos la función anónima
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () => { // Intyectamos la función anónima
    console.log('A greeting occurred!');
});

console.log('Hello!'); // Se invoca la función anónima
emtr.emit('greet');

console.log(emtr);
emtr.emit('jump');