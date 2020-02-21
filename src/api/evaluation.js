import { evaluation } from '../data/data.json'

export function getEvaluationType () {
  evaluation.type.forEach(type => {
    type.stars.forEach(star => { star.chosen = false })
  })
  return evaluation.type
}

export function getOverall () {
  evaluation.overall.stars.forEach(star => { star.chosen = false })
  return evaluation.overall
}
