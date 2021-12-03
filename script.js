const btn = document.getElementById('btn');
const URL = 'https://secure.3gdirectpay.com/API/v6/';

const req_data_load = `<?xml version="1.0" encoding="utf-8"?>
  <API3G>
  <CompanyToken>22645C34-0644-46B1-A96D-8524D8E5B265</CompanyToken>
  <Request>createToken</Request>
  <Transaction>
  <PaymentAmount>1000.00</PaymentAmount>
  <PaymentCurrency>TZS</PaymentCurrency>
  <CompanyRef>LODGEAPP</CompanyRef>
  <RedirectURL>https://lodge.co.tz/login</RedirectURL>
  <BackURL>https://lodge.co.tz/register</BackURL>
  <DeclinedURL>https://lodge.co.tz</DeclinedURL>
  <CompanyRefUnique>0</CompanyRefUnique>
  <PTL>15</PTL>
  <PTLtype>hours</PTLtype>
  <DefaultPayment>MO</DefaultPayment>
  <DefaultPaymentCountry>Tanzania</DefaultPaymentCountry>
  <DefaultPaymentMNO>Tigo</DefaultPaymentMNO>
  <customerFirstName>Zakaria</customerFirstName>
  <customerLastName>Moshi</customerLastName>
  <customerZip>0</customerZip>
  <customerAddress>TZ</customerAddress>
  <customerCity>DSM</customerCity>
  <customerCountry>TZ</customerCountry>
  <customerEmail>jifunzeweb@gmail.com</customerEmail>
  <customerPhone>0755059683</customerPhone>
  </Transaction>
  <Services>
   <Service>
     <ServiceType>5525</ServiceType>
     <ServiceDescription>Lodge App Subscription</ServiceDescription>
     <ServiceDate>2021/12/03</ServiceDate>
   </Service>
  </Services>
  </API3G>`;

async function postData() {
  // Default options are marked with *
  const response = await fetch(URL, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      // 'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: req_data_load, // body data type must match "Content-Type" header
  });

  const data = await response.text();
  console.log(data);
}

btn.addEventListener('click', postData);
