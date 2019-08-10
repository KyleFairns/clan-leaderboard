@clan-leaderboard @clan-filter @member-data @activity @all-activities @wip
Ability: Filter through the member data to get the games that are with other clan mates

  As the clan filter,
  I want to pick out activities that were played with other clan mates
  In order for the activity to start being processed

  Background:
    Given a clans data has been polled

  @accept @two-or-more-clan-members
  Scenario Template: Accept Reason: More than two clan members played the activity
    When the clan filter receives data for a "<activity>" completion
    And the activity was played by two or more clan members
    Then the activity should be accepted by the clan filter

    Scenarios:
      | activity                         |
      | Crucible Competitive - Control   |
      | Crucible Competitive - Clash     |
      | Crucible Competitive - Survival  |
      | Crucible Competitive - Countdown |
      | Crucible Quickplay - Control     |
      | Crucible Quickplay - Clash       |
      | Crucible Rotation - Lockdown     |
      | Crucible Rotation - Mayhem       |
      | Crucible Rotation - Supremacy     |
      | Crucible Rotation - Iron Banner  |
      | Drifter - Gambit                 |
      | Drifter - Gambit Prime           |
      | Drifter - Reckoning              |
      | Raid - Eater of Worlds           |
      | Raid - Leviathan                 |
      | Raid - Spire of Stars            |
      | Raid - Prestige Eater of Worlds  |
      | Raid - Prestige Leviathan        |
      | Raid - Prestige Spire of Stars   |
      | Raid - Last Wish                 |
      | Raid - Scourge of the Past       |
      | Raid - Crown of Sorrow           |
      | Other - Menagerie                |
      | Vanguard - Strike                |
      | Vanguard - Nightfall             |
      | Vanguard - Heroic Story Mission  |

  @reject @less-than-two-clan-members
  Scenario Template: Reject Reason: Less than two clan members played the activity
    When the clan filter receives data for a "<activity>" completion
    And the activity was played by less than two clan members
    Then the activity should be rejected by the clan filter

    Scenarios:
      | activity                         |
      | Crucible Competitive - Control   |
      | Crucible Competitive - Clash     |
      | Crucible Competitive - Survival  |
      | Crucible Competitive - Countdown |
      | Crucible Quickplay - Control     |
      | Crucible Quickplay - Clash       |
      | Crucible Rotation - Lockdown     |
      | Crucible Rotation - Mayhem       |
      | Crucible Rotation - Supremacy     |
      | Crucible Rotation - Iron Banner  |
      | Drifter - Gambit                 |
      | Drifter - Gambit Prime           |
      | Drifter - Reckoning              |
      | Raid - Eater of Worlds           |
      | Raid - Leviathan                 |
      | Raid - Spire of Stars            |
      | Raid - Prestige Eater of Worlds  |
      | Raid - Prestige Leviathan        |
      | Raid - Prestige Spire of Stars   |
      | Raid - Last Wish                 |
      | Raid - Scourge of the Past       |
      | Raid - Crown of Sorrow           |
      | Other - Menagerie                |
      | Vanguard - Strike                |
      | Vanguard - Nightfall             |
      | Vanguard - Heroic Story Mission  |
