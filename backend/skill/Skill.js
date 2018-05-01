const skill = (title, description, parentId, status) => {
    this.id = 0;
    this.title = title || '';
    this.parentId = parentId || 0;
    this.status = status || 0;
};

module.exports = skill;