import moment from "moment";

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

export const formattedDate = (d) => {
  const date = new Date(d);

  // Format date
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  // Format time
  const hours = String(date.getHours()).padStart(2, "0"); // Add leading zero
  const minutes = String(date.getMinutes()).padStart(2, "0"); // Add leading zero
  const seconds = String(date.getSeconds()).padStart(2, "0"); // Add leading zero

  // Combine date and time
  return `${formattedDate} ${hours}:${minutes}:${seconds}`;
};

export const formattedDuration = (d) => {
  const lastTime = new Date(d);
  const duration = moment.duration(moment().diff(moment(lastTime)));

  const days = Math.floor(duration.asDays());
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  return `${
    (days ? `${days} days ` : "") +
    (hours ? `${hours} hours ` : "") +
    (minutes ? `${minutes} minutes ` : "") +
    (seconds ? `${seconds} seconds ` : "") +
    "ago"
  }`;
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
