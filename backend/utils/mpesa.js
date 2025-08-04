const axios = require('axios');
const moment = require('moment');
require('dotenv').config();

exports.getAccessToken = async () => {
  const { DARAJA_CONSUMER_KEY, DARAJA_CONSUMER_SECRET } = process.env;
  const auth = Buffer.from(`${DARAJA_CONSUMER_KEY}:${DARAJA_CONSUMER_SECRET}`).toString('base64');

  try {
    const response = await axios.get(
      'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );
      console.log('Access Token:', response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.error('Access token error:', error.response?.data || error.message);
    throw error;
  }
};

exports.stkPush = async (phone, amount) => {
  const accessToken = await this.getAccessToken();
  const timestamp = moment().format('YYYYMMDDHHmmss');
  const password = Buffer.from(
    `${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`
  ).toString('base64');

  console.log('STK Request Body:', {
    phone,
    amount,
    accessToken,
    password,
    timestamp,
    callback: process.env.MPESA_CALLBACK_URL,
  });

  try {
    const response = await axios.post(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      {
        BusinessShortCode: process.env.MPESA_SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: phone,
        PartyB: process.env.MPESA_SHORTCODE,
        PhoneNumber: phone,
        CallBackURL: process.env.MPESA_CALLBACK_URL,
        AccountReference: 'DonationApp',
        TransactionDesc: 'Charity Donation',
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('STK Push error:', error.response?.data || error.message);
    throw error;
  }
};
