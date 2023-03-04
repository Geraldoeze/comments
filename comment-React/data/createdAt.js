import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

import ReactTimeAgo from 'react-time-ago'

// TimeAgo.addDefaultLocale(en)
// TimeAgo.addLocale(ru)

TimeAgo.addLocale(en)
export function createdAT(number) {
    return <ReactTimeAgo date={number} locale='en-US' />

}
 

