import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { getProfilesHandler, deleteProfileHandler, getProfileByIdHandler, updatePasswordHandler } from "./getProfiles";
import { registerHandler } from "./routes/register";
import { loginHandler } from "./login";
import { examsRoutes } from "./routes/exams";
import { questionsRoutes } from "./questions";
import { resultsRoutes } from "./routes/resultRoutes";
import { attachmentsRoutes } from "./attachments";
import { adminsRoutes } from "./admins";

const app = new Elysia();

app.use(cors({ origin: "*" }));

// Profiles
app.get("/profiles", getProfilesHandler);
deleteProfileHandler(app);
getProfileByIdHandler(app);
updatePasswordHandler(app);

app.post("/register", registerHandler);
app.post("/login", loginHandler);

examsRoutes(app);
questionsRoutes(app);
resultsRoutes(app);
attachmentsRoutes(app);
adminsRoutes(app);

// Vercel serverless لا يحتاج listen
export default app;
