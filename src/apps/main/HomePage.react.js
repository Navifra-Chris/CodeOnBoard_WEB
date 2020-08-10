// @flow

import * as React from "react";

import {  GalleryCard } from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";
import HomeImg from '../images/Home.jpeg'
import 'apps/main/HomePage.css'

function Home() {
  return (
    <SiteWrapper>
      <GalleryCard className="HomeImage">
        <GalleryCard.Image
          className='mb-0'
          src={HomeImg}
        />
      </GalleryCard>
    </SiteWrapper>
  );
}

export default Home;
