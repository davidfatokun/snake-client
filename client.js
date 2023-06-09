const net = require("net");

// establishes a connection with the game server
export const connect = function () {
    const conn = net.createConnection({
        host: "172.26.152.222",// IP address here,
        port: 50541 // PORT number here,
    });
    conn.on("data", (data) => {
        console.log("Message from server: ", data);
    });
    // interpret incoming data as text
    conn.setEncoding("utf8");

    return conn;
};

// module.exports = connect;
