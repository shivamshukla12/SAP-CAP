const cds = require("@sap/cds");
module.exports = cds.service.impl(async function () {
  this.on("READ", "Supplier", getSupplier);
  this.on("CREATE", "Supplier", postSupplier);
  this.on("delRecord", delRecord);
  /* Provide your Entity Name and Function Name which will be called on READ Request */
});
const getSupplier = async (req) => {
  const srv = await cds.connect.to("db");
  const { Supplier } = srv.entities;
  return await srv.run(SELECT.from(`${Supplier.name}`));
};

const postSupplier = async (req) => {
  const srv = await cds.connect.to("db");
  const { Supplier } = srv.entities;
  let res =  await srv.run(req.query);
  return req.data;
};

const delRecord = async (req) => {
  const srv = await cds.connect.to("db");
  const { Supplier } = srv.entities;
  var filter = 'ID' + ` ` + `=` + ` ` + req.data.ID;
  let delRecord = DELETE
  .from(`${Supplier.name}`)
  .where(filter);
 let res = await srv.run(delRecord);
 if ( res == 1 ){
  return 'Record deleted Successfully';
 };
};
