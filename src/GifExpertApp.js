import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
//rafc es un snippet para crear toda esta interfaz automaticamente



/** GIFEXPERTAPP - PRINCIPAL
 *   
 *  GifExpertApp es la app principal que construye el index que se ve al comienzo.
 * Cuenta con un Hook useState de Categorias para almacenar una, por defecto, o varias categorias 
 * a ser renderizadas en el index.
 * 
 * 
 * <AddCategory />. Este componente se encarga de retornar una lista ordenada de categorias
 *  al index principal. Tambien recibe como parametro la funcion de agregado de 'Categorias' para poder
 *  manipularla en su propio componente cuando lo necesita.
 * 
 * <GifGrid />. Este componente devuelve un 'Header 3' con el nombre de la categoria y todos los resultados
 *  para esa categoria que se recibe desde api externa. Recibe como parametro los elementos del 
 * useState 'Categorias' y aplica un resultado desde la Api para cada uno
 * 
 * 
 */
export const GifExpertApp = () => {
    const [Categorias, setCategorias] = useState(['One Punch'])


    //Asi es como se regresa un nuevo estado que es un Arreglo con un nuevo valor. De otra manera
    //Daria error debido a que se remplaza el State OBJ por un String
    // const handleAdd = () => {
    //     setCategorias(cats => [...cats,'Hunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr />
            <ol>
                {Categorias.map(cat =>
                    //Key debe ser un identificador unico no repetible
                    // return <li key={cat}>{cat}</li>
                    <li key={cat}>
                        <GifGrid category={cat} />
                    </li>
                )}
            </ol>
        </>
    )
}

