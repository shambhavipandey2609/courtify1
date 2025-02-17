const { spawn } = require("child_process");
const path = require("path");

// Path to the server files inside each folder
const clientBackendPath = path.join(__dirname, "client-backend");
const lawStudentBackendPath = path.join(__dirname, "lawstudent-backend");
const lawyerAuthBackendPath = path.join(__dirname, "lawyer-auth-backend");

// Function to start a server
function startServer(folderPath, folderName) {
  console.log(`Starting ${folderName} server...`);
  const server = spawn("node", ["server.js"], { cwd: folderPath });

  server.stdout.on("data", (data) => {
    console.log(`[${folderName}] ${data}`);
  });

  server.stderr.on("data", (data) => {
    console.error(`[${folderName}] ${data}`);
  });

  server.on("close", (code) => {
    console.log(`[${folderName}] Server stopped with code ${code}`);
  });
}

// Start all servers
startServer(clientBackendPath, "client-backend");
startServer(lawStudentBackendPath, "lawstudent-backend");
startServer(lawyerAuthBackendPath, "lawyer-auth-backend");
