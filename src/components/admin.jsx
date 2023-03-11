import "../styles/admin.css"
import Navbar from "./navbar";

const Admin = () => {
    return (
        <div className="admin">
            <Navbar/>
            <div className="one">
               
                <div className="top">
                <div className="as">
                    
                    </div>
                    <h1>Where the Crawdads Sing</h1>
                    <p>On Friday, March 10 at 7:00 pm, come see the adaptation of the bestselling novel about a girl raising <br /> herself in the marshlands of North Carolina.</p>
                </div>
            </div>
            <div className="two">
                <div className="mid">
                    <div className="df">
                        
                    </div>
                    <h1 id="ddd">VISIT</h1>
                    <h1>Café at Greenwich Library</h1>
                    <p>There’s no need to stroll down the Ave for a meal when you’re at the Library! Visit our <br /> lower level to get coffee, drinks, snacks, and lunch options, locally sourced from <br /> favorites  like Happiness Is and Shearwater Coffee.</p>
                </div>
            </div>
            <div className="thri">
                <h1>MARCH EVENTS</h1>
                <p>Join us for a full slate of programming and events at the Greenwich Libraries! These printable one-page Library <br /> calendars are fridge-ready.</p>
            </div>
            <div className="four">
                <div className="atm">
                    <div className="gh"></div>
                  <h1>Suffrage In Greenwich</h1>
                  <p>On Thursday, March 9 at 7:00 pm, hear about the <br /> incredible local women who helped move the dial on <br />
                   women’s rights.</p>
                  <a href="">Register Here</a>
                </div>
                <div className="atm">
                    <div className="jk"></div>
                   <h1>Tax Help</h1>
                   <p>On Saturday, March 11 from 9:00 am – 2:00 pm, drop in <br /> to get free help with your taxes from the AARP <br /> Foundation.</p>
                      <a href="">Learn More</a>                
                </div>
                <div className="atm">
                    <div className="zx"></div>
                  <h1>Sea Glass Frames</h1>
                  <p>On Saturday, March 11 at 10:30 am at Cos Cob Library, <br /> join us to create fun and breezy sea glass frames!</p>
                   <a href="">Register Here</a>
                </div>
                <div className="atm">
                    <div className="cv"></div>
                      <h1>Protect Yourself Online</h1>
                      <p>On Wednesday, March 15 at 3:00 pm, find out the ten <br /> vital practices to protect your personal information and <br />
                      finances.</p>
                </div>
            </div>
        </div>
    );
}

export default Admin;