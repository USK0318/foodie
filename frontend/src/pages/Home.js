import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import sc1 from '../media/sc1.png';
import sc2 from '../media/sc2.png';
import sc3 from '../media/sc3.png';
import sc4 from '../media/sc4.png';
import { Footer } from '../components/Footer';

const MyCard = () => {
  return (
    <>
    <div style={{ marginTop: '75px', marginLeft: '55px' }}>
      <p style={{ fontSize: '1.5rem' }}><b>Best offers for you</b></p>
      <div style={{ display: 'flex' }}>
        <CardContainer>
          <CardItem>
            <CardMedia
              component="img"
              src={sc1}
              alt="Best offers"
              sx={{ width: '100%', height: '100%', borderRadius: '10px' }}
            />
          </CardItem>
        </CardContainer>
        <CardContainer>
          <CardItem>
            <CardMedia
              component="img"
              src={sc2}
              alt="Best offers"
              sx={{ width: '100%', height: '100%', borderRadius: '10px' }}
            />
          </CardItem>
        </CardContainer>
        <CardContainer>
          <CardItem>
            <CardMedia
              component="img"
              src={sc3}
              alt="Best offers"
              sx={{ width: '100%', height: '100%', borderRadius: '10px' }}
            />
          </CardItem>
        </CardContainer>
        <CardContainer>
          <CardItem>
            <CardMedia
              component="img"
              src={sc4}
              alt="Best offers"
              sx={{ width: '100%', height: '100%', borderRadius: '10px' }}
            />
          </CardItem>
        </CardContainer>
      </div>
    </div>
    <Footer/>
    </>
  );
};

const CardContainer = styled('div')({
  maxWidth: '600px',
  margin: '10px',
  borderRadius: '15px', // Add border radius to the outer card container
});

const CardItem = styled(Card)({
  width: '100%',
  height: '100%',
});

export default MyCard;
