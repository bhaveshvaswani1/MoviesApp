import Card from "../Card/Card"
import { useState, useEffect } from "react"
import {useSelector} from 'react-redux'
function Favourites() {

    const [res, setRes] = useState([]);
    
     const state = useSelector((state) => state.GetData);
    useEffect(() => {
        setRes(state);

    }, [state])


    return (

        <div className="main" >
            
                
            <h1 className="head" >Your Favourites movies</h1>
            <div className="card-div" >

                {  res&& res.length>0 &&
                    res.map((item)=>{
                        return <Card
                        url="fav"
                        name={item.name } 
                        img = {item.img}
                        rating = {item.rating}
                        id = {item.id}
                        comment={item.comment}
                        myRating={item.myRating}
                        >
                          
                        </Card>
                    })
                }
            </div>
        </div>
    );
}

export default Favourites;