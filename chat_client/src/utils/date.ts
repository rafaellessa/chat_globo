import dayjs from 'dayjs'
import 'dayjs/locale/es'

dayjs.locale('pt')

const createDate = (date: string | Date) => {
  if (date === '') {
    return date
  }

  return dayjs(date).format('HH:mm')
}

export { createDate }
