'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    find: ctx => {
        return strapi.query('repertorio-sinos').find(ctx.query, ['repertorio-obra.repertorio-autor', 'repertorio-obra.repertorio-video']);
      },
};
