fetch('menu.json')
//que hace? Esta linia incia la carga del archivo menu.json es una funcion de JavaScript que facilita la realizacion de solicitudes de red , como obtener de una archivo o un endpoint de API
//como funciona? fetch devuelve una promesas que cuando se resuelve ,tendra acceso a la respuesta de la solicitud. Esta respuesta no es directamente los datos en formato JSON, sino un objeto de respuesta que incluye varios detalles sobre la respuesta misma.
.then(response => response.json())
// que hace? Esta linea toma el objeto de respuesta en un objeto de respuesta en un obtenido del fetch y utiliza el metodo .json() para convertir el cuerpode la respuesta en un objeto JzavaScript (esto asume que el cuerpo de la respuesta esta en formato JSON).
//Como funciona? el metodo .json() tambien devuelve una promesa, la cual se resuelve con el contenido del cuerpo de un formato JSON.
then(data=>{
    const menuContainer = document.getElementById('menu-container');
    //Que hace? Aui se procesa los datos JSON ya convertidos. Se obtiene una referencia al contenido del menu en el HTML mediante getElementBYid ('menu-container'),y luego se itera sobre los elementos(caracteristicas)del menu.
    data.items.forEach(category =>{
        const categoryTitle = document.createElement('h2');
        //
    })
})
