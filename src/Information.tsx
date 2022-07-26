
import React, {useCallback} from 'react';
import "./information.css"
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import {
    useRecoilValue,
  } from 'recoil';
  import {selectValueState} from './SelectValue';
const Information: React.FC = () => {

    const searchValue = useRecoilValue<string>(selectValueState);
    const changeCheckboxSelect = useCallback((): void => {

      }, [searchValue]);
    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
      };
    return (

        <div className="wrapper">
        <div className="container">
            <input className="checkbox-all" id="all" type="radio" name="checkbox" defaultChecked={true}/>
            <label htmlFor="all">all</label>
            <input className="checkbox-yellow" id="yellow" type="radio" name="checkbox"/>
            <label htmlFor="yellow">노란색</label>
            <input className="checkbox-orange" id="orange" type="radio" name="checkbox"/>
            <label htmlFor="orange">주황색</label>
            <input className="checkbox-blue" id="blue" type="radio" name="checkbox"/>
            <label htmlFor="blue">하늘색</label>
            <input className="checkbox-green" id="green" type="radio" name="checkbox"/>
            <label htmlFor="green">초록색</label>
            <input className="checkbox-red" id="red" type="radio" name="checkbox"/>
            <label htmlFor="red">빨간색</label>
            <div className="seperator"></div>
    
            <div className="cards">
                <div className="project yellow"></div>
                <div className="project orange"></div>
                <div className="project blue"></div>
                <div className="project green"></div>
                <div className="project red"></div>
                <div className="project yellow"></div>
                <div className="project orange"></div>
                <div className="project blue"></div>
                <div className="project green"></div>
                <div className="project red"></div>
                <div className="project yellow"></div>
                <div className="project orange"></div>
                <div className="project blue"></div>
                <div className="project green"></div>
                <div className="project red"></div>
                <div className="project yellow"></div>
                <div className="project orange"></div>
                <div className="project blue"></div>
                <div className="project green"></div>
                <div className="project red"></div>
            </div>
        </div>
        </div>
    )

    };
  
  
  export default Information;