## Requirement Mapping 

**RF** => Requirement functional;
All functionality of application;

**RNF** => Requirement not functional;
Choose database, use or not Docker, use expecific lib, etc; 

**RN** => Negotiate rule;
Not possible to register category with same name;

-----

## Register Cars
**RF**
Should be possible register a new car;
**RN**
Should not be possible register a new car with a same license_plate;
The car should be register with default avaliable;
* Should be possible register a new car just user admin; (Will be create when to create controller)

## List Cars
**RF**
Should be possible list all cars avaliables;
Should be possible list all cars avaliables by brand;
Should be possible list all cars avaliables by car name;
Should be possible list all cars avaliables by category name;
**RN**
Should be possible list all cars without login in system;

# Register Specifications Cars
**RF**
Should be possible register a specification to one car;
**RN**
Should not be possible register a specification to one car not register;
Should not be possbile register already existis specification to the same car;
Should be possible register a new specification just user admin;



# Regiter Image Car
**RF**
Should be possible register a image of the car;
**RNF**
Use multer to upload files;
**RN**
Should be possible register a image of the car just user admin;
Should be possible registar many images to the same car;


# Car Rental
**RF**
Should be possible register a rental;
**RNF**

**RN**
Should not be able to register a new rental if user not logged;
Should not be possible register a new rental if already exists a open to the same user; 
Should not be possible register a new rental if already exists a open to the same car; 
The rental should be minimum duration to the twenty four hour;