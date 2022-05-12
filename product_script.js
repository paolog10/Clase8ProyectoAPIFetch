fetch(`https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1`) //url ejercicio 2 nuevo promise
    .then(response => response.json())
    .then(json => {

        //console.log(json);

        let tituloProducto=document.getElementById(`titulo-producto`);
        tituloProducto.appendChild(document.createTextNode(json.title));

        let imagenProducto=document.getElementById(`imagen-producto`);
        imagenProducto.src=json.image_url // acá se cambia el source

        let descripcionProducto=document.getElementById(`descripcion-producto`);
        descripcionProducto.appendChild(document.createTextNode(json.description));

        let sitioFabricante=document.getElementById(`link-producto`);
        sitioFabricante.href=json.factory_url; //se cambia href

        let precioProducto=document.getElementById(`precio-producto`);
        precioProducto.appendChild(document.createTextNode(json.price));
    })

