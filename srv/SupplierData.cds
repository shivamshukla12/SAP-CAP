using cap as cap from '../db/schema';
service Supl{
// *** Simply Create One Entity for Now -- Supplier And Lets Code it in JS */
 entity Supplier @readonly as projection on cap.Supplier;
}