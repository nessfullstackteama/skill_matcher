const user = (personalNumber, email, status, userGroups) => {
    this.id = 0;
    this.personalNumber = personalNumber || '';
    this.email = email || '';
    this.status = status || 0;
    this.userGroups = userGroups || [];
};

module.exports = user;