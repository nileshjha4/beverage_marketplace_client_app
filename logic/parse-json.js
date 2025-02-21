function isValidJSON(jsonString) {
  try {
    JSON.parse(jsonString);
    return true;
  } catch (e) {
    console.log(e)
    return false;
  }
}

function convertToJSON(jsonString) {
  jsonString = jsonString.replace(/,\s*}/g, '}').replace(/,\s*]/g, ']');
  
  jsonString = jsonString.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2":');
  
  jsonString = jsonString.replace(/: ([a-zA-Z0-9_]+)/g, ': "$1"');
  
  if (isValidJSON(jsonString)) {
    return JSON.parse(jsonString);
  } else {
    throw new Error('Unable to convert to valid JSON.');
  }
}

let jsonString = `{
"Year 1": {
"Semester 1": [
{"name": "Introduction to Computer Science", "type": "compulsory", "credit": "4"},
{"name": "Discrete Mathematics", "type": "compulsory", "credit": "4"},
{"name": "Calculus I", "type": "compulsory", "credit": "4"},
{"name": "English Composition", "type": "compulsory", "credit": "4"},
{"name": "Introduction to Data Science", "type": "elective", "credit": "4"}
],
"Semester 2": [
{"name": "Introduction to Programming", "type": "compulsory", "credit": "4"},
{"name": "Discrete Structures", "type": "compulsory", "credit": "4"},
{"name": "Calculus II", "type": "compulsory", "credit": "4"},
{"name": "Introduction to Statistics", "type": "elective", "credit": "4"},
{"name": "Introduction to Data Structures", "type": "elective", "credit": "4"}
]
},
"Year 2": {
"Semester 1": [
{"name": "Data Structures and Algorithms", "type": "compulsory", "credit": "4"},
{"name": "Computer Systems", "type": "compulsory", "credit": "4"},
{"name": "Linear Algebra", "type": "compulsory", "credit": "4"},
{"name": "Introduction to Machine Learning", "type": "elective", "credit": "4"},
{"name": "Database Systems", "type": "elective", "credit": "4"}
],
"Semester 2": [
{"name": "Computer Networks", "type": "compulsory", "credit": "4"},
{"name": "Operating Systems", "type": "compulsory", "credit": "4"},
{"name": "Probability and Statistics", "type": "compulsory", "credit": "4"},
{"name": "Data Mining", "type": "elective", "credit": "4"},
{"name": "Web Development", "type": "elective", "credit": "4"}
]
},
"Year 3": {
"Semester 1": [
{"name": "Machine Learning", "type": "compulsory", "credit": "4"},
{"name": "Data Visualization", "type": "compulsory", "credit": "4"},
{"name": "Computer Vision", "type": "elective", "credit": "4"},
{"name": "Natural Language Processing", "type": "elective", "credit": "4"},
{"name": "Data Science Project", "type": "compulsory", "credit": "4"}
],
"Semester 2": [
{"name": "Big Data Analytics", "type": "compulsory", "credit": "4"},
{"name": "Data Science Capstone", "type": "compulsory", "credit": "4"},
{"name": "Human-Computer Interaction", "type": "elective", "credit": "4"},
{"name": "Data Science and Society", "type": "elective", "credit": "4"},
{"name": "Special Topics in Data Science", "type": "elective", "credit": "4"}
]
},
"Year 4": {
"Semester 1": [
{"name": "Data Science Internship", "type": "compulsory", "credit": "4"},
{"name": "Data Science and Business", "type": "elective", "credit": "4"},
{"name": "Data Science and Healthcare", "type": "elective", "credit": "4"},
{"name": "Data Science and Social Media", "type": "elective", "credit": "4"},
{"name": "Data Science and Education", "type": "elective", "credit": "4"}
],
"Semester 2": [
{"name": "Data Science and Finance", "type": "elective", "credit": "4"},
{"name": "Data Science and Marketing", "type": "elective", "credit": "4"},
{"name": "Data Science and Environmental Science", "type": "elective", "credit": "4"},
{"name": "Data Science and Public Policy", "type": "elective", "credit": "4"},
{"name": "Data Science and Ethics", "type": "elective", "credit": "4"}
]
}`;

if (isValidJSON(jsonString)) {
  console.log('Valid JSON:', JSON.parse(jsonString));
} else {
  try {
    let jsonObject = convertToJSON(jsonString);
    console.log('Converted JSON:', jsonObject);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
