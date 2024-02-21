class ApiResponse {
    constructor(statusCode, data, error, message) {
        this.statusCode = statusCode
        if (data === '') {
            this.error = error
        }
        else {
            this.data = data
        }
        this.message = message
        this.success = statusCode < 400
    }
}


export { ApiResponse }