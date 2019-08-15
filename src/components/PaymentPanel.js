import React from 'react';
import { H4, Link, Flex } from '@bigcommerce/big-design';
import { ArrowDropDownIcon } from '@bigcommerce/big-design-icons';

function PaymentPanel(props) {
  return(
    <Flex  backgroundColor="white" padding="xxLarge" border="box"
           alignContent="center" marginTop="xxLarge" marginBottom="xxLarge"
           elevation="raised">

      <Flex.Item alignSelf="baseline" flexBasis="auto" flexGrow={0} flexOrder={0} flexShrink={1}>
        <H4 margin="none">{props.name}</H4>
      </Flex.Item>
      
      <Flex.Item alignSelf="baseline" flexBasis="auto" flexGrow={1} flexOrder={0} flexShrink={1} marginHorizontal="xxLarge">
        <Link>{props.linkVisible}</Link>
      </Flex.Item>
  
      <Flex.Item alignSelf="baseline"> 
        <ArrowDropDownIcon />
      </Flex.Item>
    </Flex>
  
  );
}     

export default PaymentPanel;