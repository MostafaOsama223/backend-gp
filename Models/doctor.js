'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Doctor extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */

		static associate({ Patient }) {
			this.hasMany(Patient, { //DONE
				foreignKey:{
					name:"doctorId",
					allowNull: false,
				}
			})
		}

		static async add(doctor) {
			const doctor = await this.create({
				name: doctor.name,
				email: doctor.email,
				phone: doctor.phone
			})
			return doctor;
		}

		static async getAll() {
			const doctors = await this.findAll();
			return doctors
		}

		static async get(doctorId) {
			const doctor = await this.findByPk(doctorId);
			return doctor;
		}

		static async delete(id) {
			const deletedDoctor = await this.destroy({
				where: {
					id: id
				}
			})
			return deletedDoctor;
		}

		static async update(dr) {
			const prameters = {};
			Object.keys(dr).forEach(key => {
				if (dr[key] !== '' && dr[key] !== null) {
					prameters[key] = dr[key];
				}
			})
			const updatedDoctor = await this.update(prameters, {
				where: {
					id: dr.id
				}
			})
			return updatedDoctor
		}
	}

	Doctor.init({
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		phone: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
	}, {
		sequelize,
		modelName: 'Doctor',
		freezeTableName: false,
		timestamps: false,
	});

	return Doctor;
};