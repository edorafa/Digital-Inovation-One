const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Math class', function(){

    //hook
    //before, beforeEach, after, afterEacah
    //forma de evitar repetição de código
    // antes de cada execução esse metodo é invocado
    beforeEach(function(){
        value = 0;
    });

    it('Sum two numbers', function(){
        //descreve o comportamento esperado
        const math = new Math();
        this.timeout(3000);

        math.sum(5,5, value => {
            assert.equal(value, 10);
            //aguarda o done ser invocado e ai sim ele 
            //considerará o teste finalizado
            //Garante que o teste irá aguardar uma promise, 
            //async await.


            /* assert com chai */

                expect(value).to.equal(10);
            /* assert com chai */


            done();
        });

        //objeto assert que possui metodo equal
        //que verifica se dois valores sao iguais
        //assert.equal(math.sum(5,5), 10);     
    });

    //Como mocha posso escrever testes que ainda não 
    //existem, mostrando que há um condigo pendente.
    //código que irá nos alertar da necessidade da 
    //escrita desses testes 
    it('Multiple two numbers');

    //Capacidade de executar apenas um teste.
    it.only('Multiple two numbers', function () {
        const math = new Math();
        const obj = {
            name: 'Celso Henrique'
        };

        expect(obj)
            .to.have.property('name')
            .equal('Celso Henrique');

        assert.equal(math.multiply(5,5),25);
        expect(math.multiply(value,5)).to.equal(0);

        //compara se os valores dos objetos sao iguais
        expect(obj).to.deep.equal(obj2);
    });

    //pula um teste
    it.skip('Multiple two numbers');

    it. only('Call req with sum and index values,' function(){
        const req = {};
        const res = {
            load: sinon.spy()
        };
        const math = new Math();
        math.printSum(req, res, 5, 5);

        //cria uma função espiã caso a função for chamada
        expect(res.load.calledOnce).to.be.true;

    });
});

