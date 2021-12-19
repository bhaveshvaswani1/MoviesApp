
const  favData = (localStorage.getItem("data")) ?  JSON.parse(localStorage.getItem("data")) : "" ;

const GetData = (state=favData,action) =>{
    switch(action.type){
        case "GetData" :{
            return JSON.parse(localStorage.getItem("data"));
        }
        default : return state;
    }

}
export default GetData