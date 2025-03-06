document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key.toLowerCase() === 'u') {
        event.preventDefault();
        alert('Visualização do código-fonte desativada!');
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert('Clique direito desativado!');
});
