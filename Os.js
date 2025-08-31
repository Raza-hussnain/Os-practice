const { execFile } = require("child_process");
execFile("ls", [req.query.folder], (err, stdout) => {
  console.log(stdout);
});
