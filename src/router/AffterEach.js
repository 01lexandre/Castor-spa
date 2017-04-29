export default (to, from) => {
  window.document.title = process.env.APP_NAME
  if (to.meta.title !== undefined) {
    window.document.title = to.meta.title + ' | ' + process.env.APP_NAME
  }
}
