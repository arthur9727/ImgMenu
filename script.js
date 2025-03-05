const params = new URLSearchParams(window.location.search);
const imageName = params.get("image");

if (imageName) {
    // Atribui o caminho correto da imagem ao 'src'
    document.getElementById("displayImage").src = `images/${imageName}.png`;  // Caminho para a pasta 'images' e imagem .png
} else {
    console.error("Nenhuma imagem especificada na URL.");
}
