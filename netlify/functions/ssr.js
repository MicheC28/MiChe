const path = require("path");

// Import the SSR handler from your build output
const { default: handleRequest } = require("../../build/server/index.js");

exports.handler = async (event, context) => {
    // Convert Netlify event to a Fetch API Request
    const url = "https://" + event.headers.host + event.rawUrl;
    const request = new Request(url, {
        method: event.httpMethod,
        headers: event.headers,
        body: event.body,
    });

    // Prepare response headers
    const responseHeaders = new Headers();

    // Call your SSR handler
    const response = await handleRequest(request, 200, responseHeaders, { isSpaMode: false }, {});

    // Convert Fetch API Response to Netlify response
    const body = await response.text();
    const headers = {};
    response.headers.forEach((value, key) => {
        headers[key] = value;
    });

    return {
        statusCode: response.status,
        headers,
        body,
    };
};