'use strict';

/**
 * faucet controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::faucet.faucet');
