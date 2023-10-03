import Knex from 'knex';
import knexFile from "~/knexfile";
import {Model} from "objection";

export default defineNuxtPlugin(_ => {
    console.log('Connecting to DB...')
    Model.knex(Knex(knexFile.development));
})
