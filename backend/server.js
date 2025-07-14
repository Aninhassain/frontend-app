const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const doctors = [
  { id: 1, name: 'Dr. Anjali Gupta', specialization: 'Cardiologist', availability: 'Mon–Fri, 10 AM – 4 PM' },
  { id: 2, name: 'Dr. Rajeev Kumar', specialization: 'Neurologist', availability: 'Tue–Sat, 9 AM – 3 PM' }
];

const appointments = [];

app.get('/doctors', (req, res) => res.json(doctors));
app.post('/appointments', (req, res) => {
  appointments.push(req.body);
  res.json({ message: 'Appointment booked successfully!' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
