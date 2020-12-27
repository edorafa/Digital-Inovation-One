#função: tudo que retorna um valor
#metodo: não retorna valor

class Calculadora:

    def soma(self,valor_a, valor_b):
        return valor_a  + valor_b

    def subtracao(self,valor_a, valor_b):
        return valor_a  - valor_b

    def multiplicacao(self,valor_a, valor_b):
        return valor_a  * valor_b

    def divisao(self,valor_a, valor_b):
        return valor_a  / valor_b

calculadora = Calculadora()
print(calculadora.soma(1,2))
print(calculadora.subtracao(3,4))
print(calculadora.multiplicacao(5,6))
print(calculadora.divisao(7,8))