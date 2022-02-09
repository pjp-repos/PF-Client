import React from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {getDetail } from "../acctions"
import { useEffect } from "react";
import {useParams} from "react-router"
import ActivityCard from "./ActivityCard"

export default function Detail(){
    const {id} = useParams();
    console.log(id)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDetail(id))
        
        
    },[dispatch,id]);

    const Crypto = (useSelector((state)=>state.detail));
    
    return(
        <div>
            <div>
                <Link to ='/'> <button>Volver</button></Link>
                

            </div>
            
                <img src={Crypto.image} alt="img not found" width="80px" height= "80px"/>
                <div>
                    <p> <strong>name:</strong>{Crypto.name} </p>
                    <p><strong>Symbol:</strong>{Crypto.symbol}</p>
                    <p><strong>Price:</strong> {Crypto.price} </p>
                    

                </div>
                <button>Comprar</button>
                <button>Vender</button> 

            
        </div>
    )
}