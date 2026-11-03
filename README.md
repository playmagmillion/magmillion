# Magmillion

The daily word game where the rarest answer drills deepest, down past the magma to the center of the Earth.

Play it at https://playmagmillion.github.io/magmillion/

Looking for more games like Krillion? See [games like Krillion](https://playmagmillion.github.io/magmillion/games-like-krillion.html).

## How it works

- Seven prompts a day, like "Name a fruit," the same for everyone, with 25 seconds each.
- Type any real thing that fits. Spelling is forgiven: the game asks "Did you mean...?" for typos, swapped letters, sound-alike spellings, and words cut short.
- Answers aren't limited to a fixed list. If an answer isn't on the hand-made list, the game checks Wikipedia, Wikidata, Wiktionary, WordNet (through Datamuse), and ConceptNet at the same time, and accepts it if any of them confirm it fits the category. Word-origin prompts check the word's Wiktionary etymology, and "word that means..." prompts check the Datamuse dictionary. Rarity comes from Wikipedia views over the last 30 days or word frequency, and tops out at Deep vein (+85).
- Misspelled answers are corrected before the web check, using Wikipedia's "did you mean" and Datamuse's spell matcher, and answers that are another name for something (napoleon for mille-feuille) are matched through Wikipedia redirects, article text, and Wikidata aliases.
- An answer that doesn't fit gets one more try before it counts as a Dud. Duds show a link that opens a GitHub issue, so a missed answer can be added to the list.
- Rarer answers drill deeper. "Name a fruit": Apple is +10, Miracle fruit is +100.
- Seven perfect answers (700 points) reach the center of the Earth, 6,371 km down, past real landmarks like the Kola Superdeep Borehole and the Moho.
- One logged dig a day. Share your depth and keep your streak. Missed a day? Play it from the Archive. After the daily dig, Play again gives everyone 2 free extra games with random prompts. More after that costs $5.

## Where you landed

After all 7 prompts, the results screen shows a score distribution with your score marked and the share of players you beat. There's no server collecting real scores yet, so the chart comes from a simulation of 20,000 players on that day's prompts, and the game says so on screen.

## The ranks

| Rank | Points |
| --- | --- |
| Topsoil | +10 |
| Clay | +15 |
| Bedrock | +30 |
| Ore seam | +60 |
| Deep vein | +85 |
| One in a Magmillion | +100 |

Rarity tiers are hand-made estimates, not live player data.

## New prompts every day

There are 116 categories. The daily schedule never repeats a prompt within 14 days, and no two days share the same set of seven. Add more categories and the gap grows on its own.

## Setting up the $5 Play again unlock

1. Create a $5 payment link with a provider like Stripe Payment Links (you need to be 18, or have a parent or guardian set up the account).
2. In the payment link settings, send buyers to your game's address with `#unlock-DEEPCORE5` added to the end after they pay. That lets them play again as often as they like on that device.
3. Paste the payment link into `PAY_URL` near the "Unlimited" section of the script (the Play again unlock) in `index.html`.
4. Buyers on another device can type the code DEEPCORE5 in the "Already paid?" box. To change the code, update `UNLOCK_HASH` to the djb2 hash of the new code.

The unlock is stored in the browser, so a determined player could get around it. For real enforcement you'd need a server that checks purchases.

## Adding categories

The whole game is one file, `index.html`, with no build step. Categories live in the `PROMPTS` and `MORE` arrays near the top of the script. Each answer is one line:

```
TIER Name/alias/alias | optional one-line fact shown after the round
```

Tier 1 is the most common answer and tier 6 is the rarest. List tier 1 answers from most to least common, since the reveal screen shows the top three as "most people said." Tier 0 lines are near misses that score nothing but explain why, like a spider for "Name an insect."

A free daily word game like Krillion, Cosmillion, and Moonshot, with a volcano and a drill. Not affiliated with those games.
