import "dotenv/config";
import App from "./app";
import { validateEnv } from "./core/utils";
import { IndexRoute } from "./module/index";

validateEnv();
const routes = [new IndexRoute()];
const app = new App(routes);

app.listen();
