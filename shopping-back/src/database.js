import Sequelize from 'sequelize'
const sequelize = new Sequelize('teste', 'root', '', {
    dialect: 'sqlite',
    storage: 'db.sqlite',
})

export const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    login: Sequelize.STRING,
    password: Sequelize.STRING,
})

export const Item = sequelize.define('item', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: Sequelize.STRING,
    amount: Sequelize.INTEGER,
    checked: Sequelize.BOOLEAN,
})

User.hasMany(Item, { onDelete: 'cascade' })
Item.belongsTo(User)

sequelize.sync()
