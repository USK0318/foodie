import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import pa1 from '../Beckendimgs/pa1.jpg';
import pa2 from '../Beckendimgs/pa2.jpg';
import pa3 from '../Beckendimgs/pa3.jpg';
import pa4 from '../Beckendimgs/pa4.jpg';
import pa5 from '../Beckendimgs/pa5.jpg';
import pa6 from '../Beckendimgs/pa6.jpg';
import pa7 from '../Beckendimgs/pa7.jpg';
import pa8 from '../Beckendimgs/pa8.jpg';
import pa9 from '../Beckendimgs/pa9.jpg';
import pa10 from '../Beckendimgs/pa10.jpg';
import pa11 from '../Beckendimgs/pa11.jpg';
import pa12 from '../Beckendimgs/pa12.jpg';
import pa13 from '../Beckendimgs/pa13.jpg';
import pa14 from '../Beckendimgs/pa14.jpg';
import pa15 from '../Beckendimgs/pa15.jpg';
import pa16 from '../Beckendimgs/pa16.jpg';
import pa17 from '../Beckendimgs/pa17.jpg';
import pa18 from '../Beckendimgs/pa18.jpg';
import pa19 from '../Beckendimgs/pa19.jpg';
import pa20 from '../Beckendimgs/pa20.jpg';



export default function Main() {
  const dummyData = [
    { id: 1, img: 'pa1', altText: 'Mutton Biryani', name: 'Mutton Biryani', price: 100, details: 'A delicious dish made with tender mutton pieces and fragrant rice.' },
    { id: 2, img: 'pa2', altText: 'Chicken Biryani', name: 'Chicken Biryani', price: 200, details: 'A classic biryani prepared with succulent chicken pieces and aromatic spices.' },
    { id: 3, img: 'pa3', altText: 'Prawn Biryani', name: 'Prawn Biryani', price: 300, details: 'A flavorful biryani featuring juicy prawns cooked with fragrant rice.' },
    { id: 4, img: 'pa4', altText: 'Chicken Magnet', name: 'Chicken Magnet', price: 400, details: 'A tempting chicken dish cooked in a rich, magnetic sauce.' },
    { id: 5, img: 'pa5', altText: 'Chicken Fry', name: 'Chicken Fry', price: 500, details: 'Crispy and flavorful chicken fry, perfect as a snack or side dish.' },
    { id: 6, img: 'pa6', altText: 'Lemon Chicken', name: 'Lemon Chicken', price: 600, details: 'Tangy and zesty chicken dish infused with lemon flavor.' },
    { id: 7, img: 'pa7', altText: 'Samosa', name: 'Samosa', price: 70, details: 'Traditional snack filled with spicy potato and peas mixture, deep-fried to perfection.' },
    { id: 8, img: 'pa8', altText: 'Paneer Tikka', name: 'Paneer Tikka', price: 300, details: 'Tender pieces of paneer marinated in spices and grilled to perfection.' },
    { id: 9, img: 'pa9', altText: 'Veg Biryani', name: 'Veg Biryani', price: 100, details: 'A flavorful rice dish cooked with assorted vegetables and aromatic spices.' },
    { id: 10, img: 'pa10', altText: 'Gulab Jamun', name: 'Gulab Jamun', price: 100, details: 'Soft and spongy milk balls soaked in sugar syrup, a classic Indian dessert.' },
    { id: 11, img: 'pa11', altText: 'Rasgulla', name: 'Rasgulla', price: 100, details: 'Delicious cottage cheese dumplings soaked in sugar syrup, a popular sweet treat.' },
    { id: 12, img: 'pa12', altText: 'Chole Bhature', name: 'Chole Bhature', price: 200, details: 'Spicy chickpea curry served with fluffy deep-fried bread, a North Indian favorite.' },
    { id: 13, img: 'pa13', altText: 'Palak Paneer', name: 'Palak Paneer', price: 300, details: 'Creamy spinach curry with chunks of paneer, a nutritious and flavorful dish.' },
    { id: 14, img: 'pa14', altText: 'Dosa', name: 'Dosa', price: 80, details: 'Thin and crispy South Indian crepe made from fermented rice and lentil batter, served with chutney and sambar.' },
    { id: 15, img: 'pa15', altText: 'Idli', name: 'Idli', price: 100, details: 'Soft and fluffy South Indian steamed rice cakes, a wholesome and comforting breakfast option.' },
    { id: 16, img: 'pa16', altText: 'Vada Pav', name: 'Vada Pav', price: 80, details: 'Spicy potato fritter sandwiched in a soft bun, a popular street food from Mumbai.' },
    { id: 17, img: 'pa17', altText: 'Pav Bhaji', name: 'Pav Bhaji', price: 90, details: 'Spicy mashed vegetable curry served with buttered bread rolls, a flavorful and satisfying meal.' },
    { id: 18, img: 'pa18', altText: 'Chicken 65', name: 'Chicken 65', price: 180, details: 'Spicy and tangy deep-fried chicken dish, a popular appetizer in South Indian cuisine.' },
    { id: 19, img: 'pa19', altText: 'Bhel Puri', name: 'Bhel Puri', price: 90, details: 'A savory Indian street food snack made with puffed rice, vegetables, and tangy tamarind chutney.' },
    { id: 20, img: 'pa20', altText: 'Pani Puri', name: 'Pani Puri', price: 90, details: 'Crispy puris filled with spicy, tangy water, tamarind chutney, and a mixture of flavored water, a popular street food snack.' },
    { id: 11, img: 'pa11', altText: 'Rasgulla', name: 'Rasgulla', price: 1100, details: 'Delicious cottage cheese dumplings soaked in sugar syrup, a popular sweet treat.' },

  ];

  const [data] = useState(dummyData);
  const backendError = false; // Since we're using dummy data, there's no backend error

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: 20 }}>
      {backendError ? (
        <Typography variant="h5" color="error">
          <b>Backend is not working.....</b>
        </Typography>
      ) : (
        data.map((item, index) => (
          <Card key={index} sx={{ width: 400, margin: 1, borderRadius: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ height: 200, objectFit: 'cover', borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
                image={
                  item.img === 'pa1' ? pa1
                    : item.img === 'pa2' ? pa2
                    : item.img === 'pa3' ? pa3
                    : item.img === 'pa4' ? pa4
                    : item.img === 'pa5' ? pa5
                    : item.img === 'pa6' ? pa6
                    : item.img === 'pa7' ? pa7
                    : item.img === 'pa8' ? pa8
                    : item.img === 'pa9' ? pa9
                    : item.img === 'pa10' ? pa10
                    : item.img === 'pa11' ? pa11
                    : item.img === 'pa12' ? pa12
                    : item.img === 'pa13' ? pa13
                    : item.img === 'pa14' ? pa14
                    : item.img === 'pa15' ? pa15
                    : item.img === 'pa16' ? pa16
                    : item.img === 'pa17' ? pa17
                    : item.img === 'pa18' ? pa18
                    : item.img === 'pa19' ? pa19
                    : item.img === 'pa20' ? pa20
                    : null
                }
                alt={item.altText}
              />
              <CardContent>
                <Typography variant="h6" component="div" style={{ fontWeight: 'bold', marginBottom: 8 }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ marginBottom: 8 }}>
                  ₹ {item.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.details}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      )}
    </div>
  );
}
