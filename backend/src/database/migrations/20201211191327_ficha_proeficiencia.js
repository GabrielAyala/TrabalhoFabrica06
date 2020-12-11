
exports.up = function(knex) {
    return knex.schema.createTable('ficha_proeficiencia', function (table) {
        table.increments('id_ficha_proeficiencias').primary();
        table.integer('id_ficha').notNullable();
        table.integer('id_proeficiencias').notNullable();

        table.foreign('id_ficha').references('id_ficha').inTable('ficha');
        table.foreign('id_proeficiencias').references('id_proeficiencias').inTable('proeficiencias');
    });
  
};

exports.down = function(knex) {
  
};
