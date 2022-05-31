const expireTime12Hours = 60 * 60 * 12
const expireTime1Day = 60 * 60 * 24 * 1
const expireTime1Week = 60 * 60 * 24 * 7

const defaultConfig1Day = {
  path: '/',
  maxAge: expireTime1Day
}
const defaultConfig1Week = {
  path: '/',
  maxAge: expireTime1Week
}
const defaultConfig12Hours = {
  path: '/',
  maxAge: expireTime12Hours
}

export default {
  defaultConfig12Hours,
  defaultConfig1Day,
  defaultConfig1Week
}
