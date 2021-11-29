const fs = require("fs");
const data = require("./data");
const crypto = require("crypto");
const os = require("os");

const userdata = data.data("Prograd", 2021, "BE");
const getos = os.userInfo();

const password = crypto
  .createHmac("sha256", "a secret")
  .update("Prograd")
  .digest("hex");

fs.writeFileSync(
  "message.txt",
  `Progard Details\n
    Name -> ${userdata.name}
    Year -> ${userdata.Year}
    Qualification -> ${userdata.Qualification}
    UserName -> ${getos.username}
    Password -> ${password}`
);
