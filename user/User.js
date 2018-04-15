var user = function(personalNumber, email, status) {
    this.id = 0;
    this.personalNumber = personalNumber || '';
    this.email = email || '';
    this.status = status || 0;
};

module.exports = user;