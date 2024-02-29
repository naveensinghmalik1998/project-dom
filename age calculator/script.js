const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
    if (month.length < 2)  month = '0' + month;
    if (day.length < 2)    day = '0' + day;
  
    return [year, month, day].join('-');
  }
  
  function calculateAge() {
    const inputDate = document.getElementById('data-input').value;
    const today = new Date();
    const birthDate = new Date(formatDate(inputDate));
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();
  
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }
  
    if (ageDays < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      ageMonths--;
      ageDays += lastMonth.getDate();
    }
  
    document.getElementById('years').innerText = ageYears;
    document.getElementById('months').innerText = ageMonths;
    document.getElementById('days').innerText = ageDays;
  }

