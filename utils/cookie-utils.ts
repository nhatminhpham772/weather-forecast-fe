/*
 * General utils for managing cookies in Typescript.
 */
export function setCookie(name: string, val: string) {
  const date = new Date();
  const value = val;

  // Set it expire in 7 days
  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);

  // Set it
  const cookie = useCookie(name, {
    expires: date,
    httpOnly: false,
    secure: true,
    sameSite: "strict",
  });
  cookie.value = value;
}

export function getCookie(name: string) {
  return useCookie(name).value;
}

export function deleteCookie(name: string) {
  const cookie = useCookie(name);
  cookie.value = null;
}
