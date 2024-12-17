document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) { // Adjust threshold as needed
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
  
  const monthsContainer = document.getElementById("months-container");
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const holidays = {
      "0-1": {name: "New Year's Day", page: "c0-1.html"},
      "0-23": {name: "First Philippine Republic Day", page: "c0-23.html"},
      "0-29": {name: "Lunar New Year's Day", page: "c0-29.html"},
      "1-14": {name: "Valentine's Day", page: "c1-14.html"},
      "1-25": {name: "People Power Anniversary", page: "c1-25.html"},
      "2-1": {name: "Start of Ramadan", page: "c2-1.html"},
      "2-31": {name: "Eidul-Fitar", page: "c2-31.html"},
      "3-9": {name: "The Day of Valor", page: "c3-9.html"},
      "3-17": {name: "Maundy Thursday", page: "c3-17.html"},
      "3-18": {name: "Good Friday", page: "c3-18.html"},
      "3-19": {name: "Black Saturday", page: "c3-19.html"},
      "3-20": {name: "Easter Sunday", page: "c3-20.html"},
      "4-1": {name: "Labor Day", page: "c4-1.html"},
      "5-7": {name: "Eid al-Adha", page: "c5-7.html"},
      "5-12": {name: "Independence Day", page: "c5-12.html"},
      "7-21": {name: "Ninoy Aquino Day", page: "c7-21.html"},
      "7-25": {name: "National Heroes Day", page: "c7-25.html"},
      "8-3": {name: "Yamashita Surrender Day", page: "c8-3.html"},
      "10-1": {name: "All Saints' Day", page: "c10-1.html"},
      "10-2": {name: "All Souls' Day", page: "c10-2.html"},
      "10-30": {name: "Bonifacio Day", page: "c10-30.html"},
      "11-8": {name: "Feast of the Immaculate Conception", page: "c11-8.html"},
      "11-24": {name: "Christmas Eve", page: "c11-24.html"},
      "11-25": {name: "Christmas Day", page: "c11-25.html"},
      "11-30": {name: "Rizal Day", page: "c11-30.html"},
      "11-31": {name: "New Year's Eve", page: "c11-31.html"},
    };
  
    for (let month = 0; month < 12; month++) {
      const monthDiv = document.createElement("div");
      monthDiv.className = "month";
  
      const monthTitle = document.createElement("h2");
      monthTitle.textContent = monthNames[month];
      monthDiv.appendChild(monthTitle);
  
      const daysContainer = document.createElement("div");
      daysContainer.className = "days-container";
  
      // Add day names
      daysOfWeek.forEach(day => {
        const dayDiv = document.createElement("div");
        dayDiv.className = "day";
        dayDiv.textContent = day;
        daysContainer.appendChild(dayDiv);
      });
  
      // Add empty days before the first day of the month
      const date = new Date(2025, month, 1);
      const startDay = date.getDay();
      const daysInMonth = new Date(2025, month + 1, 0).getDate();
  
      for (let i = 0; i < startDay; i++) {
        const emptyDay = document.createElement("div");
        emptyDay.className = "day empty";
        daysContainer.appendChild(emptyDay);
      }
  
      // Add actual days
      for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement("div");
        dayDiv.className = "day";
        dayDiv.textContent = day;
  
        // Check if the day is a holiday
        const holidayKey = `${month}-${day}`;
        if (holidays[holidayKey]) {
          dayDiv.classList.add("holiday");
          dayDiv.title = holidays[holidayKey].name; // Add tooltip with holiday name
          dayDiv.dataset.page = holidays[holidayKey].page; // Store holiday page
          dayDiv.addEventListener("click", function () {
            window.location.href = this.dataset.page; // Redirect to holiday page
          });
        }
  
        daysContainer.appendChild(dayDiv);
      }
  
      monthDiv.appendChild(daysContainer);
      monthsContainer.appendChild(monthDiv);
    }
});