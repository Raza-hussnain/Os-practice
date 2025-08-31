const { exec } = require("child_process");
exec("ls " + req.query.folder, (err, stdout) => {
  console.log(stdout);
});
