module.exports = function(sequelize, DataTypes) {
  var Inventory = sequelize.define("Inventory", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    product_condition: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3]
      }
    },
    availability: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [3]
      }
    },
    
  },{
    freezeTableName: true,
  });
  // need a userID because without it (after a user logs in) we can't insert into the database "notNull Violation: Inventory.UserId cannot be null"
  Inventory.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Inventory.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Inventory;
};
