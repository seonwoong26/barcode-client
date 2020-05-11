
// const isProduction = process.env.production || false;
const isProduction = true
// const isProduction = false

// node .env

let baseUrl = 'http://localost:5000'

if (isProduction) {
    baseUrl = 'http://ec2-3-20-232-219.us-east-2.compute.amazonaws.com:5000'
}



const getApiCustomers = async () => {
    const response = await fetch(`${baseUrl}/api/customers`);
    const body = await response.json();
    console.log(body)
    return body;
}

const getApiStockIn = async () => {
    const response = await fetch(`${baseUrl}/api/stock_in`);
    const body = await response.json();
    console.log(body)
    return body;
}

export { getApiCustomers, getApiStockIn }