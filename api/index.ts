import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { getProfilesHandler, deleteProfileHandler, getProfileByIdHandler, updatePasswordHandler } from "./getProfiles";
import { registerHandler } from "./register";
import { loginHandler } from "./login";
import { examsRoutes } from "./exams";
import { questionsRoutes } from "./questions";
import { resultsRoutes } from "./resultRoutes";
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

export default app.handle;
