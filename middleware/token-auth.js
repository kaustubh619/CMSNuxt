// export default function({ store, redirect }) {
//   if (!store.state.authenticated) {
//     return redirect("/");
//   }
// }

export default function(ctx) {
  if (!isAuth()) {
    return ctx.redirect("/");
  }
}
function isAuth() {
  if (
    localStorage.getItem("token") !== null ||
    localStorage.getItem("bearer") !== null
  ) {
    return true;
  } else {
    return false;
  }
}
