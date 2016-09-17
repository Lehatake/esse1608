document.getElementById("novoContato").addEventListener("click", criarContato);
document.getElementById("listaContatos").addEventListener("click", listarContatos);

function criarContato() {
	var nome = document.getElementById("name");
	var numero = document.getElementById("numero");
   var novoContato = navigator.contacts.create({"displayName": nome});
   var telefones = [];
   telefones[1] = new ContactField('mobile', numero, true);
   novoContato.phoneNumbers = telefones;
   novoContato.save(ok, erro);
    
   function ok() {
      alert("Contato Salvo!")
   }
  
   function erro(message) {
      alert('falha: ' + message);
   }
  
}


function listarContatos() {
   var options = new ContactFindOptions();
   options.filter = "";
   options.multiple = true;

   fields = ["displayName", "phoneNumbers"];
   navigator.contacts.find(fields, sucesso, falha, options);
    
   contatoDiv = document.querySelector("#contato");
   contatoDiv.innerHTML = "";
   function sucesso(contacts) {
      for (var i = 0; i < contacts.length; i++) {
         contatoDiv.innerHTML += "<b>" + contacts[i].displayName+"</b><br/>"+contacts[i].phoneNumbers[0].value+"<br/>";
      }
   }
  
   function falha(message) {
      alert('Falha: ' + message);
   }
  
}