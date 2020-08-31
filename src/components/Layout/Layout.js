import React from './node_modules/react';
import Aux from '../../hoc/Auxi';

const layout = (props) => {
  <Aux>
    <div>Toolbar, sidedrawer, backdrawer</div>
    <main>{props.childrens}</main>
  </Aux>;
};

export default layout;
