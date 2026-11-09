# Contributing

Thanks for sharing a prompt! Every entry in this list must come with a GIF that was actually generated from it.

1. Add an object to `prompts` in [`data/prompts.json`](data/prompts.json):

   ```json
   {
     "id": "kebab-case-id",
     "category": "stickers",
     "title": "English title",
     "title_zh": "中文标题",
     "prompt": "One subject, one or two motions, a style and a background.",
     "tips": "Optional: what made this prompt work.",
     "tips_zh": "可选：这条提示词的要点。",
     "tags": ["sticker"]
   }
   ```

   Categories: `stickers`, `flash`, `loops`, `pixel-ui`.

2. Put the GIF at `gifs/<id>.gif`, unedited, or generate it with `npm run generate <id>` (needs `VINANO_API_KEY` in `.env`, created at https://vinano.ai/api-keys).
3. Run `npm run scan` to record frames and size in `data/results.json`, then `npm run build` to rebuild both READMEs.
4. Open a pull request. Please do not include real people, brands you don't own, or NSFW content.

You can also [open an issue](../../issues/new?template=submit-prompt.yml) with the prompt and GIF attached and we'll add it.
