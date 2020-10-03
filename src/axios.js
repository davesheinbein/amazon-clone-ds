import axios from 'axios';

const instance = axios.create({
	baseURL:
		'https://us-central1-clone-ds.cloudfunctions.net/api',
});

export default instance;

// Local host
// http://localhost:5001/clone-ds/us-central1/api

// Deployed -grabbed from firebase functions tab after
// Must run= firebase deploy --only functions
// within the cd to functions folder first
// firebase must be upgraded to blaze from spark payment plans
// https://us-central1-clone-ds.cloudfunctions.net/api
// Once functions deployed take url and paste in baseURL
