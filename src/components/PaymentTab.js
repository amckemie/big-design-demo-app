import React from 'react';
import { Tabs } from '@bigcommerce/big-design';

function PaymentTabs() {
  return(
  	<Tabs activeTab="checkout_payment_settings">
       <Tabs.Tab id="checkout_payment_settings">Checkout Payment Settings</Tabs.Tab>
       <Tabs.Tab id="bank_deposit">Bank Deposit Settings</Tabs.Tab>
       <Tabs.Tab id="braintree">Braintree Settings</Tabs.Tab>
    </Tabs>
  );
}     

export default PaymentTabs;
