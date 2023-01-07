import React from "react"

const Card = () =>{
    return(
        <div className="tarjetas m-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
                <div className="card">
                <img src="./img/cuadrado_vacio.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu nibh rhoncus, consequat magna non, porta dui.</p>
                </div>
                <div className="boton text-center justify-content">
                    <hr/>
                    <button className="btn btn-primary text center m-2">Find Out More!</button>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu nibh rhoncus, consequat magna non, porta dui.</p>
                </div>
                <div className="boton text-center justify-content">
                    <hr/>
                    <button className="btn btn-primary text center m-2">Find Out More!</button>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu nibh rhoncus, consequat magna non, porta dui.</p>
                </div>
                <div className="boton text-center justify-content">
                    <hr/>
                    <button className="btn btn-primary text center m-2">Find Out More!</button>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="boton text-center justify-content">
                    <hr/>
                    <button className="btn btn-primary text center m-2">Find Out More!</button>
                </div>
                </div>
            </div>
        </div>
        </div>   
        )
}
export default Card