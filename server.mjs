import {createServer} from "http";

const server = createServer();
server.listen(3000, () => {
    console.log(`Server is listening to http://localhost:${server.address().port}`,

    );
});

// Run this server in terminal by invoking: node server.mjs
// Close server buy entering Contol C 