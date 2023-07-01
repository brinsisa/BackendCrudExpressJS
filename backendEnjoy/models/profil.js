const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    nom: {
      type: DataTypes.INTEGER(11),
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
    login: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "login"
    },
    pwd: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "pwd"
    },
    photo: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "photo"
    }
  };
  const options = {
    tableName: "profil",
    comment: "",
    indexes: []
  };
  const ProfilModel = sequelize.define("profil_model", attributes, options);
  return ProfilModel;
};