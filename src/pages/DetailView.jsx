import DetailsItem from "../components/detailsItem/DetailsItem";

// import uuid
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const DetailView = () => {
   const params = useParams();   /* mit params.id  ansprechen */
    
  const [getData, setData] = useState([])

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/game?${params.id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
            
    
/*         .catch(error => {
            console.log("--> Error <--")
            console.log(error)}) */

    },[]);

    return ( 
        <section>
        <h1>DetailView</h1>
        <DetailsItem 
                    name="Name"
        >

        </DetailsItem>
        </section>
     );
}
 
export default DetailView;