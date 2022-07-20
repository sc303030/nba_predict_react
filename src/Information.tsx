
import React from 'react';
import "./information.css"
const information: React.FC = () => (

    <div className="wrapper">
    <div className="container">
        <input className="checkbox-all" id="all" type="radio" name="checkbox" checked={false}/>
        <label htmlFor="all">all</label>
        <input className="checkbox-js" id="js" type="radio" name="checkbox"/>
        <label htmlFor="js">javascript</label>
        <input className="checkbox-react" id="react" type="radio" name="checkbox"/>
        <label htmlFor="react">react</label>
        <input className="checkbox-html" id="html" type="radio" name="checkbox"/>
        <label htmlFor="html">HTML/CSS</label>
        <input className="checkbox-vue" id="vue" type="radio" name="checkbox"/>
        <label htmlFor="vue">vue</label>
        <input className="checkbox-angular" id="angular" type="radio" name="checkbox"/>
        <label htmlFor="angular">angular</label>
        <div className="seperator"></div>

        <div className="cards">
        <div className="project js"></div>
        <div className="project html"></div>
        <div className="project react"></div>
        <div className="project vue"></div>
        <div className="project angular"></div>
        <div className="project js"></div>
        <div className="project html"></div>
        <div className="project react"></div>
        <div className="project vue"></div>
        <div className="project angular"></div>
        <div className="project js"></div>
        <div className="project html"></div>
        <div className="project react"></div>
        <div className="project vue"></div>
        <div className="project angular"></div>
        <div className="project js"></div>
        <div className="project html"></div>
        <div className="project react"></div>
        <div className="project vue"></div>
        <div className="project angular"></div>
        </div>
    </div>
    </div>
  );
  
  
  export default information;