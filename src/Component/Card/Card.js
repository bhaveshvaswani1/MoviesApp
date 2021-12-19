import "./Card.css"
import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux';
function Card(props) {

    const [fav, setFav] = useState(false);
    const [addtofav, setAddtofav] = useState(false);
    const [data,setData] = useState({})
    const dispatch = useDispatch();
    useEffect(async () => {
        if (localStorage.getItem("data")) {
            let id = props.id;
            let list = JSON.parse(localStorage.getItem('data'));
            for (var i = 0; i < list.length; i++) {
                if (list[i].id == props.id) {
                    setFav(true);
                    break;
                }
            }
        }

    }, []);

    function submit() {
        if(fav==false)
        {
            setAddtofav(!addtofav);
        }
        else
        {
            setFav(false);
            var id = props.id;
            var list = (localStorage.getItem("data")) ? JSON.parse(localStorage.getItem('data')) : [];
            for (var i = 0; i < list.length; i++) {
                if (list[i].id == props.id) {
                    list.splice(i, 1);
                    break;
                }
            }

            localStorage.setItem("data", JSON.stringify(list));
            dispatch({type:"GetData"});

        }

    }
    function finalsubmit() {

            setFav(true);

            var list = (localStorage.getItem("data")) ? JSON.parse(localStorage.getItem('data')) : [];
            var item = {...props,...data};
            list.push(item);
            localStorage.setItem("data", JSON.stringify(list));
            dispatch({type:"GetData"});
            setAddtofav(!addtofav);

    }
    const removeSubmit = () =>{
        var id = props.id;
            var list = (localStorage.getItem("data")) ? JSON.parse(localStorage.getItem('data')) : [];
            for (var i = 0; i < list.length; i++) {
                if (list[i].id == props.id) {
                    list.splice(i, 1);
                    break;
                }
            }

            localStorage.setItem("data", JSON.stringify(list));
            dispatch({type:"GetData"});

    }
    return (
        <div className="card" >
            <img className="img" src={"https://image.tmdb.org/t/p/w300/" + props.img} alt="img" ></img>

            <h4><u>{props.name}</u></h4>
            {

                (props.url=='fav') 
                ?
                <>
                
                <div className="cmt-rat" >
                <h4>Comment: {props.comment} </h4>
                <h4> My Rating: {props.myRating} </h4>
                
                <button  onClick={removeSubmit} > Remove from fav </button>
                
                </div>
                </>
                
                :
                

                (!addtofav) ? <div>
                    <h4>Rating:<span className="rating" > {props.rating}</span></h4>
                    <button onClick={submit} > {(fav == false) ? "Add To Fav" : "Remove from fav"} </button>
                </div>
                    :
                    <div className="cmt-rat" >
                        <input onChange={(e)=>{setData({...data,comment:e.target.value})}} placeholder="Add comment" ></input>
                        <input onChange={(e)=>{setData({...data,myRating:e.target.value})}}  placeholder="Add your rating" type="number" ></input>
                        <button onClick={finalsubmit} >Add</button>
                    </div>

            }



        </div>
    );
}
export default Card;