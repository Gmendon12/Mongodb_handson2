const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const url = "mongodb://localhost:27017/"

const client = new MongoClient(url)
console.log("Client created")

async function main(){
    await client.connect();
    console.log("Client connected")

    const database =  client.db('Human_Resource')

    const employee = database.collection("employees")

    const data = [
        {
          firstName: 'John',
          lastName: 'Doe',
          salary: '25000',
          department: 'HR',
          lastCompany: 'X',
          lastSalary: '10000',
          overallExp: '2',
          contactInfo: '1234567890',
          yearGrad: '2016',
          gradStream: 'CSE'
        },
        {
          firstName: 'Rohan',
          lastName: 'Jame',
          salary: '30000',
          department: 'Technical',
          lastCompany: 'Y',
          lastSalary: '15000',
          overallExp: '1',
          contactInfo: '1234567860',
          yearGrad: '2015',
          gradStream: 'CSE'
        },
        {
          firstName: 'Jame',
          lastName: 'Doe',
          salary: '35000',
          department: 'Accounts',
          lastCompany: 'Z',
          lastSalary: '20000',
          overallExp: '1',
          contactInfo: '123567890',
          yearGrad: '2019',
          gradStream: 'ECE'
        },
        {
          firstName: 'Sao',
          lastName: 'Avika',
          salary: '30000',
          department: 'Sales',
          lastCompany: 'Y',
          lastSalary: '15000',
          overallExp: '2',
          contactInfo: '1234567860',
          yearGrad: '2015',
          gradStream: 'CSE'
        },
        {
          firstName: 'Jame',
          lastName: 'roh',
          salary: '35000',
          department: 'Accounts',
          lastCompany: 'Z',
          lastSalary: '15000',
          overallExp: '2',
          contactInfo: '123567890',
          yearGrad: '2019',
          gradStream: 'EEE'
        },
        {
          firstName: 'Rohan',
          lastName: 'Jame',
          salary: '30000',
          department: 'Technical',
          lastCompany: 'Y',
          lastSalary: '15000',
          overallExp: '1',
          contactInfo: '1234567860',
          yearGrad: '2015',
          gradStream: 'CSE'
        },
        {
          firstName: 'Jame',
          lastName: 'Doe',
          salary: '35000',
          department: 'Accounts',
          lastCompany: 'Z',
          lastSalary: '20000',
          overallExp: '1',
          contactInfo: '123567890',
          yearGrad: '2019',
          gradStream: 'ECE'
        },
        {
          firstName: 'Sao',
          lastName: 'Avika',
          salary: '30000',
          department: 'Sales',
          lastCompany: 'Y',
          lastSalary: '15000',
          overallExp: '2',
          contactInfo: '1234567860',
          yearGrad: '2015',
          gradStream: 'CSE'
        },
        {
          firstName: 'Jame',
          lastName: 'Doe',
          salary: '35000',
          department: 'Accounts',
          lastCompany: 'Z',
          lastSalary: '15000',
          overallExp: '2',
          contactInfo: '123567890',
          yearGrad: '2019',
          gradStream: 'EEE'
        },
        {
          firstName: 'Rohan',
          lastName: 'Jame',
          salary: '30000',
          department: 'Technical',
          lastCompany: 'Y',
          lastSalary: '15000',
          overallExp: '1',
          contactInfo: '1234567860',
          yearGrad: '2015',
          gradStream: 'CSE'
        },
        {
          firstName: 'Jame',
          lastName: 'Doe',
          salary: '35000',
          department: 'Accounts',
          lastCompany: 'Z',
          lastSalary: '20000',
          overallExp: '1',
          contactInfo: '123567890',
          yearGrad: '2019',
          gradStream: 'ECE'
        },
        {
          firstName: 'Sao',
          lastName: 'Avika',
          salary: '30000',
          department: 'Sales',
          lastCompany: 'Y',
          lastSalary: '15000',
          overallExp: '2',
          contactInfo: '1234567860',
          yearGrad: '2015',
          gradStream: 'CSE'
        },
        {
          firstName: 'Jame',
          lastName: 'Doe',
          salary: '35000',
          department: 'Accounts',
          lastCompany: 'Z',
          lastSalary: '15000',
          overallExp: '2',
          contactInfo: '123567890',
          yearGrad: '2019',
          gradStream: 'EEE'
        }
      ]

    const response = await employee.insertMany(data);
    console.log(response);
 

    console.log("Employees with salary above 30000")
    const above30 = await employee.find({
        "salary" : {$gte : "30000"}
    })
    console.log(above30);

    console.log("Employees with experience more than 2 years")
    const experience = await employee.find({
        overallExp : {
            $gt : '2'
        }
    })
    console.log(experience);

    console.log("Employees who graduated after 2015 and have experience more than 1 year");
    const grad = await employee.find({
        $and : [
            {
                yearGrad : {$gt : "2015"}   
            },
            {
                overallExp : {$gt : "1"}
            }
        ]

    })
    console.log(grad)

    console.log("Update the salary of employees whos salary is greater than 75000 to 65000")
    const updatesalary = await employee.updateMany(
        {
            salary : {$gt : "75000"}
        },
        {
            $set : {
                salary : "65000"
            }    
        }
    )
    console.log(updatesalary);

    console.log("Delete employees where last company is Y")
    const deleteempl = await employee.deleteMany({
      lastCompany : "Y"  
    })
}

main()