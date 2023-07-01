const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_commentaire: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_commentaire"
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
    voyage: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "voyage"
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
    id_voyage: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "id_voyage",
      references: {
        key: "id_voyage",
        model: "voyage_model"
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
    tableName: "commentaire",
    comment: "",
    indexes: [{
      name: "id_membre",
      unique: false,
      type: "BTREE",
      fields: ["id_membre"]
    }, {
      name: "id_voyage",
      unique: false,
      type: "BTREE",
      fields: ["id_voyage"]
    }]
  };
  const CommentaireModel = sequelize.define("commentaire_model", attributes, options);
  return CommentaireModel;
};