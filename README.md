<h1>Guia de Testes Unitários</h1>
Cada repositório deve possuir uma suíte de testes que será executada automaticamente sob o código fonte. Só é possível integrar uma feature quando os testes dela estiverem escritos e todos os testes executarem sem erros. 
<br>
<br>
<h2>Regras Gerais</h2>
<h3>Escrita dos testes</h3>
<ul>
    <li>
        Cada desenvolvedor é responsável por escrever os testes das funcionalidades que estão desenvolvendo.
    </li>
    <li>
        Os testes devem ser escritos antes do código da funcionalidade, focados nos casos de uso e no comportamento esperado.
    </li>
</ul>
<h3>O que testar</h3>
    <ul>
        <li>
            Testar códigos que envolvem lógica de negócio e condicionais de certa complexidade.
        </li>
        <li>
            Evitar testar códigos triviais e interações com dependências externas, como chamadas a bancos de dados e serviços externos.
        </li>
    </ul>
<h3>Estrutura dos testes</h3>
    <ul>
        <li>
            Os testes devem estar contidos em um diretório chamado <i>tests</i>, na raiz do projeto.
        </li>
        <li>
            A estrutura de diretórios dentro da pasta <i>tests</i> deve refletir a estrutura do projeto.
        </li>
    </ul>
<br>
<p><strong>Justificativa:</strong> Testar as funcionalidades isoladamente garante uma confiabilidade maior nas entregas e facilita o processo de modificar códigos previamente escritos sem fazer com que eles parem de funcionar. A ideia central é poupar tempo com a automatização e impedir códigos quebrados de saírem do ambiente de desenvolvimento para os repositórios da equipe. </p>

