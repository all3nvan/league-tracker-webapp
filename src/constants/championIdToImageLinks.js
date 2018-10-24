import championData from "constants/championData";

const gameVersion = championData.version;
const imageLinkBaseUrl = `https://ddragon.leagueoflegends.com/cdn/${gameVersion}/img/champion/`;

export default Object.values(championData.data).reduce((idToLinks, data) => {
  idToLinks[data.key] = imageLinkBaseUrl + data.image.full;
  return idToLinks;
}, {});
