import test from 'ava'

import { invoke } from 'tote-lib'

test('valid', async t => {
  const {
    body: { result },
    status
  } = await invoke('hello', {
    query: {
      number: 5
    }
  })

  t.is(status, 200)
  t.is(result, 10)
})

test('no number', async t => {
  const {
    body: { result },
    status
  } = await invoke('hello')

  t.is(status, 200)
  t.is(result, 4)
})
