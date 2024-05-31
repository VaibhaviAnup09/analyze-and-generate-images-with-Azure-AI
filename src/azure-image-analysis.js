import axios from 'axios';

const endpoint = "process.env.REACT_APP_AZURE_ENDPOINT";
const apiKey = "process.env.REACT_APP_AZURE_API_KEY";

export async function analyzeImage(imageUrl) {
  const url = `${endpoint}/vision/v3.2/analyze`;
  const params = {
    visualFeatures: 'Description',
  };

  try {
    // print the values of the endpoint and apiKey
    console.log('endpoint:', endpoint);
    console.log('apiKey:', apiKey);
    const response = await axios.post(url, {
      url: imageUrl,
    }, {
      headers: {
        'Ocp-Apim-Subscription-Key': apiKey,
        'Content-Type': 'application/json',
      },
      params,
    });
    return response.data;
  } catch (error) {
    console.error('Error analyzing image:', error);
    throw error;
  }
}