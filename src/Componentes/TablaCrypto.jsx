import React from "react";

import { Link } from "react-router-dom";
import Style from "./Styles/TablaCrypyo.module.css"
export default function TablaCrypto({ symbol,image,name, price,id}){
    return (
        
                <div >
                     <table class="border-separate border border-slate-400 ...">
                     <tbody>
                    <tr className={Style.Tabla}>
                        <td class="border border-slate-300 ...">

                            <button> Fav</button>     
                        </td>
                     
                        <td class="border border-slate-300 ...">
                            <div className= {Style.Moneda}>
                                <div>
                                    <img src={image} alt="img not found" width="30px" height= "30px"/>

                                </div>
                                <div>
                                    <Link to={'/home/'+id}>
                                        <h3> {name} </h3>
                                    </Link>

                                </div>

                            </div>
                        </td>
                        
                        <td class="border border-slate-300 ...">
                            {symbol}
                        </td>


                        <td class="border border-slate-300 ...">
                            {price}
                        </td>

                       
                    </tr>
                    </tbody>
                    </table>

                </div>
        
        
    );
}