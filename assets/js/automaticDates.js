const currentYear = new Date().getFullYear();

const setCurrentDate = (element) => {
  element.innerHTML = currentYear;
};

const setYearsSince = (element) => {
  // 2018 hard coded as that's when I started programming
  const yearsSince = currentYear - 2018;
  element.innerHTML = yearsSince;
};

// copyright date
const emptyCopyrightSpan = document.getElementById('current-year');
setCurrentDate(emptyCopyrightSpan);

// years experience
const emptyExperienceSpan = document.getElementById('years-experience');
setYearsSince(emptyExperienceSpan);
