import { defineNuxtModule, useLogger } from '@nuxt/kit'
import {Model} from "objection";
import Knex from "knex";
import knexFile from "../knexfile";

export default defineNuxtModule({
    setup (options, nuxt) {

        const logger = useLogger('db-connection');

        nuxt.hook('ready', async () => {
            logger.info('-------------------------------------------- DB Connected...')
            Model.knex(Knex(knexFile.development));
        })
        nuxt.hook('close', async () => {
            logger.info('-------------------------------------------- DB closed...')
            await Model.knex().destroy();
        })
    }
})
