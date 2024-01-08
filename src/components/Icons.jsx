import React from 'react'

function Icons({iconns}) {
  return <>
  <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className={`${iconns.cl}`}></i></div>
                            <h3>{iconns.h3}</h3>
                            <p className="lead mb-0">{iconns.p}</p>
                        </div>
 </div>
  </>
}

export default Icons