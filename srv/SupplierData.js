const cds = require("@sap/cds");
module.exports = cds.service.impl(async function () {
  this.on("READ", "Supplier", getSupplier);
  /* Provide your Entity Name and Function Name which will be called on READ Request */
});
const getSupplier = async (req) => {
  const srv = await cds.connect.to("db");
  const { Supplier } = srv.entities;
  return await srv.run(SELECT.from(`${Supplier.name}`));
};
