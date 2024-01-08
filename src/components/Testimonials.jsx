import React from 'react'

function Testimonials({ppl}) {
  return <>
  <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={`${ppl.src}`} alt="..." />
                            <h5>{`${ppl.name}`}</h5>
                            <p className="font-weight-light mb-0">{`${ppl.txt}`}</p>
                        </div>
                    </div>
  </>
}

export default Testimonials