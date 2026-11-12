# Awesome AI GIF Prompts

**English** · [简体中文](README_zh.md)

![prompts](https://img.shields.io/badge/prompts-361-ff713a) ![model](https://img.shields.io/badge/model-GPT%20Image%202.6-8a63d2) ![license](https://img.shields.io/badge/license-CC%20BY%204.0-2bb3a3) [![awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated collection of prompts for making **animated GIFs directly with AI** — stickers, reactions, flash cuts, brand reels, ambient loops and pixel art. Every example below was generated from the exact prompt shown, with no editing.

> 🎞️ **Try these prompts online:** paste any prompt into the [ViNano AI GIF Generator](https://vinano.ai/gif-generator) — text or a photo in, looping GIF out, powered by GPT Image 2.6.

<p align="center">
  <img src="gifs/jelly-bear-wobble.gif" alt="Jelly bear wobble" height="150">
  <img src="gifs/flower-macro-flash.gif" alt="Flower macro flash cut" height="150">
  <img src="gifs/window-day-to-night.gif" alt="Reading by the window, day to night" height="150">
  <img src="gifs/pixel-campfire.gif" alt="Pixel art campfire" height="150">
</p>

## Contents

- [How these GIFs are made](#how-these-gifs-are-made)
- [Stickers & Reactions](#stickers-reactions) · 152 prompts
- [Flash Cuts & Brand Reels](#flash-cuts-brand-reels) · 59 prompts
- [Ambient Loops](#ambient-loops) · 91 prompts
- [Pixel Art & UI Motion](#pixel-art-ui-motion) · 59 prompts
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

### 16. Chibi trader watching stocks crash

<img src="gifs/chibi-trader-crash.gif" alt="Chibi trader watching stocks crash" width="360">

<sub>9 frames · 438×388 · 1.4s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A chibi office worker in a white shirt and loose tie staring at a laptop where a red stock line plunges, his hopeful smile crumbling into big wobbling tears. Flat pastel sticker style on a plain light background.
```

`sticker` `office` `finance`

### 17. Chibi trader celebrating a rally

<img src="gifs/chibi-trader-moon.gif" alt="Chibi trader celebrating a rally" width="360">

<sub>9 frames · 414×410 · 1.4s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A chibi office worker in a white shirt and loose tie jumping up from his chair as a green stock line shoots upward on his laptop, throwing paper banknotes into the air with both hands. Flat pastel sticker style on a plain light background.
```

`sticker` `office` `finance`

### 18. Cat in sunglasses dancing

<img src="gifs/sunglasses-cat-dance.gif" alt="Cat in sunglasses dancing" width="360">

<sub>12 frames · 356×357 · 1.4s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A cool grey cat wearing tiny black sunglasses doing a side-to-side groove dance, hips swaying and one paw pointing up then down. Bold cartoon sticker style on a plain yellow background.
```

`sticker` `cat` `dance`

### 19. Top-hat frog shooing bad vibes

<img src="gifs/top-hat-frog-shoo.gif" alt="Top-hat frog shooing bad vibes" width="360">

<sub>9 frames · 438×390 · 1.4s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A small green frog in a tall black top hat and a monocle waving a tiny cane in circles as if shooing away bad luck, little grey smoke puffs scattering. Cute storybook sticker style on a cream background.
```

`sticker` `frog` `reaction`

### 20. Busy bee clocking in

<img src="gifs/busy-bee-clock-in.gif" alt="Busy bee clocking in" width="360">

<sub>9 frames · 439×390 · 1.4s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A round fuzzy cartoon bee with a tiny lanyard badge buzzing in place, wings fluttering fast, then giving a crisp salute. Soft flat sticker style on a plain mint background.
```

`sticker` `bee` `work`

### 21. Puppy swaying with hearts

<img src="gifs/puppy-heart-sway.gif" alt="Puppy swaying with hearts" width="360">

<sub>9 frames · 437×389 · 1.6s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A fluffy cream-colored puppy sitting and swaying its head left and right with its eyes closed happily, small pink hearts floating up around it. Kawaii sticker style on a plain white background.
```

`sticker` `dog` `love`

### 22. Goodnight kitty

<img src="gifs/goodnight-cat.gif" alt="Goodnight kitty" width="360">

<sub>16 frames · 380×251 · 2.9s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A sleepy white kitten in a blue nightcap hugging a small pillow, slowly yawning and then nodding off as a tiny crescent moon bobs beside it. Soft pastel sticker style on a dark navy background.
```

`sticker` `cat` `goodnight`

### 23. Orange cat pouncing at the camera

<img src="gifs/orange-cat-pounce-lens.gif" alt="Orange cat pouncing at the camera" width="360">

<sub>9 frames · 433×395 · 1.6s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A chubby orange cat crouching, wiggling its rear, then leaping straight toward the viewer with paws spread wide until its face squishes against the glass. Funny cartoon style on a plain living room background.
```

`sticker` `cat` `funny`

### 24. Laughing so hard it cries

<img src="gifs/laughing-tears-blob.gif" alt="Laughing so hard it cries" width="360">

<sub>16 frames · 306×307 · 2.2s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A round pink mochi blob character throwing its head back and laughing hysterically, tears spraying from its eyes, body shaking. Cute sticker style on a plain white background.
```

`sticker` `laugh` `reaction`

### 25. Apprentice spell backfires

<img src="gifs/wizard-spell-backfire.gif" alt="Apprentice spell backfires" width="360">

<sub>8 frames · 439×388 · 1.3s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A chibi wizard apprentice in an oversized purple hat waves a wand, a small puff explodes in front of her, and she is left blinking with a soot-black face and frizzy hair. Cute cartoon sticker style on a plain lilac background.
```

`sticker` `magic` `fail`

### 26. Cat baker sneezes flour

<img src="gifs/cat-baker-sneeze.gif" alt="Cat baker sneezes flour" width="360">

<sub>9 frames · 440×389 · 1.6s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
An anthropomorphic orange cat in an apron kneading dough on a wooden counter, then sneezing and blowing a big white cloud of flour into the air. Warm cartoon style.
```

`sticker` `cat` `cooking`

### 27. Lobster working overtime

<img src="gifs/lobster-overtime.gif" alt="Lobster working overtime" width="360">

<sub>9 frames · 437×388 · 1.4s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A red cartoon lobster wearing round glasses typing furiously on a keyboard with both claws at a desk late at night, lit by the blue glow of a monitor, a coffee mug steaming beside it. Cartoon sticker style.
```

`sticker` `work` `funny`

### 28. Penguin panics after hitting send

<img src="gifs/penguin-send-panic.gif" alt="Penguin panics after hitting send" width="360">

<sub>9 frames · 435×390 · 1.4s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A small cartoon penguin slapping a big round red button labeled "SEND", then freezing as its eyes go wide and it grabs its head with both flippers in panic, sweat drops flying. Flat sticker style on a plain white background.
```

`sticker` `penguin` `reaction`

### 29. Otter in a teal scarf waving

<img src="gifs/otter-scarf-wave.gif" alt="Otter in a teal scarf waving" width="360">

<sub>9 frames · 438×389 · 1.6s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A small brown sea otter with a cream muzzle and a teal knitted scarf turning toward the viewer, waving one paw twice and blinking. Soft sticker style on a plain cream background.
```

`sticker` `otter` `hello`

### 30. Office worker: received!

<img src="gifs/office-worker-received.gif" alt="Office worker: received!" width="360">

<sub>9 frames · 436×392 · 1.4s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A chibi office worker with a tidy bob and a lanyard snapping to attention and giving a firm thumbs-up with a determined nod. Flat sticker style on a plain light blue background.
```

`sticker` `office` `reply`

### 31. Cat flying on a broomstick

<img src="gifs/cat-on-broom.gif" alt="Cat flying on a broomstick" width="360">

<sub>16 frames · 378×252 · 2.2s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A black cat with a tiny red scarf riding a wooden broomstick across a night sky, bobbing up and down, the scarf fluttering behind it. Cute storybook sticker style.
```

`sticker` `cat` `magic`

### 32. Baby robot wave and hop

<img src="gifs/baby-robot-hop.gif" alt="Baby robot wave and hop" width="360">

<sub>9 frames · 440×388 · 1.4s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A tiny round white baby robot with a glowing blue face screen and stubby legs waving one hand and doing a small happy hop, its antenna wobbling. Clean 3D toy style on a plain pastel background.
```

`sticker` `robot` `hello`

### 33. Hamster stuffing its cheeks

<img src="gifs/hamster-cheek-stuff.gif" alt="Hamster stuffing its cheeks" width="360">

<sub>9 frames · 433×395 · 1.6s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A golden hamster sitting up and stuffing sunflower seeds into its cheeks until they balloon comically, then blinking proudly. Cute cartoon style on a plain white background.
```

`sticker` `hamster` `food`

### 34. Duckling with a tiny umbrella

<img src="gifs/duck-dance-umbrella.gif" alt="Duckling with a tiny umbrella" width="360">

<sub>16 frames · 380×252 · 2.2s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A yellow duckling holding a tiny red umbrella hopping in a small puddle, splashes rising with each hop while rain falls. Soft watercolor sticker style.
```

`sticker` `duck` `rain`

### 35. Gym bear doing chest presses

<img src="gifs/gym-chest-press.gif" alt="Gym bear doing chest presses" width="360">

<sub>9 frames · 433×395 · 1.4s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A muscular cartoon brown bear in a red tank top lying on a bench and pressing a barbell up and down, cheeks puffing with each rep. Bold cartoon sticker style on a plain grey background.
```

`sticker` `fitness` `bear`

### 36. Cat dozing in a VR headset

<img src="gifs/vr-cat-nap.gif" alt="Cat dozing in a VR headset" width="360">

<sub>16 frames · 328×291 · 2.9s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A fluffy grey cat wearing a sleek white VR headset slowly nodding off, its head drooping and jerking back up, a small Zzz bubble floating up. Soft 3D render on a plain lavender background.
```

`sticker` `cat` `tech`

### 37. Grateful shrimp bows deeply

<img src="gifs/grateful-shrimp-bow.gif" alt="Grateful shrimp bows deeply" width="360">

<sub>9 frames · 439×389 · 1.6s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A small pink cartoon shrimp pressing its claws together, raising them high over its head and then bowing dramatically low, with the caption "THANK YOU!" fixed at the bottom. Flat sticker style on a white background.
```

`sticker` `caption` `thanks`

### 38. Mantis shrimp jiggles a flan

<img src="gifs/mantis-shrimp-flan.gif" alt="Mantis shrimp jiggles a flan" width="360">

<sub>9 frames · 414×414 · 1.6s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A rainbow-colored cartoon mantis shrimp poking a caramel flan on a plate with both front claws, the flan wobbling wildly while the shrimp's eyes sparkle with delight. Glossy clay-toy style on a pale yellow background.
```

`sticker` `food` `funny`

### 39. Gorilla shuffle dance

<img src="gifs/gorilla-bowtie-shuffle.gif" alt="Gorilla shuffle dance" width="360">

<sub>16 frames · 320×289 · 1.9s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A chunky cartoon gorilla wearing a tiny red bow tie doing a side-to-side shuffle dance, swinging its long arms and bobbing its head to the beat. Flat vector sticker on a white background.
```

`sticker` `dance` `animal`

### 40. Bowl-cut dog scrolling

<img src="gifs/bowl-cut-dog-phone.gif" alt="Bowl-cut dog scrolling" width="360">

<sub>9 frames · 435×391 · 1.6s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A small dog with a perfectly round bowl-cut hairstyle lying on its belly, scrolling a smartphone with one paw and snorting with laughter at the screen. Cute cartoon style on a white background.
```

`sticker` `phone` `dog`

### 41. Baby seal: shocked

<img src="gifs/seal-shocked.gif" alt="Baby seal: shocked" width="360">

<sub>9 frames · 439×388 · 1.4s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
a chubby white baby harp seal with big glossy black eyes, pink cheeks and a tiny blue scarf jolting backward in shock, eyes popping wide and whiskers standing straight out, with a small burst of exclamation lines. Flat chat-sticker style on a white background.
```

> 💡 **Tip:** For a set, reuse the exact same character description in every prompt.

`sticker` `seal` `shock`

### 42. Baby seal: sneaky giggle

<img src="gifs/seal-giggle.gif" alt="Baby seal: sneaky giggle" width="360">

<sub>8 frames · 439×390 · 1.2s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
a chubby white baby harp seal with big glossy black eyes, pink cheeks and a tiny blue scarf covering its mouth with one flipper and giggling, shoulders shaking and eyes curved into happy arcs. Flat chat-sticker style on a white background.
```

> 💡 **Tip:** For a set, reuse the exact same character description in every prompt.

`sticker` `seal` `laugh`

### 43. Baby seal: giving up

<img src="gifs/seal-melt-slack.gif" alt="Baby seal: giving up" width="360">

<sub>16 frames · 376×259 · 2.9s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
a chubby white baby harp seal with big glossy black eyes, pink cheeks and a tiny blue scarf lying flat on its belly and slowly melting into a puddle-like blob, then sighing a tiny cloud. Flat chat-sticker style on a white background.
```

> 💡 **Tip:** For a set, reuse the exact same character description in every prompt.

`sticker` `seal` `lazy`

### 44. Baby seal: crying

<img src="gifs/seal-crying.gif" alt="Baby seal: crying" width="360">

<sub>9 frames · 431×393 · 1.4s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
a chubby white baby harp seal with big glossy black eyes, pink cheeks and a tiny blue scarf bawling with its mouth wide open, two streams of tears spraying out sideways, flippers flapping. Flat chat-sticker style on a white background.
```

> 💡 **Tip:** For a set, reuse the exact same character description in every prompt.

`sticker` `seal` `cry`

### 45. Baby seal: sending love

<img src="gifs/seal-heart.gif" alt="Baby seal: sending love" width="360">

<sub>9 frames · 435×388 · 1.6s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
a chubby white baby harp seal with big glossy black eyes, pink cheeks and a tiny blue scarf lifting both flippers together over its head to form a clear heart shape, then small pink hearts float up. Flat chat-sticker style on a white background.
```

> 💡 **Tip:** Two-limb heart gestures often fail to close; spell out that the flippers meet above the head.

`sticker` `seal` `love`

### 46. Shiba: on it, on it

<img src="gifs/shiba-fixing-caption.gif" alt="Shiba: on it, on it" width="360">

<sub>9 frames · 436×388 · 1.3s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A cream shiba inu at a desk typing furiously on a keyboard with both paws, sweat drops flying off its head, with the handwritten caption "在改了在改了" fixed at the top. Flat sticker style on a white background.
```

`sticker` `caption` `work`

### 47. Shiba takes a snowball

<img src="gifs/shiba-snowball-face.gif" alt="Shiba takes a snowball" width="360">

<sub>9 frames · 439×381 · 1.4s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A shiba inu in a red knitted winter hat standing in the snow gets hit in the face by a snowball, snow bursting everywhere, then blinks and shakes its head. Cartoon sticker style on a pale blue background.
```

`sticker` `winter` `funny`

### 48. Tuxedo cat vs. foxtail toy

<img src="gifs/tuxedo-cat-foxtail.gif" alt="Tuxedo cat vs. foxtail toy" width="360">

<sub>9 frames · 390×439 · 1.3s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A simple black-and-white anime-style tuxedo cat sitting up and swatting at a foxtail grass toy dangling from above, ears flattened, tail twitching. Clean line art on a white background.
```

`sticker` `cat` `monochrome`

### 49. Hamster courier

<img src="gifs/hamster-courier.gif" alt="Hamster courier" width="360">

<sub>9 frames · 433×388 · 1.4s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A small golden hamster in a tiny brown courier cap pushing a cardboard parcel twice its size across the floor, cheeks puffed with effort and feet scrabbling. Cozy cartoon sticker on a white background.
```

`sticker` `work` `hamster`

### 50. Grandma in her Sunday hat

<img src="gifs/sunday-hat-grandma.gif" alt="Grandma in her Sunday hat" width="360">

<sub>9 frames · 437×390 · 1.6s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A cheerful cartoon grandma in a big floral Sunday hat and a pearl necklace clapping and swaying side to side to music, eyes closed in joy. Warm flat illustration on a soft pink background.
```

`sticker` `joy` `character`

### 51. Cardboard robot breakdance

<img src="gifs/box-robot-breakdance.gif" alt="Cardboard robot breakdance" width="360">

<sub>9 frames · 440×388 · 1.6s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A robot made from cardboard boxes with bottle-cap eyes doing a breakdance toprock step, then dropping into a one-hand freeze on a flattened cardboard mat. Hand-drawn marker style on white paper.
```

`sticker` `dance` `robot`

### 52. Corgi begs for a snack

<img src="gifs/corgi-snack-beg.gif" alt="Corgi begs for a snack" width="360">

<sub>9 frames · 412×412 · 1.4s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A fluffy corgi mascot staring up at a treat just above its head, drooling, wiggling its round butt and doing a little hop. Cute vector sticker on a white background.
```

`sticker` `dog` `food`

### 53. Dramatic poodle faint

<img src="gifs/poodle-dramatic-faint.gif" alt="Dramatic poodle faint" width="360">

<sub>9 frames · 439×390 · 1.4s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A white poodle mascot striking a dramatic pose, pressing a paw to its forehead and swooning backward onto a red velvet cushion. Exaggerated theatrical cartoon on a cream background.
```

`sticker` `drama` `dog`

### 54. White cat and yarn ball

<img src="gifs/white-cat-yarn.gif" alt="White cat and yarn ball" width="360">

<sub>9 frames · 439×390 · 1.4s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A fluffy white kitten batting a red yarn ball, rolling onto its back with the ball in its paws, then popping back upright. Soft pastel cartoon on a pale lavender background.
```

`sticker` `cat` `play`

### 55. Flower-crown cat dance

<img src="gifs/flower-crown-cat-dance.gif" alt="Flower-crown cat dance" width="360">

<sub>9 frames · 414×414 · 1.3s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A grey cat wearing a crown of small daisies doing a happy side-step dance on its hind legs, front paws swinging. Flat cute illustration on a light green background.
```

`sticker` `cat` `dance`

### 56. Raincoat kid big jump

<img src="gifs/raincoat-kid-jump.gif" alt="Raincoat kid big jump" width="360">

<sub>9 frames · 431×394 · 1.4s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A chibi kid in a yellow raincoat crouching down, springing into a high jump with arms up, then landing with a little puff of dust. Side view, flat animation style on a white background.
```

`sticker` `jump` `character`

### 57. Mochi says OK

<img src="gifs/mochi-ok-bow.gif" alt="Mochi says OK" width="360">

<sub>9 frames · 414×414 · 1.6s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A round white mochi character with tiny arms bowing politely and then popping up holding an "OK!" sign, cheeks blushing. LINE-sticker style with thick outlines on a white background.
```

`sticker` `caption` `ok`

### 58. Snail mail delivery

<img src="gifs/snail-mail-delivery.gif" alt="Snail mail delivery" width="360">

<sub>9 frames · 437×387 · 1.6s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A small snail with a tiny leather postbag slowly sliding forward and holding out an envelope with its antennae, smiling proudly. Soft storybook illustration on a cream background.
```

`sticker` `mail` `slow`

### 59. Surprised toast pops up

<img src="gifs/toaster-pop-surprise.gif" alt="Surprised toast pops up" width="360">

<sub>9 frames · 438×390 · 1.4s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
Two slices of toast with cartoon faces popping out of a chrome toaster, flipping in the air with surprised expressions, then dropping back in. Glossy 3D cartoon on a pale orange background.
```

`sticker` `food` `surprise`

### 60. Cactus wants a hug

<img src="gifs/cactus-hug-ouch.gif" alt="Cactus wants a hug" width="360">

<sub>9 frames · 409×414 · 1.6s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A small potted cactus character opening its spiky arms wide for a hug, then looking down at its spines and drooping sadly. Flat cute illustration on a white background.
```

`sticker` `hug` `sad`

### 61. Axolotl blows a bubble

<img src="gifs/axolotl-bubble.gif" alt="Axolotl blows a bubble" width="360">

<sub>16 frames · 378×241 · 2.2s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A pink axolotl with frilly gills puffing its cheeks to blow a round bubble that grows, pops, and leaves it blinking in surprise. Soft cartoon style, light aqua background.
```

`sticker` `water` `cute`

### 62. Sloth wakes up with coffee

<img src="gifs/sloth-coffee-wake.gif" alt="Sloth wakes up with coffee" width="360">

<sub>16 frames · 384×262 · 2.9s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A sleepy sloth hanging from a branch slowly sipping coffee from a tiny cup, then its eyes pop wide open with sparkles. Soft cartoon sticker on a white background.
```

`sticker` `coffee` `morning`

### 63. Frog puddle jump

<img src="gifs/frog-puddle-jump.gif" alt="Frog puddle jump" width="360">

<sub>16 frames · 378×245 · 2.2s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A small green frog in a red raincoat leaping into a puddle, water splashing up in a crown, then giving a happy little wave. Bright cartoon style on a white background.
```

`sticker` `rain` `frog`

### 64. Bunny rolling on the floor crying

<img src="gifs/crying-roll-floor.gif" alt="Bunny rolling on the floor crying" width="360">

<sub>9 frames · 439×390 · 1.3s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A chubby cream-colored cartoon bunny lying on its back on the floor, kicking its little legs and rolling side to side while sobbing, big cartoon tears flying off both sides. Thick outlines, flat colors, plain pale pink background.
```

`sticker` `crying` `bunny`

### 65. 90s anime gasp

<img src="gifs/anime-90s-gasp.gif" alt="90s anime gasp" width="360">

<sub>9 frames · 433×395 · 1.6s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A 1990s cel-animation style girl with two long auburn braids, a band of freckles across her nose, round glasses and a green denim jacket gasping in shock: her eyes go wide behind the glasses, a big sweat drop appears beside her head, then her shoulders drop. Soft film grain, VHS-era color palette, plain lavender background.
```

> 💡 **Tip:** Name the decade and medium (cel animation, film grain, VHS palette) and keep the character design generic so it doesn't drift toward a known show.

`anime` `retro` `reaction`

### 66. 90s anime blush

<img src="gifs/anime-90s-blush.gif" alt="90s anime blush" width="360">

<sub>9 frames · 439×390 · 1.4s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A 1990s cel-animation style boy with messy brown hair and a red scarf blushing: pink hatched lines spread across his cheeks, he looks away and scratches the back of his head. Soft film grain, VHS-era color palette, plain peach background.
```

`anime` `retro` `reaction`

### 67. Otter holding a thank-you sign

<img src="gifs/otter-thank-you.gif" alt="Otter holding a thank-you sign" width="360">

<sub>9 frames · 438×389 · 1.6s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A small brown cartoon otter holding up a little wooden sign that reads "THANK YOU", bowing forward and popping back up with a happy squint, tiny hearts floating above. Thick outlines, flat colors, plain mint background.
```

> 💡 **Tip:** Short words in quotes usually stay legible; check every frame for letter changes.

`sticker` `thanks` `text`

### 68. Shrimp saved by a recovered file

<img src="gifs/shrimp-file-rescued.gif" alt="Shrimp saved by a recovered file" width="360">

<sub>9 frames · 432×394 · 1.6s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A small pink cartoon shrimp in a tiny office lanyard hugging a glowing blue folder icon to its chest, crying tears of relief and bouncing up and down with joy. Thick outlines, flat colors, plain white background.
```

`sticker` `office` `relief`

### 69. Panda resting on a cushion

<img src="gifs/panda-cushion-rest.gif" alt="Panda resting on a cushion" width="360">

<sub>9 frames · 438×390 · 2.7s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A chubby cartoon panda leaning back on a big round yellow cushion, slowly closing its eyes and letting out a long relaxed sigh, a small "zzz" drifting up. Soft watercolor texture, gentle outlines, plain cream background.
```

`sticker` `rest` `panda`

### 70. Hedgehog hugging a sweet potato

<img src="gifs/hedgehog-sweet-potato.gif" alt="Hedgehog hugging a sweet potato" width="360">

<sub>9 frames · 439×390 · 1.4s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A tiny cartoon hedgehog hugging a roasted sweet potato almost as big as itself, steam rising from the cracked skin, the hedgehog taking a happy nibble and wiggling. Crayon doodle style on plain off-white paper.
```

`sticker` `food` `doodle`

### 71. Caveman shrug

<img src="gifs/caveman-shrug.gif" alt="Caveman shrug" width="360">

<sub>9 frames · 439×387 · 1.6s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A stocky cartoon caveman with a wild orange beard, a bone hair clip and a spotted fur tunic shrugging with both palms up and an unimpressed face, eyebrows bouncing once. Thick outlines, flat colors, plain sand-colored background.
```

`sticker` `shrug` `reaction`

### 72. Too many emails, close laptop

<img src="gifs/inbox-close-laptop.gif" alt="Too many emails, close laptop" width="360">

<sub>9 frames · 436×390 · 1.6s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A cartoon office worker with round glasses opening a laptop, the screen showing a red badge with a huge unread count, their face going pale, then slowly closing the laptop again. Exaggerated expressions, thick outlines, flat colors, plain light grey background.
```

`sticker` `office` `email`

### 73. Smug raccoon says no thanks

<img src="gifs/smug-raccoon-no-thanks.gif" alt="Smug raccoon says no thanks" width="360">

<sub>9 frames · 437×386 · 1.4s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A smug cartoon raccoon in pink heart-shaped sunglasses lounging in a beach chair, sipping a juice box and lazily waving one paw in a "no thanks" gesture, eyebrows raised. Thick outlines, flat colors, plain sky-blue background.
```

`sticker` `smug` `reaction`

### 74. Monday desk slump

<img src="gifs/monday-cat-slump.gif" alt="Monday desk slump" width="360">

<sub>16 frames · 309×306 · 2.9s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A chubby orange cat wearing a navy necktie slumping over a laptop, sinking lower and lower until it disappears behind the desk, then popping back up with a tired face. The word "MONDAY." printed above in bold letters. Thick outlines, flat colors, plain white background.
```

`sticker` `office` `monday` `text`

### 75. Collapsed souffle tears

<img src="gifs/souffle-collapse-cry.gif" alt="Collapsed souffle tears" width="360">

<sub>9 frames · 439×390 · 2.0s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A chibi baker girl in a white apron pulling a tall souffle out of the oven, the souffle sinking flat, her eyes filling with tears, then she shrugs and takes a spoonful. Soft pastel cartoon, plain warm beige background.
```

> 💡 **Tip:** Four beats (pull out, collapse, cry, eat) fit a 6-frame sprite sheet; more beats make each step blur together.

`sticker` `baking` `chibi`

### 76. Tabby cat double take

<img src="gifs/tabby-double-take.gif" alt="Tabby cat double take" width="360">

<sub>9 frames · 439×390 · 1.6s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A calm orange tabby cat sitting sideways, then suddenly turning toward the viewer: its eyes go huge, ears shoot up, mouth drops open, then it settles back to calm. Clean cartoon style, plain pale yellow background.
```

`sticker` `cat` `shocked`

### 77. Capybara: OK

<img src="gifs/capybara-ok.gif" alt="Capybara: OK" width="360">

<sub>8 frames · 439×389 · 1.4s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
a round brown cartoon capybara with a small orange yuzu balanced on its head, sleepy half-closed eyes and a calm smile, thick clean outlines, flat pastel colors, plain cream background. The capybara slowly raises one stubby paw into an OK sign and nods once, the yuzu wobbling on its head.
```

> 💡 **Tip:** All four capybara entries share the exact same character description so the set stays consistent.

`sticker` `capybara` `series`

### 78. Capybara: sleepy nod

<img src="gifs/capybara-sleepy-nod.gif" alt="Capybara: sleepy nod" width="360">

<sub>9 frames · 435×387 · 1.6s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
a round brown cartoon capybara with a small orange yuzu balanced on its head, sleepy half-closed eyes and a calm smile, thick clean outlines, flat pastel colors, plain cream background. The capybara's head slowly droops forward as it dozes off, then jerks back up, the yuzu nearly falling off.
```

`sticker` `capybara` `series`

### 79. Capybara: cheering

<img src="gifs/capybara-cheer.gif" alt="Capybara: cheering" width="360">

<sub>9 frames · 433×393 · 1.4s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
a round brown cartoon capybara with a small orange yuzu balanced on its head, sleepy half-closed eyes and a calm smile, thick clean outlines, flat pastel colors, plain cream background. The capybara waves two tiny pom-poms above its head and bounces, small sparkles popping around it.
```

`sticker` `capybara` `series`

### 80. Capybara: hot spring

<img src="gifs/capybara-bath.gif" alt="Capybara: hot spring" width="360">

<sub>9 frames · 439×387 · 2.0s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
a round brown cartoon capybara with a small orange yuzu balanced on its head, sleepy half-closed eyes and a calm smile, thick clean outlines, flat pastel colors, plain cream background. The capybara sits up to its chin in a small round hot spring, steam curling up, eyes closing in bliss as it sinks slightly lower.
```

`sticker` `capybara` `series`

### 81. Koala jolted awake

<img src="gifs/koala-coffee-jolt.gif" alt="Koala jolted awake" width="360">

<sub>16 frames · 378×246 · 2.9s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A sleepy grey cartoon koala hugging a giant mug, nodding off until its nose dips into the coffee, then jolting wide awake with spiky fur. Thick outlines, flat colors, plain soft green background.
```

`sticker` `coffee` `sleepy`

### 82. Duckling in big headphones

<img src="gifs/duckling-headphones-bop.gif" alt="Duckling in big headphones" width="360">

<sub>16 frames · 308×309 · 1.9s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A fluffy yellow duckling wearing oversized purple headphones, eyes closed, bobbing its head and tapping one foot to the beat, small music notes floating around. Thick outlines, flat colors, plain lilac background.
```

`sticker` `music` `duck`

### 83. Tortoise: on my way

<img src="gifs/tortoise-on-my-way.gif" alt="Tortoise: on my way" width="360">

<sub>16 frames · 378×253 · 1.8s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A green cartoon tortoise with a tiny backpack running as fast as it can, legs spinning in a blur with speed lines and sweat drops, but barely moving forward. Thick outlines, flat colors, plain white background.
```

`sticker` `late` `funny`

### 84. Raccoon finds a treasure

<img src="gifs/raccoon-box-treasure.gif" alt="Raccoon finds a treasure" width="360">

<sub>16 frames · 380×251 · 2.2s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A grey cartoon raccoon popping up out of a cardboard box holding a shiny silver spoon high above its head, eyes sparkling proudly, a little gleam flashing on the spoon. Thick outlines, flat colors, plain orange background.
```

`sticker` `proud` `raccoon`

### 85. Dinosaur tiny-arm clap

<img src="gifs/dino-tiny-clap.gif" alt="Dinosaur tiny-arm clap" width="360">

<sub>12 frames · 358×358 · 1.7s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A chubby mint-green cartoon dinosaur trying hard to clap with its very short arms, the paws barely reaching, its face scrunched in effort, then a proud grin. Thick outlines, flat colors, plain peach background.
```

`sticker` `clap` `dinosaur`

### 86. Owl side-eye

<img src="gifs/owl-side-eye.gif" alt="Owl side-eye" width="360">

<sub>9 frames · 439×389 · 2.0s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A round brown cartoon owl perched on a branch, slowly turning its eyes sideways toward the viewer and raising one feathery eyebrow in suspicion, then blinking once. Thick outlines, flat colors, plain teal background.
```

`sticker` `side-eye` `reaction`

### 87. Cloud sneezes rain

<img src="gifs/cloud-sneeze-rain.gif" alt="Cloud sneezes rain" width="360">

<sub>9 frames · 414×414 · 1.6s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A small fluffy white cloud character with rosy cheeks scrunching up its face and sneezing, a burst of raindrops and a tiny rainbow shooting out, then sniffling. Thick outlines, flat colors, plain sky-blue background.
```

`sticker` `weather` `cute`

### 88. Pug blows out a candle

<img src="gifs/pug-birthday-blow.gif" alt="Pug blows out a candle" width="360">

<sub>9 frames · 439×390 · 1.6s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A pug in a striped party hat puffing its cheeks and blowing out a single candle on a pink cupcake, the flame going out and colorful confetti popping up. Thick outlines, flat colors, plain yellow background.
```

`sticker` `birthday` `dog`

### 89. Alpaca hair flip

<img src="gifs/alpaca-hair-flip.gif" alt="Alpaca hair flip" width="360">

<sub>9 frames · 436×390 · 1.3s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A fluffy white cartoon alpaca with a huge curly fringe tossing its head to flip the fringe out of its eyes, then posing with a confident wink. Thick outlines, flat colors, plain pink background.
```

`sticker` `sassy` `alpaca`

### 90. Cherry cake hat sprite waves

<img src="gifs/cherry-cake-hat-sprite.gif" alt="Cherry cake hat sprite waves" width="360">

<sub>9 frames · 438×386 · 1.3s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A tiny round cream-colored creature wearing a little strawberry shortcake with a cherry on top as a hat. It waves one stubby arm and does a small happy bounce, the cherry wobbling. Soft pastel sticker style, thick outline, plain white background.
```

`sticker` `cute` `original-character`

### 91. Cream puff stretch and yawn

<img src="gifs/cream-puff-yawn.gif" alt="Cream puff stretch and yawn" width="360">

<sub>9 frames · 412×412 · 1.6s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A chubby cream puff character with tiny arms stretches upward and lets out a big yawn, a little cream squishing out of its top, then settles back down sleepily. Kawaii sticker style, bold outline, plain pale yellow background.
```

`sticker` `sleepy` `food`

### 92. Cat-ear hoodie girl nods yes

<img src="gifs/cat-ear-hood-nod.gif" alt="Cat-ear hoodie girl nods yes" width="360">

<sub>9 frames · 444×394 · 1.4s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A chibi girl in an oversized mint hoodie with cat ears on the hood nods eagerly twice, the ears flopping, eyes closed in a happy smile. Clean anime-inspired chibi sticker style, plain white background.
```

`sticker` `yes` `chibi`

### 93. Bear slips on a banana peel

<img src="gifs/bear-banana-slip.gif" alt="Bear slips on a banana peel" width="360">

<sub>12 frames · 356×358 · 1.9s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A round brown cartoon bear walks forward, steps on a banana peel, and flips onto its back with legs in the air and stars circling its head. Slapstick sticker style, thick outline, plain white background.
```

`sticker` `slapstick` `fail`

### 94. Rabbit comedic fan smack

<img src="gifs/rabbit-fan-smack.gif" alt="Rabbit comedic fan smack" width="360">

<sub>9 frames · 432×395 · 1.1s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A white rabbit in a tiny bow tie swings a folded paper fan sideways in a classic comedy retort gesture, mouth open mid-shout, with speed lines. Bold manga-comedy sticker style, plain white background.
```

`sticker` `reaction` `comedy`

### 95. Pigeon spit-take

<img src="gifs/pigeon-spit-take.gif" alt="Pigeon spit-take" width="360">

<sub>8 frames · 437×383 · 1.1s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A gray city pigeon holding a tiny teacup takes a sip and sprays the tea out in a dramatic spit-take, eyes bulging. Cartoon sticker style, thick outline, plain light blue background.
```

`sticker` `reaction` `shock`

### 96. Round robot hears good news

<img src="gifs/robot-good-news.gif" alt="Round robot hears good news" width="360">

<sub>16 frames · 380×252 · 2.2s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A small round white robot with a screen face: its pixel eyes grow wide and sparkly, both little arms shoot up in celebration, then it returns to a neutral pose. High-contrast flat shapes, pale blue background.
```

`sticker` `celebrate` `robot`

### 97. Monkey on roller skates

<img src="gifs/monkey-roller-skate.gif" alt="Monkey on roller skates" width="360">

<sub>9 frames · 439×390 · 1.4s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A cheerful cartoon monkey in red roller skates glides along a sidewalk, arms out for balance, its tail swaying behind. Bright flat illustration, simple sidewalk and plain sky background, side view.
```

`character` `skate` `animal`

### 98. Bubblegum bubble pops in a neon diner

<img src="gifs/bubblegum-diner-pop.gif" alt="Bubblegum bubble pops in a neon diner" width="360">

<sub>9 frames · 435×386 · 2.0s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
An illustrated girl in a retro neon diner booth at night slowly blows a big pink bubblegum bubble until it pops on her face. Pink and teal neon lighting, stylized illustration, fixed camera.
```

`reaction` `neon` `retro`

### 99. Horned chibi girl twirls

<img src="gifs/horned-chibi-twirl.gif" alt="Horned chibi girl twirls" width="360">

<sub>12 frames · 358×358 · 1.9s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A chibi girl with small curled ivory horns, wearing a ruffled lavender gown, does a little twirl so the skirt flares out, then curtsies. Soft cel-shaded chibi style, plain cream background.
```

`dance` `chibi` `original-character`

### 100. Cactus reads the newspaper

<img src="gifs/cactus-newspaper-read.gif" alt="Cactus reads the newspaper" width="360">

<sub>9 frames · 439×390 · 1.6s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A green cactus character wearing a wide straw hat sits on a stool reading a newspaper, peeks over the top with raised eyebrows, then flips the page. Flat cartoon style, plain sandy background.
```

`sticker` `reading` `plant`

### 101. Young mage levitates a glowing orb

<img src="gifs/mage-floating-orb.gif" alt="Young mage levitates a glowing orb" width="360">

<sub>9 frames · 433×387 · 1.4s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A young mage in a hooded blue cloak holds both palms apart while a glowing turquoise orb floats and slowly rotates between them, sparks circling. Anime-style illustration, dark gradient background.
```

`magic` `character` `glow`

### 102. Chick bounce entrance

<img src="gifs/chick-bounce-entrance.gif" alt="Chick bounce entrance" width="360">

<sub>9 frames · 432×393 · 1.3s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A fluffy yellow chick drops in from above, squashes flat on landing, springs back up, and strikes a proud pose with one wing raised. Squash-and-stretch cartoon style, plain white background.
```

`entrance` `sticker` `bounce`

### 103. Sheep fluffs up and dozes

<img src="gifs/sheep-fluff-doze.gif" alt="Sheep fluffs up and dozes" width="360">

<sub>9 frames · 414×413 · 1.6s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A round fluffy sheep slowly puffs up its wool like a cloud, its eyes droop closed, and small Z letters float up. Soft pastel sticker style, plain lilac background.
```

`sticker` `sleepy` `animal`

### 104. Octopus types on four keyboards

<img src="gifs/octopus-four-keyboards.gif" alt="Octopus types on four keyboards" width="360">

<sub>9 frames · 438×387 · 1.3s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A purple cartoon octopus wearing glasses types furiously on four keyboards at once, tentacles moving in turn, a tiny sweat drop flying off. Flat office-humor sticker style, plain white background.
```

`sticker` `work` `busy`

### 105. Duck mic drop

<img src="gifs/duck-mic-drop.gif" alt="Duck mic drop" width="360">

<sub>12 frames · 356×356 · 1.9s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A white duck in sunglasses holds a tiny microphone out at wing's length, drops it, and turns away with a smug look. Cartoon sticker style, thick outline, plain yellow background.
```

`sticker` `smug` `reaction`

### 106. Mushroom nods yes

<img src="gifs/mushroom-yes-nod.gif" alt="Mushroom nods yes" width="360">

<sub>9 frames · 412×413 · 1.4s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A small red-capped mushroom character with white spots nods enthusiastically, its cap bouncing up and down, cheeks blushing. Cute sticker style, plain mint background.
```

`sticker` `yes` `cute`

### 107. Tofu shivers in the cold

<img src="gifs/tofu-shiver-cold.gif" alt="Tofu shivers in the cold" width="360">

<sub>16 frames · 324×295 · 1.9s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A soft white tofu block character wrapped in a tiny scarf shivers hard, teeth chattering, with a little icicle hanging from its edge and snowflakes drifting. Kawaii sticker style, plain icy blue background.
```

`sticker` `cold` `food`

### 108. Dumpling hides a blush

<img src="gifs/dumpling-blush-hide.gif" alt="Dumpling hides a blush" width="360">

<sub>9 frames · 437×388 · 1.6s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A plump steamed dumpling character covers its face with tiny hands, peeks out between them, and blushes bright pink. Kawaii sticker style, bold outline, plain white background.
```

`sticker` `shy` `food`

### 109. Angry goose honks

<img src="gifs/goose-honk-flap.gif" alt="Angry goose honks" width="360">

<sub>16 frames · 380×250 · 1.9s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A white goose stretches its neck forward, flaps its wings wide, and honks angrily with its beak open, a little cartoon anger mark above its head. Cartoon sticker style, plain light green background.
```

`sticker` `angry` `animal`

### 110. Office bear: Monday sigh

<img src="gifs/bear-monday-sigh.gif" alt="Office bear: Monday sigh" width="360">

<sub>9 frames · 436×386 · 1.6s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a chubby cartoon brown bear office worker in a loose blue tie and a lanyard badge, round ears, small dot eyes, thick clean outlines, flat pastel colors, plain cream background. The bear slumps forward over a coffee mug, shoulders rising and falling with a long sigh, a small gray puff of breath drifting out.
```

`sticker` `bear` `series` `office`

### 111. Office bear: eye roll

<img src="gifs/bear-read-eye-roll.gif" alt="Office bear: eye roll" width="360">

<sub>12 frames · 356×357 · 1.9s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a chubby cartoon brown bear office worker in a loose blue tie and a lanyard badge, round ears, small dot eyes, thick clean outlines, flat pastel colors, plain cream background. The bear holds a phone, glances at it, then rolls its eyes up dramatically and lets the phone drop to its side.
```

`sticker` `bear` `series` `reaction`

### 112. Office bear: sneaky snack

<img src="gifs/bear-sneaky-snack.gif" alt="Office bear: sneaky snack" width="360">

<sub>12 frames · 356×355 · 2.2s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a chubby cartoon brown bear office worker in a loose blue tie and a lanyard badge, round ears, small dot eyes, thick clean outlines, flat pastel colors, plain cream background. Hiding behind a laptop screen, the bear peeks left and right, then quickly pops a cookie into its mouth and chews with puffed cheeks.
```

`sticker` `bear` `series` `office`

### 113. Office bear: overtime wail

<img src="gifs/bear-overtime-wail.gif" alt="Office bear: overtime wail" width="360">

<sub>9 frames · 414×412 · 1.6s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a chubby cartoon brown bear office worker in a loose blue tie and a lanyard badge, round ears, small dot eyes, thick clean outlines, flat pastel colors, plain cream background. At a desk piled with folders under a night-blue window, the bear opens its mouth wide and wails, two streams of tears spraying sideways.
```

`sticker` `bear` `series` `office`

### 114. Office bear: payday

<img src="gifs/bear-payday-laugh.gif" alt="Office bear: payday" width="360">

<sub>16 frames · 378×252 · 2.6s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a chubby cartoon brown bear office worker in a loose blue tie and a lanyard badge, round ears, small dot eyes, thick clean outlines, flat pastel colors, plain cream background. The bear throws its head back laughing while hugging a fat envelope, small coins bouncing up around it.
```

`sticker` `bear` `series` `money`

### 115. Office bear: clocking out

<img src="gifs/bear-clock-out-dash.gif" alt="Office bear: clocking out" width="360">

<sub>9 frames · 435×388 · 1.3s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a chubby cartoon brown bear office worker in a loose blue tie and a lanyard badge, round ears, small dot eyes, thick clean outlines, flat pastel colors, plain cream background. With a backpack on, the bear jogs in place with fast little legs, speed lines streaming behind and its tie flapping over its shoulder.
```

`sticker` `bear` `series` `office`

### 116. Christmas Eve apple unwrap

<img src="gifs/christmas-apple-unwrap.gif" alt="Christmas Eve apple unwrap" width="360">

<sub>16 frames · 378×242 · 2.9s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a cute cartoon red apple wrapped in a shiny gift wrapper with a green ribbon, on a plain mint background. Small hands pull off the wrapper, revealing another wrapper underneath, and the apple gives a puzzled blink. Flat sticker style, thick outlines.
```

`sticker` `christmas` `holiday`

### 117. Asleep at the countdown

<img src="gifs/countdown-asleep.gif" alt="Asleep at the countdown" width="360">

<sub>9 frames · 439×390 · 2.0s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a chibi kid in pajamas and a party hat sits on a sofa holding a tiny noisemaker; a wall clock shows one minute to midnight. The kid's head nods down slowly, jerks back up, then nods again with a floating Zzz. Cozy flat illustration, warm lamp light.
```

`sticker` `new-year` `holiday`

### 118. Red envelope: no, no, yes

<img src="gifs/red-envelope-pocket.gif" alt="Red envelope: no, no, yes" width="360">

<sub>9 frames · 438×389 · 1.6s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a round cartoon panda in a red padded jacket shakes its head and waves one paw in polite refusal, while its other paw quietly slips a red envelope into its jacket pocket. Flat sticker style, plain cream background, thick outlines.
```

`sticker` `lunar-new-year` `holiday`

### 119. End-screen wave

<img src="gifs/end-screen-wave.gif" alt="End-screen wave" width="360">

<sub>9 frames · 500×332 · 1.4s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a friendly cartoon robot with a round screen face showing a smile stands on the right side of a plain coral background, waves one hand and points to a blank rounded rectangle on the left where a red bell icon gives a little shake. Flat vector style.
```

`creator` `video` `mascot`

### 120. Desk stretch break

<img src="gifs/desk-stretch-break.gif" alt="Desk stretch break" width="360">

<sub>16 frames · 379×252 · 2.9s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a chibi office worker with messy hair types fast on a laptop, then leans back and stretches both arms high with a big yawn before returning to typing. Flat pastel illustration, plain light gray background.
```

`sticker` `office` `work`

### 121. Deadline hamster on fire

<img src="gifs/hamster-deadline-fire.gif" alt="Deadline hamster on fire" width="360">

<sub>9 frames · 433×395 · 1.4s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a tiny golden hamster in round glasses types furiously on a little keyboard while a cartoon flame burns on top of its head and sweat drops fly off. White sticker border, flat colors, plain pale yellow background.
```

`sticker` `deadline` `work`

### 122. Avocado OMG jump

<img src="gifs/avocado-omg-jump.gif" alt="Avocado OMG jump" width="360">

<sub>9 frames · 436×390 · 1.4s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a cartoon avocado half with a big seed belly and tiny arms leaps up in surprise, eyes wide and mouth open, a speech bubble reading OMG! popping beside it. Bold outlines, flat colors, plain white background.
```

`sticker` `food` `text`

### 123. Plush bear sipping cocoa

<img src="gifs/plush-bear-cocoa.gif" alt="Plush bear sipping cocoa" width="360">

<sub>9 frames · 439×390 · 1.6s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a soft plush teddy bear with visible fabric texture and stitched seams holds a big mug with both paws, takes a slow sip, and closes its eyes contentedly as steam curls up. Cozy warm lighting, plain oatmeal background.
```

`sticker` `plush` `cozy`

### 124. Mood toggle cube

<img src="gifs/cube-mood-toggle.gif" alt="Mood toggle cube" width="360">

<sub>12 frames · 358×358 · 2.6s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a cute pastel yellow cube character with stubby legs stands still and switches expressions: a grumpy frown with a small storm cloud, then a big grin with sparkles. Kawaii flat style, plain light blue background.
```

`sticker` `emotion` `reaction`

### 125. Penguin belly slide

<img src="gifs/penguin-belly-slide.gif" alt="Penguin belly slide" width="360">

<sub>12 frames · 356×357 · 1.7s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a round cartoon penguin with a tiny red beanie slides on its belly across a patch of ice, flaps its flippers happily and gives a little wave. Flat colors, thick outlines, plain icy blue background.
```

`sticker` `penguin` `winter`

### 126. Fox spills coffee

<img src="gifs/fox-coffee-oops.gif" alt="Fox spills coffee" width="360">

<sub>9 frames · 413×412 · 1.3s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a cartoon orange fox in a green hoodie bumps a coffee cup, the coffee splashes up, and the fox freezes with a wide-eyed oops face and paws on its cheeks. Flat sticker style, plain cream background.
```

`sticker` `fox` `oops`

### 127. Slow thumbs up

<img src="gifs/turtle-slow-thumbs-up.gif" alt="Slow thumbs up" width="360">

<sub>9 frames · 437×386 · 2.7s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a sleepy green cartoon turtle in a tiny knit cap very slowly raises one flipper into a thumbs-up and gives a lazy smile. Flat pastel colors, thick outlines, plain light peach background.
```

`sticker` `turtle` `approval`

### 128. Upside-down bat goodnight

<img src="gifs/bat-upside-goodnight.gif" alt="Upside-down bat goodnight" width="360">

<sub>9 frames · 430×391 · 2.0s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a fluffy little purple bat hangs upside down from a branch, wraps its wings around itself and sways gently while a small crescent moon and Zzz float nearby. Kawaii flat style, plain midnight blue background.
```

`sticker` `goodnight` `bat`

### 129. Bunny carrot crunch

<img src="gifs/bunny-carrot-crunch.gif" alt="Bunny carrot crunch" width="360">

<sub>16 frames · 379×247 · 1.6s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a white cartoon bunny with floppy ears holds a big carrot and munches quickly, cheeks bouncing, small orange crumbs flying off. Flat colors, plain pale green background.
```

`sticker` `bunny` `food`

### 130. Lamb says sorry

<img src="gifs/lamb-sorry-bow.gif" alt="Lamb says sorry" width="360">

<sub>16 frames · 322×293 · 2.2s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a fluffy cartoon lamb with a cloud-like wool coat presses its hooves together and bows deeply, a small sweat drop and a pink heart appearing above. Soft pastel flat style, plain lavender background.
```

`sticker` `apology` `lamb`

### 131. Juggling squirrel

<img src="gifs/squirrel-acorn-juggle.gif" alt="Juggling squirrel" width="360">

<sub>16 frames · 326×291 · 1.9s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a red cartoon squirrel with a huge fluffy tail juggles three acorns in an arc, tongue out in concentration. Flat colors, thick outlines, plain warm beige background.
```

`sticker` `squirrel` `fun`

### 132. Whale spout hello

<img src="gifs/whale-spout-hello.gif" alt="Whale spout hello" width="360">

<sub>16 frames · 380×252 · 2.9s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a chubby baby blue whale bobs on small waves and puffs a water spout shaped like a heart from its blowhole, then smiles. Flat pastel style, plain aqua background.
```

`sticker` `whale` `hello`

### 133. Cartoon shark fin wave

<img src="gifs/shark-fin-wave.gif" alt="Cartoon shark fin wave" width="360">

<sub>9 frames · 437×387 · 1.4s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A chubby light-blue cartoon shark pops halfway out of a tiny wave, waves one fin hello and grins showing round teeth. Flat colors, thick outlines, plain white background.
```

`sticker` `shark` `hello`

### 134. Hedgehog blush hide

<img src="gifs/hedgehog-blush-hide.gif" alt="Hedgehog blush hide" width="360">

<sub>9 frames · 439×390 · 1.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A tiny brown hedgehog with pink cheeks hears a compliment, blushes bright red and curls up into a spiky ball, then peeks out with one eye. Soft kawaii sticker style, plain cream background.
```

`sticker` `hedgehog` `shy`

### 135. Frog noted salute

<img src="gifs/frog-noted-salute.gif" alt="Frog noted salute" width="360">

<sub>9 frames · 412×412 · 1.4s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A round green frog in a tiny yellow raincoat stands up straight and gives a crisp salute, its cheeks puffing proudly. Chunky cartoon sticker, thick white outline, plain mint background.
```

`sticker` `frog` `ok`

### 136. Bunny head pat melt

<img src="gifs/bunny-headpat-melt.gif" alt="Bunny head pat melt" width="360">

<sub>9 frames · 437×386 · 1.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A small white bunny receives gentle pats from a hand entering the frame and slowly melts into a happy flat puddle with closed eyes. Pastel sticker style, plain lilac background.
```

`sticker` `bunny` `cute`

### 137. Cat keyboard rage

<img src="gifs/cat-keyboard-rage.gif" alt="Cat keyboard rage" width="360">

<sub>9 frames · 413×413 · 1.3s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
An angry gray cat with a furrowed brow mashes a tiny keyboard with both paws, little key caps flying off with each hit. Bold cartoon sticker, plain light gray background.
```

`sticker` `cat` `work`

### 138. Penguin needs coffee

<img src="gifs/penguin-coffee-refill.gif" alt="Penguin needs coffee" width="360">

<sub>9 frames · 414×414 · 1.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A sleepy penguin holds up an empty mug, shakes it upside down, and droops with heavy eyelids. Simple flat sticker style, plain pale blue background.
```

`sticker` `penguin` `coffee`

### 139. Puppy zoomies

<img src="gifs/puppy-zoomies-circle.gif" alt="Puppy zoomies" width="360">

<sub>9 frames · 439×386 · 1.0s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A fluffy cream puppy spins in fast happy circles chasing its own tail, ears flapping, little dust puffs behind it. Cute cartoon sticker, plain peach background.
```

`sticker` `dog` `happy`

### 140. Owl big yawn

<img src="gifs/owl-big-yawn.gif" alt="Owl big yawn" width="360">

<sub>9 frames · 437×388 · 1.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A round brown owl on a branch stretches its wings and lets out a huge yawn, eyes squeezing shut, then settles back down. Soft storybook sticker, plain navy background.
```

`sticker` `owl` `sleepy`

### 141. Angry tomato steam

<img src="gifs/tomato-angry-steam.gif" alt="Angry tomato steam" width="360">

<sub>9 frames · 435×386 · 1.4s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A cartoon tomato character turns from red to deep crimson, shakes with anger and puffs steam from its leafy top. Flat sticker style, thick outlines, plain white background.
```

`sticker` `food` `angry`

### 142. Bao bun wiggle dance

<img src="gifs/bao-bun-wiggle.gif" alt="Bao bun wiggle dance" width="360">

<sub>9 frames · 412×411 · 1.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A soft steamed bao bun with a tiny face wiggles side to side on a bamboo steamer, little steam curls rising above it. Cute kawaii sticker, plain warm beige background.
```

`sticker` `food` `dance`

### 143. Shy ghost boo

<img src="gifs/ghost-boo-oops.gif" alt="Shy ghost boo" width="360">

<sub>9 frames · 438×390 · 1.4s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A tiny white ghost jumps out shouting boo with raised arms, then immediately hides its face embarrassed. Simple cartoon sticker, plain dark purple background.
```

`sticker` `ghost` `funny`

### 144. Panda bamboo thumbs up

<img src="gifs/panda-bamboo-thumbs.gif" alt="Panda bamboo thumbs up" width="360">

<sub>9 frames · 414×414 · 1.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A chubby panda chewing a bamboo stalk gives a slow confident thumbs up and nods once. Flat sticker style, plain light green background.
```

`sticker` `panda` `ok`

### 145. Cat full HP revive

<img src="gifs/cat-full-hp-revive.gif" alt="Cat full HP revive" width="360">

<sub>9 frames · 432×393 · 1.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A limp flattened orange cat lies on the floor, a green health bar above it fills up, and the cat springs up with sparkling eyes and a fist pump. Chunky cartoon sticker, plain white background.
```

`sticker` `cat` `energy`

### 146. Two mice dancing

<img src="gifs/two-mice-dance.gif" alt="Two mice dancing" width="360">

<sub>9 frames · 439×390 · 1.4s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
Two little gray mice hold paws and do a happy hopping dance in a circle, tails swinging. Cute flat sticker style, plain pale yellow background.
```

`sticker` `mouse` `dance`

### 147. Snowman mitten wave

<img src="gifs/snowman-mitten-wave.gif" alt="Snowman mitten wave" width="360">

<sub>16 frames · 378×250 · 2.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A small round snowman with a red knitted scarf and blue mittens waves one arm while light snowflakes drift around it. Cozy winter sticker style, plain light blue background.
```

`sticker` `winter` `snowman`

### 148. Lazy lion in a Santa hat

<img src="gifs/lazy-lion-santa-hat.gif" alt="Lazy lion in a Santa hat" width="360">

<sub>8 frames · 438×377 · 1.4s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A droopy-eyed chubby lion wearing a Santa hat sighs heavily, its mane flopping, then gives a half-hearted wave. Soft cartoon sticker, plain red background.
```

`sticker` `christmas` `lion`

### 149. Cat: that costs extra

<img src="gifs/cat-pay-me-extra.gif" alt="Cat: that costs extra" width="360">

<sub>9 frames · 414×414 · 1.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A businesslike white cat in a tiny tie rubs its paw pads together, and small gold coins pop up beside it one by one. Flat cartoon sticker, plain light gray background.
```

`sticker` `cat` `work`

### 150. Cat refuses to go to work

<img src="gifs/cat-refuse-work-bed.gif" alt="Cat refuses to go to work" width="360">

<sub>9 frames · 433×395 · 1.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A tabby cat clings to a pillow with all four paws and shakes its head no as an alarm clock rings beside it. Cartoon sticker style, plain lavender background.
```

`sticker` `cat` `monday`

### 151. Bunny hop with shadow

<img src="gifs/bunny-hop-shadow.gif" alt="Bunny hop with shadow" width="360">

<sub>9 frames · 439×390 · 1.3s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A white bunny hops in place, ears flopping on each landing while its oval shadow shrinks when it rises and grows when it lands. Simple soft sticker style, plain mint background.
```

`sticker` `bunny` `hop`

### 152. Chick under an umbrella

<img src="gifs/chick-umbrella-rain.gif" alt="Chick under an umbrella" width="360">

<sub>9 frames · 414×414 · 1.4s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A tiny yellow chick holds a red umbrella and twirls it while raindrops bounce off the top. Cute flat sticker style, plain gray-blue background.
```

`sticker` `rain` `chick`

## Flash Cuts & Brand Reels

### 153. Flower macro flash cut

<img src="gifs/flower-macro-flash.gif" alt="Flower macro flash cut" width="360">

<sub>8 frames · 380×508 · 3.6s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A fast flash-cut sequence of eight different flower photographs, one per frame, each filling the whole frame: a red poppy shot from above with light glowing through its petals, a creamy gardenia in soft side light, blue delphinium against a deep blue background, a golden marigold macro, a pink peony from a high angle, a dark purple iris close-up, an orange lily with curled petals, and pale green hydrangea with dew drops. Realistic botanical fashion photography, each frame with a different color, distance and composition.
```

> 💡 **Tip:** Describe every frame as a distinct shot. Changing color, angle and framing between frames is what makes a flash cut feel energetic.

`flash-cut` `photography` `editorial`

### 154. Cat-head logo brand reel

<img src="gifs/cat-brand-reel.gif" alt="Cat-head logo brand reel" width="360">

<sub>8 frames · 380×507 · 2.8s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A quick-cut brand reel for a fictional cat food brand called "MEOWBITE". The same flat dark-brown cat-head logo — round face, two short pointed ears, cream almond eyes, short whiskers — stays fixed at the center of every frame while everything around it changes: an orange full-bleed poster, a pink pouch of cat food, a blue ceramic cat bowl seen from above, a kraft shipping box, a round sticker, and a final dark frame with the word MEOWBITE in big cream letters. Bold graphic design, flat colors, citrus orange, cream and dark brown palette.
```

> 💡 **Tip:** Lock the logo's position and size in every frame and only change the surroundings — that is what makes a brand flash read as one identity.

`flash-cut` `branding` `logo`

### 155. Sneaker colorway flash

<img src="gifs/sneaker-colorway-flash.gif" alt="Sneaker colorway flash" width="360">

<sub>5 frames · 349×883 · 1.8s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A fast flash-cut in a square frame: the same chunky sneaker seen from the side, centered and the same size in every frame, while its colorway and the full-bleed solid background change each frame: white and red on blue, black and lime on pink, cream and brown on orange, purple and silver on yellow, all-white on black. Clean studio product photography, the background fills the whole frame edge to edge.
```

> 💡 **Tip:** Fix the product's angle and position, change only colors — the classic product colorway reel.

`flash-cut` `product` `fashion`

### 156. One tree, four seasons

<img src="gifs/four-seasons-tree.gif" alt="One tree, four seasons" width="360">

<sub>4 frames · 764×508 · 2.6s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
The same lone round tree on a small hill, framed identically in every frame, cycling through the four seasons: pink spring blossoms, lush green summer, orange autumn leaves falling, bare branches in winter snow. Soft flat illustration with a matching sky color for each season.
```

`flash-cut` `nature` `seasons`

### 157. Magazine collage panels pop in

<img src="gifs/magazine-panels-pop.gif" alt="Magazine collage panels pop in" width="360">

<sub>9 frames · 438×387 · 1.6s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A fashion-magazine collage layout where photo panels pop in one by one — a flower, a pair of sunglasses, a coffee cup, a city skyline — each with a small bounce, and finally a bold title bar reading "WEEKEND" slides in. Clean editorial design, cream background, coral and navy accents.
```

> 💡 **Tip:** Keep the text to one short word; long titles still warp between frames.

`flash-cut` `editorial` `layout`

### 158. Paper airplane desk to notebook

<img src="gifs/paper-airplane-glide.gif" alt="Paper airplane desk to notebook" width="360">

<sub>12 frames · 358×358 · 1.7s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
An orange paper airplane with one navy stripe lifting off a wooden desk, gliding in a gentle arc and landing on an open notebook beside a pencil. Fixed camera, soft daylight, realistic photo style.
```

`storyboard` `object` `desk`

### 159. Neon OPEN sign flicker

<img src="gifs/neon-open-sign.gif" alt="Neon OPEN sign flicker" width="360">

<sub>12 frames · 350×358 · 2.2s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A pink and blue neon "OPEN" sign in a dark shop window at night, buzzing and flickering on letter by letter, then glowing steadily. Realistic photo style.
```

`neon` `sign` `text`

### 160. Light sweep over a product

<img src="gifs/product-light-sweep.gif" alt="Light sweep over a product" width="360">

<sub>16 frames · 379×252 · 2.9s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A frosted glass skincare bottle standing still on a beige stone plinth while a soft diagonal band of light sweeps slowly across the background from left to right. Minimal product photography.
```

`product` `ad` `light`

### 161. Perfume bottle spinning on water

<img src="gifs/perfume-water-spin.gif" alt="Perfume bottle spinning on water" width="360">

<sub>9 frames · 414×414 · 1.6s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A square amber perfume bottle labeled "SOL" slowly rotating on the surface of still water, rings of ripples spreading out, warm sunset reflections. Luxury product photography.
```

`product` `perfume` `water`

### 162. Two-line event title reveal

<img src="gifs/event-title-reveal.gif" alt="Two-line event title reveal" width="360">

<sub>9 frames · 439×388 · 1.4s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A bold two-line title "SUMMER" and "MARKET 2026" sliding in from the left one line after the other on a sunny orange background, with small confetti pieces popping. Clean flat motion graphics.
```

`text` `title` `motion-graphics`

### 163. Chat bubbles popping in

<img src="gifs/chat-bubbles-pop.gif" alt="Chat bubbles popping in" width="360">

<sub>9 frames · 430×397 · 3.1s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A phone chat screen where three message bubbles pop in one by one: grey "Are you done yet?", blue "Almost!", grey "Send it!". Clean flat UI style on a white background.
```

`ui` `chat` `text`

### 164. City jumps a thousand years

<img src="gifs/city-future-timelapse.gif" alt="City jumps a thousand years" width="360">

<sub>9 frames · 439×385 · 4.0s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
The same riverside city skyline from a fixed viewpoint changing era by era: low brick buildings, then glass towers, then floating platforms with glowing sky bridges. Cinematic matte painting style.
```

`timelapse` `city` `sci-fi`

### 165. Tiny people building a sandwich

<img src="gifs/tiny-chefs-sandwich.gif" alt="Tiny people building a sandwich" width="360">

<sub>9 frames · 438×389 · 1.6s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A team of miniature people in aprons on a full-size kitchen table hauling a lettuce leaf, a tomato slice and a cheese square onto a giant slice of bread using ropes and a tiny ladder. Tilt-shift macro photo style.
```

`miniature` `food` `funny`

### 166. Castle rising stone by stone

<img src="gifs/castle-builds-up.gif" alt="Castle rising stone by stone" width="360">

<sub>16 frames · 380×252 · 2.9s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A medieval stone castle on a green hill building itself up from the foundation: walls rise, towers grow, then flags pop up on top. Fixed camera, isometric storybook illustration.
```

`build` `castle` `timelapse`

### 167. Same fox in six materials

<img src="gifs/material-style-flip.gif" alt="Same fox in six materials" width="360">

<sub>6 frames · 508×508 · 3.6s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
The same sitting fox in the same pose, each frame rendered in a different material: felt, paper cut, risograph print, pixel art, glossy Y2K chrome, clay. Centered, identical framing, plain background.
```

`style` `material` `comparison`

### 168. Gift box with a pop-up ghost

<img src="gifs/gift-box-ghost-pop.gif" alt="Gift box with a pop-up ghost" width="360">

<sub>16 frames · 307×309 · 2.2s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A glossy red cartoon gift box with a gold ribbon: the lid pops open and a tiny round white ghost springs out on a coiled spring, bouncing with a jelly-like wobble. Soft rounded 3D render on a mint background, square 1:1.
```

`3d` `surprise` `bouncy`

### 169. Ring of fire spell

<img src="gifs/fire-ring-spell.gif" alt="Ring of fire spell" width="360">

<sub>16 frames · 370×252 · 1.9s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A glowing circular magic sigil on dark stone floor ignites into a ring of orange flames that swirl around its edge while embers drift upward. Stylized anime game effect, top-down three-quarter view, dark background.
```

`vfx` `fire` `game`

### 170. Lightning in a jar

<img src="gifs/lightning-jar.gif" alt="Lightning in a jar" width="360">

<sub>8 frames · 434×390 · 1.4s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A corked glass jar on a wooden table with a tiny bolt of blue-white lightning crackling inside, flashing and branching against the glass and lighting up the table. Painterly fantasy style, dim room.
```

`vfx` `lightning` `fantasy`

### 171. Water spiral orb

<img src="gifs/water-spiral-orb.gif" alt="Water spiral orb" width="360">

<sub>16 frames · 378×250 · 1.8s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A floating sphere of clear water with a spiral current turning inside it, small droplets orbiting around and catching light. Anime game skill effect on a deep teal background.
```

`vfx` `water` `game`

### 172. Ice crystal bloom

<img src="gifs/ice-crystal-bloom.gif" alt="Ice crystal bloom" width="360">

<sub>16 frames · 378×249 · 2.2s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A pale blue ice crystal growing from the center of the frame, frost branches spreading outward like a snowflake and sparkling, cold mist curling at the edges. Anime game effect on a dark navy background.
```

`vfx` `ice` `game`

### 173. Comic halftone action poster

<img src="gifs/halftone-fox-poster.gif" alt="Comic halftone action poster" width="360">

<sub>9 frames · 434×387 · 1.3s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A bold comic-style action poster: a masked fox thief in a long red coat leaps across the frame while red, black and white halftone burst rays pulse behind and speed lines flash. Graphic print style.
```

`poster` `comic` `bold`

### 174. House cutaway reveal

<img src="gifs/house-cutaway.gif" alt="House cutaway reveal" width="360">

<sub>9 frames · 432×395 · 2.0s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
An isometric 3D cutaway of a small two-story house: the front wall slides away to reveal tiny furnished rooms, and the lights switch on room by room. Soft clay render on a light blue background.
```

`3d` `isometric` `reveal`

### 175. Neon star with light trail

<img src="gifs/neon-star-orbit.gif" alt="Neon star with light trail" width="360">

<sub>16 frames · 380×252 · 1.9s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A neon sign shaped like a five-pointed star, outlined in orange-pink LED dots, glowing against a dark starfield while a thin comet-like light trail orbits around it and small stars twinkle.
```

`neon` `glow` `sign`

### 176. Mug colorway cycle

<img src="gifs/mug-color-cycle.gif" alt="Mug colorway cycle" width="360">

<sub>5 frames · 350×883 · 2.3s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A single ceramic coffee mug shown whole and centered in a square frame, handle to the right, on a seamless white studio backdrop. Only the mug's glaze color changes from frame to frame — coral, sage green, navy, mustard, lilac — while its shape, position, shadow and lighting stay exactly the same.
```

> 💡 **Tip:** Colorway cycles come back as one frame per color (5 here). Our first try was cropped with seams; asking for the whole mug centered fixed it, but the output became a tall 350×883 strip, so crop it to square if needed.

`product` `colorway` `ecommerce`

### 177. Tote bag feature callouts

<img src="gifs/tote-feature-callouts.gif" alt="Tote bag feature callouts" width="360">

<sub>16 frames · 380×252 · 2.9s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A product shot of a natural canvas tote bag; small glowing circle markers with plus icons appear one after another on the front pocket, the leather handle and the inner divider. Clean studio photography on beige.
```

`product` `ecommerce` `callout`

### 178. Paper collage night scene assembles

<img src="gifs/collage-moon-cut.gif" alt="Paper collage night scene assembles" width="360">

<sub>16 frames · 379×252 · 2.9s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A paper collage on a blank cream page: torn paper pieces slide in one by one to build a night city skyline, then a pair of scissors snips out a paper moon that settles into the sky. Craft texture, visible paper edges, fixed camera.
```

> 💡 **Tip:** For B-roll, decide the visual metaphor and the final still first, then ask for the pieces to assemble from blank.

`collage` `b-roll` `reveal`

### 179. Fictional logo reveal

<img src="gifs/leaf-logo-reveal.gif" alt="Fictional logo reveal" width="360">

<sub>12 frames · 358×358 · 2.2s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A minimal logo reveal on a deep green background for a fictional tea brand called "LEAF & CO": a single leaf line draws itself, a circle closes around it, the wordmark fades in below, then a soft glow sweeps across. Clean vector style.
```

`logo` `brand` `reveal`

### 180. Floating headphones product shot

<img src="gifs/headphones-float-spin.gif" alt="Floating headphones product shot" width="360">

<sub>9 frames · 414×414 · 1.6s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A pair of matte white over-ear headphones floating above a round pedestal, slowly turning a quarter turn and bobbing gently while a soft coral rim light glows behind. Studio product shot, plain gradient background, fixed camera.
```

`product` `tech` `studio`

### 181. Citrus bottle splash

<img src="gifs/citrus-bottle-splash.gif" alt="Citrus bottle splash" width="360">

<sub>16 frames · 380×252 · 1.9s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A glass bottle of orange juice with a plain unbranded label standing in the center, orange slices and water droplets bursting outward around it and falling back, the bottle staying perfectly still. Bright summer studio shot, fixed camera.
```

`product` `drink` `splash`

### 182. Lipstick twisting up

<img src="gifs/lipstick-twist-up.gif" alt="Lipstick twisting up" width="360">

<sub>9 frames · 433×395 · 1.6s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A lipstick in a plain smooth rose-gold cylindrical case with no logo, letters or markings, standing on a marble surface: the red bullet twists slowly up out of the case and a light glint slides across the metal. Luxury beauty product shot, soft shadows, fixed camera.
```

> 💡 **Tip:** Say "no logo, letters or markings" on products; otherwise the model may invent a real brand's monogram.

`product` `beauty` `luxury`

### 183. Minimal watch close-up

<img src="gifs/watch-hands-sweep.gif" alt="Minimal watch close-up" width="360">

<sub>12 frames · 358×358 · 2.2s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A minimalist wristwatch with a white dial lying on a linen surface, the second hand sweeping around, a band of light passing over the glass. Clean product photography, fixed camera.
```

`product` `watch` `minimal`

### 184. Gold ink signature writes itself

<img src="gifs/signature-ink-write.gif" alt="Gold ink signature writes itself" width="360">

<sub>9 frames · 414×414 · 1.6s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
An elegant cursive signature reading Mira writes itself stroke by stroke in shimmering gold ink on cream paper, finishing with a small star flourish that sparkles once. Clean top-down view.
```

`signature` `text` `brand`

### 185. One bottle, three worlds

<img src="gifs/bottle-three-worlds.gif" alt="One bottle, three worlds" width="360">

<sub>12 frames · 358×358 · 2.2s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A frosted glass serum bottle stays fixed in the center while the world behind it changes: a sunlit desert dune, then a deep blue underwater reef, then a misty green forest. Premium product photography, soft reflections.
```

`product` `ad` `background`

### 186. Nebula shimmer nail tips

<img src="gifs/nail-tips-nebula.gif" alt="Nebula shimmer nail tips" width="360">

<sub>8 frames · 433×395 · 1.4s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
Five glossy almond-shaped nail tips on a white display stand, each painted deep navy; a swirling purple and pink nebula with tiny glitter stars drifts across their surface. Macro beauty product shot.
```

`beauty` `product` `sparkle`

### 187. Headphones switch off the street

<img src="gifs/headphones-silence-cut.gif" alt="Headphones switch off the street" width="360">

<sub>12 frames · 358×357 · 2.2s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
Stylized illustration: a person on a crowded noisy street with honking cars puts on over-ear headphones, and the whole street dissolves into a calm bright white studio around them. Clean ad visual, side profile, fixed camera.
```

`product` `ad` `before-after`

### 188. 3D gold token spins

<img src="gifs/gold-token-spin.gif" alt="3D gold token spins" width="360">

<sub>16 frames · 309×309 · 1.8s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A thick 3D gold coin embossed with a simple star emblem spins smoothly on its vertical axis, catching a glint of light on each turn. Studio render, dark charcoal background, soft floor reflection.
```

`3d` `coin` `spin`

### 189. Comic BOOM poster

<img src="gifs/comic-boom-poster.gif" alt="Comic BOOM poster" width="360">

<sub>9 frames · 438×388 · 1.3s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A halftone comic-print poster: a small cartoon rocket blasts upward and a big jagged yellow BOOM burst pops in behind it with action lines. Bold CMYK offset-print texture, red background.
```

`poster` `comic` `text`

### 190. Travel postcards flip through

<img src="gifs/travel-postcard-stack.gif" alt="Travel postcards flip through" width="360">

<sub>9 frames · 436×386 · 2.7s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A stack of illustrated travel postcards flips one after another: a mountain lake at sunrise, a white seaside town, a red desert canyon. Gouache illustration style, slight paper texture, centered framing.
```

`travel` `illustration` `flip`

### 191. Island in a glass jar

<img src="gifs/jar-island-lighthouse.gif" alt="Island in a glass jar" width="360">

<sub>9 frames · 433×393 · 1.6s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A tiny island with a white lighthouse sealed inside a glass jar on a table; small waves lap at the shore and the lighthouse beam sweeps around inside the glass. Detailed miniature diorama, warm lamp light.
```

`miniature` `glass` `diorama`

### 192. Watercolor street flipbook

<img src="gifs/watercolor-street-flipbook.gif" alt="Watercolor street flipbook" width="360">

<sub>9 frames · 438×390 · 2.0s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A sketchbook lies open and its pages turn by themselves, each showing a loose watercolor street scene: a narrow alley with lanterns, a tram crossing, a rainy crosswalk. Soft wet-paper watercolor style.
```

`watercolor` `sketchbook` `city`

### 193. Chinese brush signature

<img src="gifs/chinese-brush-signature.gif" alt="Chinese brush signature" width="360">

<sub>9 frames · 412×411 · 1.6s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
On textured rice paper, a black ink brush writes two Chinese characters in flowing cursive calligraphy, stroke by stroke, then a small red square seal stamps down beside them. Top-down view, fixed camera.
```

> 💡 **Tip:** Two or three characters work best; the model occasionally invents strokes, so check each frame.

`signature` `calligraphy` `text`

### 194. Earbud case reveal

<img src="gifs/earbud-case-open.gif" alt="Earbud case reveal" width="360">

<sub>9 frames · 439×390 · 1.6s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
A matte terracotta-orange egg-shaped charging case with a wooden lid sits on a beige pedestal; the lid slides open sideways, a tiny amber light blinks, and two round pebble-shaped earbuds with no stems rise slightly and settle back. Clean studio product photography, soft shadow.
```

`product` `tech` `ecommerce`

### 195. Showtime curtain

<img src="gifs/stage-curtain-confetti.gif" alt="Showtime curtain" width="360">

<sub>16 frames · 380×252 · 2.2s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
Red velvet theater curtains part on a small stage; a spotlight sweeps across and gold confetti bursts down over an empty microphone stand. Bright festive illustration, fixed front view.
```

`event` `announcement` `celebration`

### 196. Ceramic vase on a turntable

<img src="gifs/vase-turntable-spin.gif" alt="Ceramic vase on a turntable" width="360">

<sub>16 frames · 322×297 · 1.9s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
A speckled sage-green ceramic vase holding one dried branch rotates a full turn on a white turntable; soft window light glides across its glaze. Minimal studio product photography on off-white.
```

`product` `ceramic` `turntable`

### 197. Photo cards shuffle

<img src="gifs/photo-cards-shuffle.gif" alt="Photo cards shuffle" width="360">

<sub>9 frames · 439×390 · 1.6s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
Three overlapping instant photo cards showing a beach, a mountain and a city at night sit on a light wood table; the top card slides out to the right and tucks behind the stack, revealing the next one. Top-down view, soft natural light.
```

`photo` `layout` `social`

### 198. Cereal and milk pour

<img src="gifs/cereal-milk-pour.gif" alt="Cereal and milk pour" width="360">

<sub>9 frames · 414×414 · 1.6s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
Milk pours into a white bowl of colorful ring cereal, the rings bob up and swirl around a spoon. Bright overhead food photography on a pale pink table.
```

`food` `product` `breakfast`

### 199. Chilled soda can

<img src="gifs/soda-can-fizz.gif" alt="Chilled soda can" width="360">

<sub>9 frames · 414×413 · 1.6s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
An unbranded mint-green soda can covered in cold condensation stands on crushed ice; water droplets roll down, the tab pops open and fine fizz mist puffs out. High-key product photography on teal.
```

`product` `drink` `ecommerce`

### 200. Serum dropper drip

<img src="gifs/serum-dropper-drip.gif" alt="Serum dropper drip" width="360">

<sub>9 frames · 439×390 · 1.6s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
A glass skincare dropper squeezes out one clear golden drop that falls into an open amber serum bottle, a ripple spreading on the surface. Clean luxury product photography on soft cream with gentle reflections.
```

`product` `beauty` `skincare`

### 201. Honey drizzle

<img src="gifs/honey-dipper-drizzle.gif" alt="Honey drizzle" width="360">

<sub>16 frames · 380×252 · 2.2s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
A wooden honey dipper lifts above a jar, a thick ribbon of golden honey drizzles down and folds over itself into the jar. Warm backlit food photography, shallow depth of field.
```

`food` `product` `macro`

### 202. Ice cream drip promo

<img src="gifs/ice-cream-drip-promo.gif" alt="Ice cream drip promo" width="360">

<sub>9 frames · 438×390 · 1.4s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A pink strawberry ice cream cone slowly drips one drop of melted cream while sprinkles sparkle around it. Bold product ad style, plain bright yellow background.
```

`product` `food` `ad`

### 203. Sneaker lace tie

<img src="gifs/sneaker-lace-tie.gif" alt="Sneaker lace tie" width="360">

<sub>9 frames · 433×395 · 1.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A white sneaker on a pedestal ties its own laces into a neat bow, then gives a tiny bounce. Clean 3D product render, plain light gray background.
```

`product` `fashion` `3d`

### 204. Candle jar lights up

<img src="gifs/candle-jar-light.gif" alt="Candle jar lights up" width="360">

<sub>16 frames · 380×252 · 2.9s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A frosted glass candle jar with a blank label, the wick sparks and lights, warm glow spreading across the jar. Minimal product shot, plain warm gray background.
```

`product` `candle` `ad`

### 205. Phone box reveal

<img src="gifs/phone-unbox-reveal.gif" alt="Phone box reveal" width="360">

<sub>9 frames · 446×395 · 1.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A plain white box lid lifts off to reveal a generic slim smartphone that rises slightly with a soft shine. Clean 3D product render, plain white background, no logos.
```

`product` `tech` `unboxing`

### 206. Coffee bean burst

<img src="gifs/coffee-bean-burst.gif" alt="Coffee bean burst" width="360">

<sub>16 frames · 309×306 · 1.9s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A matte black coffee bag with a blank label, roasted beans burst up from behind it and fall back down. Dark moody product photography, plain brown background.
```

`product` `coffee` `ad`

### 207. Bold title over mountains

<img src="gifs/mountain-title-reveal.gif" alt="Bold title over mountains" width="360">

<sub>9 frames · 439×390 · 1.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
The single bold word WILD rises letter by letter over a misty snow-capped mountain range at sunrise, the fog drifting slowly behind it. Editorial poster typography, fixed camera.
```

`typography` `title` `landscape`

### 208. Signature with music notes

<img src="gifs/violin-signature-notes.gif" alt="Signature with music notes" width="360">

<sub>16 frames · 380×252 · 2.2s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A flowing gold handwritten signature draws itself across a dark navy card while tiny music notes and glowing particles spill from a small violin icon beside it. Elegant minimal style.
```

`signature` `music` `particles`

### 209. Same plate, new dish

<img src="gifs/same-plate-dish-swap.gif" alt="Same plate, new dish" width="360">

<sub>9 frames · 436×389 · 3.1s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
Top-down shot of one white plate on a fixed wooden table; the dish on it changes from a seared steak to a green salad to a bowl of pasta, nothing else moves. Food photography, fixed camera.
```

`food` `menu` `restaurant`

### 210. Make the logo bigger

<img src="gifs/logo-gets-bigger.gif" alt="Make the logo bigger" width="360">

<sub>16 frames · 376×261 · 1.9s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A plain kraft shipping box on a white table; the simple round star emblem printed on it swells bigger and bigger until it nearly covers the box, then wobbles. Clean product shot, no real brands.
```

`product` `meme` `logo`

### 211. Editorial jump in a yellow coat

<img src="gifs/yellow-coat-jump.gif" alt="Editorial jump in a yellow coat" width="360">

<sub>16 frames · 322×293 · 1.9s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A fashion model in an oversized mustard-yellow coat leaps mid-air in a clean studio, the coat flaring out, then lands. Editorial fashion photography, plain pale gray backdrop.
```

`fashion` `editorial` `jump`

## Ambient Loops

### 212. Reading by the window, day to night

<img src="gifs/window-day-to-night.gif" alt="Reading by the window, day to night" width="360">

<sub>9 frames · 413×412 · 3.1s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A girl with a short bob reading a book on a cushion by a big window, seen from the side. Outside the window the sky cycles from bright morning blue to orange sunset to a starry night and back to morning, while the room light warms up and a desk lamp switches on at night. Soft flat illustration, calm and cozy.
```

> 💡 **Tip:** Day-to-night loops are harder than simple motions. Keep the character mostly still and let the light and sky carry the change.

`loop` `character` `time-lapse`

### 213. Steaming coffee loop

<img src="gifs/steaming-coffee.gif" alt="Steaming coffee loop" width="360">

<sub>16 frames · 379×252 · 2.6s · gpt-image-2.6 · generated 2026-11-05</sub>

**Prompt**

```text
A steaming cup of coffee on a small wooden table, steam curling and drifting upward, a tiny spoon wobbling on the saucer. Cozy flat illustration with warm colors.
```

`loop` `food` `cozy`

### 214. Rainy window and plant

<img src="gifs/rain-on-window.gif" alt="Rainy window and plant" width="360">

<sub>16 frames · 378×252 · 2.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A rainy window at dusk with a small potted plant on the sill, raindrops sliding down the glass and blurry city lights twinkling outside. Soft muted blue palette, lo-fi illustration style.
```

`loop` `lofi` `weather`

### 215. Goldfish in a bowl

<img src="gifs/goldfish-bowl.gif" alt="Goldfish in a bowl" width="360">

<sub>16 frames · 380×243 · 2.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A round glass fishbowl on a windowsill with one orange goldfish swimming a slow circle, tail fluttering, tiny bubbles rising to the surface. Soft watercolor-style illustration, gentle light.
```

`loop` `pet` `calm`

### 216. Lighthouse at night

<img src="gifs/lighthouse-night.gif" alt="Lighthouse at night" width="360">

<sub>16 frames · 380×247 · 2.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A white lighthouse on a rocky shore at night, its beam sweeping slowly across a dark blue sky, waves rolling and splashing against the rocks below. Flat illustration with a deep navy and warm yellow palette.
```

`loop` `seascape` `night`

### 217. Cat sleeping by the fireplace

<img src="gifs/cat-by-fireplace.gif" alt="Cat sleeping by the fireplace" width="360">

<sub>16 frames · 380×243 · 2.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A ginger cat curled up asleep on a rug in front of a crackling fireplace, its body gently rising and falling with each breath, flames flickering and casting warm light. Cozy flat illustration, warm orange and brown tones.
```

> 💡 **Tip:** Breathing is a great tiny motion for calm loops — it reads clearly and loops naturally.

`loop` `cozy` `cat`

### 218. Lantern monkey in the snow

<img src="gifs/lantern-monkey-snow.gif" alt="Lantern monkey in the snow" width="360">

<sub>16 frames · 380×241 · 2.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A small monkey in an olive-green hooded coat standing in a snowy pine forest at dusk, lifting a glowing amber paper lantern, looking up and blinking, then lowering the lantern back to where it started. Snow falls gently and a tiny cabin glows in the background. Soft storybook illustration, locked camera.
```

> 💡 **Tip:** Give the subject a pose to return to and lock the camera — the easiest way to get a clean loop.

`loop` `character` `winter`

### 219. Sleepy fox on a mossy rock

<img src="gifs/sleepy-fox-rock.gif" alt="Sleepy fox on a mossy rock" width="360">

<sub>9 frames · 432×394 · 1.6s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A small orange fox curled up asleep on a mossy rock, its tail gently swaying and ears twitching. Soft storybook illustration, locked camera.
```

`loop` `animal` `calm`

### 220. Lo-fi study loop

<img src="gifs/lofi-study-loop.gif" alt="Lo-fi study loop" width="360">

<sub>9 frames · 434×383 · 1.6s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A girl with headphones writing in a notebook at a desk at night, her pencil moving, steam rising from a mug, rain sliding down the window behind her and a desk lamp glowing. Lo-fi anime illustration, muted purple and blue palette, locked camera.
```

`loop` `lofi` `study`

### 221. Café cinemagraph

<img src="gifs/cafe-cinemagraph.gif" alt="Café cinemagraph" width="360">

<sub>9 frames · 439×390 · 1.6s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A cinemagraph of a quiet street café terrace in the morning: everything is perfectly still except the steam curling from a cup on the table and a striped awning flag fluttering in the breeze. Realistic photography, soft warm light, locked camera.
```

> 💡 **Tip:** For a cinemagraph, say explicitly that everything is still except one or two named elements.

`loop` `cinemagraph` `photo`

### 222. Ink-wash galloping horse

<img src="gifs/ink-wash-horse.gif" alt="Ink-wash galloping horse" width="360">

<sub>16 frames · 380×252 · 1.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A racehorse with a jockey galloping to the right in a loose Chinese ink-wash painting style, legs cycling through a full gallop stride, the jockey bobbing up and down, ink splashes kicking up behind the hooves. Rice-paper background, black ink with a touch of red.
```

`loop` `ink-wash` `animal`

### 223. Doodle monster comes alive

<img src="gifs/doodle-monster.gif" alt="Doodle monster comes alive" width="360">

<sub>9 frames · 440×386 · 1.6s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A crude crayon doodle of a little purple blob monster with two eyes on wobbly stalks and three stubby legs, drawn on lined notebook paper, comes alive: its eye-stalks blink and sway, it waves its tiny arms and hops in place, keeping the wobbly hand-drawn lines and odd proportions. The notebook paper stays still.
```

`loop` `doodle` `cute`

### 224. Teapot steam turns into a heart

<img src="gifs/teapot-steam-heart.gif" alt="Teapot steam turns into a heart" width="360">

<sub>16 frames · 380×252 · 2.9s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A copper teapot on a windowsill on a rainy afternoon, steam rising from the spout and briefly curling into a heart shape before drifting apart. Clay stop-motion style, fixed camera.
```

`steam` `cozy` `clay`

### 225. Husky howling in a snow globe

<img src="gifs/husky-snow-globe.gif" alt="Husky howling in a snow globe" width="360">

<sub>9 frames · 433×393 · 1.6s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A tiny husky inside a glass snow globe sitting on a snowy mound and howling up at the sky as glitter snow swirls around it. Product photo style on a dark wooden table.
```

`snow-globe` `dog` `winter`

### 226. City in a snow globe

<img src="gifs/city-snow-globe.gif" alt="City in a snow globe" width="360">

<sub>16 frames · 380×252 · 2.9s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A snow globe holding a miniature city of red-brick apartment blocks and a little yellow taxi, snow drifting down slowly inside the glass. Warm studio lighting, macro photo.
```

`snow-globe` `city` `winter`

### 227. Clay kitten in a ball pit

<img src="gifs/clay-kitten-ballpit.gif" alt="Clay kitten in a ball pit" width="360">

<sub>16 frames · 380×250 · 2.2s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A clay kitten popping its head out of a ball pit full of colorful plastic balls, balls tumbling off its head as it wiggles. Claymation style.
```

`clay` `cat` `playful`

### 228. Pelican riding a bicycle

<img src="gifs/pelican-bicycle.gif" alt="Pelican riding a bicycle" width="360">

<sub>16 frames · 380×250 · 2.2s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A pelican riding a red bicycle along a seaside promenade, legs pedaling and its big beak bobbing, waves rolling in behind. Flat vector illustration, side view.
```

`animal` `bicycle` `classic-test`

### 229. Windmill on green hills

<img src="gifs/windmill-hills.gif" alt="Windmill on green hills" width="360">

<sub>9 frames · 439×388 · 1.6s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A white wooden windmill on rolling green hills, its four sails turning slowly while clouds drift across a blue sky. Soft painterly landscape.
```

`landscape` `windmill` `calm`

### 230. Paper boat bobbing on water

<img src="gifs/paper-boat-ripples.gif" alt="Paper boat bobbing on water" width="360">

<sub>9 frames · 439×390 · 1.6s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A white folded paper boat bobbing gently on calm water, small ripples spreading outward, fixed overhead camera. Soft natural light photo style.
```

`water` `paper` `calm`

### 231. Robot dancing on the street

<img src="gifs/street-robot-dance.gif" alt="Robot dancing on the street" width="360">

<sub>9 frames · 439×390 · 1.3s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A boxy orange robot doing a robotic pop-and-lock dance on a graffiti-covered city street, arms snapping between poses. Fixed camera, vibrant 3D render.
```

`robot` `dance` `street`

### 232. Chopping wood in winter

<img src="gifs/woodcutter-winter.gif" alt="Chopping wood in winter" width="360">

<sub>9 frames · 433×395 · 1.6s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
An old man in a thick wool coat raising an axe and splitting a log on a stump in a snowy backyard, wood halves falling to the sides, his breath visible in the cold air. Painterly illustration.
```

`winter` `rural` `work`

### 233. Petting a shiba in the rain

<img src="gifs/rain-shiba-pet.gif" alt="Petting a shiba in the rain" width="360">

<sub>9 frames · 439×390 · 1.6s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A girl with a clear umbrella crouching on a wet city street at night to pet a shiba inu, the dog's tail wagging, rain glittering under neon reflections. Anime-style illustration.
```

`rain` `dog` `night`

### 234. Canyon waterfall mist

<img src="gifs/canyon-waterfall.gif" alt="Canyon waterfall mist" width="360">

<sub>9 frames · 431×396 · 1.6s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A tall waterfall pouring into a deep green canyon pool, mist rising and ripples spreading across the water. Fixed wide shot, realistic landscape photo.
```

`nature` `waterfall` `cinemagraph`

### 235. Glass butterfly with shifting shadows

<img src="gifs/glass-butterfly.gif" alt="Glass butterfly with shifting shadows" width="360">

<sub>16 frames · 324×291 · 2.9s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A butterfly made of clear glass perched on a white table, slowly opening and closing its wings while the colorful refracted shadow on the table changes in sync. Macro photo, soft light.
```

`glass` `butterfly` `light`

### 236. Glowing beaker vortex

<img src="gifs/beaker-glow-vortex.gif" alt="Glowing beaker vortex" width="360">

<sub>16 frames · 379×250 · 2.6s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A glass lab beaker on a dark bench with a swirling vortex of glowing teal liquid inside, tiny bubbles rising and the glow pulsing. Moody lab photography.
```

`science` `glow` `liquid`

### 237. Eagle flapping its wings

<img src="gifs/eagle-wing-flap.gif" alt="Eagle flapping its wings" width="360">

<sub>9 frames · 439×390 · 1.1s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A golden eagle flying in place with powerful wing beats, feathers rippling, isolated on a plain sky-blue background. Realistic illustration.
```

`bird` `flight` `animal`

### 238. Paper lantern Jiangnan with koi

<img src="gifs/lantern-koi-garden.gif" alt="Paper lantern Jiangnan with koi" width="360">

<sub>16 frames · 380×245 · 2.9s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A layered paper-cut lantern scene of a southern Chinese water town with a stone arch bridge and a pavilion, two golden koi swimming beneath the bridge while the warm light flickers. Paper-sculpture style.
```

`paper-cut` `chinese` `lantern`

### 239. Clay dough baker mascot

<img src="gifs/clay-baker-mascot.gif" alt="Clay dough baker mascot" width="360">

<sub>9 frames · 439×390 · 1.6s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A round clay dough mascot in a little white chef hat kneading a piece of dough on a floured board, folding it over and giving a small wave. Claymation style, fixed camera.
```

`clay` `mascot` `cooking`

### 240. Robot barista pouring coffee

<img src="gifs/robot-barista.gif" alt="Robot barista pouring coffee" width="360">

<sub>9 frames · 432×394 · 1.6s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A small white robot barista with one arm pouring steamed milk into a cup of coffee on a café counter, drawing a leaf pattern in the foam. Clean 3D render.
```

`robot` `coffee` `cafe`

### 241. Train wind on the platform

<img src="gifs/subway-wind-girl.gif" alt="Train wind on the platform" width="360">

<sub>16 frames · 380×252 · 1.9s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A girl with long dark hair and a yellow raincoat standing on a subway platform as a train rushes past behind her, her hair and coat whipping sideways in the gust while she squints. Anime film still style, fixed camera.
```

`anime` `wind` `cinemagraph`

### 242. Paper crane takes off from a card

<img src="gifs/origami-crane-takeoff.gif" alt="Paper crane takes off from a card" width="360">

<sub>9 frames · 437×379 · 1.6s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A folded white paper crane sitting on an open greeting card flaps its creased paper wings and lifts off, rising gently above the card. Soft pastel watercolor style on a cream background, fixed camera.
```

`paper` `message` `watercolor`

### 243. Tang court dancer

<img src="gifs/tang-court-dancer.gif" alt="Tang court dancer" width="360">

<sub>9 frames · 439×390 · 1.4s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A court dancer in flowing red and gold Tang-dynasty robes spinning in place, her long water sleeves trailing in wide arcs around her. Painted in the style of ancient Chinese cave murals on a warm ochre background.
```

`chinese` `dance` `mural`

### 244. Steam over fresh sourdough

<img src="gifs/sourdough-steam.gif" alt="Steam over fresh sourdough" width="360">

<sub>9 frames · 436×389 · 1.6s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A freshly baked sourdough loaf on a floured wooden board, still except for thin curls of steam rising from its scored crust. Warm morning light, food photography, fixed camera.
```

`food` `steam` `cinemagraph`

### 245. Cat stretching on the windowsill

<img src="gifs/windowsill-cat-stretch.gif" alt="Cat stretching on the windowsill" width="360">

<sub>16 frames · 380×249 · 2.9s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
An orange tabby cat on a sunny windowsill stretching its front legs, yawning wide, then settling back and blinking slowly. Soft watercolor illustration, curtains still, fixed camera.
```

`cat` `cozy` `watercolor`

### 246. Ripples on a dawn lake

<img src="gifs/lake-ripple-dawn.gif" alt="Ripples on a dawn lake" width="360">

<sub>16 frames · 380×252 · 4.0s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A calm mountain lake at dawn, everything still except soft ripples spreading across the water and a thin layer of mist drifting slowly over the surface. Photorealistic landscape, fixed camera.
```

`landscape` `water` `cinemagraph`

### 247. Paper-cut river valley

<img src="gifs/papercut-river-boat.gif" alt="Paper-cut river valley" width="360">

<sub>9 frames · 439×390 · 1.6s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
Layered paper-cut art of a river valley: paper waves slide across, a little paper fishing boat bobs on them, and paper clouds drift, with soft shadows between the layers. Pastel blue and green palette.
```

`papercut` `craft` `layers`

### 248. Glowing jellyfish

<img src="gifs/jellyfish-glow.gif" alt="Glowing jellyfish" width="360">

<sub>9 frames · 439×389 · 1.6s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A single translucent jellyfish drifting in the deep ocean, its bell pulsing slowly and its tentacles trailing as soft cyan bioluminescence glows along its edges. Dark blue water, fixed camera.
```

`ocean` `glow` `ambient`

### 249. Candle on a writing desk

<img src="gifs/desk-candle-flicker.gif" alt="Candle on a writing desk" width="360">

<sub>9 frames · 439×390 · 1.6s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A lit candle on an old wooden writing desk beside an open notebook and fountain pen, still except for the flickering flame and its soft shifting glow on the paper. Moody painterly style.
```

`candle` `cozy` `cinemagraph`

### 250. Sushi conveyor belt

<img src="gifs/sushi-conveyor.gif" alt="Sushi conveyor belt" width="360">

<sub>12 frames · 358×358 · 1.7s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A sushi conveyor belt in a small restaurant with colorful plates of nigiri sliding steadily from left to right past the counter. Warm anime background art style, fixed camera.
```

`food` `anime` `conveyor`

### 251. Lifting ramen noodles

<img src="gifs/ramen-steam-lift.gif" alt="Lifting ramen noodles" width="360">

<sub>9 frames · 414×413 · 1.6s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A bowl of ramen with a soft-boiled egg and green onions, chopsticks lifting a bundle of noodles that sway gently while steam rises. Rich anime food illustration, fixed camera.
```

`food` `anime` `steam`

### 252. Spinning vinyl record

<img src="gifs/vinyl-turntable.gif" alt="Spinning vinyl record" width="360">

<sub>16 frames · 380×252 · 2.6s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A vinyl record spinning on a wooden turntable with the tonearm resting on it, warm lamp light reflecting off the grooves, small music notes floating up. Cozy lo-fi illustration, fixed camera.
```

`music` `lofi` `cozy`

### 253. Picture-book bunny watering flowers

<img src="gifs/storybook-bunny-garden.gif" alt="Picture-book bunny watering flowers" width="360">

<sub>9 frames · 431×394 · 1.6s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A children's picture-book page in soft watercolor and colored pencil: a little bunny in blue overalls watering a row of tulips with a tin can, water drops falling, two butterflies fluttering around. Gentle healing mood, fixed camera.
```

> 💡 **Tip:** Picture-book style works well for calm kids' videos; keep only one or two small moving parts.

`storybook` `watercolor` `kids`

### 254. Diwali oil lamps

<img src="gifs/diya-lamps-glow.gif" alt="Diwali oil lamps" width="360">

<sub>9 frames · 439×387 · 2.0s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A row of small clay diya oil lamps on a stone step decorated with a colorful rangoli pattern, their flames flickering, warm light pulsing softly, a few marigold petals drifting down. Warm festive night, fixed camera.
```

`festival` `diwali` `lights`

### 255. Ink-wash moonlit window

<img src="gifs/ink-moon-pipa.gif" alt="Ink-wash moonlit window" width="360">

<sub>16 frames · 376×248 · 2.9s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A Chinese ink-wash painting of a moonlit round window with a pipa lute leaning against the sill, plum blossom petals drifting past, thin clouds sliding across the full moon. Muted ink tones on rice paper, fixed camera.
```

`ink` `chinese` `moon`

### 256. Palm shadow on a travel journal

<img src="gifs/palm-shadow-journal.gif" alt="Palm shadow on a travel journal" width="360">

<sub>9 frames · 439×389 · 1.6s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
An open travel journal on a sunny café table with taped photos and a handwritten page, the soft shadow of a palm frond drifting slowly across the pages and back. Everything else stays still. Warm film-photo colors, fixed overhead camera.
```

`cinemagraph` `travel` `shadow`

### 257. Astronaut with a paper star

<img src="gifs/rooftop-astronaut-star.gif" alt="Astronaut with a paper star" width="360">

<sub>16 frames · 308×302 · 2.9s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A small astronaut sitting on a city rooftop at night holding a folded paper star, the star starting to glow, lifting gently out of their gloves, floating up a little and drifting back down. Dreamy illustration, deep blue sky, fixed camera.
```

`night` `dreamy` `space`

### 258. Bonsai with fireflies

<img src="gifs/bonsai-fireflies.gif" alt="Bonsai with fireflies" width="360">

<sub>9 frames · 431×395 · 2.7s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A small bonsai pine in a ceramic pot on a wooden shelf at dusk, a few fireflies drifting around its branches and blinking on and off. Soft painterly style, fixed camera.
```

`calm` `nature` `night`

### 259. Swaying kelp forest

<img src="gifs/kelp-forest-sway.gif" alt="Swaying kelp forest" width="360">

<sub>9 frames · 439×390 · 1.6s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
An underwater kelp forest with tall golden-green kelp swaying in the current, sun rays shimmering down from the surface, a small school of silver fish darting past. Fixed camera.
```

`ocean` `calm` `nature`

### 260. View from a train window

<img src="gifs/train-window-fields.gif" alt="View from a train window" width="360">

<sub>9 frames · 433×386 · 1.6s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
The view through a train window on a sunny afternoon: green rice fields and distant hills scrolling past, telegraph poles flicking by, a cup of tea on the windowsill rippling slightly. Anime-inspired background painting, fixed camera inside the carriage.
```

`travel` `train` `scenery`

### 261. Whisking matcha

<img src="gifs/matcha-whisk.gif" alt="Whisking matcha" width="360">

<sub>9 frames · 439×390 · 1.1s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A bamboo whisk briskly whisking bright green matcha in a dark ceramic bowl, fine foam forming on top, a wisp of steam rising. Close-up on a wooden tray, soft natural light, fixed camera.
```

`tea` `food` `asmr`

### 262. Aurora over a cabin

<img src="gifs/aurora-cabin.gif" alt="Aurora over a cabin" width="360">

<sub>16 frames · 379×246 · 3.5s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A small wooden cabin with glowing windows in a snowy valley, green and violet aurora ribbons rippling slowly across the starry sky above, smoke curling from the chimney. Fixed camera.
```

`night` `winter` `aurora`

### 263. Hot-air balloons at sunrise

<img src="gifs/hot-air-balloons.gif" alt="Hot-air balloons at sunrise" width="360">

<sub>9 frames · 439×388 · 1.6s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
Several colorful hot-air balloons drifting gently over a canyon at sunrise, the nearest one's burner flaring briefly, morning mist moving below. Soft golden light, fixed camera.
```

`travel` `sunrise` `sky`

### 264. Cherry blossoms over a stone bridge

<img src="gifs/sakura-stone-bridge.gif" alt="Cherry blossoms over a stone bridge" width="360">

<sub>16 frames · 380×252 · 2.9s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
An arched stone bridge over a quiet stream lined with cherry trees in full bloom, pink petals falling and landing on the water, ripples spreading. Soft spring light, fixed camera.
```

`spring` `flowers` `japan`

### 265. Roasting a marshmallow

<img src="gifs/marshmallow-roast.gif" alt="Roasting a marshmallow" width="360">

<sub>9 frames · 439×389 · 1.6s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A marshmallow on a stick held over a campfire at night, slowly turning golden brown, the flames flickering and small sparks floating up. Close-up, warm firelight, fixed camera.
```

`camping` `food` `cozy`

### 266. Risograph shapes drift

<img src="gifs/risograph-blob-drift.gif" alt="Risograph shapes drift" width="360">

<sub>16 frames · 379×252 · 2.9s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
Four flat textured shapes in risograph colors (pink, teal, yellow, blue) slowly drift and morph into one another, overlapping with grainy ink texture. Abstract background loop, centered composition.
```

`abstract` `background` `texture`

### 267. Torn paper ocean waves

<img src="gifs/torn-paper-waves.gif" alt="Torn paper ocean waves" width="360">

<sub>16 frames · 380×252 · 2.2s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
Layered torn-paper ocean waves in shades of blue roll forward one behind another, a small paper sailboat rising and dipping on top. Handmade paper collage with visible fibers and paint texture.
```

`paper` `ocean` `collage`

### 268. Garden hose rainbow

<img src="gifs/garden-hose-rainbow.gif" alt="Garden hose rainbow" width="360">

<sub>9 frames · 440×389 · 1.6s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A gardener in a wide straw hat, seen from behind, sprays a fan of water over a sunny flower bed, and a small rainbow shimmers in the mist. Warm painterly illustration, summer light.
```

`garden` `summer` `rainbow`

### 269. Kingfisher dives

<img src="gifs/kingfisher-dive.gif" alt="Kingfisher dives" width="360">

<sub>16 frames · 380×250 · 1.9s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A bright blue and orange kingfisher dives from a branch into a calm river, a crown of splash rising where it enters the water. Detailed nature illustration, side view, fixed camera.
```

`bird` `nature` `splash`

### 270. Lava lamp blobs

<img src="gifs/lava-lamp-glow.gif" alt="Lava lamp blobs" width="360">

<sub>9 frames · 437×384 · 2.5s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A retro lava lamp on a dark shelf: orange wax blobs slowly rise, stretch, split, and sink in glowing purple liquid. Moody 70s photography style, close-up.
```

`retro` `lamp` `ambient`

### 271. Rooftop laundry in the breeze

<img src="gifs/rooftop-laundry-breeze.gif" alt="Rooftop laundry in the breeze" width="360">

<sub>16 frames · 380×247 · 2.6s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
Colorful laundry hangs on a line across a city rooftop, shirts and sheets flapping gently in the breeze under a blue sky with drifting clouds. Soft anime background art style.
```

`city` `breeze` `calm`

### 272. Ferris wheel at dusk

<img src="gifs/dusk-ferris-wheel.gif" alt="Ferris wheel at dusk" width="360">

<sub>16 frames · 380×242 · 2.9s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A ferris wheel at a seaside fair turns slowly at dusk, its bulb lights twinkling in sequence against a purple and orange sky. Dreamy illustration, wide shot, fixed camera.
```

`fair` `dusk` `lights`

### 273. Tea leaves unfurl

<img src="gifs/tea-leaves-unfurl.gif" alt="Tea leaves unfurl" width="360">

<sub>16 frames · 380×247 · 2.9s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
Inside a clear glass teapot, rolled green tea leaves slowly unfurl and drift down through amber water while tiny bubbles rise. Macro photography, soft daylight, white background.
```

`tea` `macro` `calm`

### 274. Umbrellas on a rainy crosswalk

<img src="gifs/crosswalk-umbrellas.gif" alt="Umbrellas on a rainy crosswalk" width="360">

<sub>16 frames · 378×247 · 2.9s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
Top-down view of a rainy crosswalk where colorful umbrellas move across the white stripes, puddles rippling under the rain. Minimal flat illustration, muted gray street.
```

`rain` `city` `top-down`

### 275. Meteor shower over a tent

<img src="gifs/meteor-tent-night.gif" alt="Meteor shower over a tent" width="360">

<sub>9 frames · 439×389 · 1.6s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A small glowing orange tent on a hill under a deep blue sky, meteors streaking across the stars one after another. Calm illustrated night scene, wide shot.
```

`night` `camping` `stars`

### 276. Autumn leaves swirl round a bench

<img src="gifs/park-bench-leaves.gif" alt="Autumn leaves swirl round a bench" width="360">

<sub>9 frames · 433×395 · 1.6s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
Golden and red autumn leaves swirl in a little gust around an empty wooden park bench under a lamppost. Warm gouache illustration, fixed camera.
```

`autumn` `park` `wind`

### 277. Bookshop window in the snow

<img src="gifs/bookshop-window-snow.gif" alt="Bookshop window in the snow" width="360">

<sub>9 frames · 435×385 · 1.6s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A cozy bookshop window at night with warm light; a gray cat sleeps on a stack of books, its tail swishing slowly, while snow falls outside. Storybook illustration style.
```

`cozy` `snow` `cat`

### 278. Shadow puppet scholar

<img src="gifs/shadow-puppet-turn.gif" alt="Shadow puppet scholar" width="360">

<sub>9 frames · 438×389 · 1.6s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
A traditional Chinese leather shadow puppet of a scholar holding a fan, translucent red and amber colors, backlit on a glowing white screen. The puppet turns its head, lifts the fan and bows slightly, thin control rods visible below.
```

`shadow-puppet` `chinese` `folk-art`

### 279. Cyber pastel shrine

<img src="gifs/cyber-pastel-shrine.gif" alt="Cyber pastel shrine" width="360">

<sub>16 frames · 380×252 · 2.9s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
A small shrine gate on a floating island in soft pastel pink and lilac, glowing cyan circuit lines pulse along its pillars, cherry petals drift past and holographic paper charms flutter. Dreamy anime background art, fixed camera.
```

`cyber` `pastel` `scenery`

### 280. Layered paper forest

<img src="gifs/paper-parallax-forest.gif" alt="Layered paper forest" width="360">

<sub>16 frames · 378×250 · 2.9s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
A layered cut-paper diorama of a pine forest at dusk, five paper layers in deepening blues and a pale moon; the layers drift sideways at different speeds for a gentle parallax and a small paper deer lifts its head. Soft side lighting with real paper shadows.
```

`paper-craft` `parallax` `scenery`

### 281. Coastal convertible drive

<img src="gifs/coastal-convertible.gif" alt="Coastal convertible drive" width="360">

<sub>16 frames · 380×252 · 2.6s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
A vintage red convertible drives along a cliffside coastal road at sunset, the camera tracking alongside it; palm trees and guardrails slide past while the sea glitters below. Warm cinematic film look.
```

`car` `road-trip` `cinematic`

### 282. Picture-book bear makes tea

<img src="gifs/bear-tea-picturebook.gif" alt="Picture-book bear makes tea" width="360">

<sub>16 frames · 380×252 · 2.9s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
a picture-book watercolor scene of a small brown bear in a striped apron pouring tea from a round pot into a cup at a wooden table, steam rising, a cat on the windowsill flicking its tail. Soft paper texture, gentle colors.
```

`picture-book` `watercolor` `cozy`

### 283. Floating river lanterns

<img src="gifs/river-lantern-float.gif" alt="Floating river lanterns" width="360">

<sub>16 frames · 375×244 · 2.9s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
Paper lotus lanterns with candle flames float slowly down a dark river at night, their reflections wobbling on the water while the flames flicker. Painterly style, fixed camera.
```

`lantern` `night` `festival`

### 284. Bread rising in the oven

<img src="gifs/oven-bread-rise.gif" alt="Bread rising in the oven" width="360">

<sub>16 frames · 378×236 · 2.9s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
Through a glowing oven window, a braided loaf slowly puffs up and turns golden while the orange heating element pulses. Warm cozy kitchen photography, fixed close-up.
```

`baking` `kitchen` `cozy`

### 285. Tide pool crab

<img src="gifs/tide-pool-crab.gif" alt="Tide pool crab" width="360">

<sub>9 frames · 439×390 · 1.6s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
A small orange crab scuttles sideways between pebbles in a clear tide pool as gentle ripples pass over it and a sea anemone waves its tentacles. Top-down nature photography, fixed camera.
```

`nature` `ocean` `macro`

### 286. Wind over dunes

<img src="gifs/desert-dune-wind.gif" alt="Wind over dunes" width="360">

<sub>9 frames · 439×388 · 1.6s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
Fine sand streams off the sharp crest of a golden desert dune in the wind, rippled sand patterns glowing under a low evening sun and a pale sky. Cinematic landscape, fixed wide shot.
```

`desert` `landscape` `wind`

### 287. Music box dancer

<img src="gifs/music-box-dancer.gif" alt="Music box dancer" width="360">

<sub>16 frames · 380×252 · 2.6s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
Inside an open wooden music box lined with red velvet, a small porcelain dancer in a white tutu spins on a pin while the brass comb mechanism turns. Warm vintage lighting, close-up.
```

`vintage` `music-box` `object`

### 288. Glowing mushroom forest

<img src="gifs/glow-mushroom-forest.gif" alt="Glowing mushroom forest" width="360">

<sub>16 frames · 378×251 · 2.9s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
A mossy forest floor at night with clusters of bioluminescent blue mushrooms whose caps pulse brighter and dimmer as tiny glowing spores drift upward. Fantasy illustration, fixed camera.
```

`fantasy` `night` `nature`

### 289. Rainy candle shop window

<img src="gifs/candle-shop-window.gif" alt="Rainy candle shop window" width="360">

<sub>16 frames · 377×241 · 2.9s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A small candle shop window at night with dozens of candles flickering softly while rain streaks down the glass. Cozy painterly style, fixed camera.
```

`ambient` `rain` `cozy`

### 290. Overhead koi pond

<img src="gifs/koi-pond-overhead.gif" alt="Overhead koi pond" width="360">

<sub>9 frames · 414×414 · 2.0s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
Top-down view of a dark pond where three orange and white koi glide in a slow circle among lily pads, gentle ripples spreading. Watercolor style, fixed camera.
```

`ambient` `fish` `water`

### 291. Snowy ramen stall

<img src="gifs/snowy-ramen-stall.gif" alt="Snowy ramen stall" width="360">

<sub>16 frames · 379×250 · 2.9s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A tiny street ramen stall at night, steam rising from a pot and paper lanterns swaying while snow falls gently. Warm anime background style, fixed camera.
```

`ambient` `food` `snow`

### 292. Porch wind chime

<img src="gifs/windchime-porch.gif" alt="Porch wind chime" width="360">

<sub>16 frames · 328×291 · 2.2s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A glass wind chime on a wooden porch sways in a summer breeze, its paper tag fluttering and light glinting off the glass. Soft anime summer style, blue sky behind.
```

`ambient` `summer` `japan`

### 293. Socks by the fireplace

<img src="gifs/fireplace-sock-dry.gif" alt="Socks by the fireplace" width="360">

<sub>16 frames · 377×249 · 2.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
Knitted socks hang on a line above a crackling fireplace, flames dancing and the socks swaying slightly in the warm air. Cozy illustrated style, fixed camera.
```

`ambient` `cozy` `winter`

### 294. Galaxy hourglass

<img src="gifs/hourglass-galaxy.gif" alt="Galaxy hourglass" width="360">

<sub>16 frames · 320×294 · 2.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A glass hourglass where tiny glowing stars trickle down instead of sand, forming a small swirling galaxy in the bottom bulb. Dark background, magical realism style.
```

`ambient` `space` `magic`

### 295. Dusk tram passing

<img src="gifs/tram-city-dusk.gif" alt="Dusk tram passing" width="360">

<sub>9 frames · 438×387 · 1.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A small yellow tram glides past a row of pastel buildings at dusk, its windows glowing and overhead wires swaying. Flat illustration style, fixed camera.
```

`ambient` `city` `travel`

### 296. Seaside cat nap

<img src="gifs/seaside-cat-nap.gif" alt="Seaside cat nap" width="360">

<sub>9 frames · 440×389 · 1.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A calico cat naps on a sunny harbor wall, its tail flicking lazily while small waves roll in behind it. Bright gouache illustration, fixed camera.
```

`ambient` `cat` `sea`

### 297. Autumn tea on the table

<img src="gifs/autumn-tea-steam.gif" alt="Autumn tea on the table" width="360">

<sub>16 frames · 380×252 · 2.9s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A cup of tea on a wooden table by a window, steam curling up while maple leaves drift past outside. Warm cozy illustration, fixed camera.
```

`ambient` `autumn` `tea`

### 298. Giant bubble in the park

<img src="gifs/bubble-wand-park.gif" alt="Giant bubble in the park" width="360">

<sub>9 frames · 439×389 · 1.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A giant soap bubble wobbles and drifts across a green park, rainbow colors swirling on its surface. Bright cheerful illustration, fixed camera.
```

`ambient` `bubble` `summer`

### 299. Robot and scientist watch a test tube

<img src="gifs/lab-robot-test-tube.gif" alt="Robot and scientist watch a test tube" width="360">

<sub>9 frames · 433×373 · 1.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A scientist in a white coat and a small round robot lean in to watch a test tube that bubbles and glows green, both blinking in wonder. Clean flat illustration, plain white background.
```

`science` `robot` `illustration`

### 300. Winter bunny catches snow

<img src="gifs/winter-bunny-snowflakes.gif" alt="Winter bunny catches snow" width="360">

<sub>9 frames · 439×390 · 1.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A small bunny in a green knitted scarf looks up and catches falling snowflakes on its nose, sneezing softly. Warm watercolor winter style, snowy forest background.
```

`winter` `bunny` `cozy`

### 301. Light-bulb head collage

<img src="gifs/bulb-head-collage.gif" alt="Light-bulb head collage" width="360">

<sub>9 frames · 414×411 · 1.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
Cut-paper collage of a figure with a light-bulb head; gears inside the bulb turn and the bulb flickers on with a bright idea. Vintage magazine collage style, beige paper background.
```

`collage` `idea` `paper`

### 302. Origami fox unfolds

<img src="gifs/origami-fox-unfold.gif" alt="Origami fox unfolds" width="360">

<sub>9 frames · 437×388 · 1.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A flat sheet of orange paper folds itself into an origami fox that turns its head and blinks. Clean paper craft style, plain white background.
```

`paper` `origami` `fox`

## Pixel Art & UI Motion

### 303. Pixel art campfire

<img src="gifs/pixel-campfire.gif" alt="Pixel art campfire" width="360">

<sub>16 frames · 378×240 · 1.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A pixel art campfire at night in a small forest clearing, flames flickering, sparks rising and fading, two logs glowing orange. 16-bit retro game style, dark blue night sky with a few stars.
```

`pixel-art` `loop` `game`

### 304. Bouncing dots loader

<img src="gifs/bouncing-dots-loader.gif" alt="Bouncing dots loader" width="360">

<sub>16 frames · 385×266 · 1.4s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A minimal loading animation: three rounded dots in coral, violet and teal bouncing up and down one after another in a wave, with soft squash on landing. Flat vector style on a plain off-white background.
```

> 💡 **Tip:** UI loaders work best with very few elements and a plain background.

`ui` `loader` `minimal`

### 305. Pixel knight run cycle

<img src="gifs/pixel-knight-run.gif" alt="Pixel knight run cycle" width="360">

<sub>8 frames · 380×508 · 1.0s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A pixel art knight with a blue cape and a small sword running to the right in a side view run cycle, cape flapping, on a plain dark background. 16-bit retro game sprite style, crisp pixels.
```

> 💡 **Tip:** Ask for a "run cycle" in "side view" to get game-sprite style animation.

`pixel-art` `sprite` `game`

### 306. Like button heart burst

<img src="gifs/like-heart-burst.gif" alt="Like button heart burst" width="360">

<sub>16 frames · 379×246 · 1.8s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A rounded outline heart icon that fills with red, pops bigger with a bounce and bursts into small colorful confetti dots around it, then settles back. Flat vector UI animation on a plain white background.
```

`ui` `icon` `micro-interaction`

### 307. Hourglass loading

<img src="gifs/hourglass-flip.gif" alt="Hourglass loading" width="360">

<sub>16 frames · 379×252 · 2.2s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A simple flat hourglass icon with sand pouring from the top to the bottom, then the hourglass flips over and starts again. Minimal vector style, teal frame and golden sand on a plain off-white background.
```

`ui` `loader` `icon`

### 308. Arcade VS screen

<img src="gifs/arcade-vs-screen.gif" alt="Arcade VS screen" width="360">

<sub>16 frames · 376×251 · 2.2s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A retro arcade versus screen: on the left a chubby panda wrestler in a yellow cape, on the right a lanky girl skateboarder with a green ponytail and a hoodie, both slide in from the edges, a huge "VS" slams into the center with lightning flashes, then both strike a pose. 16-bit pixel art, bold colors.
```

> 💡 **Tip:** Use clearly original characters (animals, unusual outfits). Generic "martial artist in a headband" drifts toward famous fighting-game heroes.

`pixel-art` `game` `versus`

### 309. 8-bit slime boss battle

<img src="gifs/pixel-slime-boss.gif" alt="8-bit slime boss battle" width="360">

<sub>16 frames · 375×240 · 2.2s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
An 8-bit boss battle: a giant green slime boss with a tiny crown bounces and squishes in the center of a dungeon arena, its health bar at the top flashing, while a small pixel hero on the left raises a shield. Retro NES pixel art, dark stone background.
```

`pixel-art` `game` `boss`

### 310. Love-burst skill animation

<img src="gifs/love-burst-skill.gif" alt="Love-burst skill animation" width="360">

<sub>16 frames · 369×239 · 1.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A chibi magical girl with a pink bob raises her wand and casts a "love burst" skill: a ring of glowing pink hearts explodes outward from her and fades, then she returns to her idle pose. Game skill-card style animation, sparkly effects, dark purple background.
```

`game` `skill` `effects`

### 311. Junkyard robot walk cycle

<img src="gifs/junkyard-robot-walk.gif" alt="Junkyard robot walk cycle" width="360">

<sub>16 frames · 380×252 · 1.9s · gpt-image-2.6 · generated 2026-11-06</sub>

**Prompt**

```text
A rusty little scrap-metal robot with one antenna and a mismatched arm walking to the right in a side-view walk cycle, bolts jiggling, a puff of dust at each step. Pixel art game sprite on a plain dark background, crisp pixels.
```

`pixel-art` `sprite` `game`

### 312. Pixel hero sword slash

<img src="gifs/pixel-hero-slash.gif" alt="Pixel hero sword slash" width="360">

<sub>12 frames · 358×358 · 1.3s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A pixel art hero with spiky red hair swinging a sword in a wide arc, leaving a bright white slash trail. Side view game sprite on a plain dark background, crisp pixels.
```

`pixel-art` `sprite` `attack`

### 313. Handheld-style castle run

<img src="gifs/pixel-castle-scroller.gif" alt="Handheld-style castle run" width="360">

<sub>12 frames · 380×336 · 1.4s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A 32-bit handheld-style side-scrolling level: a small round armadillo knight in shiny orange armor with a feathered helmet running and jumping across castle battlements while the background parallax scrolls. Pixel art.
```

`pixel-art` `platformer` `game`

### 314. Squash and stretch bouncing ball

<img src="gifs/bouncing-ball-squash.gif" alt="Squash and stretch bouncing ball" width="360">

<sub>16 frames · 379×243 · 1.9s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A red rubber ball bouncing on a flat floor with classic squash and stretch, a soft shadow growing and shrinking underneath. Clean flat animation on a plain white background.
```

`animation-basics` `ball` `loop`

### 315. AI assistant typing indicator

<img src="gifs/ai-typing-indicator.gif" alt="AI assistant typing indicator" width="360">

<sub>12 frames · 356×356 · 1.7s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A chat interface where a small rounded robot avatar sits beside a grey bubble with three dots pulsing one after another, the avatar's eyes blinking. Clean modern UI style on white.
```

`ui` `chat` `loader`

### 316. 16-bit fighter punch combo

<img src="gifs/arcade-fighter-punch.gif" alt="16-bit fighter punch combo" width="360">

<sub>9 frames · 439×390 · 1.3s · gpt-image-2.6 · generated 2026-11-07</sub>

**Prompt**

```text
A 16-bit arcade fighter, a stocky red panda in a blue gi, throwing a jab and a straight punch from a fighting stance with hit sparks. Side view sprite on a dojo background.
```

`pixel-art` `fighting` `sprite`

### 317. Bodyweight squat guide

<img src="gifs/squat-form-guide.gif" alt="Bodyweight squat guide" width="360">

<sub>9 frames · 439×389 · 1.3s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A clean flat infographic of a faceless fitness figure in a teal tank top doing a bodyweight squat in side view: sitting the hips back with arms stretched forward, then standing tall. Light grey background with a dotted guideline at knee height.
```

`fitness` `infographic` `tutorial`

### 318. 8-bit raver alien

<img src="gifs/pixel-raver-alien.gif" alt="8-bit raver alien" width="360">

<sub>16 frames · 377×245 · 1.9s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
8-bit pixel art of a little green alien wearing antenna headphones, jumping and pumping its fist on a tiny dance floor while colored strobe lights flash. Retro game palette, black background.
```

`pixel` `dance` `retro`

### 319. Pixel coffee cup

<img src="gifs/pixel-coffee-steam.gif" alt="Pixel coffee cup" width="360">

<sub>16 frames · 379×247 · 2.2s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A pixel-art coffee cup on a saucer with three wisps of steam rising and curling in a loop. 16-bit style, warm brown palette, plain cream background.
```

`pixel` `coffee` `icon`

### 320. Scroll-down arrow hint

<img src="gifs/scroll-arrow-hint.gif" alt="Scroll-down arrow hint" width="360">

<sub>9 frames · 438×389 · 1.1s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A minimalist rounded chevron arrow pointing down, bouncing gently up and down with a soft shadow that shrinks and grows beneath it. Flat UI style, indigo on white.
```

`ui` `arrow` `minimal`

### 321. Pixel lantern scares ghosts

<img src="gifs/pixel-lantern-ghosts.gif" alt="Pixel lantern scares ghosts" width="360">

<sub>12 frames · 356×351 · 1.7s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
16-bit pixel art of a kid in a hooded green cloak raising a glowing lantern in a moonlit graveyard, and three small round cartoon ghosts flee off to the right. Side view, retro game style.
```

`pixel` `game` `halloween`

### 322. Gem merge game ad

<img src="gifs/gem-merge-ad.gif" alt="Gem merge game ad" width="360">

<sub>9 frames · 439×390 · 1.6s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A mobile puzzle game ad shot: two identical glowing blue gems slide together on a grid board and merge into one bigger gem with a burst of sparkles and a floating "+100". Bright casual-game style.
```

`game` `ad` `mobile`

### 323. Pixel treasure chest

<img src="gifs/pixel-treasure-chest.gif" alt="Pixel treasure chest" width="360">

<sub>16 frames · 378×252 · 1.9s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
16-bit pixel art treasure chest: the lid flips open, gold coins and a gem burst upward with sparkles, then settle back inside. Retro RPG style on a dark dungeon floor.
```

`pixel` `game` `reward`

### 324. Rocket progress bar

<img src="gifs/rocket-progress-bar.gif" alt="Rocket progress bar" width="360">

<sub>16 frames · 378×272 · 1.6s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A flat UI progress bar filling from left to right as a tiny cartoon rocket flies along its leading edge, leaving a sparkly trail. Clean vector style, purple and white.
```

`ui` `loader` `rocket`

### 325. Sun / moon theme toggle

<img src="gifs/sun-moon-toggle.gif" alt="Sun / moon theme toggle" width="360">

<sub>9 frames · 435×386 · 1.1s · gpt-image-2.6 · generated 2026-11-08</sub>

**Prompt**

```text
A rounded toggle switch sliding from a sunny yellow side with a sun icon to a dark navy side with a crescent moon and tiny stars. Flat UI style on a light grey background.
```

`ui` `toggle` `dark-mode`

### 326. Earth Online: morning commute

<img src="gifs/earth-online-commute.gif" alt="Earth Online: morning commute" width="360">

<sub>9 frames · 439×379 · 1.6s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A 16-bit pixel art RPG scene of a tired office worker character walking to a bus stop, a game HUD on top: the stamina bar slowly draining, a "+10 EXP" popup rising, and a quest box saying "Survive the commute". Retro game UI, fixed camera.
```

> 💡 **Tip:** Treating everyday life as a game HUD (stamina, EXP, quest box) is a popular series format.

`pixel` `rpg` `daily-life` `text`

### 327. Pixel fishing catch

<img src="gifs/pixel-fishing-catch.gif" alt="Pixel fishing catch" width="360">

<sub>16 frames · 380×252 · 2.2s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
16-bit pixel art of a kid in a straw hat on a wooden pier, the bobber dipping, the kid yanking the rod up and a shiny fish flipping out of the water with a little sparkle. Retro game palette, fixed camera.
```

`pixel` `game` `fishing`

### 328. Pixel town in the rain

<img src="gifs/pixel-rain-town.gif" alt="Pixel town in the rain" width="360">

<sub>16 frames · 374×250 · 2.9s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
Pixel art of a small town street at night in the rain, raindrops falling, warm windows flickering on, a neon noodle-shop sign buzzing and puddles rippling. Cozy retro game palette, fixed camera.
```

`pixel` `rain` `night`

### 329. Pixel crops sprouting

<img src="gifs/pixel-farm-sprout.gif" alt="Pixel crops sprouting" width="360">

<sub>16 frames · 380×252 · 2.9s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
16-bit pixel art farm plot with three rows of soil: sprouts pop up, grow leaves and turn into ripe carrots and pumpkins, a small sparkle appearing over each. Retro farming game style, fixed camera.
```

`pixel` `farm` `game`

### 330. Notification bell ringing

<img src="gifs/notification-bell-ring.gif" alt="Notification bell ringing" width="360">

<sub>16 frames · 376×245 · 1.6s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A flat rounded yellow notification bell icon swinging side to side as if ringing, a red badge with the number 3 popping onto its corner, small motion lines around it. Clean UI icon style, plain white background.
```

`ui` `icon` `notification`

### 331. Battery charging icon

<img src="gifs/battery-charging-icon.gif" alt="Battery charging icon" width="360">

<sub>16 frames · 380×252 · 1.9s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A flat rounded battery icon filling up segment by segment from red to green, a white lightning bolt pulsing in the middle, a small check mark appearing when full. Clean UI icon style, plain dark background.
```

`ui` `icon` `loading`

### 332. Download arrow turns into a check

<img src="gifs/download-arrow-check.gif" alt="Download arrow turns into a check" width="360">

<sub>16 frames · 379×255 · 2.2s · gpt-image-2.6 · generated 2026-11-09</sub>

**Prompt**

```text
A flat UI animation: a blue down arrow drops into a rounded tray, the tray fills with a progress line, then the arrow morphs into a white check mark inside a green circle. Clean vector style, plain white background.
```

`ui` `icon` `download`

### 333. Pixel bus pulls into the stop

<img src="gifs/pixel-bus-arrive.gif" alt="Pixel bus pulls into the stop" width="360">

<sub>16 frames · 380×252 · 2.6s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
Top-down pixel art street at morning rush hour: a yellow bus pulls into a stop while tiny commuters wait in line, swaying slightly. Fixed camera, fixed background, 16-bit palette.
```

`pixel` `city` `bus`

### 334. Pixel letters hop

<img src="gifs/pixel-text-broll.gif" alt="Pixel letters hop" width="360">

<sub>16 frames · 377×252 · 1.8s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
Cream pixel-font letters spelling B-ROLL on a deep teal background hop up one by one from left to right and land back in place, while a coral cursor bar slides underneath. Spelling and spacing stay identical.
```

`pixel` `text` `title`

### 335. Pixel bucket-helmet frog jump attack

<img src="gifs/pixel-frog-jump-attack.gif" alt="Pixel bucket-helmet frog jump attack" width="360">

<sub>9 frames · 414×414 · 1.4s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A chunky orange pixel art frog wearing a dented tin bucket as a helmet and holding a wooden spoon leaps up and slams the spoon down, landing with a small dust puff. 16-bit game sprite, side view, plain dark background.
```

`pixel` `game` `sprite`

### 336. Pixel owl wizard casts

<img src="gifs/pixel-owl-wizard.gif" alt="Pixel owl wizard casts" width="360">

<sub>16 frames · 380×252 · 2.2s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A pixel art owl in a starry purple wizard hat raises a wooden wand and releases a burst of sparkles. 16-bit sprite, side view, plain black background.
```

`pixel` `magic` `sprite`

### 337. Pixel mushroom dances

<img src="gifs/pixel-mushroom-dance.gif" alt="Pixel mushroom dances" width="360">

<sub>16 frames · 378×248 · 1.9s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A pixel art mushroom character with a teal cap striped in orange and a stubby lavender stem bops side to side and does a little hop, its cap bouncing. 8-bit game sprite style, plain navy background.
```

`pixel` `dance` `sprite`

### 338. Pixel cauldron brews

<img src="gifs/pixel-cauldron-brew.gif" alt="Pixel cauldron brews" width="360">

<sub>16 frames · 380×252 · 2.6s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A pixel art black cauldron over a small fire bubbles with green potion, bubbles popping and a puff of sparkly smoke rising. 16-bit item animation, plain dark background.
```

`pixel` `potion` `item`

### 339. Wi-Fi bars fill up

<img src="gifs/wifi-bars-fill.gif" alt="Wi-Fi bars fill up" width="360">

<sub>9 frames · 439×388 · 1.6s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A flat UI Wi-Fi icon whose arcs light up one by one from the center dot outward in bright blue, then all glow together. Clean vector style, plain white background.
```

`ui` `icon` `signal`

### 340. Crumpled paper into the trash

<img src="gifs/trash-crumple-toss.gif" alt="Crumpled paper into the trash" width="360">

<sub>16 frames · 378×250 · 1.8s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
Flat UI animation: a sheet of paper crumples into a ball, arcs into a gray trash can icon, and the lid bounces shut. Clean vector style, plain white background.
```

`ui` `icon` `delete`

### 341. Star rating fills

<img src="gifs/star-rating-fill.gif" alt="Star rating fills" width="360">

<sub>9 frames · 509×339 · 1.4s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
Five outlined stars in a row fill with gold one after another, each popping slightly larger as it fills, with a tiny sparkle on the last. Flat UI style, plain white background.
```

`ui` `rating` `icon`

### 342. Send button becomes a paper plane

<img src="gifs/send-button-plane.gif" alt="Send button becomes a paper plane" width="360">

<sub>9 frames · 445×395 · 1.4s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A rounded blue Send button squeezes inward and folds into a white paper plane that flies off to the upper right, leaving a dotted trail. Flat UI animation, plain white background.
```

`ui` `button` `send`

### 343. Padlock unlocks

<img src="gifs/padlock-unlock.gif" alt="Padlock unlocks" width="360">

<sub>9 frames · 445×395 · 1.4s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A flat gray padlock icon wiggles, its shackle pops open, and the body turns green with a small check mark. Clean vector UI style, plain white background.
```

`ui` `icon` `security`

### 344. Magnifier scans a document

<img src="gifs/magnifier-doc-scan.gif" alt="Magnifier scans a document" width="360">

<sub>16 frames · 388×257 · 1.9s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A flat UI document icon with gray text lines; a magnifying glass sweeps across it and each line it passes turns highlighted blue. Clean vector style, plain white background.
```

`ui` `search` `icon`

### 345. Upload arrow rises into a cloud

<img src="gifs/cloud-upload-arrow.gif" alt="Upload arrow rises into a cloud" width="360">

<sub>9 frames · 438×388 · 1.3s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
A white arrow rises from the bottom into a soft blue cloud icon, the cloud puffs up once, and a small progress ring around it completes. Flat UI style, plain white background.
```

`ui` `upload` `icon`

### 346. Equalizer bars bounce

<img src="gifs/equalizer-bars-bounce.gif" alt="Equalizer bars bounce" width="360">

<sub>16 frames · 380×252 · 1.6s · gpt-image-2.6 · generated 2026-11-10</sub>

**Prompt**

```text
Seven rounded equalizer bars in a purple-to-pink gradient bounce up and down to an implied beat. Flat UI style, plain dark navy background.
```

`ui` `music` `audio`

### 347. Pixel chameleon run cycle

<img src="gifs/pixel-chameleon-run.gif" alt="Pixel chameleon run cycle" width="360">

<sub>16 frames · 379×252 · 1.8s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
A side-view pixel-art run cycle of a small green chameleon with a curled tail and big swiveling eyes, running in place on a strip of rusty junkyard ground. 16-bit game sprite style, plain dark teal background.
```

`pixel` `sprite` `game`

### 348. RPG stats card

<img src="gifs/rpg-stats-card.gif" alt="RPG stats card" width="360">

<sub>16 frames · 366×252 · 2.9s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
A fantasy RPG character stat card with a cartoon fox ranger portrait; five horizontal bars labeled STR, AGI, INT, LUK and HP fill up one by one with glowing colors and a small level-up star sparkles in the corner. Clean game UI style on dark navy.
```

`ui` `game` `stats`

### 349. Hovering potion bottle

<img src="gifs/potion-bottle-hover.gif" alt="Hovering potion bottle" width="360">

<sub>16 frames · 380×252 · 2.2s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
A round glass potion bottle with a cork stopper hovers and bobs gently; the glowing blue liquid sloshes inside and tiny bubbles rise and pop at the top. Stylized game item icon, soft glow, plain dark purple background.
```

`game` `item` `icon`

### 350. Toggle switch

<img src="gifs/toggle-switch-on.gif" alt="Toggle switch" width="360">

<sub>12 frames · 384×343 · 1.7s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
A large rounded toggle switch slides from gray off to bright green on, the knob gives a small squish, and a tiny check mark pops beside it. Flat UI style, plain white background.
```

`ui` `toggle` `micro-interaction`

### 351. Pixel health hearts

<img src="gifs/pixel-heart-health.gif" alt="Pixel health hearts" width="360">

<sub>16 frames · 379×247 · 1.9s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
A row of five pixel-art red hearts as a game health bar; one empty heart refills with a sparkle while all hearts pulse gently. 8-bit style, plain black background.
```

`pixel` `game` `ui`

### 352. Pixel coin collect

<img src="gifs/pixel-coin-collect.gif" alt="Pixel coin collect" width="360">

<sub>16 frames · 375×233 · 1.8s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
A spinning pixel-art gold coin pops up above a brick block, flips in the air, then vanishes in a small sparkle with a +1 floating up. 16-bit platformer style, plain sky blue background.
```

`pixel` `game` `coin`

### 353. Calendar page flip

<img src="gifs/calendar-page-flip.gif" alt="Calendar page flip" width="360">

<sub>16 frames · 378×250 · 1.9s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
A flat desk calendar icon with a red header; the top page curls up and flips over to reveal the next day, the date number sliding in. Flat UI icon style, plain light gray background.
```

`ui` `icon` `calendar`

### 354. Pixel dragon egg hatch

<img src="gifs/pixel-dragon-egg-hatch.gif" alt="Pixel dragon egg hatch" width="360">

<sub>16 frames · 377×250 · 2.6s · gpt-image-2.6 · generated 2026-11-11</sub>

**Prompt**

```text
A speckled pixel-art dragon egg wobbles in a straw nest, cracks appear, and a tiny green baby dragon pokes its head out and blinks. 16-bit RPG style, plain dark brown background.
```

`pixel` `game` `dragon`

### 355. Pixel snowy cabin

<img src="gifs/pixel-snow-cabin.gif" alt="Pixel snowy cabin" width="360">

<sub>16 frames · 380×241 · 2.9s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A pixel-art log cabin in a snowy forest, smoke rising from the chimney, windows glowing and snow falling. 16-bit style, fixed camera.
```

`pixel` `winter` `ambient`

### 356. Pixel potion shop

<img src="gifs/pixel-potion-shop.gif" alt="Pixel potion shop" width="360">

<sub>9 frames · 437×387 · 1.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A pixel-art potion shop counter with bubbling colorful bottles and a shopkeeper cat blinking behind it. 16-bit RPG style, fixed camera.
```

`pixel` `game` `shop`

### 357. Pixel ninja frog dash

<img src="gifs/pixel-ninja-frog.gif" alt="Pixel ninja frog dash" width="360">

<sub>16 frames · 380×252 · 1.9s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A pixel-art frog in a red ninja headband dashes forward and leaves a short speed trail, then poses. 16-bit platformer sprite, plain dark blue background.
```

`pixel` `game` `sprite`

### 358. Level up badge

<img src="gifs/level-up-badge.gif" alt="Level up badge" width="360">

<sub>16 frames · 380×252 · 1.9s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A shiny gold badge with a star flips in, flashes, and small sparkles burst around it. Game UI style, plain dark background, no text.
```

`ui` `game` `icon`

### 359. Pixel mailbox letter

<img src="gifs/pixel-mailbox-letter.gif" alt="Pixel mailbox letter" width="360">

<sub>9 frames · 445×396 · 1.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A pixel-art red mailbox flips its flag up and a letter pops out with a small sparkle. 16-bit style, plain light background.
```

`pixel` `ui` `mail`

### 360. Pixel fox dash

<img src="gifs/pixel-fox-dash.gif" alt="Pixel fox dash" width="360">

<sub>12 frames · 380×337 · 1.4s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A pixel-art orange fox crouches then dashes forward with a burst of dust and a speed trail, ending in a skid. 16-bit platformer sprite, plain dark green background.
```

`pixel` `sprite` `fox`

### 361. Pixel rocket launch

<img src="gifs/pixel-rocket-launch.gif" alt="Pixel rocket launch" width="360">

<sub>16 frames · 380×250 · 2.6s · gpt-image-2.6 · generated 2026-11-12</sub>

**Prompt**

```text
A pixel-art rocket on a launch pad rumbles, flames burst from its base and it lifts off leaving a smoke puff. 8-bit style, starry dark background.
```

`pixel` `space` `rocket`

## Generate them yourself

Use the [ViNano AI API](https://vinano.ai/api-keys): create an API key, submit a GIF task, then poll its status until the GIF URL comes back (25 credits per GIF).

```bash
# 1. Submit a GIF task — the response contains a task "uuid"
curl -X POST https://vinano.ai/api/async-openai-images \
  -H "Authorization: Bearer $VINANO_API_KEY" \
  -F mode=txt2img -F zeakaiModel=gpt-image-2.6-gif -F model="ViNano AI" \
  -F count=1 -F img_size=1k -F aspectRatio=1:1 \
  -F prompt="A cheerful cartoon cat waving hello. Animate it as a short, smooth, seamlessly looping GIF with clear motion between frames."

# 2. Poll until "completed" is true — the GIF URL is in "generated_images_url"
curl "https://vinano.ai/api/task-status?uuid=<uuid>" \
  -H "Authorization: Bearer $VINANO_API_KEY"
```

Or regenerate every example in this repo with the included script (Node 18+):

```bash
git clone https://github.com/ailingqu/awesome-ai-gif-prompts.git && cd awesome-ai-gif-prompts
cp .env.example .env   # fill in VINANO_API_KEY
npm run generate        # only generates prompts without a GIF
npm run build           # rebuilds README.md and README_zh.md
```

## Sources

Prompt ideas are collected from the web, then rewritten and tested by us. All example GIFs in `gifs/` were generated by this repo.

## Contributing

New prompts are welcome! Add an entry to `data/prompts.json`, include the GIF you got, and run `npm run build`. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Prompts and example GIFs: [CC BY 4.0](LICENSE). If this list helps you, a ⭐ helps others find it.
