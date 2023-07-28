import { faShopify } from "@fortawesome/free-brands-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { NavLink } from "react-router-dom"

export const Navigation = () => {
    const [xburger , setXburger] = useState(true)
    const openBurger = () =>{
        setXburger(!xburger)
    }


    return (
        <>
        <header>
        <div className="logo"><NavLink to={"/"}><h1>Fashe<span>.</span></h1></NavLink></div>
            <div className={xburger? "info" : "affiche"}> <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/product"}>Product</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink></div>
            <div className="icones"><NavLink to={"/coeur"}><FontAwesomeIcon icon={faHeart} className="icone-shop"/></NavLink>
            <NavLink to={"/panier"}><FontAwesomeIcon icon={faShopify} className="icone-shop"/></NavLink>
            </div>
            <div className="menu-burger" onClick={openBurger}>
            <span className="burger"></span>
            <span className="burger"></span>
            <span className="burger"></span></div>
            
    </header>
        </>
    )
}
