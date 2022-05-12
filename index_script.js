fetch(`https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics`) //url ejercicio 1
    .then(response => response.json())    //función (response es parámetro) que devuelve un .json
    .then(json => {

        //let p = document.createElement(`p`);
        //p.appendChild(document.createTextNode('Cantidad de productos a la venta: ' + json.amount_of_products));
        //document.getElementById('cantidad-productos').appendChild(p); 

        let textNode  = document.createTextNode('Cantidad de productos a la venta: ' + json.amount_of_products)// textNode
        document.getElementById(`cantidad-productos`).appendChild(textNode);
    })


fetch(`https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products`) //url ejercicio 3
    .then(response => response.json())
    .then(json => {
        
        for (const producto of json) {

            let img=document.createElement(`img`);
            img.src=producto.image_url;
            img.className=`product-image`;
            img.alt=`Imagen de notebook`;

            let nombre=document.createElement(`h1`);
            nombre.appendChild(document.createTextNode(producto.title));

            let descripcion=document.createElement(`p`);
            descripcion.appendChild(document.createTextNode(producto.description));

            let sitioFabricante=document.createElement(`a`);
            sitioFabricante.appendChild(document.createTextNode(producto.factory_url)); 
    
            let precio=document.createElement(`p`);
            precio.appendChild(document.createTextNode(producto.price));

            let div=document.createElement(`div`);
            div.appendChild(img);
            div.appendChild(nombre);
            div.appendChild(descripcion);
            div.appendChild(sitioFabricante);
            div.appendChild(precio);
            div.className=`product`;

            document.getElementById(`product-list`).appendChild(div);
        }
    })
