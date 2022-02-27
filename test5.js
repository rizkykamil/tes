const reports = {
    '12/25/21': 400000,
    '12/26/21': 200000,
    '12/27/21': 450000,
    '12/28/21': 500000,
    '12/29/21': 420000,
    '12/30/21': 420000,
    '12/31/21': 700000
}
function result(reports) {
    let result = [];
    for (let i = 0; i < Object.keys(reports).length; i++) {
        let date = Object.keys(reports)[i];
        let profit = reports[date];
        result.push({
            date,
            profit,
        });
    }
    return result;
}

console.log(result(reports));