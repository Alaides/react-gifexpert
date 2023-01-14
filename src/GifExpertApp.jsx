import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ ]);

    const onAddCategory = ( newCategory ) => {
        
        const cleanCategory = categories.find( element => element.toLowerCase() === newCategory.toLowerCase() );
        if ( cleanCategory ) return;

        setCategories ( [ newCategory, ...categories ] );
    };

    const clearGrid = () => setCategories ([]);

    return (
    <>

        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={ (event) => onAddCategory(event) }
        />


        <button onClick={clearGrid} >
            Borrar historial
        </button>

        { 
            categories.map( (category) => (
                <GifGrid 
                    key={ category } 
                    category={ category } />
            ))
        }

    </>
  )
}
