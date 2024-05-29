export class Application {
  public id: String;
  public firstname: String;
  public lastname: String;
  public dob: String;
  public ssn: String;
  public phone: String;
  public idNumber: String;
  public occupation: String;
  public propertyRef: String;

  constructor(
    id: String,
    firstname: String,
    lastname: String,
    dob: String,
    ssn: String,
    phone: String,
    idNumber: String,
    occupation: String,
    propertyRef: String,
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob=dob;
    this.ssn= ssn;
    this.phone = phone;
    this.idNumber = idNumber;
    this.occupation=occupation;
    this.propertyRef=propertyRef;
  }
}
