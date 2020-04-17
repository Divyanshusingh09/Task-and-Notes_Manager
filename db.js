const Sequelize = require('sequelize')

const db = new Sequelize({

    dialect: 'sqlite',

    storage: __dirname + '/tasks.db'

})

const tommorowDate = () => {

    const today = new Date()

    const tommorow = new Date(today)

    tommorow.setDate(tommorow.getDate() + 1)

    return tommorow

}


const Tasks = db.define('task', {

    id: {

        type: Sequelize.INTEGER,

        primaryKey: true,

        autoIncrement: true

    },

    title: {

        type: Sequelize.STRING,

        allowNull: false

    },

    description: {

        type: Sequelize.STRING,

        allowNull: true

    },

    date: {

        type: Sequelize.DATEONLY,

        defaultValue: tommorowDate()

    },

    priority: {

        type: Sequelize.STRING,

        defaultValue: "medium"

    },

    state: {

        type: Sequelize.STRING,

        defaultValue: "incomplete"

    }

})
const Notes = db.define('notes', {

    notesId: {

        type: Sequelize.INTEGER,

        primaryKey: true,

        autoIncrement: true

    },

    note: {

        type: Sequelize.STRING,

        allowNull: false

    },

    taskId: {

        type: Sequelize.INTEGER,

        allowNull: false

    }

})

module.exports = {

    db,
    Tasks,
    Notes

}