import React from 'react';
import "./midtry.css";

const MidTry = (props) => {
    return (
        <>
            <div className="midtry-container">
                <div className="my-2 mx-auto position-relative bg-white shadow-1 blue-hover" style={{ width: '320px', overflow: 'hidden', borderRadius: '1px' }}>
                    <img src={props.image} alt={props.alt} className="d-block w-full" />
                    {/* {console.log(props.image)} */}
                    <div className="px-2 py-2">
                        <p className="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
                            {props.shadow}
                        </p>

                        <h1 className="ff-serif font-weight-normal text-black card-heading mt-0 mb-1" style={{ lineHeight: '1.25' }}>
                            {props.heading}
                        </h1>

                        <p className="mb-1">
                            {props.description}&hellip;
                        </p>
                    </div>

                </div>
            </div>

        </>
    );
}

export default MidTry;
