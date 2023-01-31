
//Menu Mobile


// About us Tab



var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unselected_color = "#646872";
var selected_color = "#2A2D34";



var single_tab = document.getElementsByClassName("single-tab");
for(var a = 0; a < single_tab.length; a++){
  single_tab[a].onclick = function(){
    for(var b = 0; b < single_tab.length; b ++){
      single_tab[b].style["background-color"] = unselected_color;
      single_tab[b].style["font-weight"] = "normal";
    }
    this.style["background-color"] = selected_color;
    this.style["font-weight"] = "bold";
    var conteudoSelecionado = this.innerHTML;
  document.getElementById("box-text").innerHTML = aboutUs[conteudoSelecionado];
  }

  
}
//--------------------------------------------------------------------

// Slider de serviços

var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];
//  service-title  service-text           service-previous  service-next 


var servico_atual = 0;

document.getElementById("service-previous").onclick = function(){

  if(servico_atual == 0){
    var servico_anterior = our_services.length - 1;
  }else{
    servico_anterior = servico_atual -1;
  };

  document.getElementById("service-title").innerHTML = our_services[servico_anterior].title;
  document.getElementById("service-text").innerHTML = our_services[servico_anterior].text;
  servico_atual = servico_anterior;

}

document.getElementById("service-next").onclick = function(){

  if(servico_atual == our_services.length -1){
    var proximoServico = 0;
  }else {
    proximoServico = servico_atual +1;
  }
  document.getElementById("service-title").innerHTML = our_services[proximoServico].title;
  document.getElementById("service-text").innerHTML = our_services[proximoServico].text;
  servico_atual = proximoServico;

}



   