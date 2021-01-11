import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ExemploList {
    public static void main(String[]args){

        List<String> nomes = new ArrayList<>();

        //01 - adicionar 5 nomes
        nomes.add("Juliana");
        nomes.add("Pedro");
        nomes.add("Carlos");
        nomes.add("Larissa");
        nomes.add("Joao");

        //02 - navegar na lista
        for (String nomeDaLista: nomes){
            System.out.println("Meu nome é: " + nomeDaLista);
        }

        //03 - substituir Carlos por Roberto
        nomes.set(2, "Roberto");

        //04 - retornar posição 1
        System.out.println(nomes.get(1));

        //05 - remover nome posição 4
        nomes.remove(4);

        //06 - remover nome João
        nomes.remove("Joao");

        //07 - retornar qtd itens na lista
        System.out.println("Quantidade de itens na lista nomes: " + nomes.size());

        //08 - verificar se Juliano esta na lista
        String buscarNome = "Juliano";
        if(nomes.contains(buscarNome)) {
            System.out.println(buscarNome + " esta na lista");
        }
        else {
            System.out.println(buscarNome + " não esta na lista");
        }

        //09 - criar nova lista: Ismael e Rodrigo e add essa lista na antiga
        List<String> nomes2 = new ArrayList<>();
        nomes2.add("Ismael");
        nomes2.add("Rodrigo");
        nomes.addAll(nomes2);

        //10 - ordenar lista
        Collections.sort(nomes);

        //11 - verificar se lista esta vazia
        if(nomes.isEmpty()){
            System.out.println("Lista esta vazia");
        }

        else {}
            System.out.println("Lista não está vazia");
    }
}
