var expressVue = require("express-vue");

var app = express();
const vueOptions = {
    rootPath: path.join(__dirname, "../example/views"),
    vueVersion: "2.4.5",
};

const expressVueMiddleware = expressVue.init(vueOptions);
app.use(expressVueMiddleware);

