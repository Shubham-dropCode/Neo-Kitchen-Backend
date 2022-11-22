'use strict';

/**
 * faucet router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::faucet.faucet');
