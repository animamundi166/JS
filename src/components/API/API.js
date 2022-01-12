const getWantedPeople = async () => {
  const response = await fetch('https://api.fbi.gov/wanted/v1/list');
  const data = await response.json();
  return data.items.map((item) => ({
    src: item.images[0].original,
    fullName: item.title,
    birthday: item.dates_of_birth_used,
    nationality: item.nationality,
    description: item.description,
  }));
};

export default getWantedPeople;
