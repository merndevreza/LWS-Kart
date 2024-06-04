
import mongoose from "mongoose";

export const replaceMongoIdInArray = (array) => {
   const updatedArray = array.map((item) => {
     const { _id, ...rest } = item;
     return {
       id: _id.toString(),
       ...rest,
     };
   });
   return updatedArray;
 };
 
 export const replaceMongoIdInObject = (obj) => {
   const { _id, ...rest } = obj;
   return { id: _id.toString(), ...rest }; 
 };


// for nested objects
export function convertMongoIdToString(obj) {
  if (Array.isArray(obj)) {
    return obj.map(item => convertMongoIdToString(item));
  } else if (obj !== null && typeof obj === 'object') {
    const newObj = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (mongoose.Types.ObjectId.isValid(obj[key])) {
          newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object') {
          newObj[key] = convertMongoIdToString(obj[key]);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    return newObj;
  } else {
    return obj;
  }
}

 