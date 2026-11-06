# Awesome AI GIF Prompts

**English** · [简体中文](README_zh.md)

![prompts](https://img.shields.io/badge/prompts-41-ff713a) ![model](https://img.shields.io/badge/model-GPT%20Image%202.6-8a63d2) ![license](https://img.shields.io/badge/license-CC%20BY%204.0-2bb3a3) [![awesome](https://awesome.re/badge.svg)](https://awesome.re)

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
- [Stickers & Reactions](#stickers-reactions) · 15 prompts
- [Flash Cuts & Brand Reels](#flash-cuts-brand-reels) · 5 prompts
- [Ambient Loops](#ambient-loops) · 12 prompts
- [Pixel Art & UI Motion](#pixel-art-ui-motion) · 9 prompts
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

### 6. Confused shiba head tilt

<img src="gifs/shiba-head-tilt.gif" alt="Confused shiba head tilt" width="360">

<sub>9 frames · 439×390 · 1.6s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A fluffy orange shiba inu puppy tilting its head to one side and back again, ears twitching, a small question mark popping above its head. Chibi sticker style, bold outline, plain light blue background.
```

`sticker` `reaction` `dog`

### 7. Cat typing furiously

<img src="gifs/cat-typing-laptop.gif" alt="Cat typing furiously" width="360">

<sub>16 frames · 380×242 · 1.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A grey tabby cat sitting at a tiny laptop and typing furiously with both front paws, paws blurring, little speed lines and sweat drops flying off. Flat cartoon sticker style, bold outline, plain pale pink background.
```

> 💡 **Tip:** Speed lines and sweat drops make fast motion readable even with only a few frames.

`sticker` `work` `cat`

### 8. Frog blowing a heart

<img src="gifs/frog-heart-bubble.gif" alt="Frog blowing a heart" width="360">

<sub>16 frames · 380×252 · 2.2s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A round green cartoon frog puffing its cheeks and blowing a pink heart-shaped bubble that floats up and pops into tiny sparkles. Cute flat sticker style, bold outline, plain cream background.
```

`sticker` `love` `cute`

### 9. Penguin facepalm

<img src="gifs/penguin-facepalm.gif" alt="Penguin facepalm" width="360">

<sub>9 frames · 435×389 · 1.4s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A chubby cartoon penguin slowly raising one flipper and slapping it onto its forehead, then shaking its head in disbelief. Chibi sticker style, bold outline, plain light grey background.
```

`sticker` `reaction` `facepalm`

### 10. Basketball shot celebration

<img src="gifs/basketball-shot-sticker.gif" alt="Basketball shot celebration" width="360">

<sub>16 frames · 380×251 · 1.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A chibi kid in a red jersey jumps and shoots a basketball, the ball swishes through the hoop, then the kid lands and pumps a fist in celebration before returning to the starting pose. Bold-outline sticker style, plain light orange background.
```

> 💡 **Tip:** For sports moves, break the action into 3 clear beats (jump, shot, celebrate). Complex tricks like a 360 kickflip still tend to fail.

`sticker` `sports` `celebration`

### 11. Cat chef tossing fried rice

<img src="gifs/cat-chef-fried-rice.gif" alt="Cat chef tossing fried rice" width="360">

<sub>16 frames · 323×295 · 1.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A white cat chef in a tall chef hat tossing fried rice in a wok, the rice flies up in a little arc and lands back in the pan, a puff of steam rising each time. Comic cartoon style, warm kitchen background kept still.
```

`sticker` `food` `cat`

### 12. Black cat punch

<img src="gifs/black-cat-punch.gif" alt="Black cat punch" width="360">

<sub>9 frames · 437×390 · 1.3s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A round black cat with big yellow eyes throwing a quick one-two punch toward the viewer with its front paws, little impact stars popping, then settling back into a boxing stance. Chibi sticker style, bold outline, plain pastel purple background.
```

`sticker` `reaction` `cat`

### 13. Office cat: exhausted

<img src="gifs/office-cat-exhausted.gif" alt="Office cat: exhausted" width="360">

<sub>9 frames · 438×387 · 1.6s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A chubby orange tabby cat office worker with a tiny blue tie and an employee badge slumps face-down onto a pile of papers on its desk, ears drooping, a tiny ghost of a sigh floating up, then twitches one paw. Flat cartoon sticker style, bold outline, plain pale grey background.
```

> 💡 **Tip:** Part of a set: repeat the exact same character description and only change the action — that is how real sticker packs stay consistent.

`sticker` `work` `sticker-pack`

### 14. Office cat: clocking out

<img src="gifs/office-cat-clock-out.gif" alt="Office cat: clocking out" width="360">

<sub>16 frames · 374×249 · 2.6s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A chubby orange tabby cat office worker with a tiny blue tie and an employee badge tosses its badge in the air, grabs a tiny backpack and does a happy little hop toward the door, tail swishing. Flat cartoon sticker style, bold outline, plain pale yellow background.
```

`sticker` `work` `sticker-pack`

### 15. Roaring duck

<img src="gifs/roaring-duck.gif" alt="Roaring duck" width="360">

<sub>9 frames · 433×394 · 1.6s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A small round yellow duck suddenly opening its beak wide and roaring like a lion, feathers blown back, the screen shaking slightly, then it calmly closes its beak. Cute cartoon sticker style, bold outline, plain sky-blue background.
```

`sticker` `reaction` `funny`

## Flash Cuts & Brand Reels

### 16. Flower macro flash cut

<img src="gifs/flower-macro-flash.gif" alt="Flower macro flash cut" width="360">

<sub>8 frames · 380×508 · 3.6s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A fast flash-cut sequence of eight different flower photographs, one per frame, each filling the whole frame: a red poppy shot from above with light glowing through its petals, a creamy gardenia in soft side light, blue delphinium against a deep blue background, a golden marigold macro, a pink peony from a high angle, a dark purple iris close-up, an orange lily with curled petals, and pale green hydrangea with dew drops. Realistic botanical fashion photography, each frame with a different color, distance and composition.
```

> 💡 **Tip:** Describe every frame as a distinct shot. Changing color, angle and framing between frames is what makes a flash cut feel energetic.

`flash-cut` `photography` `editorial`

### 17. Cat-head logo brand reel

<img src="gifs/cat-brand-reel.gif" alt="Cat-head logo brand reel" width="360">

<sub>8 frames · 380×507 · 2.8s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A quick-cut brand reel for a fictional cat food brand called "MEOWBITE". The same flat dark-brown cat-head logo — round face, two short pointed ears, cream almond eyes, short whiskers — stays fixed at the center of every frame while everything around it changes: an orange full-bleed poster, a pink pouch of cat food, a blue ceramic cat bowl seen from above, a kraft shipping box, a round sticker, and a final dark frame with the word MEOWBITE in big cream letters. Bold graphic design, flat colors, citrus orange, cream and dark brown palette.
```

> 💡 **Tip:** Lock the logo's position and size in every frame and only change the surroundings — that is what makes a brand flash read as one identity.

`flash-cut` `branding` `logo`

### 18. Sneaker colorway flash

<img src="gifs/sneaker-colorway-flash.gif" alt="Sneaker colorway flash" width="360">

<sub>5 frames · 349×883 · 1.8s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A fast flash-cut in a square frame: the same chunky sneaker seen from the side, centered and the same size in every frame, while its colorway and the full-bleed solid background change each frame: white and red on blue, black and lime on pink, cream and brown on orange, purple and silver on yellow, all-white on black. Clean studio product photography, the background fills the whole frame edge to edge.
```

> 💡 **Tip:** Fix the product's angle and position, change only colors — the classic product colorway reel.

`flash-cut` `product` `fashion`

### 19. One tree, four seasons

<img src="gifs/four-seasons-tree.gif" alt="One tree, four seasons" width="360">

<sub>4 frames · 764×508 · 2.6s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
The same lone round tree on a small hill, framed identically in every frame, cycling through the four seasons: pink spring blossoms, lush green summer, orange autumn leaves falling, bare branches in winter snow. Soft flat illustration with a matching sky color for each season.
```

`flash-cut` `nature` `seasons`

### 20. Magazine collage panels pop in

<img src="gifs/magazine-panels-pop.gif" alt="Magazine collage panels pop in" width="360">

<sub>9 frames · 438×387 · 1.6s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A fashion-magazine collage layout where photo panels pop in one by one — a flower, a pair of sunglasses, a coffee cup, a city skyline — each with a small bounce, and finally a bold title bar reading "WEEKEND" slides in. Clean editorial design, cream background, coral and navy accents.
```

> 💡 **Tip:** Keep the text to one short word; long titles still warp between frames.

`flash-cut` `editorial` `layout`

## Ambient Loops

### 21. Reading by the window, day to night

<img src="gifs/window-day-to-night.gif" alt="Reading by the window, day to night" width="360">

<sub>9 frames · 413×412 · 3.1s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A girl with a short bob reading a book on a cushion by a big window, seen from the side. Outside the window the sky cycles from bright morning blue to orange sunset to a starry night and back to morning, while the room light warms up and a desk lamp switches on at night. Soft flat illustration, calm and cozy.
```

> 💡 **Tip:** Day-to-night loops are harder than simple motions. Keep the character mostly still and let the light and sky carry the change.

`loop` `character` `time-lapse`

### 22. Steaming coffee loop

<img src="gifs/steaming-coffee.gif" alt="Steaming coffee loop" width="360">

<sub>16 frames · 379×252 · 2.6s · gpt-image-2.6 · generated 2026-11-05</sub>

**Prompt**

```text
A steaming cup of coffee on a small wooden table, steam curling and drifting upward, a tiny spoon wobbling on the saucer. Cozy flat illustration with warm colors.
```

`loop` `food` `cozy`

### 23. Rainy window and plant

<img src="gifs/rain-on-window.gif" alt="Rainy window and plant" width="360">

<sub>16 frames · 378×252 · 2.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A rainy window at dusk with a small potted plant on the sill, raindrops sliding down the glass and blurry city lights twinkling outside. Soft muted blue palette, lo-fi illustration style.
```

`loop` `lofi` `weather`

### 24. Goldfish in a bowl

<img src="gifs/goldfish-bowl.gif" alt="Goldfish in a bowl" width="360">

<sub>16 frames · 380×243 · 2.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A round glass fishbowl on a windowsill with one orange goldfish swimming a slow circle, tail fluttering, tiny bubbles rising to the surface. Soft watercolor-style illustration, gentle light.
```

`loop` `pet` `calm`

### 25. Lighthouse at night

<img src="gifs/lighthouse-night.gif" alt="Lighthouse at night" width="360">

<sub>16 frames · 380×247 · 2.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A white lighthouse on a rocky shore at night, its beam sweeping slowly across a dark blue sky, waves rolling and splashing against the rocks below. Flat illustration with a deep navy and warm yellow palette.
```

`loop` `seascape` `night`

### 26. Cat sleeping by the fireplace

<img src="gifs/cat-by-fireplace.gif" alt="Cat sleeping by the fireplace" width="360">

<sub>16 frames · 380×243 · 2.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A ginger cat curled up asleep on a rug in front of a crackling fireplace, its body gently rising and falling with each breath, flames flickering and casting warm light. Cozy flat illustration, warm orange and brown tones.
```

> 💡 **Tip:** Breathing is a great tiny motion for calm loops — it reads clearly and loops naturally.

`loop` `cozy` `cat`

### 27. Lantern monkey in the snow

<img src="gifs/lantern-monkey-snow.gif" alt="Lantern monkey in the snow" width="360">

<sub>16 frames · 380×241 · 2.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A small monkey in an olive-green hooded coat standing in a snowy pine forest at dusk, lifting a glowing amber paper lantern, looking up and blinking, then lowering the lantern back to where it started. Snow falls gently and a tiny cabin glows in the background. Soft storybook illustration, locked camera.
```

> 💡 **Tip:** Give the subject a pose to return to and lock the camera — the easiest way to get a clean loop.

`loop` `character` `winter`

### 28. Sleepy fox on a mossy rock

<img src="gifs/sleepy-fox-rock.gif" alt="Sleepy fox on a mossy rock" width="360">

<sub>9 frames · 432×394 · 1.6s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A small orange fox curled up asleep on a mossy rock, its tail gently swaying and ears twitching. Soft storybook illustration, locked camera.
```

`loop` `animal` `calm`

### 29. Lo-fi study loop

<img src="gifs/lofi-study-loop.gif" alt="Lo-fi study loop" width="360">

<sub>9 frames · 434×383 · 1.6s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A girl with headphones writing in a notebook at a desk at night, her pencil moving, steam rising from a mug, rain sliding down the window behind her and a desk lamp glowing. Lo-fi anime illustration, muted purple and blue palette, locked camera.
```

`loop` `lofi` `study`

### 30. Café cinemagraph

<img src="gifs/cafe-cinemagraph.gif" alt="Café cinemagraph" width="360">

<sub>9 frames · 439×390 · 1.6s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A cinemagraph of a quiet street café terrace in the morning: everything is perfectly still except the steam curling from a cup on the table and a striped awning flag fluttering in the breeze. Realistic photography, soft warm light, locked camera.
```

> 💡 **Tip:** For a cinemagraph, say explicitly that everything is still except one or two named elements.

`loop` `cinemagraph` `photo`

### 31. Ink-wash galloping horse

<img src="gifs/ink-wash-horse.gif" alt="Ink-wash galloping horse" width="360">

<sub>16 frames · 380×252 · 1.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A racehorse with a jockey galloping to the right in a loose Chinese ink-wash painting style, legs cycling through a full gallop stride, the jockey bobbing up and down, ink splashes kicking up behind the hooves. Rice-paper background, black ink with a touch of red.
```

`loop` `ink-wash` `animal`

### 32. Doodle monster comes alive

<img src="gifs/doodle-monster.gif" alt="Doodle monster comes alive" width="360">

<sub>9 frames · 440×386 · 1.6s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A crude crayon doodle of a little purple blob monster with two eyes on wobbly stalks and three stubby legs, drawn on lined notebook paper, comes alive: its eye-stalks blink and sway, it waves its tiny arms and hops in place, keeping the wobbly hand-drawn lines and odd proportions. The notebook paper stays still.
```

`loop` `doodle` `cute`

## Pixel Art & UI Motion

### 33. Pixel art campfire

<img src="gifs/pixel-campfire.gif" alt="Pixel art campfire" width="360">

<sub>16 frames · 378×240 · 1.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A pixel art campfire at night in a small forest clearing, flames flickering, sparks rising and fading, two logs glowing orange. 16-bit retro game style, dark blue night sky with a few stars.
```

`pixel-art` `loop` `game`

### 34. Bouncing dots loader

<img src="gifs/bouncing-dots-loader.gif" alt="Bouncing dots loader" width="360">

<sub>16 frames · 385×266 · 1.4s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A minimal loading animation: three rounded dots in coral, violet and teal bouncing up and down one after another in a wave, with soft squash on landing. Flat vector style on a plain off-white background.
```

> 💡 **Tip:** UI loaders work best with very few elements and a plain background.

`ui` `loader` `minimal`

### 35. Pixel knight run cycle

<img src="gifs/pixel-knight-run.gif" alt="Pixel knight run cycle" width="360">

<sub>8 frames · 380×508 · 1.0s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A pixel art knight with a blue cape and a small sword running to the right in a side view run cycle, cape flapping, on a plain dark background. 16-bit retro game sprite style, crisp pixels.
```

> 💡 **Tip:** Ask for a "run cycle" in "side view" to get game-sprite style animation.

`pixel-art` `sprite` `game`

### 36. Like button heart burst

<img src="gifs/like-heart-burst.gif" alt="Like button heart burst" width="360">

<sub>16 frames · 379×246 · 1.8s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A rounded outline heart icon that fills with red, pops bigger with a bounce and bursts into small colorful confetti dots around it, then settles back. Flat vector UI animation on a plain white background.
```

`ui` `icon` `micro-interaction`

### 37. Hourglass loading

<img src="gifs/hourglass-flip.gif" alt="Hourglass loading" width="360">

<sub>16 frames · 379×252 · 2.2s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A simple flat hourglass icon with sand pouring from the top to the bottom, then the hourglass flips over and starts again. Minimal vector style, teal frame and golden sand on a plain off-white background.
```

`ui` `loader` `icon`

### 38. Arcade VS screen

<img src="gifs/arcade-vs-screen.gif" alt="Arcade VS screen" width="360">

<sub>16 frames · 376×251 · 2.2s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A retro arcade versus screen: on the left a chubby panda wrestler in a yellow cape, on the right a lanky girl skateboarder with a green ponytail and a hoodie, both slide in from the edges, a huge "VS" slams into the center with lightning flashes, then both strike a pose. 16-bit pixel art, bold colors.
```

> 💡 **Tip:** Use clearly original characters (animals, unusual outfits). Generic "martial artist in a headband" drifts toward famous fighting-game heroes.

`pixel-art` `game` `versus`

### 39. 8-bit slime boss battle

<img src="gifs/pixel-slime-boss.gif" alt="8-bit slime boss battle" width="360">

<sub>16 frames · 375×240 · 2.2s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
An 8-bit boss battle: a giant green slime boss with a tiny crown bounces and squishes in the center of a dungeon arena, its health bar at the top flashing, while a small pixel hero on the left raises a shield. Retro NES pixel art, dark stone background.
```

`pixel-art` `game` `boss`

### 40. Love-burst skill animation

<img src="gifs/love-burst-skill.gif" alt="Love-burst skill animation" width="360">

<sub>16 frames · 369×239 · 1.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A chibi magical girl with a pink bob raises her wand and casts a "love burst" skill: a ring of glowing pink hearts explodes outward from her and fades, then she returns to her idle pose. Game skill-card style animation, sparkly effects, dark purple background.
```

`game` `skill` `effects`

### 41. Junkyard robot walk cycle

<img src="gifs/junkyard-robot-walk.gif" alt="Junkyard robot walk cycle" width="360">

<sub>16 frames · 380×252 · 1.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A rusty little scrap-metal robot with one antenna and a mismatched arm walking to the right in a side-view walk cycle, bolts jiggling, a puff of dust at each step. Pixel art game sprite on a plain dark background, crisp pixels.
```

`pixel-art` `sprite` `game`

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
