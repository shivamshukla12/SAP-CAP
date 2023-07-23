namespace cap;

using { Country, managed } from '@sap/cds/common';

@cds.persistence.exists
entity Supplier{
    Key ID: Int64;
    FirstName :String;
    LastName:String;
    Address:String;
    ZipCode:String;
    Country:String;
    Phone:String;
}

