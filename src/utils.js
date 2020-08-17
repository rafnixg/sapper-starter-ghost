const dateFormat = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

const excerptFormat = (excerpt, length) =>{
  return excerpt.slice(0,length);
}

export default {
    dateFormat:dateFormat,
    excerptFormat:excerptFormat
}