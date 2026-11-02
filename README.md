# Quarrillion

A daily word game where rare answers drill toward the center of the Earth.

Play it here: https://huanghannah123.github.io/quarrillion/

## How it works

Every day brings three categories, the same for everyone.

1. Surface Survey. Name 3 answers most people would give, 15 seconds each. The crowd's No. 1 answer is worth 100 points.
2. Deep Bore. Same category. Name 3 real answers almost nobody gives, 30 seconds each, scored by rarity tier.
3. Both rounds repeat with a second category.
4. Core Sampler. The drill calls a rarity tier 4 times and you name an answer in exactly that tier. Dead on scores 100, one tier off 40, two off 15.

Wrong guesses cost nothing. Faster answers keep more points. A top-3 Survey answer, a Deep vein or rarer find, or a dead-on sample gives your next answer a x1.5 combo. Misspelled answers get a "Did you mean...?" check.

Points become depth, about 4 km per point. A perfect run without combos reaches the center of the Earth, 6,371 km down, passing real landmarks like the Kola Superdeep Borehole and the Moho on the way.

## Rarity tiers

| Tier | Points in Deep Bore |
| --- | --- |
| Topsoil | 5 |
| Clay | 20 |
| Bedrock | 40 |
| Ore seam | 60 |
| Deep vein | 80 |
| One in a Quarrillion | 100 |

Rarity and crowd rankings are hand-made estimates, not live player data.

## Running it

The whole game is one file, `index.html`, with no build step. Open it in a browser, or serve the folder with any static host.

## Adding categories

Categories live in the `PROMPTS` array near the top of the script. Each answer is one line:

```
TIER Name/alias/alias | optional one-line definition
```

Tier 1 is the most common answer and tier 6 is the rarest. Within tier 1, list answers from most to least common, since that order sets the Survey ranking. Tier 0 lines are near misses that score nothing but explain why (for example, a pterodactyl is not a dinosaur).

Inspired by Krillion, Cosmillion, and Moonshot.
