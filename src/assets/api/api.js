const serverUrl = "http://p-mozil.click/";
async function getApiKey() {
  try {
    let response = await fetch(serverUrl);
    let json = await response.json();
    let key = json.key;
    return key;
  } catch (err) {
    console.error("ERRORR =>>>", err);
  }
}

export default getApiKey;
