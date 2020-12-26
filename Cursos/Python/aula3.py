############# Condicionais

# a = int(input('Primeiro valor: '))
# b = int(input('Segundo valor: '))
# c = int(input('Terceiro valor: '))
#
# if a > b and a > c:
#     print('o maior número é {}'.format(a))
# elif b > a and b > c:
#     print('o maior numero é: {}'.format(b))
# else:
#     print('o maior numero é: {}'.format(c))

############ Verificar se número é par

# a = int(input('Entre com um valor:'))
# resto = a % 2
#
# if resto == 0:
#     print('número par')
# else:print('número impar')

############ Existe par entre dois números digitados

# a = int(input('Entre com o primeiro valor:'))
# b = int(input('Entre com o primeiro valor:'))
# resto_a = a % 2
# resto_b = b % 2
#
# if resto_a == 0 or resto_b ==0:
#     print('número par foi digitado')
# else:
#     print('nenhum número par foi digitado')

############ Pedir notas de um aluno e imprimir a média 1

# a = int(input('Primeiro bimestre: '))
# b = int(input('Segundo bimestre: '))
# c = int(input('Terceiro bimestre: '))
# d = int(input('Quarto bimestre: '))
#
# media = (a + b + c + d) / 4
#
# if a <= 10 and b <= 10 and c <= 10 and d <= 10:
#     print('media: {}'.format(media))
# else:
#     print('foi informada alguma nota errada')

############ Pedir notas de um aluno e imprimir a média 2

a = int(input('Primeiro bimestre: '))
if a > 10:
    a = int(input('Valor errado. Primeiro bimestre'))
b = int(input('Segundo bimestre: '))
if b > 10:
    b = int(input('Valor errado. Primeiro bimestre'))
c = int(input('Terceiro bimestre: '))
if c> 10:
    c = int(input('Valor errado. Primeiro bimestre'))
d = int(input('Quarto bimestre: '))
if d > 10:
    d = int(input('Valor errado. Primeiro bimestre'))

media = (a + b + c + d) / 4
print('media: {}'.format(media))