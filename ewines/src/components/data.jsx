const data = [
    {"id": 1,"vino":"Navarro Correa", "uva":"malbec", "detalle":"Some quick example text to build on the card title and make up the bulk of the cards content.", "img":"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/151/809/products/nv-malbec1-3ac92c25284f3202e215899831185357-640-0.jpg"},
    {"id": 2,"vino":"Navarro Correa", "uva":"malbec", "detalle":"Some quick example text to build on the card title and make up the bulk of the cards content.", "img":"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/151/809/products/nv-malbec1-3ac92c25284f3202e215899831185357-640-0.jpg"},
    {"id": 3,"vino":"Navarro Correa", "uva":"malbec", "detalle":"Some quick example text to build on the card title and make up the bulk of the cards content.", "img":"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/151/809/products/nv-malbec1-3ac92c25284f3202e215899831185357-640-0.jpg"},
    {"id": 4,"vino":"Navarro Correa", "uva":"malbec", "detalle":"Some quick example text to build on the card title and make up the bulk of the cards content.", "img":"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/151/809/products/nv-malbec1-3ac92c25284f3202e215899831185357-640-0.jpg"}
    ];

    const mostrar = new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve(data)
            reject ('Falló') 
        }, 3000)
    })


    export default mostrar;