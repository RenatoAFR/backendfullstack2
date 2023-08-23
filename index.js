import express from "express";
import rotaProfessor from "./Rotas/rotaProfessor.js";
import cors from 'cors';

const app = new express();

app.use(express.urlencoded({ extended: false }));
app.use(cors({cors:'*'}))
app.use(express.json());
app.use('/professor', rotaProfessor);

app.listen(4038, '0.0.0.0', () => {
    console.log("Backend ouvindo em http://0.0.0.0:4038")
})
