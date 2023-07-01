const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    nom: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nom"
    },
    prenom: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "prenom"
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email"
    }
  };
  const options = {
    tableName: "liste_amis",
    comment: "",
    indexes: []
  };
  const ListeAmisModel = sequelize.define("liste_amis_model", attributes, options);
  return ListeAmisModel;
};