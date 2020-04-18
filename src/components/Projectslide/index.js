
import React from "react";
import brb from "./images/brb.png"
import weather from "./images/weather.png"
import project1 from "./images/project1.png"
import burger from "./images/burgerinput.png"
import "./style.css"

function Projectslide() {




    return (

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators col-md-9">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                <li data-target="#carouselExampleIndicators" data-slide-to={3} />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className=" card border  rounded m-2 ml-4 col-md-11 ">
                        <a href="https://aqueous-beach-33300.herokuapp.com/#all" target="_blank" rel="noopener noreferrer">
                            <div className="card-body">
                                <h3 className="card-title " style={{ textAlign: 'center' }}>
                                    BRB Laptops
                </h3>
                            </div>
                        </a>
                        <img src={brb} className="card-img-top burgerinputThumbnail  img-responsive" alt="Weather" />
                        <a href="https://github.com/aarkitekkt/brb-laptops" target="_blank" rel="noopener noreferrer">
                            <div className="card-body">
                                <h3 className="card-title" style={{ textAlign: 'center' }}>BRB Laptops Repo</h3>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className=" border card rounded m-2 ml-4 col-md-11 ">
                        <a href="https://rythomas2525.github.io/weather/" target="_blank" rel="noopener noreferrer">
                            <div className="card-body">
                                <h3 className="card-title " style={{ textAlign: 'center' }}>
                                    Weather App
                </h3>
                            </div>
                        </a>

                        <img src={weather} className="card-img-top weatherThumbnail img-responsive" alt="Weather" />

                        <a href="https://github.com/rythomas2525/weather" target="_blank" rel="noopener noreferrer">
                            <div className=" card-body">
                                <h3 className="card-title" style={{ textAlign: 'center' }}>Weather Repo</h3>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className=" card border rounded m-2 ml-4 col-md-11 ">
                        <a href="https://braydon-nelson.github.io/project-1/" target="_blank" rel="noopener noreferrer">
                            <div className="card-body">
                                <h3 className="card-title " style={{ textAlign: 'center' }}>
                                    Meme &amp; Movie
                </h3>
                            </div>
                        </a>
                        <img src={project1} className="card-img-top project1Thumbnail  img-responsive" alt="Weather" />
                        <a href="https://github.com/braydon-nelson/project-1" target="_blank" rel="noopener noreferrer">
                            <div className="card-body">
                                <h3 className="card-title" style={{ textAlign: 'center' }}>Meme &amp; Movie Repo</h3>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className=" card border rounded m-2 ml-4  col-md-11 ">
                        <a href="https://mysterious-headland-58622.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <div className="card-body">
                                <h3 className="card-title " style={{ textAlign: 'center' }}>
                                    Burger Input
                </h3>
                            </div>
                        </a>
                        <img src={burger} className="card-img-top burgerinputThumbnail  img-responsive" alt="Weather" />
                        <a href="https://github.com/rythomas2525/burgerinput " target="_blank" rel="noopener noreferrer">
                            <div className="card-body">
                                <h3 className="card-title" style={{ textAlign: 'center' }}>Burger Input Repo </h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev mr-4" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next mr-2" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}





export default Projectslide;
