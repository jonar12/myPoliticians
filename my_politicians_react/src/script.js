/* eslint-disable import/no-anonymous-default-export */
const loadApi = async function () {
	const apiCall = await fetch(
		`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=110%20Frelinghuysen%20Rd%2C%20Piscataway%2C%20NJ%2C%2008854&includeOffices=true&levels=country&levels=regional&levels=locality&levels=administrativeArea1&roles=headOfState&roles=headOfGovernment&roles=legislatorUpperBody&roles=legislatorLowerBody&key=AIzaSyByi9Oew97cbPt7tXFqZ52lMExRLrLbmTQ`
	);
	const response = await apiCall.json();
	const officialsData = await response.officials;
	return officialsData;
};

const officialsData = loadApi();

export { officialsData };
