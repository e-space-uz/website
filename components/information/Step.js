import React from 'react'

function Step({ data }) {
    return (
        <div className="stepData">
            <img
                alt="information_card-img"
                className="information_card-img"
                src={data.image}
            />
            <div>
                <h4>{data.title}</h4>
                <p>{data.desc} </p>
            </div>
        </div>
    )
}

export default Step
