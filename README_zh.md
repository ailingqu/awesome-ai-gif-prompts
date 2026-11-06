# Awesome AI GIF Prompts

[English](README.md) · **简体中文**

![prompts](https://img.shields.io/badge/prompts-26-ff713a) ![model](https://img.shields.io/badge/model-GPT%20Image%202.6-8a63d2) ![license](https://img.shields.io/badge/license-CC%20BY%204.0-2bb3a3) [![awesome](https://awesome.re/badge.svg)](https://awesome.re)

精选 **AI 直出 GIF 动图** 提示词合集：表情包、反应图、快闪、品牌动效、氛围循环、像素风。下面每个示例都是用所列提示词原样生成的，未做任何后期修改。

> 🎞️ **在线试用：** 把任意提示词粘贴到 [AI GIF Maker](https://chatgpt-image-2.com/home/ai-gif-maker)，输入文字即可得到循环 GIF（由 GPT Image 2.6 驱动）。

<p align="center">
  <img src="gifs/jelly-bear-wobble.gif" alt="Q 弹果冻熊摇晃" height="150">
  <img src="gifs/flower-macro-flash.gif" alt="花卉微距快闪" height="150">
  <img src="gifs/window-day-to-night.gif" alt="窗边读书·白天到夜晚" height="150">
  <img src="gifs/pixel-campfire.gif" alt="像素风篝火" height="150">
</p>

## 目录

- [这些 GIF 是怎么生成的](#这些-gif-是怎么生成的)
- [表情包与贴纸](#表情包与贴纸) · 9 条提示词
- [快闪与品牌动效](#快闪与品牌动效) · 4 条提示词
- [氛围循环动画](#氛围循环动画) · 8 条提示词
- [像素风与界面动效](#像素风与界面动效) · 5 条提示词
- [自己动手生成](#自己动手生成)

## 这些 GIF 是怎么生成的

在请求里设置 `output_format: "gif"`，GPT Image 2.6 就会直接返回 GIF 动图而不是静态图。帧数、每帧时长和尺寸由模型自行决定。

本仓库的每条提示词在发送时都会追加一句话，要求生成无缝循环：

```text
Animate it as a short, smooth, seamlessly looping GIF with clear motion between frames.
```

### 提示词公式

**主体**（一个清晰的角色或物体）+ **动作**（1–2 个动词：挥手、弹跳、飘动、闪烁）+ **风格**（扁平插画、Q 版贴纸、像素风、摄影）+ **背景**（做贴纸时用纯色、高对比背景）

### 技巧

- 一个主体、一到两个动作。画面越杂，动作越难看清。
- 用动词描述动作，比如“摇晃、打瞌睡、闪烁、滑落”，少用形容词。
- 扁平插画、Q 版、像素风在 GIF 的小尺寸下比写实照片效果好得多。
- 做一套表情包时，每条提示词都复用完全相同的角色描述，整套才会一致。
- 要抠成透明贴纸的，背景用一种和角色颜色完全拉开的纯色。
- 快闪要把每一帧写成不同的镜头；品牌快闪则固定 Logo 的位置和大小，只换周围的场景。
- 长文字和复杂的昼夜循环目前仍不稳定：文字尽量短，大的变化交给光线来表现。

## 表情包与贴纸

### 1. Q 弹果冻熊摇晃

<img src="gifs/jelly-bear-wobble.gif" alt="Q 弹果冻熊摇晃" width="360">

<sub>9 帧 · 438×388 · 1.3s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A chubby round cartoon bear with a soft jelly-like body and stubby arms, squishing down and springing back up while wobbling side to side, cheeks jiggling on every bounce. Thick clean outlines, flat pastel colors, centered on a plain solid mint-green background that contrasts strongly with the bear.
```

> 💡 **技巧：** 背景用一种和角色颜色完全拉开的纯色，之后才方便抠成透明贴纸。

`sticker` `bouncy` `cute`

### 2. 兔兔点赞

<img src="gifs/bunny-thumbs-up.gif" alt="兔兔点赞" width="360">

<sub>9 帧 · 438×388 · 1.3s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A small white cartoon bunny with long floppy ears and a pink nose, giving an enthusiastic thumbs-up with one paw, the paw pumping forward twice while the ears bounce. Chibi sticker style, bold outline, plain warm yellow background.
```

> 💡 **技巧：** 一整套表情包都复用同一段角色描述（见后面两条），风格才能保持一致。

`sticker` `reaction` `sticker-pack`

### 3. 兔兔笑出眼泪

<img src="gifs/bunny-laughing.gif" alt="兔兔笑出眼泪" width="360">

<sub>8 帧 · 440×389 · 1.1s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A small white cartoon bunny with long floppy ears and a pink nose, laughing so hard it rocks back and forth, eyes squeezed shut and two little tears flying out. Chibi sticker style, bold outline, plain warm yellow background.
```

`sticker` `reaction` `sticker-pack`

### 4. 兔兔犯困

<img src="gifs/bunny-sleepy.gif" alt="兔兔犯困" width="360">

<sub>9 帧 · 439×387 · 1.6s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A small white cartoon bunny with long floppy ears and a pink nose, sitting and nodding off, head slowly drooping then jerking back up, a small bubble swelling and shrinking from its nose. Chibi sticker style, bold outline, plain warm yellow background.
```

`sticker` `reaction` `sticker-pack`

### 5. 卡通猫挥手打招呼

<img src="gifs/cat-waving-hello.gif" alt="卡通猫挥手打招呼" width="360">

<sub>9 帧 · 438×390 · 1.3s · gpt-image-2.6 · 生成于 2026-11-05</sub>

**提示词**

```text
A cheerful cartoon cat waving hello.
```

> 💡 **技巧：** 简单的打招呼动作，一句话提示词也够用，风格和节奏交给模型。

`sticker` `greeting` `minimal-prompt`

### 6. 柴犬歪头疑惑

<img src="gifs/shiba-head-tilt.gif" alt="柴犬歪头疑惑" width="360">

<sub>9 帧 · 439×390 · 1.6s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A fluffy orange shiba inu puppy tilting its head to one side and back again, ears twitching, a small question mark popping above its head. Chibi sticker style, bold outline, plain light blue background.
```

`sticker` `reaction` `dog`

### 7. 猫猫疯狂打字

<img src="gifs/cat-typing-laptop.gif" alt="猫猫疯狂打字" width="360">

<sub>16 帧 · 380×242 · 1.9s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A grey tabby cat sitting at a tiny laptop and typing furiously with both front paws, paws blurring, little speed lines and sweat drops flying off. Flat cartoon sticker style, bold outline, plain pale pink background.
```

> 💡 **技巧：** 速度线和汗珠能让快速动作在帧数很少时也看得清。

`sticker` `work` `cat`

### 8. 青蛙吹出爱心

<img src="gifs/frog-heart-bubble.gif" alt="青蛙吹出爱心" width="360">

<sub>16 帧 · 380×252 · 2.2s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A round green cartoon frog puffing its cheeks and blowing a pink heart-shaped bubble that floats up and pops into tiny sparkles. Cute flat sticker style, bold outline, plain cream background.
```

`sticker` `love` `cute`

### 9. 企鹅捂脸

<img src="gifs/penguin-facepalm.gif" alt="企鹅捂脸" width="360">

<sub>9 帧 · 435×389 · 1.4s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A chubby cartoon penguin slowly raising one flipper and slapping it onto its forehead, then shaking its head in disbelief. Chibi sticker style, bold outline, plain light grey background.
```

`sticker` `reaction` `facepalm`

## 快闪与品牌动效

### 10. 花卉微距快闪

<img src="gifs/flower-macro-flash.gif" alt="花卉微距快闪" width="360">

<sub>8 帧 · 380×508 · 3.6s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A fast flash-cut sequence of eight different flower photographs, one per frame, each filling the whole frame: a red poppy shot from above with light glowing through its petals, a creamy gardenia in soft side light, blue delphinium against a deep blue background, a golden marigold macro, a pink peony from a high angle, a dark purple iris close-up, an orange lily with curled petals, and pale green hydrangea with dew drops. Realistic botanical fashion photography, each frame with a different color, distance and composition.
```

> 💡 **技巧：** 把每一帧写成独立的镜头。帧与帧之间颜色、角度、景别差异越大，快闪越有冲击力。

`flash-cut` `photography` `editorial`

### 11. 猫头 Logo 品牌快闪

<img src="gifs/cat-brand-reel.gif" alt="猫头 Logo 品牌快闪" width="360">

<sub>8 帧 · 380×507 · 2.8s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A quick-cut brand reel for a fictional cat food brand called "MEOWBITE". The same flat dark-brown cat-head logo — round face, two short pointed ears, cream almond eyes, short whiskers — stays fixed at the center of every frame while everything around it changes: an orange full-bleed poster, a pink pouch of cat food, a blue ceramic cat bowl seen from above, a kraft shipping box, a round sticker, and a final dark frame with the word MEOWBITE in big cream letters. Bold graphic design, flat colors, citrus orange, cream and dark brown palette.
```

> 💡 **技巧：** 每一帧都锁定 Logo 的位置和大小，只换周围的场景，快闪才像同一个品牌。

`flash-cut` `branding` `logo`

### 12. 球鞋配色快闪

<img src="gifs/sneaker-colorway-flash.gif" alt="球鞋配色快闪" width="360">

<sub>5 帧 · 349×883 · 1.8s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A fast flash-cut in a square frame: the same chunky sneaker seen from the side, centered and the same size in every frame, while its colorway and the full-bleed solid background change each frame: white and red on blue, black and lime on pink, cream and brown on orange, purple and silver on yellow, all-white on black. Clean studio product photography, the background fills the whole frame edge to edge.
```

> 💡 **技巧：** 固定产品角度和位置，只换配色，就是最经典的产品配色快闪。

`flash-cut` `product` `fashion`

### 13. 一棵树的四季

<img src="gifs/four-seasons-tree.gif" alt="一棵树的四季" width="360">

<sub>4 帧 · 764×508 · 2.6s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
The same lone round tree on a small hill, framed identically in every frame, cycling through the four seasons: pink spring blossoms, lush green summer, orange autumn leaves falling, bare branches in winter snow. Soft flat illustration with a matching sky color for each season.
```

`flash-cut` `nature` `seasons`

## 氛围循环动画

### 14. 窗边读书·白天到夜晚

<img src="gifs/window-day-to-night.gif" alt="窗边读书·白天到夜晚" width="360">

<sub>9 帧 · 413×412 · 3.1s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A girl with a short bob reading a book on a cushion by a big window, seen from the side. Outside the window the sky cycles from bright morning blue to orange sunset to a starry night and back to morning, while the room light warms up and a desk lamp switches on at night. Soft flat illustration, calm and cozy.
```

> 💡 **技巧：** 昼夜循环比简单动作难得多。让人物基本保持不动，用天空和光线来表现变化。

`loop` `character` `time-lapse`

### 15. 冒热气的咖啡

<img src="gifs/steaming-coffee.gif" alt="冒热气的咖啡" width="360">

<sub>16 帧 · 379×252 · 2.6s · gpt-image-2.6 · 生成于 2026-11-05</sub>

**提示词**

```text
A steaming cup of coffee on a small wooden table, steam curling and drifting upward, a tiny spoon wobbling on the saucer. Cozy flat illustration with warm colors.
```

`loop` `food` `cozy`

### 16. 雨窗与绿植

<img src="gifs/rain-on-window.gif" alt="雨窗与绿植" width="360">

<sub>16 帧 · 378×252 · 2.9s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A rainy window at dusk with a small potted plant on the sill, raindrops sliding down the glass and blurry city lights twinkling outside. Soft muted blue palette, lo-fi illustration style.
```

`loop` `lofi` `weather`

### 17. 鱼缸里的金鱼

<img src="gifs/goldfish-bowl.gif" alt="鱼缸里的金鱼" width="360">

<sub>16 帧 · 380×243 · 2.9s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A round glass fishbowl on a windowsill with one orange goldfish swimming a slow circle, tail fluttering, tiny bubbles rising to the surface. Soft watercolor-style illustration, gentle light.
```

`loop` `pet` `calm`

### 18. 夜晚的灯塔

<img src="gifs/lighthouse-night.gif" alt="夜晚的灯塔" width="360">

<sub>16 帧 · 380×247 · 2.9s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A white lighthouse on a rocky shore at night, its beam sweeping slowly across a dark blue sky, waves rolling and splashing against the rocks below. Flat illustration with a deep navy and warm yellow palette.
```

`loop` `seascape` `night`

### 19. 壁炉边睡觉的猫

<img src="gifs/cat-by-fireplace.gif" alt="壁炉边睡觉的猫" width="360">

<sub>16 帧 · 380×243 · 2.9s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A ginger cat curled up asleep on a rug in front of a crackling fireplace, its body gently rising and falling with each breath, flames flickering and casting warm light. Cozy flat illustration, warm orange and brown tones.
```

> 💡 **技巧：** “呼吸起伏”这种小动作很适合做安静的循环，看得清又天然能循环。

`loop` `cozy` `cat`

### 20. 雪林提灯的小猴子

<img src="gifs/lantern-monkey-snow.gif" alt="雪林提灯的小猴子" width="360">

<sub>16 帧 · 380×241 · 2.9s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A small monkey in an olive-green hooded coat standing in a snowy pine forest at dusk, lifting a glowing amber paper lantern, looking up and blinking, then lowering the lantern back to where it started. Snow falls gently and a tiny cabin glows in the background. Soft storybook illustration, locked camera.
```

> 💡 **技巧：** 给主体一个能回去的起始姿势，并锁定镜头，循环最容易接得上。

`loop` `character` `winter`

### 21. 苔石上打盹的小狐狸

<img src="gifs/sleepy-fox-rock.gif" alt="苔石上打盹的小狐狸" width="360">

<sub>9 帧 · 432×394 · 1.6s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A small orange fox curled up asleep on a mossy rock, its tail gently swaying and ears twitching. Soft storybook illustration, locked camera.
```

`loop` `animal` `calm`

## 像素风与界面动效

### 22. 像素风篝火

<img src="gifs/pixel-campfire.gif" alt="像素风篝火" width="360">

<sub>16 帧 · 378×240 · 1.9s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A pixel art campfire at night in a small forest clearing, flames flickering, sparks rising and fading, two logs glowing orange. 16-bit retro game style, dark blue night sky with a few stars.
```

`pixel-art` `loop` `game`

### 23. 弹跳圆点加载动画

<img src="gifs/bouncing-dots-loader.gif" alt="弹跳圆点加载动画" width="360">

<sub>16 帧 · 385×266 · 1.4s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A minimal loading animation: three rounded dots in coral, violet and teal bouncing up and down one after another in a wave, with soft squash on landing. Flat vector style on a plain off-white background.
```

> 💡 **技巧：** 界面加载动画元素越少越好，背景保持纯色。

`ui` `loader` `minimal`

### 24. 像素骑士跑步循环

<img src="gifs/pixel-knight-run.gif" alt="像素骑士跑步循环" width="360">

<sub>8 帧 · 380×508 · 1.0s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A pixel art knight with a blue cape and a small sword running to the right in a side view run cycle, cape flapping, on a plain dark background. 16-bit retro game sprite style, crisp pixels.
```

> 💡 **技巧：** 写明 “side view” 和 “run cycle”，就能得到游戏精灵图那样的动画。

`pixel-art` `sprite` `game`

### 25. 点赞爱心爆开

<img src="gifs/like-heart-burst.gif" alt="点赞爱心爆开" width="360">

<sub>16 帧 · 379×246 · 1.8s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A rounded outline heart icon that fills with red, pops bigger with a bounce and bursts into small colorful confetti dots around it, then settles back. Flat vector UI animation on a plain white background.
```

`ui` `icon` `micro-interaction`

### 26. 沙漏加载

<img src="gifs/hourglass-flip.gif" alt="沙漏加载" width="360">

<sub>16 帧 · 379×252 · 2.2s · gpt-image-2.6 · 生成于 2026-11-06</sub>

**提示词**

```text
A simple flat hourglass icon with sand pouring from the top to the bottom, then the hourglass flips over and starts again. Minimal vector style, teal frame and golden sand on a plain off-white background.
```

`ui` `loader` `icon`

## 自己动手生成

调用任意 GPT Image 2.6 服务商的图片生成接口，把 `output_format` 设为 `gif`：

```bash
curl https://apiany.ai/v1/images/generations/sync \
  -H "Authorization: Bearer $APIANY_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model": "gpt-image-2.6", "output_format": "gif", "prompt": "A cheerful cartoon cat waving hello. Animate it as a short, smooth, seamlessly looping GIF with clear motion between frames."}'
```

或者用仓库自带的脚本重新生成全部示例（需要 Node 18+）：

```bash
git clone https://github.com/ailingqu/awesome-ai-gif-prompts.git && cd awesome-ai-gif-prompts
cp .env.example .env   # fill in APIANY_API_KEY
npm run generate        # only generates prompts without a GIF
npm run build           # rebuilds README.md and README_zh.md
```

## 来源

提示词思路来源于网络，由我们改写并实测。`gifs/` 下的所有示例 GIF 均由本仓库生成。

## 参与贡献

欢迎提交新提示词！在 `data/prompts.json` 里新增一条，附上你生成的 GIF，然后运行 `npm run build`。详见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 许可

提示词与示例 GIF 采用 [CC BY 4.0](LICENSE)。觉得有用的话，点个 ⭐ 能让更多人看到。
