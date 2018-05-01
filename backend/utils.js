const { isNullOrUndefined } = require('util');

module.exports.jsonQuery2Sql = (query) => {
    let filter = getFilter(query);
    let sort = getSort(query);
    let paging = getPaging(query);

    return {
        where: filter,
        orderBy: sort,
        limit: paging,
        rawSql: `${filter || ''} ${sort || ''} ${paging || ''}`
    };
}

const getFilter = (query) => {
    if (isNullOrUndefined(query) || isNullOrUndefined(query.filter)) return;

    let sql = '';
    let filterArray = [];
    
    for (let prop in query.filter) {
        let colType = typeof query.filter[prop];

        if (colType === 'string') {
            filterArray.push(`\`${prop}\` = '${query.filter[prop]}'`);
        }
        else if(colType === 'object') {
            let filterVal = '';
            let operator = '';

            if(query.filter[prop].lt) {
                filterVal = query.filter[prop].lt;
                operator = '<';
            }
            else if(query.filter[prop].lte) {
                filterVal = query.filter[prop].lte;
                operator = '<=';
            }
            else if(query.filter[prop].gt) {
                filterVal = query.filter[prop].gt;
                operator = '>';
            }
            else if(query.filter[prop].gte) {
                filterVal = query.filter[prop].gte;
                operator = '>=';
            }
            else if(query.filter[prop].like) {
                filterVal = query.filter[prop].like;
                operator = 'LIKE';
            }
            else if(query.filter[prop].not) {
                filterVal = query.filter[prop].not;
                operator = 'NOT';
            }

            filterArray.push(`\`${prop}\` ${operator} '${filterVal}'`);
        }
    }

    if (filterArray.length > 0) {
        sql += ` WHERE ${filterArray.join(' AND ')}`;
    }

    return sql;
} 

const getSort = (query) => {
    if (isNullOrUndefined(query) || isNullOrUndefined(query.sort)) return;
    
    let sql = '';
    let sortCols = query.sort.split(',');
    let sortArray = [];
    let regex = /^(\+|-|\s)?(\w+)$/i;

    for (i = 0; i < sortCols.length; i++) {
        let match = regex.exec(sortCols[i]);

        if (match.length == 3) {
            sortArray.push(`${match[2].toLowerCase()} ${match[1] == '-' ? 'DESC' : 'ASC'}`);
        }
        else if(match.length == 2) {
            sortArray.push(match[1].toLowerCase());
        }
    }

    if (sortArray.length > 0) {
        sql += ` ORDER BY ${sortArray.join(', ')}`;
    }

    return sql;
}

const getPaging = (query) => {
    if (isNullOrUndefined(query) || isNullOrUndefined(query.page) || isNullOrUndefined(query.page.limit)) return;

    let limit = Number.parseInt(query.page.limit);
    if (limit <= 0) return;

    let sql = ` LIMIT ${query.page.limit}`;

    if (isNullOrUndefined(query.page.number)) return sql;

    let num = Number.parseInt(query.page.number);

    if (num > 0) {
        let offset = ((num - 1) * limit) + 1;
        sql += ` OFFSET ${offset}`;
    }

    return sql;
}