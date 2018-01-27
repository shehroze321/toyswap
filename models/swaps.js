module.exports = function (sequelize, DataTypes) {
    var Swaps = sequelize.define("Swaps", {
        incomingId: {
            type: DataTypes.INTEGER,
            default: null,
        },
        incomingUrl: {
            type: DataTypes.STRING,
            default: null,
        },
        incomingTitle: {
            type: DataTypes.STRING,
            default: null,
        },
        sellerId: {
            type: DataTypes.INTEGER,
            default: null,
        },
        sellerTitle: {
            type: DataTypes.STRING,
            default: null,
        },
        sellerUrl: {
            type: DataTypes.STRING,
            default: null,
        }
        // incomingSwapId: toyId,
        // url: url,
        // title: title,
        // sellerId: sellerId,
        // sellerTitle: sellerTitle,
        // sellerUrl: sellerUrl
    }, {
        freezeTableName: true,
    });
    // need a userID because without it (after a user logs in) we can't insert into the database "notNull Violation: Inventory.UserId cannot be null"
    // Inventory.associate = function (models) {
    //     // We're saying that a Post should belong to an Author
    //     // A Post can't be created without an Author due to the foreign key constraint
    //     Inventory.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    return Swaps;
};