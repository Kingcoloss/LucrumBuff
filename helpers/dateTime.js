import dayjs from 'dayjs'

const getNowDateEN = () => {
  const now = dayjs().format('dddd DD/MMMM/YYYY HH:mm')

  return now
}

const getNowDateTH = () => {
  const now = dayjs().locale('th').format('dddd DD/MMMM/YYYY HH:mm')

  return now
}

const dateFormatEN = (date) => {
  return dayjs(date).format('dddd DD/MMMM/YYYY HH:mm')
}

const dateFormatTH = (date) => {
  return dayjs(date).locale('th').format('dddd DD/MMMM/YYYY HH:mm')
}

export {
  getNowDateEN,
  getNowDateTH,
  dateFormatEN,
  dateFormatTH
}
