# Magmillion

The daily word game where the rarest answer drills deepest, down past the magma to the center of the Earth.

Play it here: https://huanghannah123.github.io/quarrillion/

## How it works

- Seven prompts a day, like "Name a fruit," the same for everyone, with 25 seconds each.
- Type one thing that fits. Spelling is forgiven (the game asks "Did you mean...?"), but guessing is not.
- Rarer answers drill deeper. "Name a fruit": Apple is +10, Miracle fruit is +100.
- Seven perfect answers (700 points) reach the center of the Earth, 6,371 km down, past real landmarks like the Kola Superdeep Borehole and the Moho.
- One logged dig a day. Share your depth and keep your streak. Missed a day? Play it from the Archive. Unlimited mode gives everyone 2 free digs with random prompts, then costs $5 to unlock.

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

## Setting up the $5 Unlimited unlock

1. Create a $5 payment link with a provider like Stripe Payment Links (you need to be 18, or have a parent or guardian set up the account).
2. In the payment link settings, send buyers to `https://huanghannah123.github.io/quarrillion/#unlock-DEEPCORE5` after they pay. That unlocks Unlimited on their device.
3. Paste the payment link into `PAY_URL` near the "Unlimited" section of the script in `index.html`.
4. Buyers on another device can type the code DEEPCORE5 in the "Already paid?" box. To change the code, update `UNLOCK_HASH` to the djb2 hash of the new code.

The unlock is stored in the browser, so a determined player could get around it. For real enforcement you'd need a server that checks purchases.

## Adding categories

The whole game is one file, `index.html`, with no build step. Categories live in the `PROMPTS` and `MORE` arrays near the top of the script. Each answer is one line:

```
TIER Name/alias/alias | optional one-line fact shown after the round
```

Tier 1 is the most common answer and tier 6 is the rarest. List tier 1 answers from most to least common, since the reveal screen shows the top three as "most people said." Tier 0 lines are near misses that score nothing but explain why, like a spider for "Name an insect."

Inspired by Cosmillion, Krillion, and Moonshot.
