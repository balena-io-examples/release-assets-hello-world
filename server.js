const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Balena Hello World with SBOM</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          min-height: 100vh;
        }
        .container {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 30px;
          margin-top: 50px;
        }
        h1 {
          text-align: center;
          font-size: 2.5em;
          margin-bottom: 20px;
        }
        .info {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          padding: 20px;
          margin: 20px 0;
        }
        .feature {
          margin: 10px 0;
          padding-left: 20px;
        }
        .timestamp {
          text-align: center;
          margin-top: 30px;
          opacity: 0.8;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 Hello from Balena!</h1>
        
        <div class="info">
          <h2>About This Application</h2>
          <p>This is a demonstration application showing how to:</p>
          <div class="feature">✅ Deploy Node.js apps to Balena devices</div>
          <div class="feature">✅ Use GitHub Actions for CI/CD</div>
          <div class="feature">✅ Generate Software Bill of Materials (SBOM)</div>
          <div class="feature">✅ Upload SBOM as release assets to Balena</div>
        </div>
        
        <div class="info">
          <h2>Environment Information</h2>
          <div class="feature">Node Version: ${process.version}</div>
          <div class="feature">Port: ${port}</div>
          <div class="feature">Platform: ${process.platform}</div>
          <div class="feature">Architecture: ${process.arch}</div>
        </div>
        
        <div class="timestamp">
          Current Time: ${new Date().toLocaleString()}
        </div>
      </div>
    </body>
    </html>
  `;
  res.send(html);
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.listen(port, () => {
  console.log(`Hello World app listening on port ${port}`);
  console.log(`Visit http://localhost:${port} to see the application`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  process.exit(0);
});
