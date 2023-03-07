import { IndexRoute } from "./module/index";
import App from "./app";

const routes = [new IndexRoute()];
const app = new App(routes);

app.listen();
