import React from 'react';
import Aux from '../../hoc/Auxi';

const layout = (props) => {
  return(
  <Aux>
    <div>Toolbar, sidedrawer, backdrawer</div>
    <main>{props.childrens}</main>
  </Aux>
    )
};

export default layout;
