export default eventHandler((event) => {
  return (
    '<div>' +
    '<a href="/" style="padding: 10px 20px;">Home page</a>' +
    '<a href="/second-page" style="padding: 10px 20px;">Second page</a>' +
    '<a href="/third-page" style="padding: 10px 20px;">Third page</a>' +
    '<a href="/fourth-page" style="padding: 10px 20px;">Fourth page</a>' +
    '</div>' +
    '<h1>FOURTH PAGE</h1>'
  );
});
