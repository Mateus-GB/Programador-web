function carregarUsuarios() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        let lista = document.getElementById("lista");
        lista.innerHTML = "";
        data.forEach(usuario => {
            lista.innerHTML += "<li>" + usuario.name + " - " + usuario.email + "</li>";
        });
    })
    .catch(error => console.log("Erro ao carregar:", error));
}