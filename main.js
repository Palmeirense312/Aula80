var listaConvidados = []
function submit()
{
    var nomeAdicionado = document.getElementById("text_input").value;
    listaConvidados.push(nomeAdicionado);
    console.log(listaConvidados);
    document.getElementById("mostarNome").innerHTML = toString;

}
function mostarNomes()
{
var nomes = listaConvidados.join("<br>");
document.getElementById("nomesAdicionados").innerHTML = nomes.toString;
document.getElementById("btnOrdemAlfabetica").style.display = "block";






}