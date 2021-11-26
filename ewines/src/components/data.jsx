const data = [
    {"id": 1,"vino":"Navarro Correa", "uva":"Malbec", "precio": "500", "detalle":"Some quick example text to build on the card title and make up the bulk of the cards content.", "img":"https://i.ibb.co/WKGvms1/navarro-Correas.jpg"},
    {"id": 2,"vino":"Trumpeter", "uva":"Malbec", "precio": "500", "detalle":"Some quick example text to build on the card title and make up the bulk of the cards content.", "img":"https://i.ibb.co/XJWXv8N/trumpeter.jpg"},
    {"id": 3,"vino":"Rutini", "uva":"Cabernet Sauvignon", "precio": "500", "detalle":"Some quick example text to build on the card title and make up the bulk of the cards content.", "img":"https://i.ibb.co/ZcGKF4b/rutini.jpg"},
    {"id": 4,"vino":"Dv Catena", "uva":"Syrah", "precio": "500", "detalle":"Some quick example text to build on the card title and make up the bulk of the cards content.", "img":"https://i.ibb.co/7xfGCCg/dvCatena.jpg"},
    {"id": 5,"vino":"Dv Catena", "uva":"Syrah", "precio": "500", "detalle":"Some quick example text to build on the card title and make up the bulk of the cards content.", "img":"https://i.ibb.co/7xfGCCg/dvCatena.jpg"},
    {"id": 6,"vino":"Dv Catena", "uva":"Syrah", "precio": "500", "detalle":"Some quick example text to build on the card title and make up the bulk of the cards content.", "img":"https://i.ibb.co/7xfGCCg/dvCatena.jpg"},
    {"id": 7,"vino":"Dv Catena", "uva":"Syrah", "precio": "500", "detalle":"Some quick example text to build on the card title and make up the bulk of the cards content.", "img":"https://i.ibb.co/7xfGCCg/dvCatena.jpg"},
    {"id": 8,"vino":"Dv Catena", "uva":"Syrah", "precio": "500", "detalle":"Some quick example text to build on the card title and make up the bulk of the cards content.", "img":"https://i.ibb.co/7xfGCCg/dvCatena.jpg"}
    ]

    const Mostrar = new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(data)
            
        }, 2000)
    })


    export default Mostrar;