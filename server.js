const app = require("./src/app");
const connectDB = require("./src/db/db");
      
connectDB();
//i connected to the website
app.listen(3000,() => console.log("server up at 3000"));
