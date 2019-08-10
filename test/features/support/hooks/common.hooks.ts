import { serenity, WithStage } from '@serenity-js/core'
import { Photographer, TakePhotosOfFailures } from '@serenity-js/protractor'
import { After, Before, Status } from 'cucumber'
import { Actors } from '../../screenplay/Actors'

Before(() => serenity.waitForNextCue())

Before(function (this: WithStage) {
  this.stage = serenity.callToStageFor(new Actors())
})

Before(function (this: WithStage) {
  const photographer = new Photographer(new TakePhotosOfFailures(), this.stage)

})

After(function (this: WithStage) {
  if (Status.FAILED) new Photographer(new TakePhotosOfFailures(), this.stage).assignedTo(this.stage)
})
