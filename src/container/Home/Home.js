import React from 'react';
import { Paper } from '@material-ui/core';
import DisplayCard from '../../components/DisplayCard';
import { Row } from 'react-bootstrap';

import BooksDeteils from './BooksDeteils';

import {
  bookImg,
  suitImg,
  shoesImg,
  mobileImg,
  headphoneImg,
} from '../../constain/images';

const Home = () => {
  return (
    //  Paper is to implement dark/Light mode
    <div>
      <Paper style={{ height: '100%' }}>
        <Row>
          <DisplayCard name="Books" img={bookImg} />
          <DisplayCard name="Suits" img={suitImg} />
          <DisplayCard name="Shoes" img={shoesImg} />
          <DisplayCard name="Mobiles" img={mobileImg} />
          <DisplayCard name="Head Sets" img={headphoneImg} />
        </Row>
      </Paper>
    </div>
  );
};

export default Home;
