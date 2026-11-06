# Awesome AI GIF Prompts

**English** · [简体中文](README_zh.md)

![prompts](https://img.shields.io/badge/prompts-12-ff713a) ![model](https://img.shields.io/badge/model-GPT%20Image%202.6-8a63d2) ![license](https://img.shields.io/badge/license-CC%20BY%204.0-2bb3a3) [![awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated collection of prompts for making **animated GIFs directly with AI** — stickers, reactions, flash cuts, brand reels, ambient loops and pixel art. Every example below was generated from the exact prompt shown, with no editing.

> 🎞️ **Try these prompts online:** paste any prompt into the [AI GIF Maker](https://chatgpt-image-2.com/home/ai-gif-maker) — text in, looping GIF out, powered by GPT Image 2.6.

<p align="center">
  <img src="gifs/jelly-bear-wobble.gif" alt="Jelly bear wobble" height="150">
  <img src="gifs/flower-macro-flash.gif" alt="Flower macro flash cut" height="150">
  <img src="gifs/window-day-to-night.gif" alt="Reading by the window, day to night" height="150">
  <img src="gifs/pixel-campfire.gif" alt="Pixel art campfire" height="150">
</p>

## Contents

- [How these GIFs are made](#how-these-gifs-are-made)
- [Stickers & Reactions](#stickers-reactions) · 5 prompts
- [Flash Cuts & Brand Reels](#flash-cuts-brand-reels) · 2 prompts
- [Ambient Loops](#ambient-loops) · 3 prompts
- [Pixel Art & UI Motion](#pixel-art-ui-motion) · 2 prompts
- [Generate them yourself](#generate-them-yourself)

## How these GIFs are made

GPT Image 2.6 can return an animated GIF instead of a still image when you request `output_format: "gif"`. The model decides the frame count, timing and pixel size on its own.

Each prompt in this repo is sent with one extra sentence appended, which asks for a clean loop:

```text
Animate it as a short, smooth, seamlessly looping GIF with clear motion between frames.
```

### Prompt formula

**Subject** (one clear character or object) + **Motion** (1–2 verbs: waving, bouncing, drifting, flickering) + **Style** (flat illustration, chibi sticker, pixel art, photo) + **Background** (plain, high-contrast color for stickers)

### Tips

- One subject and one or two movements. Busy scenes leave less room for clear motion.
- Describe motion with verbs — *wobbling, nodding off, flickering, sliding down* — not adjectives.
- Flat illustration, chibi and pixel art styles survive small GIF sizes far better than photorealism.
- For a sticker set, repeat the exact same character description in every prompt so the pack stays consistent.
- For stickers you plan to cut out, use one flat background color far away from the character's colors.
- For flash cuts, describe each frame as a different shot; for brand reels, lock the logo position and change only the surroundings.
- Long text and complex day-to-night loops are still unreliable — keep text short and let light carry big changes.

## Stickers & Reactions

### 1. Jelly bear wobble

<img src="gifs/jelly-bear-wobble.gif" alt="Jelly bear wobble" width="360">

<sub>9 frames · 438×388 · 1.3s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A chubby round cartoon bear with a soft jelly-like body and stubby arms, squishing down and springing back up while wobbling side to side, cheeks jiggling on every bounce. Thick clean outlines, flat pastel colors, centered on a plain solid mint-green background that contrasts strongly with the bear.
```

> 💡 **Tip:** Keep the background one flat color far from the character's colors so it can be keyed out as a transparent sticker later.

`sticker` `bouncy` `cute`

### 2. Bunny thumbs-up

<img src="gifs/bunny-thumbs-up.gif" alt="Bunny thumbs-up" width="360">

<sub>9 frames · 438×388 · 1.3s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A small white cartoon bunny with long floppy ears and a pink nose, giving an enthusiastic thumbs-up with one paw, the paw pumping forward twice while the ears bounce. Chibi sticker style, bold outline, plain warm yellow background.
```

> 💡 **Tip:** Reuse the same character description across a set (see the next two prompts) so the whole sticker pack stays consistent.

`sticker` `reaction` `sticker-pack`

### 3. Bunny laughing to tears

<img src="gifs/bunny-laughing.gif" alt="Bunny laughing to tears" width="360">

<sub>8 frames · 440×389 · 1.1s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A small white cartoon bunny with long floppy ears and a pink nose, laughing so hard it rocks back and forth, eyes squeezed shut and two little tears flying out. Chibi sticker style, bold outline, plain warm yellow background.
```

`sticker` `reaction` `sticker-pack`

### 4. Sleepy bunny

<img src="gifs/bunny-sleepy.gif" alt="Sleepy bunny" width="360">

<sub>9 frames · 439×387 · 1.6s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A small white cartoon bunny with long floppy ears and a pink nose, sitting and nodding off, head slowly drooping then jerking back up, a small bubble swelling and shrinking from its nose. Chibi sticker style, bold outline, plain warm yellow background.
```

`sticker` `reaction` `sticker-pack`

### 5. Cartoon cat waving hello

<img src="gifs/cat-waving-hello.gif" alt="Cartoon cat waving hello" width="360">

<sub>9 frames · 438×390 · 1.3s · gpt-image-2.6 · generated 2026-11-05</sub>

**Prompt**

```text
A cheerful cartoon cat waving hello.
```

> 💡 **Tip:** Even a one-line prompt works for simple greetings — the model fills in style and timing.

`sticker` `greeting` `minimal-prompt`

## Flash Cuts & Brand Reels

### 6. Flower macro flash cut

<img src="gifs/flower-macro-flash.gif" alt="Flower macro flash cut" width="360">

<sub>8 frames · 380×508 · 3.6s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A fast flash-cut sequence of eight different flower photographs, one per frame, each filling the whole frame: a red poppy shot from above with light glowing through its petals, a creamy gardenia in soft side light, blue delphinium against a deep blue background, a golden marigold macro, a pink peony from a high angle, a dark purple iris close-up, an orange lily with curled petals, and pale green hydrangea with dew drops. Realistic botanical fashion photography, each frame with a different color, distance and composition.
```

> 💡 **Tip:** Describe every frame as a distinct shot. Changing color, angle and framing between frames is what makes a flash cut feel energetic.

`flash-cut` `photography` `editorial`

### 7. Cat-head logo brand reel

<img src="gifs/cat-brand-reel.gif" alt="Cat-head logo brand reel" width="360">

<sub>8 frames · 380×507 · 2.8s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A quick-cut brand reel for a fictional cat food brand called "MEOWBITE". The same flat dark-brown cat-head logo — round face, two short pointed ears, cream almond eyes, short whiskers — stays fixed at the center of every frame while everything around it changes: an orange full-bleed poster, a pink pouch of cat food, a blue ceramic cat bowl seen from above, a kraft shipping box, a round sticker, and a final dark frame with the word MEOWBITE in big cream letters. Bold graphic design, flat colors, citrus orange, cream and dark brown palette.
```

> 💡 **Tip:** Lock the logo's position and size in every frame and only change the surroundings — that is what makes a brand flash read as one identity.

`flash-cut` `branding` `logo`

## Ambient Loops

### 8. Reading by the window, day to night

<img src="gifs/window-day-to-night.gif" alt="Reading by the window, day to night" width="360">

<sub>9 frames · 413×412 · 3.1s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A girl with a short bob reading a book on a cushion by a big window, seen from the side. Outside the window the sky cycles from bright morning blue to orange sunset to a starry night and back to morning, while the room light warms up and a desk lamp switches on at night. Soft flat illustration, calm and cozy.
```

> 💡 **Tip:** Day-to-night loops are harder than simple motions. Keep the character mostly still and let the light and sky carry the change.

`loop` `character` `time-lapse`

### 9. Steaming coffee loop

<img src="gifs/steaming-coffee.gif" alt="Steaming coffee loop" width="360">

<sub>16 frames · 379×252 · 2.6s · gpt-image-2.6 · generated 2026-11-05</sub>

**Prompt**

```text
A steaming cup of coffee on a small wooden table, steam curling and drifting upward, a tiny spoon wobbling on the saucer. Cozy flat illustration with warm colors.
```

`loop` `food` `cozy`

### 10. Rainy window and plant

<img src="gifs/rain-on-window.gif" alt="Rainy window and plant" width="360">

<sub>16 frames · 378×252 · 2.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A rainy window at dusk with a small potted plant on the sill, raindrops sliding down the glass and blurry city lights twinkling outside. Soft muted blue palette, lo-fi illustration style.
```

`loop` `lofi` `weather`

## Pixel Art & UI Motion

### 11. Pixel art campfire

<img src="gifs/pixel-campfire.gif" alt="Pixel art campfire" width="360">

<sub>16 frames · 378×240 · 1.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A pixel art campfire at night in a small forest clearing, flames flickering, sparks rising and fading, two logs glowing orange. 16-bit retro game style, dark blue night sky with a few stars.
```

`pixel-art` `loop` `game`

### 12. Bouncing dots loader

<img src="gifs/bouncing-dots-loader.gif" alt="Bouncing dots loader" width="360">

<sub>16 frames · 385×266 · 1.4s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A minimal loading animation: three rounded dots in coral, violet and teal bouncing up and down one after another in a wave, with soft squash on landing. Flat vector style on a plain off-white background.
```

> 💡 **Tip:** UI loaders work best with very few elements and a plain background.

`ui` `loader` `minimal`

## Generate them yourself

Call the images endpoint of any GPT Image 2.6 provider with `output_format` set to `gif`:

```bash
curl https://apiany.ai/v1/images/generations/sync \
  -H "Authorization: Bearer $APIANY_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model": "gpt-image-2.6", "output_format": "gif", "prompt": "A cheerful cartoon cat waving hello. Animate it as a short, smooth, seamlessly looping GIF with clear motion between frames."}'
```

Or regenerate every example in this repo with the included script (Node 18+):

```bash
git clone https://github.com/ailingqu/awesome-ai-gif-prompts.git && cd awesome-ai-gif-prompts
cp .env.example .env   # fill in APIANY_API_KEY
npm run generate        # only generates prompts without a GIF
npm run build           # rebuilds README.md and README_zh.md
```

## Sources

Prompt ideas are collected from the web, then rewritten and tested by us. All example GIFs in `gifs/` were generated by this repo.

## Contributing

New prompts are welcome! Add an entry to `data/prompts.json`, include the GIF you got, and run `npm run build`. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Prompts and example GIFs: [CC BY 4.0](LICENSE). If this list helps you, a ⭐ helps others find it.
