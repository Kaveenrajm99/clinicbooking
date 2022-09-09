import React from 'react'
import Animated from '../Animated'
import Neosmile from "../Images/neosmile.jpg"

function Home() {
    return (
        <div className="conatainer-fluid">
            <div className="row home-row">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 home">
                    <Animated>
                    <img className="img-fluid neo" src={Neosmile}/>
                    </Animated>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <Animated>
                        <div className="head-home">
                            <h1 className="home-heading">Only real treatment here: We only provide treatment that we know for sure is useful to you.</h1><br />
                            <p className="home-info">We understand that healthcare cost is a real concern. This is why we offer a variety of treatment options for a variety of budgets and expectations.</p>
                            <p className="home-info">No sales talk, no pressure. Why? Because we care about the things that are important to you.</p>
                        </div>
                    </Animated>
                </div >
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home