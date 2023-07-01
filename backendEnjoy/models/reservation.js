const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    date_reservation: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "date_reservation"
    }
  };
  const options = {
    tableName: "reservation",
    comment: "",
    indexes: []
  };
  const ReservationModel = sequelize.define("reservation_model", attributes, options);
  return ReservationModel;
};