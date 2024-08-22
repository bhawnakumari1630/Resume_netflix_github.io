import { formatDistanceToNow, formatDistanceToNowStrict, parseISO } from 'date-fns'
 
 
 const formatCounts = (views) => {
  const roundedNumber = Math.round(views / 1000) 
  if(roundedNumber <= 999) {
    return roundedNumber + 'k'
  }else {
    return (roundedNumber / 1000).toFixed(0) + 'M+'  // As roundedNumber already divided by 1000
  }
} 

export const formatDate = (publishedDate) => {
  // const timeStamp = date
  const date = parseISO(publishedDate);
  const relativeTime = formatDistanceToNowStrict(date, {addSuffix : true} );
  return relativeTime
}


// for million :   (num / 1000,000)
// for thousands : (num / 1000)

export default formatCounts