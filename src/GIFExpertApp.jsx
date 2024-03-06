import { useState } from "react"
import { AddCategory,GifGrid } from "./componentes";


export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([ 'One Punch' ]);
    
    
    const onAddCategory = ( NewCategory ) =>{
      if ( categories.includes(NewCategory) ) return;
        //  categories.push(newCaregory);
        
    setCategories([ NewCategory ,...categories]);
        

    }
    

    
    return (
        <>
        {/*titulo*/}
        <h1>GifExpertApp</h1>
        
        {/* input: introducir algo */ }
        <AddCategory
        // setCategories={ setCategories}
        onNewCategory={ (value) => onAddCategory(value) }
         />


         {/* listado de gifs */ }
         
      
            {categories.map( category =>  (
               <GifGrid key={ category } 
               category={ category}/>
                )
            )}
       

  



         {/* gifs items */ }
        </>
    )
}