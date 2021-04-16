import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('m1-devweb_tp2', 'm1-devweb', 'M1-DevWeb-M1-DevWeb', {
  host: 'mysql-m1-devweb.alwaysdata.net',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return sequelize.sync();
  })
  .then(() => console.log('Database synchronized'))
  .catch(err => console.error('Database error:', err));
