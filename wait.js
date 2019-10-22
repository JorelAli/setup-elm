let wait = function(milliseconds) {
  return new Promise((resolve, reject) => {
    if (typeof(milliseconds) !== 'number') { 
      throw new Error('milleseconds not a number'); 
    }

    setTimeout(() => resolve("done!"), milliseconds)
  });
}

module.exports = wait;
