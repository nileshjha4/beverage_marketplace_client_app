import AsyncStorage from '@react-native-async-storage/async-storage';

// Save data
const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
}

// Retrieve data
const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
}
 //for local storage

 {
  "Year 1": {
    "Semester 1": {
      "Compulsory Courses": [
        {
          "Course Name": "MRKT 501: Research Methods in Marketing",
          "Credits": 3
        },
        {
          "Course Name": "MRKT 502: Marketing Strategy and Planning",
          "Credits": 3
        }
      ],
      "Elective Courses": []
    },
    "Semester 2": {
      "Compulsory Courses": [
        {
          "Course Name": "MRKT 503: Consumer Behavior and Research",
          "Credits": 3
        },
        {
          "Course Name": "MRKT 504: Marketing Analytics and Data Analysis",
          "Credits": 3
        }
      ],
      "Elective Courses": []
    }
  },
  "Year 2": {
    "Semester 1": {
      "Compulsory Courses": [
        {
          "Course Name": "MRKT 505: Marketing Research Design and Implementation",
          "Credits": 3
        },
        {
          "Course Name": "MRKT 506: Marketing Communications and Branding",
          "Credits": 3
        }
      ],
      "Elective Courses": [
        {
          "Course Name": "MRKT 507: Digital Marketing and E-commerce",
          "Credits": 3
        },
        {
          "Course Name": "MRKT 508: International Marketing and Trade",
          "Credits": 3
        }
      ]
    },
    "Semester 2": {
      "Compulsory Courses": [
        {
          "Course Name": "MRKT 509: Marketing Research and Analysis",
          "Credits": 3
        },
        {
          "Course Name": "MRKT 510: Marketing Strategy and Planning Capstone",
          "Credits": 3
        }
      ],
      "Elective Courses": [
        {
          "Course Name": "MRKT 511: Sustainability and Social Responsibility in Marketing",
          "Credits": 3
        },
        {
          "Course Name": "MRKT 512: Marketing and Entrepreneurship",
          "Credits": 3
        }
      ]
    }
  }
}


{
  "Year 1": {
    "Semester 1": {
      "Compulsory Courses": [
        {
          "Course Name": "Brand Management",
          "Credits": 3
        },
        {
          "Course Name": "Marketing Strategy",
          "Credits": 3
        }
      ],
      "Elective Courses": []
    },
    "Semester 2": {
      "Compulsory Courses": [
        {
          "Course Name": "Consumer Behavior",
          "Credits": 3
        },
        {
          "Course Name": "Marketing Research",
          "Credits": 3
        }
      ],
      "Elective Courses": []
    }
  },
  "Year 2": {
    "Semester 1": {
      "Compulsory Courses": [
        {
          "Course Name": "Brand Positioning and Identity",
          "Credits": 3
        },
        {
          "Course Name": "Marketing Communications",
          "Credits": 3
        }
      ],
      "Elective Courses": [
        {
          "Course Name": "Digital Marketing",
          "Credits": 3
        },
        {
          "Course Name": "Sustainability and Social Responsibility",
          "Credits": 3
        }
      ]
    },
    "Semester 2": {
      "Compulsory Courses": [
        {
          "Course Name": "Brand Management Capstone",
          "Credits": 3
        }
      ],
      "Elective Courses": [
        {
          "Course Name": "International Marketing",
          "Credits": 3
        },
        {
          "Course Name": "Marketing Analytics",
          "Credits": 3
        }
      ]
    }
  }
}