const cds = require('@sap/cds')
module.exports = cds.service.impl(async function () {
  this.on("READ", "Supplier", getSupplier);
  /* Provide your Entity Name and Function Name which will be called on READ Request */
});
const getSupplier = async (req) => {

  res = {};
  records = [];
  res.ID = "1";
  res.FirstName = "James";
  res.LastName = "Bond";
  res.Address = "CA Aaron 76 Street No 1";
  res.ZipCode = "+960056";
  res.Country = "USA";
  res.Phone = "+1 9000 102 223";
  records.push(res);

  res.ID = "2";
  res.FirstName = "Keanu";
  res.LastName = "Reeves";
  res.Address = "CA Aaron 76 Street No 2";
  res.ZipCode = "+960056";
  res.Country = "USA";
  res.Phone = "+1 9001 102 223";
  records.push(res);

  return records;

/** These are the hard code Values and Added in Entity */

/** Lets Load Data from CSV*/

};
