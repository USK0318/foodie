import React from 'react';
import sc1 from '../media/sc1.png';
import sc2 from '../media/sc2.png';
import sc3 from '../media/sc3.png';
import sc4 from '../media/sc4.png';
import { styled } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';

function Idley() {
  return (
    <Scroller>
      <ImageContainer>
        <CardItem>
          <CardMedia
            component="img"
            src={sc1}
            alt="Best offers"
            sx={{ width: '100%', height: '100%', borderRadius: '10%' }}
          />
        </CardItem>
        <CardItem>
          <CardMedia
            component="img"
            src={sc2}
            alt="Best offers"
            sx={{ width: '100%', height: '100%', borderRadius: '10%' }}
          />
        </CardItem>
        <CardItem>
          <CardMedia
            component="img"
            src={sc3}
            alt="Best offers"
            sx={{ width: '100%', height: '100%', borderRadius: '10%' }}
          />
        </CardItem>
        <CardItem>
          <CardMedia
            component="img"
            src={sc4}
            alt="Best offers"
            sx={{ width: '100%', height: '100%', borderRadius: '10%' }}
          />
        </CardItem>
      </ImageContainer>
    </Scroller>
  );
}

const Scroller = styled('div')({
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
});

const ImageContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '500px',
  margin: '10px',
  borderRadius: '15px',
  '@media (max-width: 600px)': {
    alignItems: 'center',
    maxWidth: '100%',
    margin: '5px',
  },
});

const CardItem = styled(Card)({
  flex: '0 0 auto',
  width: '70%',
  height: '100%',
  borderRadius: '25px',
  margin: '0 8px',
  '@media (max-width: 600px)': {
    width: '90%',
    margin: '6px 3', // Adjust the margin to increase the gap
  },
});

export default Idley;
