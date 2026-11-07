# Magmillion

The daily word game where the rarest answer erupts highest: out of a volcano, through the clouds, and up to the edge of space.

Play it at https://playmagmillion.github.io/magmillion/

Looking for more games like Krillion? See [games like Krillion](https://playmagmillion.github.io/magmillion/games-like-krillion.html).

## How it works

- Seven prompts a day, like "Name a fruit," the same for everyone, with 25 seconds each.
- Type any real thing that fits. Spelling is forgiven: the game asks "Did you mean...?" for typos, swapped letters, sound-alike spellings, and words cut short.
- Answers aren't limited to a fixed list. If an answer isn't on the hand-made list, the game checks Wikipedia, Wikidata, Wiktionary, WordNet (through Datamuse), and ConceptNet at the same time, and accepts it if any of them confirm it fits the category. Word-origin prompts check the word's Wiktionary etymology, and "word that means..." prompts check the Datamuse dictionary. Rarity comes from Wikipedia views over the last 30 days or word frequency, and tops out at Sky-high (+85).
- Misspelled answers are corrected before the web check, using Wikipedia's "did you mean" and Datamuse's spell matcher, and answers that are another name for something (napoleon for mille-feuille) are matched through Wikipedia redirects, article text, and Wikidata aliases.
- An answer that doesn't fit gets one more try before it counts as a Dud. Duds show a link that opens a GitHub issue, so a missed answer can be added to the list.
- You start as a rock sunk in the lava 8 km down inside a volcano. Rarer answers push you up through the lava. "Name a fruit": Apple is +10, Miracle fruit is +100.
- Score 450 or more and you erupt out of the volcano. Seven perfect answers (700 points) reach the Kármán line, where space begins, 100 km up, past real landmarks like Mount Everest, the stratosphere, and the Hunga Tonga eruption plume.
- One daily eruption a day counts toward your streak. Share your height. Missed a day? Play it from the Archive. Play again is free and unlimited: each one starts over from the bottom of the volcano with 7 random prompts. If you refresh in the middle of the daily game, it picks up where you left off.

## The eruption

The scene is a cut-away of a volcano filled with lava. You start as a rock in the magma chamber and rise through the conduit and the lava lake, past drifting crystals and gas bubbles, and 450 points or more erupts you out of the volcano into the sky: the ash plume, the cloud layer, the stratosphere, and the mesosphere, with stars, meteors, and noctilucent clouds near the top. After you answer, the panel slides away and the whole screen follows your rise. Rarer answers get bigger effects, up to rings, a rainbow banner, and a full eruption for One in a Magmillion. Tap or press Enter to skip ahead.

## Sound

All sounds are synthesized live with the Web Audio API, so there are no audio files. Typing clicks, a rising chime for "Did you mean...?", a buzz for a wrong answer, countdown beeps in the last 5 seconds, a rumble whose pitch climbs with rarity, impact sounds that grow from a dull thud (Dud) to a full fanfare with a boom (One in a Magmillion), a low volcanic drone that rises as you climb, and a finish jingle. The speaker button in the top bar mutes everything and remembers your choice.

## Where you landed

After all 7 prompts, the results screen shows a score distribution with your score marked and the share of players you beat. There's no server collecting real scores yet, so the chart comes from a simulation of 20,000 players on that day's prompts, and the game says so on screen.

## The ranks

| Rank | Points |
| --- | --- |
| Simmer | +10 |
| Bubble | +15 |
| Rumble | +30 |
| Lava fountain | +60 |
| Sky-high | +85 |
| One in a Magmillion | +100 |

Rarity tiers are hand-made estimates, not live player data.

## New prompts every day

There are 116 categories, and each one also comes in letter versions ("Name a fruit starting with P", "Name an animal with a Z in it", "Name a landform ending in O"), for 1,366 prompts in all. A letter version only exists when the answer list has enough answers that fit, and the game rejects answers that break the letter rule. From eruption #7 on, the daily schedule uses every prompt once before any comes back (about 196 days), each day has 7 different categories, and a category sits out at least 3 days between uses. Eruptions #1 to #6 keep the prompts people already played.

## Adding categories

The whole game is one file, `index.html`, with no build step. Categories live in the `PROMPTS` and `MORE` arrays near the top of the script. Each answer is one line:

```
TIER Name/alias/alias | optional one-line fact shown after the round
```

Tier 1 is the most common answer and tier 6 is the rarest. List tier 1 answers from most to least common, since the reveal screen shows the top three as "most people said." Tier 0 lines are near misses that score nothing but explain why, like a spider for "Name an insect."

A free daily word game like Krillion, Cosmillion, and Moonshot, with an erupting volcano. Not affiliated with those games.
