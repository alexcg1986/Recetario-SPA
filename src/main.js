import { createApp } from "vue";
import { router } from "./router/router.js";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Panel from "primevue/panel";
import Menubar from "primevue/menubar";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import Dropdown from "primevue/dropdown";
import Textarea from "primevue/textarea";
import ScrollTop from "primevue/scrolltop";
import Card from "primevue/card";
import FileUpload from "primevue/fileupload";

import "animate.css";
import "primevue/resources/themes/luna-amber/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("Panel", Panel);
app.component("Menubar", Menubar);
app.component("Dialog", Dialog);
app.component("InputText", InputText);
app.component("InputNumber", InputNumber);
app.component("Button", Button);
app.component("Toast", Toast);
app.component("Dropdown", Dropdown);
app.component("Textarea", Textarea);
app.component("ScrollTop", ScrollTop);
app.component("Card", Card);
app.component("FileUpload", FileUpload);

app.mount("#app");
