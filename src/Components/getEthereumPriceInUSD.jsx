import axios from "axios";

const getEthereumPriceInUSD = async () => {
  try {
    // Make a request to the CoinGecko API to get the Ethereum price in USD
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
      params: {
        ids: 'ethereum',
        vs_currencies: 'usd',
      },
    });

    // Extract the Ethereum price from the response
    const ethereumPriceInUSD = response.data.ethereum.usd;

    console.log(`Current Ethereum Price in USD: $${ethereumPriceInUSD}`);
    return ethereumPriceInUSD;
  } catch (error) {
    console.error('Error fetching Ethereum price:', error.message);
    throw error;
  }
};

// Example usage



export default getEthereumPriceInUSD