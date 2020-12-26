#lista
lista = [12,1,10,7,5]
lista_animal = ['cachorro', 'gato', 'elefante', 'lobo', 'arara']
#print(lista_animal[1])

#for x in lista_animal:
#    print(x)

#soma = 0
#for x in lista:
#    soma += x
#print(soma)

#soma todos os valores da lista
#print(sum(lista))

#maior valor da lista
#print(max(lista))

#maior valor da lista
#print(min(lista))

#verificar se elemento existe na lista
#se não existir incluir
if 'lobo' in lista_animal:
    print('existe um lobo na lista')
else:
    print('nao existe um lobo na lista')
    lista_animal.append('lobo')

#multiplicar lista
# nova_lista = lista_animal*3
# print(nova_lista);

#retirar ultimo elemento da lista
#lista_animal.pop()

#retirar elemento específico da lista
#lista_animal.pop(0)

#remover atraves do nome
#lista_animal.remove('elefante')

#ordenar uma lista
# lista.sort()
# lista_animal.sort()
# print(lista)
# print(lista_animal)

#reverter a lista
# lista_animal.reverse()
# print(lista_animal)

#LISTA: consigo alterar valores
#TUPLAS: imutável

tupla = (1,10,12,14)
print(tupla[0])

#tamanho da lista ou tupla
print(len(tupla))
print(len(lista_animal))

#converter lista para tupla
tupla_animal = tuple(lista_animal)
print(type(tupla_animal))

#converter tupla em lista
lista_numerica = list(tupla)
print(type(lista_numerica))

