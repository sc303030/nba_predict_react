
import React, {useEffect, useState } from 'react';
import "./information.css"
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import {
    useRecoilValue,
  } from 'recoil';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UncontrolledCollapse, CardBody, Card } from 'reactstrap';
import {selectValueState} from './SelectValue';
import { useDidMountEffect } from "./useDidMountEffect";
import axios from 'axios';
const Information: React.FC = () => {
    const searchValue = useRecoilValue<string>(selectValueState);
    const [checkbox_list, setcheckbox_list] = useState<any []>([]);
    const [cards_list, setcards_list] = useState<any []>([]);
    const boxChange =() => {
      const checkboxlist : NodeListOf<Element>  = document.getElementsByName('checkbox');
      for (let  item of checkboxlist as any) {
        item.checked = false;
        const eClassName:String = item.getAttribute('class');
        if (eClassName === searchValue) {
          item.checked = true;
        } 
      }
    };
    type Words = {
      [key: string]: string
    }
    const position_class_name:Words = {
      "G" : "guard",
      "G-F" : "guard-forward",
      "F" : "forward",
      "F-G" : "forward-guard",
      "F-C" : "forward-center",
      "C" : "center",
      "C-F" : "center-forward"
    };

    useDidMountEffect ((): void => {
      boxChange();
    }, [searchValue]);

    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
      };
    const playerChange = (key: string | string[]) => {
      console.log(key);
    };
    async function getPlayers() {
      try{
        let _check = []
        let _cards  = []
        const response = await axios.get("/nba/players.json");
        const player_data = response["data"];
        for (let info of player_data) {
          const position = info["position"];
          const player_name = info["name"].replace(/\s|'/gi, "_");
          _check.push(<input className={`checkbox-${position_class_name[position]}`} id={`${player_name}`} type="radio" name="checkbox" defaultChecked={false}/>);
          _cards.push(<div className='each-card'><div className={`project ${position_class_name[position]}`}  id={player_name} style={{ 
            backgroundImage: `url(${info["image"]})` ,
            backgroundRepeat: "round"
          }}><span>{`${player_name}`}</span>  
          </div>
          <UncontrolledCollapse toggler={`#${player_name}`} key={player_name} className="collapes-card">
            <Card>
                <CardBody>
                    <p>{`나이 : ${info['age']}세`}</p>
                    <p>{`부상횟수 : ${info['injury_count']}회`}</p>
                    <p>{`포지션 : ${position}`}</p>
                    <p>{`은퇴년도 : ${info['retire_year']}년`}</p>
                    <p>{`선수 기간 : ${info['season']}년`}</p>
                </CardBody>
            </Card>
          </UncontrolledCollapse>
          </div>);
        }
        
        setcheckbox_list(_check);
        setcards_list(_cards);
      } catch (error){
        console.log(error);
      }
    }
    useEffect(() =>{
      getPlayers();
    }, [])
    return (

        <div className="wrapper">
          <div className="container">
              <input className="checkbox-all" id="all" type="radio" name="checkbox" defaultChecked={true}/>
              {checkbox_list}
              <div className="cards">
                {cards_list}
              </div>
          </div>
        </div>
    )

    };
  
  
  export default Information;