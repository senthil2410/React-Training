import { createElement } from "react";
import photo from "../../assets/raina.jpeg"

const CreateElement=({name})=>
{

    return createElement(
       'div',
       null,

     createElement(
        'h1',
        {className:"name"},
        name,
      ),

        createElement(
            'img',
            {
                className:"image",
                src:photo,
                alt:"cricketer image"
            }
            
        )
    ,
    createElement(
        'br'
    ),
    createElement(
        'textarea',
        {className:"about",
         placeholder:"About raina",
         minLength:40
     
        }
    )

    );
}


const WithOutJsx=()=>
{
    return createElement(
        CreateElement,
        {name:"Suresh Raina"}

    )
}
export default WithOutJsx;