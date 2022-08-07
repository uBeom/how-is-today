/* eslint-disable no-unused-expressions */
/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
const RE = 6371.00877; // 지구 반경(km)
const GRID = 5.0; // 격자 간격(km)
const SLAT1 = 30.0; // 투영 위도1(degree)
const SLAT2 = 60.0; // 투영 위도2(degree)
const OLON = 126.0; // 기준점 경도(degree)
const OLAT = 38.0; // 기준점 위도(degree)
const XO = 43; // 기준점 X좌표(GRID)
const YO = 136; // 기1준점 Y좌표(GRID)

// LCC DFS 좌표변환 ( code :
//          "toXY"(위경도->좌표, v1:위도, v2:경도),
//          "toLL"(좌표->위경도,v1:x, v2:y) )
//

export function dfsXYConv(v1: number, v2: number) {
  const DEGRAD = Math.PI / 180.0;

  const re = RE / GRID;
  const slat1 = SLAT1 * DEGRAD;
  const slat2 = SLAT2 * DEGRAD;
  const olon = OLON * DEGRAD;
  const olat = OLAT * DEGRAD;

  let sn =
    Math.tan(Math.PI * 0.25 + slat2 * 0.5) /
    Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
  let sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sf = (sf ** sn * Math.cos(slat1)) / sn;
  let ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
  ro = (re * sf) / ro ** sn;
  var rs = { lat: 0, lng: 0, x: 0, y: 0 };

  rs.lat = v1;
  rs.lng = v2;
  var ra = Math.tan(Math.PI * 0.25 + v1 * DEGRAD * 0.5);
  ra = (re * sf) / ra ** sn;
  var theta = v2 * DEGRAD - olon;
  if (theta > Math.PI) theta -= 2.0 * Math.PI;
  if (theta < -Math.PI) theta += 2.0 * Math.PI;
  theta *= sn;
  rs.x = Math.floor(ra * Math.sin(theta) + XO + 0.5);
  rs.y = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);

  return rs;
}
