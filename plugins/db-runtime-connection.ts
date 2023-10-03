import Knex from 'knex';
import knexFile from "~/knexfile";
import {Model} from "objection";

export default defineNuxtPlugin(_ => {
    Model.knex(Knex(knexFile.development));
})
