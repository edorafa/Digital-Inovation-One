function verificarPalindrono(frase){

    /* deixando frase com letras minusculas */
    let fraseEmLetraMinuscula = frase.toLowerCase();

    /* normalzando a frase - removendo caracteres especiais*/
    frasePadronizada = tratarCaracteresEspeciais(fraseEmLetraMinuscula);
    fraseInvertida = "";

    /* invertendo a string */

    for(i=(frasePadronizada.length)-1; i >= 0; i--){
        fraseInvertida = fraseInvertida.concat(frasePadronizada[i]);
    }

    /* comparando se as frases */
    if(frasePadronizada == fraseInvertida){
        return `A frase {{${frase}}} é um palindrono`;
    }
    return `A frase {{ ${frase} }} não é um palindrono`;
}

function tratarCaracteresEspeciais(frase){
    const str = 'ÁÉÍÓÚáéíóúâêîôûàèìòùÇç/.,~!@#$%&_-12345';
    const parsed = frase.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
    let frasePadronizada = parsed;

    return frasePadronizada;
}

palindronos = [];
palindronos.push('A base do teto desaba.');
palindronos.push('A cara rajada da jararaca.');
palindronos.push('Acuda cadela da Leda caduca');
palindronos.push('A dama admirou o rim da amada.');
palindronos.push('A grama é amarga.');
palindronos.push('Aí, Lima falou: Olá, família!.');
palindronos.push('Ajudem Edu, já!');
palindronos.push('A lupa pula.');
palindronos.push('A mãe te ama.');
palindronos.push('A mala nada na lama.');
palindronos.push('Ame o poema.');
palindronos.push('A miss é péssima!');
palindronos.push('Amo Omã. Se Roma me tem amores, amo Omã!');
palindronos.push('Anotaram a data da maratona.');
palindronos.push('A pateta ama até tapa.');
palindronos.push('Após a sopa.');
palindronos.push('Arara rara.');
palindronos.push('À Rita, sátira!');
palindronos.push('A Rita, sobre vovô, versos atira.');
palindronos.push('A rua Laura.');
palindronos.push('Assim a aia ia à missa.');
palindronos.push('Ato idiota.');
palindronos.push('A torre da derrota.');
palindronos.push('E até o Papa poeta é.');
palindronos.push('Irene ri.');
palindronos.push('Laço bacana para panaca boçal.');
palindronos.push('Lá vou eu em meu eu oval.');
palindronos.push('Luza Rocelina, a namorada do Manuel, leu na moda da romana: "anil é cor azul".');
palindronos.push('Luz azul.');
palindronos.push('Mega bobagem.');
palindronos.push('Me vê se a panela da moça é de aço, Madalena Paes, e vem.');
palindronos.push('Missa é assim.');
palindronos.push('O céu sueco.');
palindronos.push('O galo ama o lago.');
palindronos.push('Olá, galo!');
palindronos.push('Olé! Maracujá, caju, caramelo.');
palindronos.push('O lobo ama o bolo.');
palindronos.push('O romano acata amores a damas amadas e Roma ataca o namoro.');
palindronos.push('O teu dueto.');
palindronos.push('Ótimo, só eu, que os omito.');
palindronos.push('Oto come mocotó.');
palindronos.push('O trote torto.');
palindronos.push('Rir, o breve verbo rir.');
palindronos.push('Roma é amor.');
palindronos.push('Roma me tem amor.');
palindronos.push('Saíram o tio e oito Marias.');
palindronos.push('Seco de raiva, coloco no colo caviar e doces.');
palindronos.push('Socorram-me, subi no ônibus em Marrocos.');
palindronos.push('Zé de Lima, Rua Laura, mil e dez.');

for (let i = 0; i < palindronos.length; i++) {
    console.log(verificarPalindrono(palindronos[i])); 
}

