
import React from "react";
import brb from "./images/brb.png"
import weather from "./images/weather.png"
import project1 from "./images/project1.png"
import burger from "./images/burgerinput.png"
import employee from "./images/employee.png"
import fitness from "./images/fitness.png"
import "./style.css"

function Projectslide() {




    return (

        <div id="carouselExampleIndicators" className="carousel slide mr-3" data-ride="carousel">
            <ol className="carousel-indicators col-xs-9">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                <li data-target="#carouselExampleIndicators" data-slide-to={3} />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className=" card border  rounded m-2 ml-4 col-s-11 ">
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
                    <div className=" border card rounded m-2 ml-4 col-s-11 ">
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
                    <div className=" card border rounded m-2 ml-4 col-s-11 ">
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
                    <div className=" card border rounded m-2 ml-4  col-s-11 ">
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
                {/* employee tracker */}
                <div className="carousel-item">
                    <div className=" card border rounded m-2 ml-4  col-s-11 ">
                        <a href="https://rythomas2525.github.io/19-employeetracker/" target="_blank" rel="noopener noreferrer">
                            <div className="card-body">
                                <h3 className="card-title " style={{ textAlign: 'center' }}>
                                    Employee Tracker
                </h3>
                            </div>
                        </a>
                        <img src={employee} className="card-img-top burgerinputThumbnail  img-responsive" alt="Weather" />
                        <a href="https://github.com/rythomas2525/19-employeetracker " target="_blank" rel="noopener noreferrer">
                            <div className="card-body">
                                <h3 className="card-title" style={{ textAlign: 'center' }}>Employee Tracker Repo </h3>
                            </div>
                        </a>
                    </div>
                </div>
                {/* fitness tracker */}
                <div className="carousel-item">
                    <div className=" card border rounded m-2 ml-4  col-s-11 ">
                        <a href="https://shrouded-gorge-78520.herokuapp.com/?id=5e8363462f62b600176fe031" target="_blank" rel="noopener noreferrer">
                            <div className="card-body">
                                <h3 className="card-title " style={{ textAlign: 'center' }}>
                                    Fitness Tracker
                </h3>
                            </div>
                        </a>
                        <img src={fitness} className="card-img-top burgerinputThumbnail  img-responsive" alt="Weather" />
                        <a href="https://github.com/rythomas2525/17fitnesstracker" target="_blank" rel="noopener noreferrer">
                            <div className="card-body">
                                <h3 className="card-title" style={{ textAlign: 'center' }}>Fitness Tracker Repo </h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev ml-3" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next m-2" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}





export default Projectslide;
