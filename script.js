const params = new URLSearchParams(window.location.search);
const imageName = params.get("image");

if (imageName) {
    document.getElementById("displayImage").src = `images/${notify}.png`; // Ajuste a extensão conforme necessário
} else {
    console.error("Nenhuma imagem especificada na URL.");
}
