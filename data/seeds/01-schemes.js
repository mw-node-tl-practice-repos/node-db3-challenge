
exports.seed = function(knex) {
  return knex('schemes').insert([
    {scheme_name: 'Beware'},
    {scheme_name: 'Hacker'},
    {scheme_name: 'Get Got'},
    {scheme_name: 'You Think He Loves You for Your Money but I Know what He Really Loves You for its Your Brand New Leopard Skin Pillbox Hat'},
    {scheme_name: 'Streaky'},
    {scheme_name: 'Takyon'}
  ]);
};
