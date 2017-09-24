#READ ME

#AWS for S3 Details


##APIS

SAVE A PROPERTY
POST : /api/RentalProperties/save
payload : {
    "name": "string",
    "locationId": "string",
    "rent": "string",
    "advance": "string",
    "areaSqft": "string",
    "description": "string",
    "bedrooms": "string",
    "furnishing": "string",
    "city": "string",
    "images" : ["urls"]
}