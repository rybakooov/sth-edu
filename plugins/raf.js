import { Raf } from '@/scripts/raf'

export default function (context, inject) {
  inject('raf', new Raf())
}
