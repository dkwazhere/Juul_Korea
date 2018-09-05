import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import ClassicMenthol from '../../assets/images/pods/classic-menthol.png';
import ClassicTobacco from '../../assets/images/pods/classic-tobacco.png';
import CoolCucumber from '../../assets/images/pods/cool-cucumber.png';
import CoolMint from '../../assets/images/pods/cool-mint.png';
import CremeBrulee from '../../assets/images/pods/creme-brulee.png';
import FruitMedley from '../../assets/images/pods/fruit-medley.png';
import Mango from '../../assets/images/pods/mango.png';
import VirginiaTobacco from '../../assets/images/pods/virginia-tobacco.png';
import './Shopcards.css';

const Shopcards = (props) => {
  return (
    <div className='shopcards-container'>
        <Row>
          <Col sm="6">
            <Card body className='text-center'>
              <CardTitle>Classic Menthol</CardTitle>
              <img src={ClassicMenthol} className='cardpods' alt='classicmenthol'></img>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Add to cart</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body className='text-center'>
              <CardTitle>Classic Tobacco</CardTitle>
              <img src={ClassicTobacco} className='cardpods' alt='classictobacco'></img>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Add to cart</Button>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <Card body className='text-center'>
              <CardTitle>Cool Cucumber</CardTitle>
              <img src={CoolCucumber} className='cardpods' alt='coolcucumber'></img>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Add to cart</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body className='text-center'>
              <CardTitle>Cool Mint</CardTitle>
              <img src={CoolMint} className='cardpods' alt='coolmint'></img>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Add to cart</Button>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <Card body className='text-center'>
              <CardTitle>Creme Brulee</CardTitle>
              <img src={CremeBrulee} className='cardpods' alt='cremebrulee'></img>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Add to cart</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body className='text-center'>
              <CardTitle>Fruit Medley</CardTitle>
              <img src={FruitMedley} className='cardpods' alt='fruitmedley'></img>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Add to cart</Button>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <Card body className='text-center'>
              <CardTitle>Mango</CardTitle>
              <img src={Mango} className='cardpods' alt='mango'></img>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Add to cart</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body className='text-center'>
              <CardTitle>Virginia Tobacco</CardTitle>
              <img src={VirginiaTobacco} className='cardpods' alt='virginiatobacco'></img>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Add to cart</Button>
            </Card>
          </Col>
        </Row>
    </div>
  );
};

export default Shopcards;
