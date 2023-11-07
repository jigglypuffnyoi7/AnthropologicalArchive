import express, { Request, Response } from 'express'
const app = express();
const path = require("path");
const PORT = 3000;
app.use(express.json());











app.use(express.static(path.resolve(__dirname, "./dist")))


app.use("/", (_req: Request, res: Response) => {
    return res.send("the server works!!")
})
//unknown path handler
// app.use("*", (req, res) => {
//     return res.status(404).send("404 page does not exist");
//   });
// //global error handler
// app.use((err, req, res, next) => {
//     const defaultErr = {
//       log: "Express error handler caught unknown middleware error",
//       status: 500,
//       message: { err: "An error occurred" },
//     };
//     const errorObj = Object.assign({}, defaultErr, err);
//     console.log(errorObj.log);
//     return res.status(errorObj.status).json(errorObj.message);
//   });
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});








