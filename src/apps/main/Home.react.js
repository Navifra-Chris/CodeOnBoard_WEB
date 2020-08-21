// @flow

import * as React from "react";
import "../../../node_modules/tabler-react/dist/Tabler.css"
import {  GalleryCard, Button } from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";
// import HomeImg from '../images/Home.jpeg'
// import HomeImg from '/images/Home.jpeg'
import './Home.css'

function Home() {
  return (
    <SiteWrapper>
      <Button onClick={() => {
        window.localStorage.setItem("jwt", 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6InVzZXIxIiwiZXhwIjoxNTk4MDMyNDQ4LCJlbWFpbCI6InVzZXIxQG5hdmVyLmNvbSIsIm9yaWdfaWF0IjoxNTk4MDEwODQ4fQ.20EhDR5e29RpbQ_Uxu9YI4BOvf9dx_--hJHm6AO7wM8')
        alert("login")
      }}>로그인</Button>
      <GalleryCard className="HomeImage">
        <GalleryCard.Image
          className='mb-0'
          src='assets/images/Home.jpeg'
        />
      </GalleryCard>
    </SiteWrapper>
  );
}

export default Home;
