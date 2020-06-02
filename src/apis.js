
// const isProduction = process.env.production || false;
const isProduction = true
// const isProduction = false

// node .env

let baseUrl = 'http://localhost:5000'

if (isProduction) {
    // baseUrl = 'http://ec2-3-20-232-219.us-east-2.compute.amazonaws.com:5000'
    baseUrl = 'http://localhost:5000'
}



const getApiItem = async () => {
    const response = await fetch(`${baseUrl}/api/item`);
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

const getApiStockOut = async () => {
    const response = await fetch(`${baseUrl}/api/stock_out`);
    const body = await response.json();
    console.log(body)
    return body;
}

export { getApiItem, getApiStockIn, getApiStockOut }