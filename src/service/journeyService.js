module.exports = {
    // GET Action
    get: function(con, callback) {
      con.query("SELECT * FROM tb_journey ORDER BY nama_journey", callback)
    },
  
    getById: function(con, id, callback) {
      con.query(`SELECT * FROM tb_journey WHERE journey_id = ${id}`, callback)
    },

    getDetailJourney: function(con, id, callback) {
      con.query(`SELECT * FROM tb_detail_journey WHERE detail_journey_id = ${id}`, callback)
    },

    getListDetailJourney: function(con, id, callback) {
      con.query(`SELECT * FROM tb_detail_journey a
      LEFT JOIN tb_journey b 
      ON a.journey_id = b.journey_id
      WHERE a.journey_id = ${id}`, callback)
    },
  
    // Post Action 
    createJourney: function(con, data, callback) {
      con.query(
        `INSERT INTO tb_journey SET 
        nama_journey = '${data.nama_journey}', 
        user_id = '1'`,
        callback
      )
    },

    createDetailJourney: function(con, data, callback) {
      con.query(
        `INSERT INTO tb_detail_journey SET 
        journey_id = '${data.journey_id}', 
        nama_detail_journey = '${data.nama_detail_journey}'`,
        callback
      )
    },
  
    // PUT Action
    updateJourney: function(con, data, id, callback) {
      con.query(`UPDATE tb_journey SET 
        nama_journey = '${data.nama_journey}' 
        WHERE journey_id = ${id}`,
        callback
      )
    },

    // PUT Action
    updateDetailJourney: function(con, data, id, callback) {
      con.query(`UPDATE tb_detail_journey SET 
        nama_detail_journey = '${data.nama_detail_journey}', 
        current_status = '${data.current_status}' 
        WHERE detail_journey_id = ${id}`,
        callback
      )
    },
  
    // DELETE Action
    deleteJourney: function(con, id, callback) {
      con.query(`DELETE FROM tb_journey WHERE journey_id = ${id}`, callback)
    },

    deleteDetailJourney: function(con, id, callback) {
      con.query(`DELETE FROM tb_detail_journey WHERE detail_journey_id = ${id}`, callback)
    }
  }