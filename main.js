const { URL, URLSearchParams } = require('url');


const currency ='usd';
const date_from ='20220707';
const date_to ='20220719';

const nbuUrl= new URL('NBU_Exchange/exchange_site','https://bank.gov.ua/');

nbuUrl.search = new URLSearchParams({
    start:date_from,
    end:date_to,
    valcode:currency,
}).toString();

console.log(nbuUrl.toString());