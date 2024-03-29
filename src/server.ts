import app from "./app";
import { AppDataSource } from "./data-source";
import "dotenv/config";

AppDataSource.initialize()
  .then((): void => {
    console.log("Database connected");
    const PORT: number = Number(process.env.PORT) || 3000;
    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  })
  .catch((error: unknown) => console.log(error));
