
const fs = require('fs');
const yaml = require('js-yaml'); // Make sure to install the 'js-yaml' package using npm install js-yaml

const enviornment = process.argv[2];


const updateEnvFile = () => {

  try {
    const envContent = [
      `# Auto uploaded from glue config: ${ enviornment } (environment)`,
      `NEXT_PUBLIC_API_URL=${ enviornment == "dev" ? "http://localhost:6420" : "https://fd032d9c-b89-adl--staging.opengb.rivet.gg" }`,
    ].join("\n")


    // Update or create the .env file
    fs.writeFileSync('.env.local', envContent);

    console.log('[GLUE] .env file updated successfully.');
  } catch (err) {
    console.error(`Error updating .env file: ${err.message}`);
  }
};

// Read the contents of the YAML file
try {

  // Now 'configObject' contains the parsed YAML data as a JavaScript object
  console.log("[GLUE] Found the configuration, updating .env now.");

  updateEnvFile();
} catch (err) {
  console.error(`[GLUE] Error reading ${configFile}: ${err.message}`);
}
