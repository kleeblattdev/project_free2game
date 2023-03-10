// library import
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* component import */
import DetailsItem from "../components/detailsItem/DetailsItem";



const DetailView = () => {
    const params = useParams();   /* mit params.id  ansprechen */
    console.log(params);
    console.log(params.id);

    const [getData, setData] = useState()

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/game?id=${params.id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data)
            })

            .catch(error => {
                console.log("--> Error <--")
                console.log(error)
            })

    }, [params.id]);

   /*  let os = getData.minimum_system_requirements.os */
    if (getData?.minimum_system_requirements){

        console.log(getData.description)
         const description2 = getData?.description.replaceAll(".", ".  \n\n" )
        console.log(description2) 

        return (
                    <section className="detailView">
            <DetailsItem
                imgEins={getData?.screenshots[0].image}
                title={getData?.title}
                thumbnail={getData?.thumbnail}
                platform={getData?.platform}
                genre={getData?.genre}
                url={getData?.freetogame_profile_url}
                description={description2}
                imgZwei={getData?.screenshots[1].image}
                imgDrei={getData?.screenshots[2].image}   
                developer={getData?.developer}
                publisher={getData?.publisher}
                release_date={getData?.release_date}
                
                os={getData.minimum_system_requirements.os}
                memory={getData?.minimum_system_requirements.memory}
                storage={getData?.minimum_system_requirements.storage} 
                processor={getData?.minimum_system_requirements.processor} 
                graphics={getData?.minimum_system_requirements.graphics}
                

        />

            
        </section>
        )
    }else{
        return(
                                <section>
            <DetailsItem
                imgEins={getData?.screenshots[0].image}
                title={getData?.title}
                thumbnail={getData?.thumbnail}
                platform={getData?.platform}
                genre={getData?.genre}
                url={getData?.freetogame_profile_url}
                description={getData?.description}
                imgZwei={getData?.screenshots[1].image}
                imgDrei={getData?.screenshots[2].image}   
                developer={getData?.developer}
                publisher={getData?.publisher}
                release_date={getData?.release_date}
            
                

        />

     
        </section>
        )

    }

    
}

export default DetailView;