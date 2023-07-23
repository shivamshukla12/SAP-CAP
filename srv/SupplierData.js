const cds = require("@sap/cds");
module.exports = cds.service.impl(async function () {
  this.on("READ", "Supplier", getSupplier);
  /* Provide your Entity Name and Function Name which will be called on READ Request */
});
const getSupplier = async (req) => {
  const srv = await cds.connect.to("db");
  const { Supplier } = srv.entities;

  let venQuery1 = SELECT.columns("ID").from(`${Supplier.name}`);
  let result1 = await srv.run(venQuery1);
  return result1;

  // return await db.run(req.query);
  // res = {};
  // records = [];
  // res.ID = "1";
  // res.FirstName = "James";
  // res.LastName = "Bond";
  // res.Address = "CA Aaron 76 Street No 1";
  // res.ZipCode = "+960056";
  // res.Country = "USA";
  // res.Phone = "+1 9000 102 223";
  // records.push(res);

  // res.ID = "2";
  // res.FirstName = "Keanu";
  // res.LastName = "Reeves";
  // res.Address = "CA Aaron 76 Street No 2";
  // res.ZipCode = "+960056";
  // res.Country = "USA";
  // res.Phone = "+1 9001 102 223";
  // records.push(res);

  return supplier;

  /** These are the hard code Values and Added in Entity */

  /** Lets Load Data from CSV*/
};
