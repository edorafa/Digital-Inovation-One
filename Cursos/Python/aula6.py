#Conjuntos
# conjunto = {1,2,3,4}

#adicionar elemento no conjunto
# conjunto.add(5)

#remover elemento no conjunto
# conjunto.discard(2)

# ----------------------------------------------

cj = {4,8,12,16}
cj2 = {5,10,15,20}

#união
conjunto_uniao = cj.union(cj2)
print('Uniao: {}'.format(conjunto_uniao))

#intersecção
conjunto_interseccao = cj.intersection(cj2)
print('Interseccao: {}'.format(conjunto_interseccao))

#diferenca
conjunto_diferenca1 = cj.difference(cj2)
conjunto_diferenca2 = cj2.difference(cj)
print('Diferenca 1 e 2: {}'.format(conjunto_diferenca1))
print('Diferenca 2 e 1: {}'.format(conjunto_diferenca2))

#diferença simetrica
conjunto_diff_simetrica = cj.symmetric_difference(cj2)
print('Diferença simetrica: {}'.format(conjunto_diff_simetrica))

#verificar se é subconjunto
conjunto_a = {1,2,3}
conjunto_b = {1,2,3,4,5}
conjunto_subset = conjunto_a.issubset(conjunto_b)
print('A é subconjunto de B: {}'.format(conjunto_subset))

#verificar se é superconjunto
conjunto_super = conjunto_b.issuperset(conjunto_a)
print('A é superconjunto de B: {}'.format(conjunto_super))

#remover duplicidade de uma lista
lista = ['cat','cat','dog','dog','bird']
lista = list(set(lista))
print(lista)