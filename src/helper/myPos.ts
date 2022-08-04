export class MyPos {
  static getPos() {
    navigator.geolocation.getCurrentPosition(pos => {
      console.log(`위도: ${pos.coords.latitude}`);
      console.log(`경도: ${pos.coords.longitude}`);
    });
  }
}
