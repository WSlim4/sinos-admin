'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  find: ctx => {
    return strapi.query('projeto').find(ctx.query, ['categorias', 'categorias.image', 'categorias.cursos', 'categorias.cursos.aulas']);
  },
  findOne: ctx => {
    return strapi.query('projeto').findOne({slug: ctx.params.id}, ['categorias', 'categorias.image', 'categorias.cursos', 'categorias.cursos.aulas']);
  },
};