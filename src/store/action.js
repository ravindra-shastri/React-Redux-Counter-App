export function increment() {
  return {
    type: 'increment'
  }
}
export function decrement() {
  return {
    type: 'decrement'
  }
}
export function reset() {
  return {
    type: 'reset'
  }
}
export function updateStep(step) {
  return {
    type: 'changeStep',
    payload: step,
  }
}
export function updateMaxValue(maxvalue) {
  return {
    type: 'changemaxvalue',
    payload: maxvalue,
  }
}