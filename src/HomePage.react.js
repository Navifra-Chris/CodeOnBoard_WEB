// @flow

import * as React from "react";

import {
  Page,
  Avatar,
  Icon,
  Grid,
  Card,
  Text,
  Table,
  Alert,
  Progress,
  colors,
  Dropdown,
  Button,
  StampCard,
  StatsCard,
  ProgressCard,
  Badge,
  GalleryCard
} from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";
import HomeImg from './data/Home.jpeg'
import './my.css'

function Home() {
  return (
    <SiteWrapper>
      <GalleryCard className='p-0 Home-image'>
        <GalleryCard.Image
          className='mb-0'
          src={HomeImg}
        />
      </GalleryCard>
      <Card></Card>
    </SiteWrapper>
  );
}

export default Home;
