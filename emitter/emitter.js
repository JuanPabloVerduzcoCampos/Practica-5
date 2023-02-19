function Emitter(){//Creamos el constructor
    this.events = {};
}

Emitter.prototype.on = function(type, listener){ //Creamos el método on que recibe el tipo de evento y el listener
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type){ //Creamos el método emit que recibe el tipo de evento
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            listener();
        });
    }
}

module.exports = Emitter;//Exportamos el módulo
