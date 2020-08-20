import React from 'react';
import { IonPhaser } from '@ion-phaser/react'
import Scene1 from './components/Scene1'
import Scene2 from './components/Scene2'
import Scene3 from './components/Scene3'
import Scene4 from './components/Scene4'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "tabler-react";

function SelfBattle(props){
    

    return(
        <div>
        {props.available===true?<Button color="primary">대전</Button>:<Button color="primary" disabled>대전</Button>}
        </div>
    );
}


export default SelfBattle;
