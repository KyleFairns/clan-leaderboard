import { Then, When } from 'cucumber'
import { WithStage } from '@serenity-js/core'

When(/the clan filter receives data for a "([^"]*)" completion/, function (this: WithStage, activity: string) {
  return 'pending'
})

When(/the activity was played by two or more clan members/, function (this: WithStage) {
  return 'pending'
})

When(/the activity was played by less than two clan members/, function (this: WithStage) {
  return 'pending'
})

Then(/the activity should be accepted by the clan filter/, function (this: WithStage) {
  return 'pending'
})

Then(/the activity should be rejected by the clan filter/, function (this: WithStage) {
  return 'pending'
})
