let contador = 0
let input = document.getElementById('input_tarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('area_lista');


function addTarefa(){
    //Pegar valor digitado no input

    let valorInput = input.value;

    //Se nao for vazio, nem nulo, nem indefinido
    if( (valorInput !=="") && (valorInput !== null) && (valorInput !== undefined)){

        ++contador;

        let novoItem = `<div  id='${contador}' class="item clicado">
        <div onclick='marcarTarefa(${contador})' class="item_icone">
            <i  id='icone_${contador}' class="mdi mdi-circle-outline" ></i>
        </div>
        
        <div onclick='marcarTarefa(${contador})' class="item_nome">
            ${valorInput}
        </div>
        <div class="item_botao">
            <button  onclick='deletar(${contador})' class="delete">
                 <i class="mdi mdi-delete"></i>Deletar</button>
        </div>
        </div>`;

    //Adicionar novos itens no main    
    main.innerHTML += novoItem; 

    //Zerar campinhos
        input.value = ""
        input.focus();

    }

}
function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

// Função para trocar o icone
function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    // Se for só item, ele vai dar como clicado
    if(classe == 'item'){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        //joga o item marcado para a ultima posição
        item.parentNode.appendChild(item);


    } else{

        //retira a marcação do icone quando for clicado
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

input.addEventListener('keyup',function(event){
    //Se teclou ENTER (13)
    if(event.keyCode === 13){
        event.preventDefault(); //Impede qualquer cagada do enter
        btnAdd.click();
    }
})