const params = new URLSearchParams(window.location.search);
const imageName = params.get("image");

if (imageName) {
    // Atribui o caminho correto da imagem ao 'src'
    document.getElementById("displayImage").src = `images/${notify}.png`;  // Ajuste o caminho se necessário
} else {
    console.error("Nenhuma imagem especificada na URL.");
}
