# Atlas Multi-tenancy with Realm Authentication and Authorisation

## Description
This proof illustrates how to implement a B2B multi-tenant cluster where customer data is logically separated at the document level and access to that data is controlled natively by Realm Authentication.

### The Problem to be Solved
Customers often ask us how they should store their B2B customer data in Atlas and how they should control the access to that data. Quite often we advise them that they should do the logcial seperation at the document level with the use of a tenant_id field in the documents. 

Often, the problem for customers is that they want to mange access control in the database but to do this we would need to do the logical seperation at the colleciton or database level but because Atlas DBs only support 100 users, this would not scalable. So we often advise them that to take this document level multi-tenancy approach, they would need to manage data access control from their backend with code logic.

So a novel way to solve this requirement for Atlas to manage the customer access control to data at the document level is to leverage Realm Authentication which natively allows you to not only create users with authoristion rules but also it 

## Preparation

## Execution

## Conclusion
