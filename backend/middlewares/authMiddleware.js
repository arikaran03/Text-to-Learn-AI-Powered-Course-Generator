import { auth } from 'express-oauth2-jwt-bearer';
import dotenv from 'dotenv';

dotenv.config();
// Replace these with your actual Auth0 application details
const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN_ID;
const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE_ID;

const checkJwt = auth({
  audience: AUTH0_AUDIENCE,
  issuerBaseURL: `https://${AUTH0_DOMAIN}/`,
  tokenSigningAlg: 'RS256'
});

export default checkJwt;