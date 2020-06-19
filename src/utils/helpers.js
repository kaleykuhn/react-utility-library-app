const safelyParseJSON = (str) => {
   // makes sure JSON dosnt throw error trycatchblock
   try {
      JSON.parse(str); //always str when parsing json
   } catch (err) {
      return str; // give up return str
   }
   return JSON.parse(str); //could be undefined!
};

const isObject = (value) => {
   return (
      typeof value === "object" &&
      value !== null &&
      Array.isArray(value) === false
   );
   // test if something is an object views null and array as object only need a return only true or false
   //if (typeof value === "object" && value!== null && Array.isArray(value) === false) {
   //return true
   //} else {
   // return false;

   //return  typeof yourVariable === 'object' && yourVariable !== null
};

const convertDataType = (str) => {
   if (str === "null") return null;
   if (str === "undefined") return undefined;
   if (str === "true") return true;
   if (str === "false") return false; // strictly false
   // eslint-disable-next-line
   if (str == Number(str)) return Number(str); // == check values but type dont matter return just num
   const parsedJSON = safelyParseJSON(str);
   if (Array.isArray(parsedJSON)) return parsedJSON; // check if its an array parse true or false
   if (isObject(parsedJSON)) return parsedJSON; // inwards and og out func within func within func
   return str;
};
// u can just to if without else evaluate in order one at a time if it doesnt happen moves on with str

export { isObject, convertDataType, safelyParseJSON }; //syntax for named identifier things
