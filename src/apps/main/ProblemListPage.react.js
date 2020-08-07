// @flow

import * as React from "react";
import axios from 'axios';
import { Page, Grid, GalleryCard, Card, Button } from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";
// import './HomePage.css'
 

function ProblemListPage(props) {
  const [posts, setPosts] = React.useState([])
  const [SelectedProblemId, setSelectedProblemId] = React.useState(0)
  
  React.useEffect(() => {

		axios
		.get('http://203.246.112.32:8000/api/v1/problem/')
		.then(response => {
			
			// console.log(response.data.results);
			// dispatch(Actions.getProblemId(response.data.results));
			setPosts(response.data.results);
			// window.localStorage.setItem('ProblemId', response.data.results);
    })
    .catch(error => {
      console.log(error);
    })
  },posts);

  return(

  <SiteWrapper>
    <Page.Content>
      <Grid.Row className="row-cards">
      {posts.map((problem) =>(
        <Grid.Col lg={3}>
          <GalleryCard className='p-0' >
            <a onClick = {() =>{
                console.log('==>click')
                window.localStorage.setItem('SelectedProblemId', problem.id);
              }}>
              <GalleryCard.Image
                className='mb-0'
                src={problem.thumbnail}
                href={"problems/" + problem.id}
              />
            </a>
          </GalleryCard>        
        </Grid.Col>
      ))}
      </Grid.Row>
    </Page.Content>
  </SiteWrapper>
  
  
  )
  }
export default ProblemListPage;
