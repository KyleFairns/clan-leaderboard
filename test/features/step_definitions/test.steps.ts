import { Ensure, equals, includes, startsWith } from '@serenity-js/assertions'
import { WithStage } from '@serenity-js/core'
import { Website } from '@serenity-js/protractor'
import { After, Then, When } from 'cucumber'

export class Elements {

}

Then(/^(?:the(?:y|m|irs?)) should see the title of "(.*)"$/, function (this: WithStage, expectedTitle: string) {
  return this.stage.theActorInTheSpotlight().attemptsTo(
        Ensure.that(Website.title(), includes(expectedTitle))
    )
})

After(function (this: WithStage) {
  return this.stage.theActorInTheSpotlight().attemptsTo(
    )
})
