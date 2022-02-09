import React from "react";
import {useState,useEffect} from 'react';
import {useDispatch,useSelector}from 'react-redux';
import { Link } from "react-router-dom";
import TablaCrypto from "./TablaCrypto";

import Style from "./Styles/HomePage.module.css"


export default function HomePage(){
    var listaCryptos=[
        {
            "id":"1",
            "name": "Bitcoin",
            "Symbol":"btc",
            "price": "36.944,59",
            "image": "https://e7.pngegg.com/pngimages/90/212/png-clipart-bitcoin-cryptocurrency-exchange-digital-currency-bitcoin-text-trademark.png"
        },
        {
            "id":"2",
            "name": "Ethereum",
            "Symbol":"eth",
            "price": "2706,34",
            "image": "https://w7.pngwing.com/pngs/601/515/png-transparent-ethereum-cryptocurrency-blockchain-logo-neo-coin-stack-angle-triangle-logo.png"
        },
        {
            "id":"3",
            "name": "Tether",
            "Symbol":"usdt",
            "price": "1,00",
            "image": "https://cryptologos.cc/logos/tether-usdt-logo.png"
        },
        {
            "id":"4",
            "name": "Binance Coin",
            "Symbol":"bnb",
            "price": "365,58",
            "image": "https://cdn.pixabay.com/photo/2021/04/30/16/47/bnb-6219388_960_720.png"
        },
        {
            "id":"5",
            "name": "USD Coin",
            "Symbol":"usdc",
            "price": "1,00 ",
            "image": "https://thumbs.dreamstime.com/b/usd-coin-usdc-digital-stablecoin-icono-220015622.jpg"
        },

    ]
    const [Compare,setCompare] = useState("")
    const [search,setSearch] = useState('');
    function handleChange(e){
        e.preventDefault()
        if(e.target.value==="All"){
            setCompare("usd")
        }else{
            setCompare(e.target.value)

        }
    }
    function handleSearch(e){
        e.preventDefault();
        setSearch(e.target.value);
    }


    return(

        <div>
            {/* <div>

                <NavBar2/>
            </div> */}
            <div class="flex items-center justify-center">
                <div class="flex border-2 rounded">
                    <input type="text" class="px-4 py-2 w-80" placeholder="Search..."onChange={handleSearch}/>
                    <button class="flex items-center justify-center px-4 border-l">
                        <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div>
                {/* <label> Comparar: </label>
                <select >
                    <option value="All">--</option>
                        <option value="btc">Bitcoin</option>
                        <option value="eth">Ethereum</option>
                        <option value="usdt">tether</option>
                        <option value="bnb">Binance Coin</option>
                        <option value="usdc">Usd Coin</option>
                </select>*/}
                <label> Precio VS: </label> 
                 <select onChange={handleChange} >
                    <option value="All">--</option>
                        <option value="usd">Dolar</option>
                        <option value="eur">Euro</option>
                        <option value="btc">Bitcoin</option>
                        <option value="eth">Ethereum</option>
                        <option value="usdt">tether</option>
                        <option value="bnb">Binance Coin</option>
                        <option value="usdc">Usd Coin</option>
                        
                    </select>
            </div>
            <div>
                       <table class="border-collapse border border-slate-400 ...">
                       <thead>
                           <tr className={Style.Tabla}>
                        <th class="border border-slate-300 ..."> # </th>
                        {/* <!-- Celda de cabecera de la subcripcion --> */}
                        <th class="border border-slate-300 ...">Moneda</th>
                        {/* <!-- Celda de cabecera del nombre de la Crypto --> */}
                        <th class="border border-slate-300 ...">Symbol</th>
                        {/* <!-- Celda de cabecera del nombre de la Crypto --> */}
                        <th class="border border-slate-300 ...">Precio/{Compare}</th>
                        {/* <!-- Celda de cabecera del precio --> */}
                        
                         </tr>
                         </thead>
                       </table>
                {
                   listaCryptos?.map( e=>(
                       <TablaCrypto symbol={e.Symbol} image={e.image} name={e.name} price={e.price}id ={e.id}></TablaCrypto>
                    ))
                }
            </div>
            
        </div>

    )
}