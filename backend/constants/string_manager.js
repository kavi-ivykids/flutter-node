class StringManager{
    constructor() {
        this.database_connection_success = "Successfully connected to the database";
        this.database_connection_failure = "database connection failed. exiting now...";
        this.server_port                 = "Server running on port";
    }
}

module.exports = new StringManager();