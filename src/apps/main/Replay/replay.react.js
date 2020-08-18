// @flow

import * as React from "react";
import axios from 'axios';
import { Button, Page, Card, Table } from "tabler-react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import SiteWrapper from "../../main/SiteWrapper.react"
import ProblemNav from "../../main/problemNav.react"
import * as Action from "../../store/actions/replay.action";
import "../../../../node_modules/tabler-react/dist/Tabler.css"
import "../Home.css"
import Modal from '@material-ui/core/Modal';
import { IonPhaser } from '@ion-phaser/react'
import Scene2 from './components/scene2.js'
import SliderPlugin from 'phaser3-rex-plugins/plugins/slider-plugin.js';
import { makeStyles } from '@material-ui/core/styles';
import Phaser from 'phaser'

class Scene1 extends Phaser.Scene {
    constructor() {

      super({key: 'Scene1', active:true});
    }
  
    preload(){
      console.log("========================> Scene1")
      this.load.image("background", "http://localhost:3000/assets/images/webGL/board.jpg");
      this.load.image("blue_boo", "http://localhost:3000/assets/images/webGL/blue_boo.png");
      this.load.image("pink_boo", "http://localhost:3000/assets/images/webGL/pink_boo.png");
      this.load.image("me", "http://localhost:3000/assets/images/webGL/user.png");
      this.load.image("you", "http://localhost:3000/assets/images/webGL/user2.png");
      this.load.image('dot', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/white-dot.png'); // slider dot
    }
  
    create() {
      this.add.text(20, 20, "Loading game...");
      this.scene.start("playGame");
    }

  }


function getModalStyle() {
	const top = 50 ;
	const left = 50 ;
  
	return {
	  top: `${top}%`,
	  left: `${left}%`,
	  transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles(theme => ({
	paper: {
		position: 'absolute',
		// width: 400,
		backgroundColor: theme.palette.background.paper,
		// border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

function Replay( {match} ) {
    const dispatch = useDispatch()
    const userId = 2
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    // const problemId = document.location.href.split("replay/")[1]
    const problemId = 1
    const { replayList, isOpen, selectedGameId } = useSelector(state => ({
        replayList:state.replay.replayList,
        isOpen:state.replay.isOpen,
        selectedGameId:state.replay.gameId
        }))

    const header = {
        'Authorization' : 'jwt ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6InVzZXIxIiwiZXhwIjoxNTk3Nzc1MTc0LCJlbWFpbCI6InVzZXIxQG5hdmVyLmNvbSIsIm9yaWdfaWF0IjoxNTk3NzUzNTc0fQ.TvSWOmi6Epj_8JypQMBC0-6EBkrveM_hJ5KG7dO6K7E'
        }

    function getWinner(_challenger, _opposite, _winner){
        var winnerId = null
        if(_winner === "challenger"){
            winnerId = _challenger
        }
        else if(_winner === "opposite"){
            winnerId = _opposite
        }
        if(userId === winnerId){
            return <Table.Col className="resultWin">Win</Table.Col>
        }
        else{
            return <Table.Col className="resultLose">Lose</Table.Col>
        }
    }

    function getScore(_challenger, _opposite, _challengerScore, _oppositeScore){
        var score = null;
        if(userId === _challenger){
            score = _challengerScore;
        }
        else{
            score = _oppositeScore;
        }
        return score
    }

    function getScoreFlu(_challenger, _opposite, _challengerScoreFlu, _oppositeScoreFlu){
        var scoreFlu = null;
        if(userId === _challenger){
            scoreFlu = _challengerScoreFlu;
        }
        else{
            scoreFlu = _oppositeScoreFlu;
        }
        return scoreFlu
    }

    function preload(){
        console.log("========================> Scene1")
        this.load.image("background", "http://localhost:3000/assets/images/webGL/board.jpg");
        this.load.image("blue_boo", "http://localhost:3000/assets/images/webGL/blue_boo.png");
        this.load.image("pink_boo", "http://localhost:3000/assets/images/webGL/pink_boo.png");
        this.load.image("me", "http://localhost:3000/assets/images/webGL/user.png");
        this.load.image("you", "http://localhost:3000/assets/images/webGL/user2.png");
        this.load.image('dot', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/white-dot.png'); // slider dot
    }

    function create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }

    const game = {
		width: 1050,
		height: 700,
		backgroundColor: 0x192d3f,
        scene: [Scene1, Scene2],
        pixelArt: true,
        plugins: {
            global: [{
                key: 'rexSlider',
                plugin: SliderPlugin,
                start: true
            },
            ]
        }
    }
    
    React.useEffect(() =>{
        axios.get(`http://203.246.112.32:8000/api/v1/game/my`, {headers: header})
        .then(response =>{
            const data = response.data;
            dispatch(Action.setReplayList(data))
        })
    },[])
    
    return(
        <SiteWrapper>
            <Page.Content>
                <ProblemNav id={problemId} />
                    <h1> Replay </h1>
                    <Button>리플레이</Button>
                    <Card>
                        <Table>
                            <Table.Header>
                                <Table.ColHeader>문제</Table.ColHeader>
                                <Table.ColHeader>대전 상대</Table.ColHeader>
                                <Table.ColHeader>대전 날짜</Table.ColHeader>
                                <Table.ColHeader>결과</Table.ColHeader>
                                <Table.ColHeader>리플레이 보기</Table.ColHeader>
                                <Table.ColHeader>점수</Table.ColHeader>
                            </Table.Header>
                            <Table.Body>
                                {replayList.map(replay => {
                                    return(
                                        <Table.Row>
                                            <Table.Col>
                                                {`${replay.title}(${replay.id})`}
                                            </Table.Col>
                                            <Table.Col>
                                                {`${replay.opposite_name}`}
                                            </Table.Col>
                                            <Table.Col>
                                            {`${replay.date.split('T')[0]} ${replay.date.split('T')[1].split('.')[0]}`}
                                            </Table.Col>
                                            {getWinner(replay.challenger, replay.opposite, replay.winner)}
                                            <Table.Col>
                                                <Button onClick={() => {
                                                    dispatch(Action.setIsOpen(true))
                                                    dispatch(Action.setGameId(replay.id))
                                                    window.localStorage.setItem('selectedGameId', replay.id)
                                                }}>보기</Button>
                                                <Modal
                                                aria-labelledby="simple-modal-title"
				                                aria-describedby="simple-modal-description"
                                                open={isOpen}
                                                onClose={() => {dispatch(Action.setIsOpen(false))}}>
                                                    {/* <div className="modal"> */}
                                                    <div style={modalStyle} className={classes.paper}>
                                                        <IonPhaser game={game}/>
                                                    </div>
                                                </Modal>
                                            </Table.Col>
                                            <Table.Col>
                                                {`${getScore(replay.challenger, replay.opposite, replay.challenger_score, replay.opposite_score)}
                                                (${getScoreFlu(replay.challenger, replay.opposite, replay.challenger_score_flu, replay.opposite_score_flu)})`}
                                            </Table.Col>
                                        </Table.Row>
                                    )
                                })}
                            </Table.Body>
                        </Table>
                    </Card>
            </Page.Content>
        </SiteWrapper>
    )
};

export default Replay;