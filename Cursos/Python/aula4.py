#Comando for

#Imprimir x números
# for x in range(90,100):
#     print(x)

#Numeros primos de 1 a 100
# for x in range(101):
#     primo = 0
#     for k in range(1,x+1):
#         if x % k == 0:
#             primo = primo + 1
#     if primo == 2:
#         print(x)

#while

# a = 0
# while a <= 10:
#     print(a)
#     a += 1

#Validação dos valores das notas

a = int(input('Primeiro bimestre: '))
while a > 10:
    a = int(input('Valor errado. Primeiro bimestre'))
b = int(input('Segundo bimestre: '))
while  b > 10:
    b = int(input('Valor errado. Primeiro bimestre'))
c = int(input('Terceiro bimestre: '))
while  c> 10:
    c = int(input('Valor errado. Primeiro bimestre'))
d = int(input('Quarto bimestre: '))
while  d > 10:
    d = int(input('Valor errado. Primeiro bimestre'))

media = (a + b + c + d) / 4
print('media: {}'.format(media))

