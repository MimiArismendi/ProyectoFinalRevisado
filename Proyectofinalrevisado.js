var listas = [];
function Lista(id, titulo){
  this.id = id,
  this.titulo = titulo,
  this.pendientes = []
  this.agregarAtributoaPendiente = function(pendiente){
    this.pendientes.push(pendiente);
  }
};
function Pendiente(){
  this.id = id;
  this.contenido = contenido;
};
function crearLista(){
  var titulo = document.getElementById("titulo");
  var id = Date.now();
  var lista = new Lista (id,titulo.value);
  listas.push(lista);
  renderHTML(lista);
};
function renderHTML(lista){
  var sectionContainer = document.createElement('section');
  var containerList = document.getElementById('contenedor ');
  var inputPendiente = document.createElement('input');
  var botonPendiente = document.createElement('input');
  inputPendiente.type = 'text';
  botonPendiente.type = "submit";
  botonPendiente.value = "Crear Pendiente";
  botonPendiente.onClick = agregarPendiente;
  botonPendiente.setAttribute('data-lista-id',lista.id);
  sectionContainer.id = lista.id;
  var h3Title = document.createElement('h3');
  h3Title.innerText = lista.titulo;
  sectionContainer.appendChild(h3Title);
  containerList.appendChild(sectionContainer);
  containerList.appendChild(inputPendiente);
  containerList.appendChild(botonPendiente);
};
function agregarPendiente(){
  var idDeListaModificar = this.getAttribute('data-lista-id');
  //El método filter nos va a buscar en un arreglo de datos el parametro que yo le de.
  var objetoAgregarPendiente = listas.filter(function(lista){
      return lista.id == idDeListaAModificar;
  });

  var textoPendienteAAgregar = document.getElementById("text-" + idDeListaAModificar.toString());

  var pendiente = new Pendiente(Date.now(), textoPendienteAAgregar)
  objetoAgregarPendiente[0].agregarAtributoaPendiente(pendiente)//el cero es para acceder al primer elemento del []
  mostrarHTMLPendiente(idListaAModificar, pendiente);
};

function mostrarHTMLPendiente(idListaAModificar, pendiente) {
  var liContenedor = document.createElement("li");
  liContenedor.innerText = pendiente.contenido;
  var listaAModificar = document.getElementById("idListaAModificar");
  listaAModificar.innerText = pendiente.contenido;
};
