let cachedToken = null; // To store the access token
let tokenExpiryTime = null; // To store the expiry time of the token

export const getAccessToken = async () => {
  // Check if there's a cached token and if it is still valid
  const currentTime = new Date().getTime();
  if (cachedToken && tokenExpiryTime && currentTime < tokenExpiryTime) {
    // Return the cached token if it's still valid
    return cachedToken;
  }

  // Fetch a new token if the cached token is expired or doesn't exist
  const response = await fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.PETFINDER_CLIENT_ID,
      client_secret: process.env.PETFINDER_CLIENT_SECRET,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch access token");
  }

  // Store the new token and its expiry time
  cachedToken = data.access_token;
  tokenExpiryTime = new Date().getTime() + data.expires_in * 1000; // expires_in is in seconds, converting to ms

  return cachedToken;
};
