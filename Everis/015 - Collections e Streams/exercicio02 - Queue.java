import java.util.LinkedList;
import java.util.Queue;

public class ExemploLinkedList {
    public static void main(String[] args) {
        Queue<String> filaPastel = new LinkedList<>();

        //01 - adicionar nomes
        filaPastel.add("Juliana");
        filaPastel.add("Pedro");
        filaPastel.add("Carlos");
        filaPastel.add("Larissa");
        filaPastel.add("João");

        //02 - navegar na fla

        for (String cliente: filaPastel){
            System.out.println(cliente);
        }

        //03 - retornar first sem remover
        System.out.println("Primeiro cliente: " + filaPastel.peek());

        //04 - retornar first removendo
        System.out.println(filaPastel.poll() + " foi atendida.");

        //05 - adicionar Daniel e verificar posicao
        filaPastel.add("Daniel");
        System.out.println("Posiçaõ de Daniel: " + (filaPastel.size() - 1));

        //06 - tamanho da fila
        System.out.println("Tamanho da fila: " + filaPastel.size());

        //07 - verificar lista fazia
        if(filaPastel.isEmpty()){
            System.out.println("Lista está vazia");
        }
        else {
            System.out.println("Lista não está vazia");
        }

        //08 - verificar Carlos na lista
        String buscarNome = "Carlos";
        if(filaPastel.contains(buscarNome)) {
            System.out.println(buscarNome + " esta na lista");
        }
        else {
            System.out.println(buscarNome + " não esta na lista");
        }
    }
}
