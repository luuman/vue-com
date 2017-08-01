// 日期计算--兼容问题
export const formatDate = (today) => {
  let Times = new Date(today)
  let month = '' + (Times.getMonth() + 1)
  let day = '' + Times.getDate()
  let year = Times.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day
  let data = `${year}.${month}.${day}`
  return data
}

export const formatType = (today) => {
  let Times = new Date(today)
  let month = '' + (Times.getMonth() + 1)
  let day = '' + Times.getDate()
  let year = Times.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day
  let data = `${month} ${day},${year}`
  return data
}
