export const getGradeString = (grade) => {
  if (!grade) return "None";
  if (grade === 1) return "Sergeant";
  if (grade === 2) return "Lieutenant";
  if (grade === 3) return "Captain";
  if (grade === 4) return "Colonel";
  if (grade === 5) return "General";
  return "None";
};

export const getColorSchemaByCharacterType = (characterType) => {
  return characterType === "Soldier"
    ? "dark-primary"
    : characterType === "Navyseal"
    ? "dark-navyseal"
    : characterType === "Terrorist"
    ? "dark-terrorist"
    : "primary";
};

export const formattedDate = (date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const pagination = (data) => {
  const { totalPage, curPage } = data;
  let pages = [];
  for (let i = -2; i < 3; i++) {
    const npage = Number(curPage) + i;
    if (npage > 0 && npage < totalPage) pages = [...pages, npage];
  }
  return pages;
};

export const getRole = (role) => {
  if (role === undefined || role === null) return "N/A";
  if (role === 0 || role === "0") return "Free Player";
  if (role === -1 || role === "-1") return "Admin";
  return "Supporter";
};
