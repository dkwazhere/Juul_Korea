import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './Jumbotron.css';

const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Juul Korea</h1>
        <p className="lead">We are an American Based Company that supply Juul products and other similar products to Korea</p>
        <hr className="my-2" />
        <p>We are strongly against synthetic smoking and promote healthy alternative ways providing nicotine.</p>
        <p className="lead">
          <Button color="primary">Shop</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Example;
