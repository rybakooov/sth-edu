/* eslint-disable */
import URL from 'url-parse'

const selector = '%%%LINK%%%'
const className = 'external-link'

export default function (input, fill) {
  if (input) {
    input += ' '
    input = input.replace(/(<([^>]+)>)/ig, '')

    let tail = false
    let links = input.match(/(https?):\/\/(www\.)?[a-z0-9\.:].*?(?=\s)/g)
    let appendLinks = []
    if (links && links.length) {
      links.forEach(link => {
        let urlData = new URL(link)
        let fullpathname = urlData.pathname

        if (urlData.search) {
          fullpathname += urlData.search
        }

        let title = fill ? link : urlData.hostname + (tail ? getTail(fullpathname) : '')
        appendLinks.push(`<a class="${className}" title="${link}" href="${link}" rel="noopener" target="_blank">${title}</a>`)
        input = input.replace(link, selector)
      })

      appendLinks.forEach(link => {
        input = input.replace(selector, link)
      })
    }

    input = input.slice(0, -1)
  }

  return input
}

function getTail (str = '', max = 15) {
  if (str.length < max) {
    return str
  }

  let offset = Math.floor((max - 3) / 2)
  return str.substr(0, offset) + '...' + str.substr(-offset)
}
