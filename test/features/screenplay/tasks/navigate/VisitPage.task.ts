import { Actor, Interaction } from '@serenity-js/core'
import { BrowseTheWeb, Navigate } from '@serenity-js/protractor'
import { protractor } from 'protractor'
import { camelCase } from '../../../support/helpers/camelCase.helper'

export const urls = {
  home: '/',
  switchToUs: '/for-your-home/quote-and-switch'
}

export function visitPage (page: string) {
  return Interaction.where(`#actor visits the ${page} page`, async function (actor: Actor) {

    const pageKey = camelCase(page)

    return actor.whoCan(BrowseTheWeb.using(protractor.browser)).attemptsTo(
            Navigate.to(urls[pageKey])
        )

  })

}
