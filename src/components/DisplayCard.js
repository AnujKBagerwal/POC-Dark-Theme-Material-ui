import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import { random } from 'lodash';
import { Col } from 'react-bootstrap';
import { Rating } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';

const DisplayCard = ({ name, img }) => {
  // Random function is use to get value between 1 to 5 for star Rating in card
  let randomStar = random(1, 5);

  // use useHistory method to push histroy in url
  let history = useHistory();
  return (
    <Col md={4}>
      {/* Create card for Home Tab */}
      <Card
        style={{ width: '400px', marginLeft: '20px', marginTop: '20px' }}
        onClick={() => history.push(`/home/${name.toLowerCase()}`)}
      >
        <CardHeader title={name} />
        <Rating name="simple-controlled" value={randomStar} readOnly />
        <CardMedia image={img} style={{ height: '200px', width: '400px' }} />
        <CardContent>
          <Typography className="content-left">Lorem</Typography>
          <Typography className="content-left">Lorem1</Typography>
          <Typography className="content-left">Lorem2</Typography>
          <Typography className="content-left">Lorem3</Typography>
        </CardContent>
      </Card>
    </Col>
  );
};

export default DisplayCard;
