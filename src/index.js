import app from "./app.js";

const main = () => {
    app.listen(app.get("port"));
    console.log(`
        the companys server super wed is runnig on port ${app.get("port")}`);
}
    main ();
