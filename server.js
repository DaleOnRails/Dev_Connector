const express = require('express')

// (following on from steps in "docs/mern_application_build_checklist.md")
// 1. Initialize app variable with express
const app = express();

// 3. Test the port configuration is allgood with a sample request:
app.get('/', (req, res) => res.send('API Running'));

// 2. Set the 'port' for the express server
// says if there is no port specified in the 'enviroment' variable then default to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));