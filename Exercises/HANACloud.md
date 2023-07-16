## Here we are going to Connect to SAP HANA Cloud from CAP ##

### Deploy to SAP HANA -- Fetch Data From SAP HANA Cloud ###

### Connect to HANA Cloud ###

## Pre-requisite ##
#### Get your trial account ready --- Make sure SAP HANA Cloud instance is Up and Running .....####

### Oepn Terminal and login to CF Space cf login -a User ID and Password ####

**Lets Add Hard Code Data in Supplier Entity**

* Add CDS entity Supplier 
* Add getSupplier Method for reading Supplier Data 
* Add Hard Code Array of two records Stated in Supplier.JS File 
* Return those Two records on method GET Entity Call 

**Supplier Entity**                   **Added Two Records**

![Alt text](image-1.png)         ![Alt text](image-2.png)


# Run cds watch

# Output

![Alt text](image-3.png)




# Upload data using CSV File 

## Execute cds add data --> It will add csv file in your data folder or add data folder it not already created.

### Steps

* Add Supplier Entity 
* Add Projection for Supplier Entity in Supplier.cds 
* Add Supplier.csv for data Upload 
* Add Dummy Data for Suppliers in CSV File with Header
* cds build 
* cds watch 

# Output

### Not Comment your code in JS File before execution otherwise it may display Old Records from Entity 

* We uploaded 3 records in CSV File

![Alt text](image-4.png)




# Lets Deploy this to HANA Cloud and Upload data

## Run these Commands to prepare for HANA Cloud Deployment

### cds add mta 
### cds add hana  ( This will add db-deployer and HDI Container which will serve the purpose of Database Persistence )

## Add these Services in MTA File

### Add Connectivity Service 
### Add Destination  Service
### Add uaa          Service 

## Install Node Modules npm i 

## cds build 

## mbt build for building your CAP Project ready for deployment to Cloud Foundry 

## cf deploy mtar


