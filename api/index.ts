import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { getProfilesHandler, deleteProfileHandler, getProfileByIdHandler, updatePasswordHandler } from "../src/routes/getProfiles";
import { registerHandler } from "../src/routes/register";
import { loginHandler } from "../src/routes/login";
import { examsRoutes } from "../src/routes/exams";
import { questionsRoutes } from "../src/routes/questions";
import { resultsRoutes } from "../src/routes/resultRoutes";
import { attachmentsRoutes } from "../src/routes/attachments";
import { adminsRoutes } from "../src/routes/admins";

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

export default app;
