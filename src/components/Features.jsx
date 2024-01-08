import React from 'react'

function Features({features}) {
 
  return <>
  <div className="row g-0" id="reverse">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage:`url(${features.url})`}}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>{features.h2}</h2>
                        <p className="lead mb-0">{`${features.pg}`}</p>
                    </div>
                    </div>
  </>
}

export default Features