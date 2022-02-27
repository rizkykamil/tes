const data = [
    { firstName: 'Adi', lastName: 'Nugroho', age: 25 },
    { firstName: 'Adi', lastName: 'Nugroho', age: 24 },
  ];

  function result(data) {
    const temp = [];
    for (let i = 0; i < data.length-1; i++) {
        let attributes = Object.keys(data[i]);
        for (let j = 0; j < attributes.length; j++) {
            let attribute = attributes[j];
            if (data[i][attribute] !== data[i+1][attribute]) {
                temp.push(
                    attribute
                );
            }
        }
    }
    return temp;
  }
  
console.log(result(data));