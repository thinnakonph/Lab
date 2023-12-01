let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
   };
   let values = Object.values(salaries);
   let sumValues = values.reduce((acc, value) => acc + value, 0);
   console.log(sumValues); //390
   let sumEntries = Object.entries(salaries).reduce((acc, [name, value]) => acc + value, 0);
   console.log(sumEntries); //390
   