import express from "express";
import initApp from "./src/index.router.js";
const app = express();
initApp(express ,app);

app.listen(7000, () => {
    console.log(`Server is running on 7000...`);
});