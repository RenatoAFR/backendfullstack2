import express from "express";
import rotaProfessor from "./Rotas/rotaProfessor.js";
import rotaCurso from "./Rotas/rotaCurso.js";
import cors from 'cors';

const app = new express();

app.use((req, res, next) => {

    console.log("Origem da solicitação:", req.get("origin"));


    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );

    next();
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/professor', rotaProfessor);
app.use('/curso', rotaCurso);

app.listen(4038, '0.0.0.0', () => {
    console.log("Backend ouvindo em http://0.0.0.0:4038")
})
