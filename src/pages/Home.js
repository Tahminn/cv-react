import React from 'react'
import Header from '../components/Home/Header'
import Profile from '../components/Home/Profile'
import Skills from '../components/Home/Skills'
import Technical from '../components/Home/Technical'
import Experience from '../components/Home/Experience'
import Education from '../components/Home/Education'
import Footer from '../components/Home/Footer'

function Home() {
    return (
        <div id="doc2" className="yui-t7">
            <div id="inner">
               <Header />
                <div id="bd">
                    <div id="yui-main">
                        <div className="yui-b">
                            <Profile />
                            <Skills />
                            <Technical />
                            <Experience />
                            <Education />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>

    )
}

export default Home