'use strict';

/**
 * slab service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::slab.slab');
