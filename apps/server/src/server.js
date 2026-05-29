import dotenv from "dotenv";

dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";
import swaggerDocs from "./docs/swagger.js";

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  await connectDB();

  swaggerDocs(app);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();