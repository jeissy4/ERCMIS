const { stkPush } = require('../utils/mpesa');

exports.initiateSTKPush = async (req, res) => {
  const { phone, amount } = req.body;
  console.log(phone, amount)

  if (!phone || !amount) {
    return res.status(400).json({ message: 'Phone and amount are required' });
  }

  try {
    const response = await stkPush(phone, amount);
    res.status(200).json({res:response});
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
 // initiateSTKPush runs successfully prompting for user mpesa pin but callback to ngrok domain/callback:  https://4ad6a9e7de34.ngrok-free.app/callback that is hosting localhost:2222, callback is not being triggered