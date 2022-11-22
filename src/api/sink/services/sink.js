'use strict';

/**
 * sink service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sink.sink');
