import { Given, Then } from 'cucumber'
import { Actor, WithStage } from '@serenity-js/core'
import { Navigate, UseAngular } from '@serenity-js/protractor'
import { visitPage } from '../../../screenplay/tasks/navigate'

Given(/^(\w+) visits the "([^"]+)" page$/, function (this: WithStage, actor: string, page: string) {
  let user: Actor

  user = actor.match(/(the(?:y|m|irs))/) ? this.stage.theActorInTheSpotlight() : this.stage.theActorCalled(actor)

  return user.attemptsTo(
        UseAngular.disableSynchronisation(),
        visitPage(page)
    )
})

Given(/^(\w+) visits the homepage$/, function (this: WithStage, actor: string) {
  let user: Actor

  user = actor.match(/(the(?:y|m|irs))/) ? this.stage.theActorInTheSpotlight() : this.stage.theActorCalled(actor)

  return user.attemptsTo(
        UseAngular.disableSynchronisation(),
        visitPage('home')
    )
})
