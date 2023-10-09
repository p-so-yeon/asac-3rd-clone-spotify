export default function useCalcDate() {
  const calcDate = (date) => {
    const seconds = 1
    const minute = seconds * 60
    const hour = minute * 60
    const day = hour * 24

    const today = new Date()
    const dayPassed = Math.trunc((today.getTime() - date) / 1000)

    if (dayPassed < seconds) {
      return '방금전'
    } else if (dayPassed < minute) {
      return dayPassed + '초 전'
    } else if (dayPassed < hour) {
      return Math.trunc(dayPassed / minute) + '분 전'
    } else if (dayPassed < day) {
      return Math.trunc(dayPassed / hour) + '시간 전'
    } else {
      return Math.trunc(dayPassed / day) + '일 전'
    }
  }

  return calcDate
}
