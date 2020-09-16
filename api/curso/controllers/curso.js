'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    findOne: async (ctx) => {
        return await strapi.query('curso').findOne({slug: ctx.params.id }, ['curso.aulas']);
    }
};
