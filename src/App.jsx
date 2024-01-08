import React from 'react'
import Navbar from './components/Navbar'
import Icons from './components/Icons'
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Common from './components/Common';
import Footer from './components/Footer';
import img1 from './img/testimonials-1.jpg'
import img2 from './img/testimonials-2.jpg'
import img3 from './img/testimonials-3.jpg'
import img4 from './img/bg-showcase-1.jpg'
import img5 from './img/bg-showcase-2.jpg'
import img6 from './img/bg-showcase-3.jpg'
import img7 from './img/bg-masthead.jpg'



function App() {
  let iconns = [
    {
        cl:"bi-window m-auto text-primary",
        h3:"Fully Responsive",
        p:"This theme will look great on any device, no matter the size!"
    },
    {
        cl:"bi-layers m-auto text-primary",
        h3:"Bootstrap 5 Ready",
        p:"Featuring the latest build of the new Bootstrap 5 framework!"
    },
    {
        cl:"bi-terminal m-auto text-primary",
        h3:"Easy to Use",
        p:"Ready to use with your own content, or customize the source files!"
    }
];

let features = [
  {
    url:img4,
    h2:"Fully Responsive Design",
    pg:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
  },
  {
    url:img5,
    h2:"Updated For Bootstrap 5",
    pg:"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
  },
  {
    url:img6,
    h2:"Easy to Use & Customize",
    pg:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
  }
];

let ppl = [
  {
    src:img1,
    name:"Margaret E.",
    txt:"This is fantastic! Thanks so much guys!"
  },
  {
    src:img2,
    name:"Fred S.",
    txt:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
  },
  {
    src:img3,
    name:"Sarah W.",
    txt:"Thanks so much for making these free resources available to us!"
  }
];

let obj1 = [
  {
    hs:"mb-5",
    head:"Generate more leads with a professional landing page!"
  }
];

let obj2 = [
  {
    hs:"mb-4",
    head:"Ready to get started? Sign up now!"
  }
];
  return <>

  <Navbar/>

  {/* Master Head */}
  <header className="masthead" style={{backgroundImage: `url(${img7})`}}>
  {
    obj1.map((e,i)=>{
      return <Common obj={e} key={i}/>
    })
  }
  </header>

  {/* ICONS SECTION */}
  <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
                  {
                    iconns.map((e,i)=>{
                      return <Icons iconns={e} key={i}/>
                    })
                  }
                </div>
            </div>
  </section>
  
{/* IMAGE SHOWCASE SECTION */}
<section className="showcase">
            <div className="container-fluid p-0">
             {
                features.map((e,i)=>{
                      return <Features features={e} key={i}/>
                    })
             }
            </div>
</section>

{/* <!-- Testimonials--> */}
        <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                  {
                    ppl.map((e,i)=>{
                      return <Testimonials ppl={e} key={i}/>
                    })
                  }
                </div>
            </div>
        </section>

 {/* Above Footer */}
 <section className="call-to-action text-white text-center" id="signup" style={{backgroundImage: `url(${img7})`}}>
 {
    obj2.map((e,i)=>{
      return <Common obj={e} key={i}/>
    })
  }
  </section>

{/* Footer */}
<Footer/>

  </>
}

export default App