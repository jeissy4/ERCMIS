const { stkPush } = require('../utils/mpesa');

exports.initiateSTKPush = async (req, res) => {
  const { phone, amount } = req.body;

  if (!phone || !amount) {
    return res.status(400).json({ message: 'Phone and amount are required' });
  }

  try {
    const response = await stkPush(phone, amount);
    res.status(200).json(response);
  } catch (error) {
    console.error('STK Push failed:', error.response?.data || error.message);
    res.status(500).json({
      message: 'Failed to initiate STK Push',
      error: error.response?.data || error.message,
    });
  }
};

exports.handleCallback = async (req, res) => {
  console.log('Callback received from M-Pesa:', JSON.stringify(req.body, null, 2));
  // TODO: save transaction info to database
  res.status(200).json({ message: 'Callback received successfully' });
};
