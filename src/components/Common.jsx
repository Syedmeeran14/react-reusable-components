import React from 'react'

function Common({obj}) {
  return <>
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-white">
                            {/* <!-- Page heading--> */}
                            <h1 className={`${obj.hs}`}>{obj.head}</h1>
                            <form className="form-subscribe" id="contactForm" >
                            <div className="row">
                                    <div className="col">
                                    <input className="form-control form-control-lg" id="emailAddress" type="email" placeholder="Email Address" />
                                    </div>
                                    <div className="col-auto"><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
  </>
}

export default Common