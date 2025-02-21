import { Client, Account } from 'react-native-appwrite';


export const config={
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.gaurav.depaul",
    projectId: "66864fd2002fc34bb44e",
    databaseId: "6686514d00262e6e9de4",
    userCollectionId: "6686527a001948f61e2b",
    academicCollectionId: "668652ad003969941ccc",
    gradeCollectionId: "668652c80022caac0724",
    storageId:"66865993000e41fb7801"
}


const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform) 
;

const account = new Account(client);

account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
