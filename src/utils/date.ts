export const getAge = (dateOfBirth: string) => {
  const actuaDate = new Date();
  const birthDate = new Date(dateOfBirth);

  let yearDiff = actuaDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = actuaDate.getMonth() - birthDate.getMonth();
  const dayDiff = actuaDate.getDate() - birthDate.getDate();

  yearDiff = monthDiff < 0 ? yearDiff - 1 : yearDiff;

  if (yearDiff === 0 && monthDiff === 0 && dayDiff < 0) {
    yearDiff--;
  }

  return yearDiff;
};
