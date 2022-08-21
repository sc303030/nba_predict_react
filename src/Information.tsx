
import React, {useEffect } from 'react';
import "./information.css"
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import {
    useRecoilValue,
  } from 'recoil';
import {selectValueState} from './SelectValue';
import { useDidMountEffect } from "./useDidMountEffect";
import axios from 'axios';
const Information: React.FC = () => {
    const searchValue = useRecoilValue<string>(selectValueState);
    const boxChange =() => {
      const checkboxlist : NodeListOf<Element>  = document.getElementsByName('checkbox');
      for (let  item of checkboxlist as any) {
        item.checked = false;
        const eClassName:String = item.getAttribute('class')?.split('-')[1];
        if (eClassName === searchValue) {
          item.checked = true;
        } 
      }
    };

    useDidMountEffect ((): void => {
      boxChange();
    }, [searchValue]);

    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
      };

    async function getPlayers() {
      try{
        const response = await axios.get("/nba/players.json");
        console.log(response);
      } catch (error){
        console.log(error);
      }
    }
    useEffect((): void => {
      getPlayers();
    }, [])
    return (

        <div className="wrapper">
        <div className="container">
            <input className="checkbox-all" id="all" type="radio" name="checkbox" defaultChecked={true}/>
            <input className="checkbox-player" id="player" type="radio" name="checkbox" defaultChecked={false}/>
            <input className="checkbox-guard" id="guard" type="radio" name="checkbox" defaultChecked={false}/>
            <input className="checkbox-forward" id="forward" type="radio" name="checkbox" defaultChecked={false}/>
            <input className="checkbox-center" id="center" type="radio" name="checkbox" defaultChecked={false}/>
            <div className="seperator"></div>
    
            <div className="cards">
                <div className="project player bg-size"></div>
                <div className="project guard"></div>
                <div className="project forward"></div>
                <div className="project center"></div>
            </div>
        </div>
        </div>
    )

    };
  
  
  export default Information;