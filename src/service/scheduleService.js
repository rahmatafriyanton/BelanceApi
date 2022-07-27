module.exports = {
	getSchedule: function(con, callback) {
		con.query("SELECT * FROM tb_schedule", callback)
	},
	getScheduleByID: function(con, id, callback) {
		con.query(`SELECT * FROM tb_schedule WHERE schedule_id = ${id}`, callback)
	},

	createSchedule: function(con, data, callback) {
		con.query(
			`INSERT INTO tb_schedule SET 
			schedule_type = '${data.schedule_type}', 
			start_time = '${data.start_time}', 
			end_time = '${data.end_time}', 
			user_id = '1'`,
			callback
			)
	},

	updateSchedule: function(con, data, id, callback) {
		con.query(`UPDATE tb_schedule SET 
			is_active = '${data.is_active}' 
			WHERE schedule_id = ${id}`,
			callback
			)
	},

	deleteSchedule: function(con, id, callback) {
		con.query(`DELETE FROM tb_schedule WHERE schedule_id = ${id}`, callback)
	},
}