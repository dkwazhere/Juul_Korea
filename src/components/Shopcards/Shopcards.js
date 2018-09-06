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
              <CardText>Our Menthol JUULpod gives you traditional menthol flavor with a brisk finish.</CardText>
              <Button>Add to cart</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body className='text-center'>
              <CardTitle>Classic Tobacco</CardTitle>
              <img src={ClassicTobacco} className='cardpods' alt='classictobacco'></img>
              <CardText>Familiar, robust tobacco flavor couples with aromatic notes in our Classic Tobacco JUULpod.</CardText>
              <Button>Add to cart</Button>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <Card body className='text-center'>
              <CardTitle>Cool Cucumber</CardTitle>
              <img src={CoolCucumber} className='cardpods' alt='coolcucumber'></img>
              <CardText>Enjoy the flavor of subtle cucumber and a hint of mint with our Cucumber JUULpod.</CardText>
              <Button>Add to cart</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body className='text-center'>
              <CardTitle>Cool Mint</CardTitle>
              <img src={CoolMint} className='cardpods' alt='coolmint'></img>
              <CardText>Enjoy crisp peppermint flavor and a soothing aftertaste with our Mint JUULpod.</CardText>
              <Button>Add to cart</Button>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <Card body className='text-center'>
              <CardTitle>Creme Brulee</CardTitle>
              <img src={CremeBrulee} className='cardpods' alt='cremebrulee'></img>
              <CardText>Our Vanilla JUULpod has notes of vanilla, silky custard, and crème flavors.</CardText>
              <Button>Add to cart</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body className='text-center'>
              <CardTitle>Fruit Medley</CardTitle>
              <img src={FruitMedley} className='cardpods' alt='fruitmedley'></img>
              <CardText>Enjoy the flavors of peaches, grapes, and berries with herbal notes with our Fruit JUULpod.</CardText>
              <Button>Add to cart</Button>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <Card body className='text-center'>
              <CardTitle>Mango</CardTitle>
              <img src={Mango} className='cardpods' alt='mango'></img>
              <CardText>Our mango JUULpod provides rich mango flavor with hints of tropical fruits.</CardText>
              <Button>Add to cart</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body className='text-center'>
              <CardTitle>Virginia Tobacco</CardTitle>
              <img src={VirginiaTobacco} className='cardpods' alt='virginiatobacco'></img>
              <CardText>The rich flavor of American tobacco is unmistakable with our Virginia Tobacco JUULpod.</CardText>
              <Button>Add to cart</Button>
            </Card>
          </Col>
        </Row>
    </div>
  );
};

export default Shopcards;
