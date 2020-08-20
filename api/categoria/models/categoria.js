'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    findOne: async (ctx) => {
        return await strapi.query('categoria').findOne({ id: ctx.id }, ['categorias', 'categorias.cursos', 'categorias.cursos.aulas']);
      }
};
