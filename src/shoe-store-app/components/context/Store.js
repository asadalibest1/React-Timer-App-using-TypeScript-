import React, {createContext} from 'react'

const iState = [];
export const Data = createContext(iState);

const reducer = (state, action) =>{
    switch(action.type){
        
        case "ADD_VAL":{

            return [
                ...state,
                {
                id: action.id,
                name: action.name,
                img: action.img,
                title: action.title,
                prize: action.prize
                }
            ]
        }
        case "DELETE_LIST":{
        return state.filter(item => item.id !== action.id)
           
    
    }
        
        default : return state;     
        
    }
            
};

export const TransProvider = ({children}) =>{
    let [data, dispatch] = React.useReducer(reducer, iState);
    

const addVal = (id, name, img, title, prize) =>{
    dispatch({
        type: "ADD_VAL",
        id,
        name,
        img,
        title,
        prize
    })

}
const deleteVal = (id) =>{
    dispatch({
        type: "DELETE_LIST",
        id,
    })

} 

const values ={
    data,
    addVal,
    deleteVal,
}
    return(
        <>

        <Data.Provider value={values}>
                {children}
        </Data.Provider>
        
        </>
        
    )
}