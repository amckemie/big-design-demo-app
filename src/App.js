import React from 'react';
import { GlobalStyles, H1, Box } from '@bigcommerce/big-design';
import PaymentTabs from './components/PaymentTab';
import PaymentPanel from './components/PaymentPanel';
import TestCards from './components/TestCards';


function App() {
  return (
    <div>
    <GlobalStyles />
    <Box backgroundColor="secondary20" padding="xxLarge">

      <H1>Payment Methods</H1>

      <PaymentTabs />

      <PaymentPanel name="Offline Payment Methods" linkVisible="1 visible on storefront"/>
      <PaymentPanel name="Online Payment Methods" linkVisible="1 visible on storefront"/>
      <PaymentPanel name="Digital Wallets" />

      <TestCards /> 
    </Box>
   </div> 
 );
}

export default App;
