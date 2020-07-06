exports.getDate = function(){
  const today = new Date();
  const options = {
    month : "long",
    day : "numeric"
  }
  return today.toLocaleDateString("en-US", options)
}
