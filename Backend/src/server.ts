import "dotenv/config";
import App from "./app";
import { validateEnv } from "@core/utils";
import { IndexRoute } from "@modules/index";
import SuggestsRoute from "@modules/suggests/suggests.route";

validateEnv();
const routes = [new IndexRoute(), new SuggestsRoute()];
const app = new App(routes);

app.listen();
