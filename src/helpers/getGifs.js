

 export const gettingGif = async (category) => {

    const api_key = 'oSVga0lRmj1inekeqmZNjeFMFznGT7IJ'
    const categoria = category

    const gifs = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=12&offset=0&rating=g&lang=en`)
    const { data } = await gifs.json()


    const Finalgifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    console.log('corriendo useEffect')

    return Finalgifs 
    
}
