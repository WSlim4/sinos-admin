'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    find: ctx => {
        return strapi.query('schedule').find(ctx.query, ['events', 'events.projeto']);
      },
    findOne: ctx => {
        return strapi.query('schedule').findOne({ month: ctx.params.month }, ['events', 'events.projeto']);
    }
};
