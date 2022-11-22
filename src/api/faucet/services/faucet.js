'use strict';

/**
 * faucet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::faucet.faucet');
