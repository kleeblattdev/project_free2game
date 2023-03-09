// library import
import { v4 as uuidv4 } from "uuid";
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

    return (
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
                 os={getData?.minimum_system_requirements.os}
                memory={getData?.minimum_system_requirements.memory}
 

            >

            </DetailsItem>
        </section>
    );
}

export default DetailView;