const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Demo endpoints
app.post('/auth/send-code', (req, res) => {
  const { phone } = req.body;
  // Simile: Voye kòd la pa SMS (dev only)
  if (!phone) return res.status(400).json({ success: false, message: 'Nimewo obligatwa' });
  return res.json({ success: true, message: 'Kòd voye!' });
});

app.post('/auth/verify-code', (req, res) => {
  const { phone, code } = req.body;
  // Simile: Kòd "1234" se kòd demo
  if (code === '1234') return res.json({ success: true, token: 'demo-token' });
  return res.status(401).json({ success: false, message: 'Kòd pa bon' });
});

app.post('/payment/validate', (req, res) => {
  const { method, info } = req.body;
  // Simile: Tout peman valid pou demo
  if (!method || !info) return res.status(400).json({ success: false, message: 'Metòd & info obligatwa' });
  return res.json({ success: true, message: 'Peman ap trete' });
});

app.get('/', (req, res) => {
  res.send('Domino Bet API v1');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
