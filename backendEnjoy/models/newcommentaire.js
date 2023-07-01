const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_newcommentaire: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_newcommentaire"
    },
    commentaire: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "commentaire"
    },
    membre: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "membre"
    },
    contenu: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "contenu"
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "date"
    },
    id_commentaire: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_commentaire",
      references: {
        key: "id_commentaire",
        model: "commentaire_model"
      }
    },
    id_membre: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_membre",
      references: {
        key: "id_membre",
        model: "membre_model"
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "createdAt"
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "updatedAt"
    }
  };
  const options = {
    tableName: "newcommentaire",
    comment: "",
    indexes: [{
      name: "id_commentaire",
      unique: false,
      type: "BTREE",
      fields: ["id_commentaire"]
    }, {
      name: "id_membre",
      unique: false,
      type: "BTREE",
      fields: ["id_membre"]
    }]
  };
  const NewcommentaireModel = sequelize.define("newcommentaire_model", attributes, options);
  return NewcommentaireModel;
};