# Recipe Image Approval Workflow

Candidate recipe photos in this folder are for review only. They should not replace live recipe images until approved.

## Methodology

- Show the finished recipe as a practical home meal, usually one bowl, plate, baking dish, pan, or pot.
- Use only ingredients that appear in the recipe. Do not add decorative garnish, sides, sauces, herbs, cream, cheese, rice, bread, lemon, or toppings unless the recipe explicitly includes them.
- Make the food realistic for batch cooking: hearty portions, natural uneven texture, normal home-cooked finish.
- Avoid restaurant plating, dramatic studio lighting, fake gloss, garnish styling, labels, text, watermarks, and extra props.
- Use a clean modern home setting with a subtle Byron Bay feel: light wood, simple ceramics, natural daylight, airy background.
- Keep the image useful for an au pair: it should answer “what should this look like when I finish cooking?”
- Reject images that look ingredient-correct but not cookable: overly uniform cubes, plastic-looking sauce, greens that read as the wrong vegetable, decorative herb-like flecks, or compositions that feel like an AI-styled bowl rather than real home food.
- For pale or simple recipes, do not force visual prettiness. It is better for the dish to look plain and believable than bright, styled, or artificially textured.

## Approval

When an image is approved, copy it over the existing live image path for that recipe and update `Recipes/recipe-image-source-log.csv`.

## Rejected Candidates

- `rejected/curry-epinards-pois-chiche.png`: rejected because the spinach reads more like chunky kale/herb garnish, the sauce is too glossy, and the whole bowl feels AI-styled rather than like a normal spinach chickpea curry.
- `rejected/poulet-ananas-couscous.png`: rejected because the chicken and pineapple look too uniformly cubed and pale, the texture feels synthetic, and it does not communicate a believable home-cooked finished dish.
- `rejected/ratatouille-thermomix-grainy-ai-texture.png`: rejected because the surface has a repeated speckled/grainy AI texture.
- `rejected/lentil-soup-thermomix-grainy-ai-texture.png`: rejected because the surface has a repeated speckled/grainy AI texture.
- `rejected/bolognese-thermomix-grainy-ai-texture.png`: rejected because the surface has a repeated speckled/grainy AI texture.
- `rejected/gratin-choufleur-grainy-ai-texture.png`: rejected because the surface has a repeated speckled/grainy AI texture.
- `rejected/ratatouille-thermomix-overcorrected.png`: rejected because the prompt overcorrected against texture and made the dish look less natural than the stronger earlier recipe photos.
- `rejected/lentil-soup-thermomix-overcorrected.png`: rejected because the prompt overcorrected against texture and made the dish look less natural than the stronger earlier recipe photos.
- `rejected/bolognese-thermomix-overcorrected.png`: rejected because the prompt overcorrected against texture and made the dish look less natural than the stronger earlier recipe photos.
- `rejected/gratin-choufleur-overcorrected.png`: rejected because the prompt overcorrected against texture and made the dish look less natural than the stronger earlier recipe photos.
