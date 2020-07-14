import React from 'react';
import mobileJson from '../../constain/mobileJson';
import {
  Paper,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';

// card is created to display Mobile features in Mobile Tab
const DisplayMobile = () => {
  return (
    //  Paper is to implement dark/Light mode
    <Paper style={{ height: '100%' }}>
      <Row>
        {mobileJson.map((data, index) => (
          <Col md={4} key={index}>
            <Card
              style={{
                height: '300px',
                width: '400px',
                marginLeft: '20px',
                marginTop: '20px',
                marginBottom: '10px',
              }}
            >
              <CardHeader title={data.name} />
              <CardMedia
                image={data.imageUrl}
                style={{ height: '100px', width: '400px' }}
              />
              <CardContent>
                <Typography> Description : {data.snippet}</Typography>
              </CardContent>
            </Card>
          </Col>
        ))}
      </Row>
    </Paper>
  );
};

export default DisplayMobile;
