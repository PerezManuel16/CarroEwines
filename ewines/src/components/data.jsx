const data = [
    {"id": 1,"vino":"Navarro Correa", "uva":"Malbec", "detalle":"Some quick example text to build on the card title and make up the bulk of the cards content.", "img":"https://www.espaciovino.com.ar/media/default/0001/64/thumb_63492_default_medium.jpeg"},
    {"id": 2,"vino":"Trumpeter", "uva":"Malbec", "detalle":"Some quick example text to build on the card title and make up the bulk of the cards content.", "img":"https://http2.mlstatic.com/D_NQ_NP_726718-MLA43336848134_092020-O.jpg"},
    {"id": 3,"vino":"Rutini", "uva":"Cabernet Sauvignon", "detalle":"Some quick example text to build on the card title and make up the bulk of the cards content.", "img":"https://http2.mlstatic.com/D_NQ_NP_840224-MLA31009745834_062019-O.jpg"},
    {"id": 4,"vino":"Dv Catena", "uva":"Syrah", "detalle":"Some quick example text to build on the card title and make up the bulk of the cards content.", "img":"https://http2.mlstatic.com/D_NQ_NP_676910-MLA46275886875_062021-O.jpg"}
    ]

    const mostrar = new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(data)
            
        }, 3000)
    })


    export default mostrar;