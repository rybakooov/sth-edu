import Typograf from 'typograf'

const tp = new Typograf({ locale: ['ru', 'en-US'] })

export default value => tp.execute(value)
