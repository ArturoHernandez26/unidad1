fetch('menu.json')
.then(response =>response.json())
.then(data =>{
    const menuContianer=document.getElementById
    ('menu-container')

    let total = 0;
    data.items.forEach(category => {
        const categoryTitle=document.createElement('h3');
        categoryTitle.textContent = category.category
        menuContianer.appendChild(categoryTitle);
        
        const table =document.createElement('table')
        let tableContent = ´<tr><th>Foto</th><th>Descripcion</th><th>Precio</th><th>Seleccionar</th></tr>´;
        
        
        category.items.forEach(item =>
            tableContent +=
            ´<tr>
            <td><img scr="${items.image}" alt="${item.name}" style = "width:100px;"></></td>
            </tr>´
        )
    });
})