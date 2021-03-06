const Sequelize = require('sequelize')
const db = require('./db');
const { sequelize } = require('./user');

const Model = Sequelize.Model;
class InteRestate  extends Model {
    static async findid(id) {
        return InteRestate.findOne({
              where:{
                  id,
              }
          })
      }

    static async find() {
        return InteRestate.findAll({
              order: [
                ['id', 'ASC']
            ],
          })
      }
   
}
InteRestate .init({
    Name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    interest: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    /*
    numberMonth: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
    */
}, 
{
    sequelize: db,
    modelName: 'inteRestate'
});

module.exports = InteRestate;