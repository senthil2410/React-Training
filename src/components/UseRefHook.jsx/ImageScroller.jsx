import React, { useRef } from "react";
import chennai from "../../assets//chennai.jpeg";
import hydrabad from "../../assets//hydrabad.jpg";
import mumbai from "../../assets//mumbai.jpg";

const ImageScroller=()=>
{

    const chennairef=useRef();
    const mumbairef=useRef();
    const hydrabadref=useRef();

    const cities = [
    { src: chennai, name: "chennai", ref: chennairef },
    { src: mumbai, name: "mumbai", ref: mumbairef },
    { src: hydrabad, name: "hydrabad", ref: hydrabadref },
    ];

    const handleFirstImage=()=>
    {
       chennairef.current.scrollIntoView(
        {
            behavior:"smooth",
            block:"nearest",
            inline:"center"
        }
       );
    }

     const handleSecondImage=()=>
    {
        mumbairef.current.scrollIntoView(
        {
            behavior:"smooth",
            block:"nearest",
            inline:"center"
        }
       );
    }

    const handleThirdImage=()=>
    {
        hydrabadref.current.scrollIntoView(
        {
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        }
       );
    }



    return(
        <div>

            <button type="button" onClick={handleFirstImage} >Chennai</button>
            <button type="button" onClick={handleSecondImage} >Mumbai</button>
            <button type="button" onClick={handleThirdImage} >Hydrabad</button>
                <ul>
                {cities.map((city, index) => (
                <li>
                <img  key={index} src={city.src} name={city.name} ref={city.ref} width="400" height="400" />
                </li>
                ))}
                </ul>

        </div>
    )

}

export default ImageScroller;