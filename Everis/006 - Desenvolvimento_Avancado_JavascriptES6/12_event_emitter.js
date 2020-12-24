// EventEmitter
//Exclusivo do Node
//É possivel limitar a qtd de eventos
//forma 1

const EventEmitter = require('events');
//gera instancia do EventEmitter

const emitter = new EventEmitter();

//cria um consumidor do evento
emitter.on('User logged', data => {
    console.log(data);
});

//emitindo o evento ele será acionado
emitter.emit('User logged', { user: 'Rafael Luan' });

//forma 2
//metodos customizados extennedo de emitter

class Users extends EventEmitter {
    userLogged (data) {
        this.emit('user logged', data);
    }
}

const users = new Users();

users.on('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Rafael Luan' });
users.userLogged({ user: 'Maria Sevilha' });

//responder um evento por vez
/*
users.once('User logged', data => {
    console.log(data);
});
*/