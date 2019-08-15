import React from 'react';
import { Checkbox, Small, Box} from '@bigcommerce/big-design';

function TestCards() {
  return (
  	<Box>
  	  <Checkbox label="Enable test credit card payments" checked />

  	  <Small marginTop="xxLarge">To process test orders, use card number 4111 1111 1111 1111 and enter any values for name and expiration date</Small>
  	</Box>
  );
}

export default TestCards;