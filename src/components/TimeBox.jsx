export default function TimeBox({title, dateFrom, dateTo}) {
  const dayFrom = dateFrom.toLocaleString('default', { day: '2-digit'})
  const dayTo = dateTo.toLocaleString('default', { day: '2-digit'})
  const monthFrom = dateFrom.toLocaleString('default', { month: 'long'})
  const monthTo = dateTo.toLocaleString('default', { month: 'long'})
  
  const year = dateFrom.toLocaleString('default', { year: 'numeric'})

  let time1
  let time2

  if (dateFrom.getTime() === dateTo.getTime()) {
    time1 = `${dayFrom} ${monthFrom}`
    time2 = `${year}`
  } else if (dateFrom.getMonth() === dateTo.getMonth()) {
    time1 = `${dayFrom} - ${dayTo}`
    time2 = `${monthFrom} ${year}`
  } else {
    time1 = `${dayFrom} ${monthFrom} - ${dayTo} ${monthTo}`
    time2 = `${year}`
  }

  const isToday = new Date() >= dateFrom && new Date() <= dateTo

  return (
    <div className={"border border-black w-full aspect-w-1 aspect-h-1 " + (isToday ? "bg-gooYellow-900" : "bg-white")}>
      <div className="flex flex-col justify-center items-center text-center">
        <h3 className="font-gooBold text-3xl lg:text-2xl 2xl:text-3xl mb-8">{title}</h3>
        <p className="font-gooReg text-3xl lg:text-2xl 2xl:text-3xl">{time1}</p>
        <p className="font-gooReg text-3xl lg:text-2xl 2xl:text-3xl">{time2}</p>
      </div>
    </div>
  )
}