async function sleep(wait, result) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (result === 3) {
        reject('error!')
      } else {
        console.log(result)
        resolve()
      }
    }, wait)
  })
}

async function syncSleep() {
  await sleep(2000, 1)
  await sleep(100, 2)
  await sleep(1000, 3)
}

syncSleep().catch(error => console.log('Error', error))
