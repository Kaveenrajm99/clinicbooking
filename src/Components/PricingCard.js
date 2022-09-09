import React from 'react'
import Animated from '../Animated'

function PricingCard(props) {
    return (
        <Animated>
        <div className="row price-row">
            <div className=" text-center col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4 price-package">
                <img className="pricing-img" src={props.listData.image} />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 package">
                <h3 className="d-flex price-subhead"><div className="circle">{props.listData.number}</div> {props.listData.heading}</h3>
                <ul className="subhead-list">
                        {
                            props.listData.features.map((para)=>{
                                return<li>{para.name}</li> 
                            })
                        }
                </ul>
            </div>
        </div>
        </Animated>
    )
}

export default PricingCard