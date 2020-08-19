import React from 'react';
import { IonPhaser } from '@ion-phaser/react'
import Scene2 from './components/scene2'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Button, Page, Card, Table, Media } from "tabler-react";



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

function ViewReplayPage(props) {
	const classes = useStyles();
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(false);
	
	const handleOpen = () => {
		window.localStorage.setItem('game_id', props.tmp_id);
		setOpen(true);
	};
	
	const handleClose = () => {
		window.localStorage.removeItem('game_id')
		setOpen(false);
	};

	const game = {
		width: 1050,
		height: 700,
		backgroundColor: 0x192d3f,
		scene: [Scene2],
		pixelArt: true,
	}
	
	return (
		<div>
			<Button className="center" onClick={handleOpen} color="primary" >
				{/* <PlayCircleFilledWhiteIcon style={{ color: pink[500] }}/> */}
				<h6>{"보기"}</h6>
			</Button>
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={open}
				onClose={handleClose}
			>
				<div style={modalStyle} className={classes.paper}>
					<IonPhaser game={game}/>
					{/* <MyInfo></MyInfo> */}
					{/* <PlacementStateContainer></PlacementStateContainer> */}
				</div>
			</Modal>
		</div>
	);
}

export default ViewReplayPage;