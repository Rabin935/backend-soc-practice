import express  from "express";
import BodyParser from "body-parser";
import userRoutes from "./routes/user.route";

const app = express();

app.use(BodyParser.json());
app.use("/api/users", userRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

