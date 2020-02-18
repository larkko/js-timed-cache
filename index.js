/*Reuse results of function f if function was called
  less than ms milliseconds ago.*/
function cached(f, ms) {
  let lastUpdate = null;
  let results = null;
  return () => {
    const periodElapsed = Date.now() > (lastUpdate + ms);
    if (results && !periodElapsed) {
      return results;
    } else {
      results = f();
      lastUpdate = Date.now();
      return results;
    }
  };
}

module.exports = cached;

