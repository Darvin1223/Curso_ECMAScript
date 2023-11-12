const regex = /(\d{4})-(\d{2})-(\d{2})/; //Este regex es para fechas, osea validar fechas xD

const matchers = regex.exec('2023-11-13');
console.table(matchers);