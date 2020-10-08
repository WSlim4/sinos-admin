'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    find: ctx => {
        return strapi.query('repertorio-obra').find(ctx.query, ['repertorio-autor', 'repertorio-video']);
      },
    findOne: ctx => {
        return strapi.query('repertorio-obra').findOne({id: ctx.params.id}, ['repertorio-video']);
      },
};
