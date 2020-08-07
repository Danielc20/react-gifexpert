
//encodeURI remplaza los espacios de la categoria con %20 para compatibilizarlos con el formato URL
export const getGifs = async (category) => {
    const url =
        `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=VNc0QYS2yF4Qf7MwP2mCtQWko0Qooz9K`
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}