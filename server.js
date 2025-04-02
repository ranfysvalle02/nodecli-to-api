const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

app.get('/', (req, res) => {
  const command = `npm run init-demo --silent -- -f sample.txt`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing npm script: ${error}`);
      return res.status(500).json({
        status: 'error',
        error: { message: 'npm script execution failed', details: stderr },
      });
    }

    console.log(`npm script output: ${stdout}`);
    res.status(200).json({
      status: 'success',
      data: { output: stdout },
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});