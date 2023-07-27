class StringManager{
    constructor() {
        this.database_connection_success = "Successfully connected to the database";
        this.database_connection_failure = "database connection failed. exiting now...";
    }
}

module.exports = new StringManager();